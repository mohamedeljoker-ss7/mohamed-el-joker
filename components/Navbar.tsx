"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        background: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>🎓 Joker Academy</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link href="/">الرئيسية</Link>

        <Link href="/courses">الكورسات</Link>

        <Link href="/chat">الشات</Link>

        <Link href="/contact">تواصل</Link>

        <Link href="/login">
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            تسجيل الدخول
          </button>
        </Link>
      </div>
    </nav>
  );
}
