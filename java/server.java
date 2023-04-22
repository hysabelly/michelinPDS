import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Login {
    public static void main(String[] args) {
        // Dados de conexão com o banco de dados
        String url = "jdbc:mysql://localhost:3306/banco_de_dados";
        String usuario = "root";
        String senha = "senha";

        // Declaração das variáveis de entrada
        Scanner scanner = new Scanner(System.in);
        String usuarioInput, senhaInput;

        // Mensagem de boas-vindas
        System.out.println("Bem-vindo ao sistema de login!");

        // Leitura dos dados de entrada
        System.out.print("Usuário: ");
        usuarioInput = scanner.nextLine();
        System.out.print("Senha: ");
        senhaInput = scanner.nextLine();

        // Tentativa de conexão com o banco de dados
        try (Connection conexao = DriverManager.getConnection(url, usuario, senha)) {
            // Preparação da consulta SQL
            String sql = "SELECT * FROM usuarios WHERE usuario = ? AND senha = ?";
            PreparedStatement statement = conexao.prepareStatement(sql);
            statement.setString(1, usuarioInput);
            statement.setString(2, senhaInput);

            // Execução da consulta SQL
            ResultSet resultado = statement.executeQuery();

            // Verificação do resultado da consulta SQL
            if (resultado.next()) {
                System.out.println("Login efetuado com sucesso!");
            } else {
                System.out.println("Usuário ou senha inválidos!");
            }
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco de dados!");
            e.printStackTrace();
        }

        // Fechamento do scanner
        scanner.close();
    }
}

public class Server {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/login", new LoginHandler());
        server.setExecutor(null); // default executor
        server.start();
    }

    static class LoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("POST".equals(exchange.getRequestMethod())) {
                InputStream requestBody = exchange.getRequestBody();
                String json = new String(requestBody.readAllBytes(), "UTF-8");
                // Processa os dados JSON e verifica se o usuário pode fazer login
                boolean success = /* ... */;
                exchange.sendResponseHeaders(200, 0);
                OutputStream responseBody = exchange.getResponseBody();
                responseBody.write(String.valueOf(success).getBytes());
                responseBody.close();
            } else {
                exchange.sendResponseHeaders(405, -1); // Método não permitido
            }
        }
    }
}
