import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "LamLumber | Gỗ nhập khẩu | Thông | Sồi | Tần bì | Dẻ gai | Bình Dương",
  description:
    "Công ty TNHH Gỗ LAM chuyên cung cấp gỗ xẻ sấy nhập khẩu nguyên cont: Gỗ Thông (Pine), Sồi (Oak), Tần Bì (Ash), Dẻ Gai (Beech), Óc Chó (Walnut). Kho hàng tại Bình Chuẩn, Thuận An, Bình Dương.",
  keywords: [
    "gỗ nhập khẩu",
    "gỗ thông brazil",
    "gỗ sồi mỹ",
    "gỗ tần bì",
    "gỗ dẻ gai",
    "gỗ lam",
    "lamlumber",
    "kho gỗ bình dương",
    "gỗ xẻ sấy",
  ],
  openGraph: {
    title: "LamLumber | Gỗ nhập khẩu uy tín tại Bình Dương",
    description: "Nhập khẩu trực tiếp nguyên container từ sawmill Mỹ, Brazil, Chile, EU, New Zealand.",
    url: "https://lamlumber.com",
    siteName: "LamLumber",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#fdfbf7]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
