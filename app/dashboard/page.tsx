export default function Dashboard() {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>📚 الكورسات</h2>
          <p>إدارة جميع الكورسات.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>👨‍🎓 الطلاب</h2>
          <p>إدارة المستخدمين.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>💬 الشات</h2>
          <p>إدارة الرسائل.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>⚙️ الإعدادات</h2>
          <p>إعدادات المنصة.</p>
        </div>
      </div>
    </main>
  );
}
