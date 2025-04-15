import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Kanwarnoor's Portfolio",
  description: "A simple Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export { metadata };
