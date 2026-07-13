import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Joker Academy",
  description: "منصة تعليمية مجانية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          margin: 0,
          background: "#0f172a",
          color: "#fff",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
