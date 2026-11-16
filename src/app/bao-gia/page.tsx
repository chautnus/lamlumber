import Link from "next/link";
import { FileText, Ship, Calendar, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/company";
import { articles, priceQuotes } from "@/data/articles";

export const metadata = {
  title: "Báo giá gỗ nhập khẩu & Hàng sắp về cảng | LamLumber",
  description: "Cập nhật bảng báo giá CIF gỗ thông, sồi, tần bì mới nhất và lịch tàu cập cảng Cái Mép, Cát Lái của LamLumber.",
};

export default function PriceQuotePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
          <FileText className="w-4 h-4 text-forest-700" />
          <span>Báo Giá & Lịch Tàu</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-wood-950 tracking-tight">
          BÁO GIÁ GỖ NHẬP KHẨU & HÀNG OTW
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Theo dõi các lô hàng đang trên đường về cảng và cập nhật bảng báo giá gỗ xẻ sấy tốt nhất.
        </p>
      </div>

      {/* Price Quotes Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {priceQuotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white p-8 rounded-3xl border border-wood-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-forest-700 bg-forest-50 px-3 py-1 rounded-full">
                  {quote.status}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {quote.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">{quote.title}</h2>

              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Xuất xứ:</strong> {quote.origin}</p>
                <p><strong>Quy cách:</strong> {quote.specs}</p>
                <p><strong>Khoảng giá tham khảo:</strong> <span className="text-forest-700 font-bold text-sm">{quote.priceRange}</span></p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-wood-100 flex items-center gap-3">
              <a
                href={companyInfo.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-forest-700 hover:bg-forest-800 text-white text-center text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Nhận Báo Giá Đầy Đủ
              </a>
              <a
                href={`tel:${companyInfo.hotline}`}
                className="py-2.5 px-4 bg-wood-100 hover:bg-wood-200 text-wood-900 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-forest-700" />
                Gọi điện
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Shipments / Blog updates */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-wood-200 pb-4">
          <Ship className="w-6 h-6 text-forest-700" />
          <h2 className="text-2xl font-black text-wood-950">
            CÁC LÔ HÀNG ĐANG TRÊN ĐƯỜNG VỀ (OTW) & MỚI CẬP CẢNG
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="bg-white p-6 rounded-2xl border border-wood-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <span className="text-slate-400 font-mono">{art.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-wood-100">
                <a
                  href={`https://zalo.me/${companyInfo.zaloPhone}?text=${encodeURIComponent(
                    `Chào LamLumber, tôi muốn hỏi thông tin lô hàng: ${art.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-700 hover:text-forest-800"
                >
                  Hỏi thông tin lô hàng này
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
