import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar";
import RegisterModal from "./_components/modals/RegisterModal";
import LoginModal from "./_components/modals/LoginModal";
import RentModal from "./_components/modals/RentModal";

import ToasterProvider from "./_providers/ToasterProvider";
import getCurrentUser from "./_actions/getCurrentUser";
import SearchModal from "./_components/modals/SearchModal";
import { Suspense } from "react";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "A clone of Airbnb's website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense>
          <ToasterProvider />
          <SearchModal />
          <LoginModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
