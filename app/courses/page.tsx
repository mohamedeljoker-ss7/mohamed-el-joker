"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Course {
  id: string;
  title: string;
  description: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const querySnapshot = await getDocs(collection(db, "courses"));

      const data: Course[] = [];

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...(doc.data() as Omit<Course, "id">),
        });
      });

      setCourses(data);
    }

    loadCourses();
  }, []);

  return (
    <main
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📚 جميع الكورسات</h1>

      <br />

      {courses.length === 0 ? (
        <p>لا توجد كورسات حتى الآن.</p>
      ) : (
        courses.map((course) => (
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
          </div>
        ))
      )}
    </main>
  );
            }
