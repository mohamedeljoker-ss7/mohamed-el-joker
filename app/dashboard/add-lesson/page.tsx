"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AddLesson() {
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [pdf, setPdf] = useState("");

  async function saveLesson() {
    if (!courseId || !title) {
      alert("الرجاء إدخال الكورس واسم الدرس على الأقل");
      return;
    }

    try {
      await addDoc(collection(db, "lessons"), {
        courseId,
        title,
        video,
        pdf,
        createdAt: new Date(),
      });

      alert("تمت إضافة الدرس بنجاح");

      setCourseId("");
      setTitle("");
      setVideo("");
      setPdf("");
    } catch (error) {
      console.error("Error adding lesson: ", error);
      alert("حدث خطأ أثناء إضافة الدرس");
    }
  }

  return (
    <main style={{ padding: 30, color: "white" }}>
      <h1>إضافة درس</h1>

      <br />

      <input
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        style={{ color: "black", padding: "5px" }}
      />

      <br /><br />

      <input
        placeholder="اسم الدرس"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ color: "black", padding: "5px" }}
      />

      <br /><br />

      <input
        placeholder="رابط الفيديو"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        style={{ color: "black", padding: "5px" }}
      />

      <br /><br />

      <input
        placeholder="رابط PDF"
        value={pdf}
        onChange={(e) => setPdf(e.target.value)}
        style={{ color: "black", padding: "5px" }}
      />

      <br /><br />

      <button onClick={saveLesson} style={{ padding: "10px 20px", cursor: "pointer", color: "black" }}>
        حفظ الدرس
      </button>
    </main>
  );
}
