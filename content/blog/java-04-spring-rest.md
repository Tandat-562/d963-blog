
---

# ✅ BÀI 4 — `java-04-spring-rest.md`


---
title: "REST API cơ bản với Spring Boot"
date: 2025-12-24
summary: "Tạo REST API GET/POST đơn giản bằng Spring Boot."
categories: ["Java"]
tags: ["REST", "Spring", "HTTP"]
draft: false
---

## REST là gì?
REST là kiến trúc API dựa trên HTTP, sử dụng các method như GET, POST.
<!--more-->

---

## Ví dụ Controller
```java
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class DemoController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello REST");
    }
}
