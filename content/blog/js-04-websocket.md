---
title: "WebSocket với Node.js"
date: 2025-12-24
summary: "Giao tiếp realtime hai chiều giữa client và server bằng WebSocket."
categories: ["JavaScript"]
tags: ["WebSocket", "Realtime", "Networking"]
draft: false
---

## WebSocket là gì?
WebSocket cho phép tạo **kết nối 2 chiều (full-duplex)** giữa client và server.  
Khác với HTTP (request/response), WebSocket phù hợp cho các ứng dụng **realtime** như chat, game, notification.
<!--more-->

## Ví dụ WebSocket Server
```js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send("Xin chào từ WebSocket server!");

  ws.on("message", (message) => {
    console.log("Nhận:", message.toString());

    // gửi lại cho client
    ws.send("Server nhận: " + message);
  });
});
