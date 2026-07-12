export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>🎓 Joker Academy</h1>

      <p>أفضل منصة تعليمية مجانية.</p>

      <button
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "12px 30px",
          borderRadius: "10px",
        }}
      >
        ابدأ التعلم
      </button>
    </main>
  );
}
