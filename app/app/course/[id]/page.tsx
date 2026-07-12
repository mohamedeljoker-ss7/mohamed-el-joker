"use client";

import { useParams } from "next/navigation";

export default function CoursePage() {
  const { id } = useParams();

  return (
    <main
      style={{
        padding: 30,
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>تفاصيل الكورس</h1>

      <br />

      <p>Course ID: {id}</p>

      <br />

      <p>سيتم هنا عرض جميع دروس الكورس والفيديوهات وملفات PDF.</p>
    </main>
  );
}
