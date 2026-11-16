"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    woodType: "Gỗ Thông",
    volume: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
          <MapPin className="w-4 h-4 text-forest-700" />
          <span>Thông Tin Liên Hệ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-wood-950 tracking-tight">
          LIÊN HỆ & KHO HÀNG GỖ LAM
        </h1>
        <p className="text-sm text-slate-600">
          Quý khách có thể đến trực tiếp kho hàng tại Bình Dương để kiểm tra chất lượng gỗ hoặc gửi yêu cầu báo giá trực tuyến.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact info cards */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-wood-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-wood-100 pb-3">
              Địa điểm kho xưởng & văn phòng
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Kho hàng chính (Bình Dương)</h3>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{companyInfo.warehouse}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Văn phòng đại diện (TP.HCM)</h3>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{companyInfo.office}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Hotline tư vấn</h3>
                  <a href={`tel:${companyInfo.hotline}`} className="text-forest-700 font-bold text-base hover:underline">
                    {companyInfo.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Giờ làm việc kho bãi</h3>
                  <p className="text-slate-600 text-xs">{companyInfo.workHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={companyInfo.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Zalo với chuyên viên
              </a>
              <a
                href={`tel:${companyInfo.hotline}`}
                className="flex-1 py-3 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                Gọi trực tiếp kho
              </a>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-wood-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Gửi yêu cầu báo giá nhanh
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Điền thông tin quy cách và số lượng gỗ cần mua, đội ngũ kinh doanh Gỗ LAM sẽ liên hệ lại ngay trong 15 phút.
          </p>

          {submitted ? (
            <div className="p-8 text-center bg-forest-50 rounded-2xl border border-forest-200 space-y-4">
              <CheckCircle className="w-12 h-12 text-forest-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Đã gửi yêu cầu thành công!</h3>
              <p className="text-xs text-slate-600">
                Cảm ơn bạn đã quan tâm. Nhân viên kinh doanh Gỗ LAM sẽ liên hệ số điện thoại {formData.phone} để tư vấn và gửi bảng giá chi tiết.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-forest-700 underline"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Họ tên hoặc tên xưởng / công ty *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ví dụ: Anh Tuấn - Xưởng Mộc Tân Uyên"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-forest-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Số điện thoại / Zalo *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Nhập số điện thoại nhận báo giá"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-forest-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Loại gỗ quan tâm
                  </label>
                  <select
                    value={formData.woodType}
                    onChange={(e) => setFormData({ ...formData, woodType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-forest-600 focus:outline-none bg-white"
                  >
                    <option value="Gỗ Thông">Gỗ Thông (Pine)</option>
                    <option value="Gỗ Sồi">Gỗ Sồi (Oak)</option>
                    <option value="Gỗ Dẻ Gai">Gỗ Dẻ Gai (Beech)</option>
                    <option value="Gỗ Tần Bì">Gỗ Tần Bì (Ash)</option>
                    <option value="Gỗ Dương">Gỗ Dương (Poplar)</option>
                    <option value="Gỗ Óc Chó">Gỗ Óc Chó (Walnut)</option>
                    <option value="Khác">Loại gỗ khác</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Khối lượng dự kiến
                  </label>
                  <input
                    type="text"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="VD: 1 cont 40ft hoặc 20 m3"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-forest-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Ghi chú quy cách độ dầy / yêu cầu cụ thể
                </label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="VD: Cần độ dầy 25mm và 32mm chất lượng COL, giao tại kho Bình Chuẩn..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-forest-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4 text-amber-300" />
                Gửi Yêu Cầu Báo Giá
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
