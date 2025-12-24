---
title: "HTTP cơ bản trong JavaScript với Fetch"
date: 2025-12-24
summary: "Gửi HTTP request từ trình duyệt bằng Fetch API."
categories: ["JavaScript"]
tags: ["HTTP", "Fetch", "Networking"]
draft: false
---

## Fetch là gì?
Fetch API cho phép gửi **HTTP request bất đồng bộ** từ trình duyệt, thường dùng để gọi REST API.
<!--more-->

## Ví dụ GET Request
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
