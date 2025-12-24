---
title: "UDP trong Java: Gửi/nhận Datagram"
date: 2025-12-24
summary: "Hiểu UDP và thực hành gửi nhận gói tin bằng DatagramSocket."
categories: ["Java"]
tags: ["Networking", "UDP"]
draft: false
---

## UDP là gì?
UDP (User Datagram Protocol) là giao thức **không hướng kết nối**.  
Không cần thiết lập kết nối trước khi gửi dữ liệu, vì vậy tốc độ nhanh nhưng **không đảm bảo dữ liệu đến nơi đầy đủ hoặc đúng thứ tự**.

---

## So sánh UDP và TCP
- **TCP**: Có kết nối, tin cậy, đảm bảo thứ tự
- **UDP**: Không kết nối, nhanh, có thể mất gói

UDP thường dùng trong:
- Streaming
- Game realtime
- Ứng dụng chấp nhận mất dữ liệu

---

## Ví dụ UDP Sender (Gửi dữ liệu)
```java
import java.net.*;

public class UdpSender {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket();
        byte[] data = "Hello UDP".getBytes();

        DatagramPacket packet = new DatagramPacket(
            data,
            data.length,
            InetAddress.getByName("localhost"),
            8888
        );

        socket.send(packet);
        socket.close();
    }
}
