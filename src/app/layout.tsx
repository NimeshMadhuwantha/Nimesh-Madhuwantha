import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimesh Madhuwantha | Portfolio",
  description:
    "Nimesh Madhuwantha - Front-End Software Engineer, UI/UX Engineer, Product Designer, and Concept Artist.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
