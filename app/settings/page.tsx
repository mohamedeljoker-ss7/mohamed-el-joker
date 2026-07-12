"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function SettingsPage() {
  const [academyName, setAcademyName] = useState("Joker Academy");
  const [whatsapp, setWhatsapp] = useState("201010298878");
  const [telegram, setTelegram] = useState("Mo7amedEL_JOKER");

  useEffect(() => {
    async function load() {
      const snap = await getDoc(doc(db, "settings", "general"));

      if (snap.exists()) {
        const data = snap.data();

        setAcademyName(data.academyName || "");
        setWhatsapp(data.whatsapp || "");
        setTelegram(data.telegram || "");
      }
    }

    load();
  }, []);

  async function save() {
    await setDoc(doc(db, "settings", "general"), {
      academyName,
      whatsapp,
      telegram,
    });

    alert("تم حفظ الإعدادات");
  }

  return (
    <main style={{ padding: 30, color: "white" }}>
      <h1>⚙️ إعدادات المنصة</h1>

      <br />

      <input
        value={academyName}
        onChange={(e) => setAcademyName(e.target.value)}
        placeholder="اسم المنصة"
      />

      <br />
      <br />

      <input
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        placeholder="واتساب"
      />

      <br />
      <br />

      <input
        value={telegram}
        onChange={(e) => setTelegram(e.target.value)}
        placeholder="تيليجرام"
      />

      <br />
      <br />

      <button onClick={save}>
        حفظ
      </button>
    </main>
  );
}
