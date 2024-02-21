import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { validateRequest } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucia auth",
  description: "Lucia auth example",
};

export default async function RootLayout({
  children,
  protect,
}: Readonly<{
  children: React.ReactNode;
  protect: React.ReactNode;
}>) {
  const { user } = await validateRequest();

  return (
    <html lang="en">
      <body className={inter.className}>{user ? protect : children}</body>
    </html>
  );
}
