"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  async function saveCourse() {
    try {
      let imageUrl = "";

      if (image) {
        const imageRef = ref(storage, `courses/${Date.now()}-${image.name}`);

        await uploadBytes(imageRef, image);

        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "courses"), {
        title,
        description,
        image: imageUrl,
        createdAt: new Date(),
      });

      alert("تم إضافة الكورس بنجاح");

      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    }
  }

  return (
    <main style={{ padding: 30, color: "white" }}>
      <h1>إضافة كورس</h1>

      <br />

      <input
        placeholder="اسم الكورس"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="وصف الكورس"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files ? e.target.files[0] : null)
        }
      />

      <br />
      <br />

      <button onClick={saveCourse}>
        حفظ الكورس
      </button>
    </main>
  );
}
