"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        background: "#111827",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🎓 Joker Academy</h2>

      <br />

      <Link href="/dashboard">🏠 لوحة التحكم</Link>

      <br />
      <br />

      <Link href="/dashboard/add-course">📚 إضافة كورس</Link>

      <br />
      <br />

      <Link href="/dashboard/add-lesson">🎥 إضافة درس</Link>

      <br />
      <br />

      <Link href="/courses">📖 الكورسات</Link>

      <br />
      <br />

      <Link href="/chat">💬 الشات</Link>

      <br />
      <br />

      <Link href="/contact">📞 تواصل</Link>

      <br />
      <br />

      <Link href="/profile">👤 الملف الشخصي</Link>
    </aside>
  );
}
