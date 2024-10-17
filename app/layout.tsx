import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone built with TypeScript, Next.js and Tailwind CSS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
