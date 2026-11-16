import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Layers, CheckCircle, ShieldCheck, ArrowLeft } from "lucide-react";
import productsData from "@/data/products.json";
import { companyInfo } from "@/data/company";
import { Product } from "@/types";
import { formatPriceVnd } from "@/lib/wix-media";
import ImageGallery from "@/components/ImageGallery";
import ProductCard from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = productsData as unknown as Product[];
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const products = productsData as unknown as Product[];
  const product = products.find((p) => p.slug === slug || p.slug === decodedSlug);

  if (!product) {
    return { title: "Sản phẩm không tìm thấy | LamLumber" };
  }

  return {
    title: `${product.name} | LamLumber Gỗ Nhập Khẩu`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} - Gỗ LAM`,
      description: product.description.slice(0, 160),
      images: product.images[0]?.url ? [product.images[0].url] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const products = productsData as unknown as Product[];
  const product = products.find((p) => p.slug === slug || p.slug === decodedSlug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.origin === product.origin))
    .slice(0, 4);

  const zaloInquiryMessage = encodeURIComponent(
    `Xin chào LamLumber, tôi quan tâm sản phẩm "${product.name}" (Xuất xứ: ${product.origin}). Xin vui lòng báo giá và quy cách sẵn kho.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-forest-700 bg-white px-3.5 py-2 rounded-xl border border-wood-200 shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh mục sản phẩm
        </Link>
      </div>

      {/* Main product showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-wood-200/80 shadow-md">
        {/* Left column: Image Gallery */}
        <div>
          <ImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Right column: Product Information & CTAs */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-1 rounded-md">
                {product.categoryName}
              </span>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-amber-200">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Xuất xứ: {product.origin}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Hàng sẵn kho Bình Dương
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            {/* Price section */}
            <div className="p-4 rounded-2xl bg-wood-50 border border-wood-200 flex items-center justify-between">
              <div>
                <span className="block text-xs text-slate-500 font-medium">Báo giá sản phẩm:</span>
                <span className="text-xl sm:text-2xl font-black text-forest-700">
                  {formatPriceVnd(product.price, product.formattedPrice)}
                </span>
              </div>
              <span className="text-xs text-wood-700 font-medium">
                (Áp dụng mua theo cont / m3)
              </span>
            </div>

            {/* Thickness / Options */}
            {product.options && product.options.length > 0 && (
              <div className="space-y-3 pt-2">
                {product.options.map((opt, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Layers className="w-4 h-4 text-forest-700" />
                      <span>{opt.title}:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {opt.choices.map((choice, cidx) => (
                        <span
                          key={cidx}
                          className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg text-slate-800 shadow-sm"
                        >
                          {choice}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="pt-2 text-sm text-slate-700 leading-relaxed space-y-2 border-t border-wood-100">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Mô tả chi tiết:
              </h3>
              <p>{product.description}</p>
            </div>

            {/* Quality assurance box */}
            <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Cam kết LamLumber:</strong> Xử lý mọi yêu cầu chất lượng trong vòng 7 ngày kể từ ngày nhận hàng. Đổi trả hoặc chiết khấu thỏa đáng nếu hàng không đúng phẩm cấp.
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-wood-100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://zalo.me/${companyInfo.zaloPhone}?text=${zaloInquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Zalo Báo Giá Nhanh
            </a>
            <a
              href={`tel:${companyInfo.hotline}`}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-300" />
              Gọi Hotline: {companyInfo.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="border-b border-wood-200 pb-3">
            <h2 className="text-xl font-bold text-slate-900">
              Sản phẩm gỗ nhập khẩu cùng loại
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
