import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "#3b82f6",
          }}
        >
          Joker Academy
        </h1>

        <p
          style={{
            fontSize: "20px",
          }}
        >
          منصة تعليمية مجانية بالكامل
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "15px 40px",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          ابدأ التعلم
        </button>
      </main>
    </>
  );
}
