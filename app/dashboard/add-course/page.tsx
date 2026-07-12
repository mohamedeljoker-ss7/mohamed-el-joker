"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function saveCourse() {
    if (!title || !description) {
      alert("املأ جميع الحقول");
      return;
    }

    try {
      await addDoc(collection(db, "courses"), {
        title,
        description,
        createdAt: new Date(),
      });

      alert("تمت إضافة الكورس بنجاح");
      setTitle("");
      setDescription("");
    } catch (error) {
      alert("حدث خطأ أثناء إضافة الكورس");
    }
  }

  return (
    <main style={{ padding: "30px", color: "#fff" }}>
      <h1>إضافة كورس</h1>

      <br />

      <input
        placeholder="اسم الكورس"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="وصف الكورس"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          height: "150px",
        }}
      />

      <br />
      <br />

      <button
        onClick={saveCourse}
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "8px",
        }}
      >
        حفظ الكورس
      </button>
    </main>
  );
      }
