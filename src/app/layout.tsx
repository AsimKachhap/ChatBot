import Chat from "@/components/Chat";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookBuddy",
  description: "Your bookstore for fantasy and mystery novel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Chat />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
