---
title: "Java TCP Server đa luồng: xử lý nhiều client"
date: 2025-12-24
summary: "Xử lý nhiều client cùng lúc bằng mô hình thread-per-client."
categories: ["Java"]
tags: ["TCP", "Thread", "Networking"]
draft: false
---

## Ý tưởng
Mỗi client kết nối sẽ được xử lý bởi **một thread riêng** để server có thể phục vụ nhiều người cùng lúc.
<!--more-->

## Ví dụ Server đa luồng (Thread-per-client)
```java
import java.io.*;
import java.net.*;

public class MultiClientServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(9999);
        System.out.println("Server đang chạy tại port 9999...");

        while (true) {
            Socket client = server.accept();
            new Thread(() -> handle(client)).start();
        }
    }

    static void handle(Socket client) {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(client.getInputStream())
            );
            PrintWriter out = new PrintWriter(client.getOutputStream(), true);

            out.println("Xin chào! Gõ exit để thoát.");

            String line;
            while ((line = in.readLine()) != null) {
                if ("exit".equalsIgnoreCase(line)) break;
                out.println("Echo: " + line);
            }

            client.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
