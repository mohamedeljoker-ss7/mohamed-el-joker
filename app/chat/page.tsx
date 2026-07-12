"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: any[] = [];

      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  async function sendMessage() {
    if (!message.trim()) return;

    await addDoc(collection(db, "chat"), {
      text: message,
      sender: "محمد",
      createdAt: Date.now(),
    });

    setMessage("");
  }

  return (
    <main style={{ padding: 30, color: "white" }}>
      <h1>💬 الشات</h1>

      <div
        style={{
          height: 400,
          overflowY: "auto",
          background: "#1e
            
