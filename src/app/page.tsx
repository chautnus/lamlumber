import { TreePine, ShieldCheck, Truck, Warehouse, Phone, MessageCircle } from "lucide-react";
import productsData from "@/data/products.json";
import { companyInfo } from "@/data/company";
import { Product } from "@/types";
import ProductFilter from "@/components/ProductFilter";

export default function HomePage() {
  const products = productsData as unknown as Product[];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-wood-950 via-forest-900 to-wood-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800/80 border border-forest-600/50 text-amber-300 text-xs font-semibold">
              <TreePine className="w-4 h-4 text-emerald-400" />
              <span>Nhà nhập khẩu gỗ xẻ sấy uy tín từ năm 2014</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              GỖ NHẬP KHẨU <br />
              <span className="text-amber-400">CHẤT LƯỢNG CAO</span>
            </h1>

            <p className="text-base sm:text-lg text-wood-200 leading-relaxed">
              Chuyên cung cấp gỗ xẻ sấy nguyên container: <strong>Thông (Pine), Sồi (Oak), Tần Bì (Ash), Dẻ Gai (Beech), Óc Chó, Gỗ Dương</strong> nhập khẩu trực tiếp từ Mỹ, Brazil, Chile, EU, New Zealand. Hàng sẵn kho tại Bình Dương.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`tel:${companyInfo.hotline}`}
                className="flex items-center gap-2 px-6 py-3.5 bg-forest-600 hover:bg-forest-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                Hotline: {companyInfo.hotlineDisplay}
              </a>
              <a
                href={companyInfo.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Báo giá Zalo nhanh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-wood-200 shadow-md">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
              <Warehouse className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Kho hàng Bình Dương</h4>
              <p className="text-xs text-slate-500">Đường Bình Chuẩn 41, Thuận An, luôn sẵn hàng mẫu</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Cam kết trong 7 ngày</h4>
              <p className="text-xs text-slate-500">Đổi trả, chiết khấu nhanh nếu sản phẩm không đúng phẩm cấp</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Giao nguyên cont & m3</h4>
              <p className="text-xs text-slate-500">Giá CIF tại cảng Cái Mép / Cát Lái hoặc giao tại kho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog with Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-wood-950 tracking-tight">
            DANH MỤC GỖ NHẬP KHẨU SẴN KHO
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Tra cứu quy cách độ dày, hình ảnh thực tế từng kiện gỗ và liên hệ nhận báo giá sỉ tốt nhất.
          </p>
        </div>

        <ProductFilter initialProducts={products} />
      </section>
    </div>
  );
}
