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
    await addDoc(collection(db, "lessons"), {
      courseId,
      title,
      video,
      pdf,
      createdAt: new Date(),
    });

    alert("تمت إضافة الدرس");

    setCourseId("");
    setTitle("");
    setVideo("");
    setPdf("");
  }

  return (
    <main style={{ padding: 30, color: "white" }}>
      <h1>إضافة درس</h1>

      <br />

      <input
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="اسم الدرس"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="رابط الفيديو"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="رابط PDF"
        value={pdf}
        onChange={(e) => setPdf(e.target.value)}
      />

      <br /><br />

      <button
        
