---
title: "Gọi HTTP API bằng Java HttpClient (Java 11+)"
date: 2025-12-24
summary: "Sử dụng HttpClient để gửi HTTP GET/POST và đọc dữ liệu JSON từ server."
categories: ["Java"]
tags: ["HTTP", "REST", "Networking"]
draft: false
---

## Giới thiệu
Java 11 cung cấp `HttpClient` giúp gửi HTTP request dễ dàng mà không cần thư viện ngoài.
<!--more-->

---

## Ví dụ GET Request
```java
import java.net.URI;
import java.net.http.*;

public class HttpGetExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
            .GET()
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
