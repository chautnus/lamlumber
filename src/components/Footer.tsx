import Link from "next/link";
import { TreePine, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-wood-950 text-wood-100 border-t-4 border-amber-500/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-600 text-amber-300 flex items-center justify-center">
                <TreePine className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                LAM<span className="text-amber-400">LUMBER</span>
              </span>
            </div>
            <p className="text-xs text-wood-300 leading-relaxed">
              {companyInfo.name} thành lập từ năm 2014, chuyên cung cấp gỗ xẻ sấy nhập khẩu nguyên cont trực tiếp từ Mỹ, Brazil, Chile, EU, New Zealand.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold bg-wood-900/80 py-2 px-3 rounded-lg border border-wood-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Cam kết chất lượng xử lý trong 7 ngày
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Danh mục gỗ nhập khẩu
            </h3>
            <ul className="space-y-2 text-xs text-wood-200">
              <li>Gỗ Thông (Pine) Brazil, Chile, NZ</li>
              <li>Gỗ Sồi Trắng & Sồi Đỏ Mỹ (Oak)</li>
              <li>Gỗ Dẻ Gai Châu Âu (Beech)</li>
              <li>Gỗ Tần Bì Châu Âu & Mỹ (Ash)</li>
              <li>Gỗ Dương (Poplar), Óc Chó (Walnut)</li>
              <li>Gỗ Phong Vàng (Birch) A, AB, ABC</li>
            </ul>
          </div>

          {/* Policies & Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Thông tin & Chính sách
            </h3>
            <ul className="space-y-2 text-xs text-wood-200">
              <li>
                <Link href="/chinh-sach-ban-hang" className="hover:text-amber-300 transition-colors">
                  Chính sách bán hàng & nghiệm thu
                </Link>
              </li>
              <li>
                <Link href="/bao-gia" className="hover:text-amber-300 transition-colors">
                  Báo giá gỗ CIF & hàng sắp về
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="hover:text-amber-300 transition-colors">
                  Giới thiệu năng lực Gỗ LAM
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-amber-300 transition-colors">
                  Chỉ đường kho hàng Thuận An
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Warehouse Address */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Liên hệ kho hàng & VP
            </h3>
            <ul className="space-y-3 text-xs text-wood-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Kho hàng:</strong> {companyInfo.warehouse}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Văn phòng:</strong> {companyInfo.office}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${companyInfo.hotline}`} className="hover:text-white font-bold text-amber-300 text-sm">
                  {companyInfo.hotlineDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyInfo.workHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-wood-900 text-center text-xs text-wood-400">
          <p>© {new Date().getFullYear()} {companyInfo.shortName} ({companyInfo.name}). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
