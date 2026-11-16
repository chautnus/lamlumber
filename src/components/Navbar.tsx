"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X, TreePine } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Hàng sẵn kho" },
    { href: "/bao-gia", label: "Báo giá & Lô hàng" },
    { href: "/gioi-thieu", label: "Giới thiệu Gỗ LAM" },
    { href: "/chinh-sach-ban-hang", label: "Chính sách bán hàng" },
    { href: "/lien-he", label: "Liên hệ & Kho bãi" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-wood-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-forest-700 text-amber-300 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <TreePine className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-wood-950 block leading-tight">
                LAM<span className="text-forest-700">LUMBER</span>
              </span>
              <span className="text-xs font-semibold text-wood-600 uppercase tracking-wider block">
                Gỗ Nhập Khẩu Bình Dương
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-forest-700 transition-colors py-2 border-b-2 border-transparent hover:border-forest-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quick Action Hotline Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={companyInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              Chat Zalo
            </a>
            <a
              href={`tel:${companyInfo.hotline}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-forest-700 hover:bg-forest-800 rounded-lg shadow-sm transition-all hover:shadow"
            >
              <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
              {companyInfo.hotlineDisplay}
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-forest-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-wood-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-wood-100 hover:text-forest-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${companyInfo.hotline}`}
              className="flex items-center justify-center gap-2 py-3 bg-forest-700 text-white font-bold rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              Gọi ngay: {companyInfo.hotlineDisplay}
            </a>
            <a
              href={companyInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white font-semibold rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Zalo Báo Giá
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
