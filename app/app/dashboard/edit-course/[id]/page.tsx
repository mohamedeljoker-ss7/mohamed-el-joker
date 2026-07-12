"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function EditCourse() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadCourse() {
      const ref = doc(db, "courses", id as string);

      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();

        setTitle(data.title);
        setDescription(data.description);
      }
    }

    loadCourse();
  }, [id]);

  async function save() {
    await updateDoc(doc(db, "courses", id as string), {
      title,
      description,
    });

    alert("تم تحديث الكورس");
  }

  return (
    <main
      style={{
        padding: "30px",
        color: "white",
      }}
    >
      <h1>تعديل الكورس</h1>

      <br />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          height: "180px",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <button
        onClick={save}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
        }}
      >
        حفظ التعديلات
      </button>
    </main>
  );
}
