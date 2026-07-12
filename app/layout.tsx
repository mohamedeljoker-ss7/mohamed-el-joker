import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
