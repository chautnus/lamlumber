"use client";

import { Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Zalo Button */}
      <a
        href={companyInfo.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
        title="Chat Zalo ngay"
      >
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-black text-xs shadow-inner">
          Z
        </span>
        <span className="text-xs font-bold tracking-wide">
          Chat Zalo
        </span>
      </a>

      {/* Hotline Call Button */}
      <a
        href={`tel:${companyInfo.hotline}`}
        className="group flex items-center gap-2.5 bg-forest-700 hover:bg-forest-800 text-white pl-3 pr-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border-2 border-amber-400"
        title="Gọi hotline ngay"
      >
        <div className="w-8 h-8 rounded-full bg-amber-400 text-forest-900 flex items-center justify-center">
          <Phone className="w-4 h-4 animate-bounce" />
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[10px] uppercase font-bold text-amber-300">
            Hotline tư vấn
          </span>
          <span className="block text-sm font-black text-white tracking-wide">
            {companyInfo.hotlineDisplay}
          </span>
        </div>
      </a>
    </div>
  );
}
