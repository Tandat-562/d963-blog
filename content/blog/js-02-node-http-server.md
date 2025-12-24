---
title: "Node.js tạo HTTP Server cơ bản"
date: 2025-12-24
summary: "Tạo HTTP server bằng Node.js không dùng framework."
categories: ["JavaScript"]
tags: ["Node.js", "HTTP", "Server"]
draft: false
---

## Giới thiệu
Node.js cung cấp module `http` cho phép tạo server HTTP một cách rất đơn giản.
<!--more-->

## Ví dụ HTTP Server
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello Node Server");
});

server.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});
