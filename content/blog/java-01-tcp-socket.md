---
title: "Java Socket TCP cơ bản: Client/Server"
date: 2025-12-24
summary: "Tạo client/server TCP bằng Java, gửi nhận chuỗi và hiểu luồng dữ liệu."
categories: ["Java"]
tags: ["Networking", "TCP", "Socket"]
draft: false
---

## TCP là gì?
TCP là giao thức hướng kết nối (connection-oriented). Khi client kết nối tới server, 2 bên có thể trao đổi dữ liệu ổn định theo luồng.

## Ví dụ Server
```java
import java.io.*;
import java.net.*;

public class TcpServer {
  public static void main(String[] args) throws Exception {
    ServerSocket server = new ServerSocket(9999);
    System.out.println("Server đang chạy port 9999...");

    Socket client = server.accept();
    System.out.println("Client connected: " + client.getInetAddress());

    BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
    PrintWriter out = new PrintWriter(client.getOutputStream(), true);

    String msg = in.readLine();
    out.println("Server nhận: " + msg);

    client.close();
    server.close();
  }
}
