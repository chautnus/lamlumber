import Link from "next/link";
import Image from "next/image";
import { Layers, ShieldCheck, MapPin } from "lucide-react";
import { Product } from "@/types";
import { getWixOriginalImageUrl, formatPriceVnd } from "@/lib/wix-media";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0]?.url || "";
  const imageUrl = getWixOriginalImageUrl(mainImage);
  const thicknessOpt = product.options.find((o) => o.title.toLowerCase().includes("dầy") || o.title.toLowerCase().includes("dày"));

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-wood-200/80 hover:border-forest-600/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Product Image */}
      <Link href={`/san-pham/${product.slug}`} className="relative block aspect-[4/3] bg-wood-100 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-wood-400 text-xs">
            Ảnh kiện gỗ
          </div>
        )}

        {/* Origin Badge */}
        <div className="absolute top-3 left-3 bg-wood-950/80 backdrop-blur-sm text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <MapPin className="w-3 h-3 text-amber-400" />
          {product.origin}
        </div>

        {/* Stock Badge */}
        <div className="absolute top-3 right-3 bg-forest-600/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow-sm">
          Sẵn kho
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold text-wood-600 uppercase tracking-wider block mb-1">
            {product.categoryName}
          </span>
          <Link href={`/san-pham/${product.slug}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-forest-700 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Thickness options preview if available */}
          {thicknessOpt && thicknessOpt.choices.length > 0 && (
            <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-600">
              <Layers className="w-3.5 h-3.5 text-wood-500 shrink-0" />
              <span className="truncate">
                Dày: {thicknessOpt.choices.slice(0, 4).join(", ")}
                {thicknessOpt.choices.length > 4 ? "..." : ""}
              </span>
            </div>
          )}
        </div>

        {/* Footer info: Price & CTA */}
        <div className="mt-4 pt-3 border-t border-wood-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] text-slate-500 font-medium">Báo giá:</span>
            <span className="text-sm font-black text-forest-700">
              {formatPriceVnd(product.price, product.formattedPrice)}
            </span>
          </div>

          <Link
            href={`/san-pham/${product.slug}`}
            className="px-3 py-1.5 text-xs font-bold text-wood-900 bg-wood-100 hover:bg-forest-700 hover:text-white rounded-lg transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
