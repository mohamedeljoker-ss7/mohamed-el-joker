export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <h1>📞 تواصل معنا</h1>

        <br />

        <a
          href="https://wa.me/201010298878"
          target="_blank"
        >
          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#22c55e",
              color: "#fff",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          >
            واتساب
          </button>
        </a>

        <a
          href="https://t.me/Mo7amedEL_JOKER"
          target="_blank"
        >
          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#2563eb",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            تيليجرام
          </button>
        </a>
      </div>
    </main>
  );
}
