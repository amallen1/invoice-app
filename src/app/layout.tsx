import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description:
    "Invoice Management System - Store and manage customer information, create and track invoices",
};

export default function RootLayout({
  children,
  invoices,
}: {
  children: React.ReactNode;
  invoices: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${leagueSpartan.className} light`}>
      <body className="bg-base">
        <div className="lg:h-full lg:flex">
          <Sidebar />
          <div className="flex-1 relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
