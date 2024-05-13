
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({subsets: ["latin"], weight: "400"})
// ke login terlebih dahulu jika belum login


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <title>Bottleware.</title>
      <body className={roboto.className}>
        <Navbar isLogin={true}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
