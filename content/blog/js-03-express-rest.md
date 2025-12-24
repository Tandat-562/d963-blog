---
title: "REST API với Express"
date: 2025-12-24
summary: "Xây dựng REST API đơn giản với Express."
categories: ["JavaScript"]
tags: ["Express", "REST", "HTTP"]
draft: false
---

## Express là gì?
Express là framework backend phổ biến của Node.js, giúp xây dựng REST API nhanh và gọn.
<!--more-->

## Ví dụ REST API cơ bản
```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello Express" });
});

app.post("/echo", (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});
