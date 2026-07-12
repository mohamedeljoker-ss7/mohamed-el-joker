"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("تم تسجيل الدخول بنجاح");
    } catch (error) {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          تسجيل الدخول
        </h2>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          دخول
        </button>
      </div>
    </main>
  );
}
