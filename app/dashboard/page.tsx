"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Course {
  id: string;
  title: string;
  description: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);

  async function loadCourses() {
    const snapshot = await getDocs(collection(db, "courses"));

    const data: Course[] = [];

    snapshot.forEach((course) => {
      data.push({
        id: course.id,
        ...(course.data() as Omit<Course, "id">),
      });
    });

    setCourses(data);
  }

  async function deleteCourse(id: string) {
    if (!confirm("هل تريد حذف الكورس؟")) return;

    await deleteDoc(doc(db, "courses", id));

    loadCourses();
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: "30px",
      }}
    >
      <h1>لوحة التحكم</h1>

      <br />

      <Link href="/dashboard/add-course">
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          ➕ إضافة كورس
        </button>
      </Link>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <h2>{course.title}</h2>

          <p>{course.description}</p>

          <br />

          <button
            onClick={() => deleteCourse(course.id)}
            style={{
              background: "red",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "8px",
            }}
          >
            حذف
          </button>
        </div>
      ))}
    </main>
  );
            }
      
