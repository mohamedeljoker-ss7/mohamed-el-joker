"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function ProfilePage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      setEmail(user.email || "");
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>👤 الملف الشخصي</h1>

      <br />

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <p>البريد الإلكتروني:</p>

        <h3>{email}</h3>
      </div>
    </main>
  );
}
