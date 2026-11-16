"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types";
import { getWixOriginalImageUrl } from "@/lib/wix-media";

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] rounded-2xl bg-wood-100 flex items-center justify-center text-slate-400">
        Chưa có hình ảnh
      </div>
    );
  }

  const currentImage = images[selectedIndex] || images[0];
  const highResUrl = getWixOriginalImageUrl(currentImage.url);

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-wood-200 shadow-md">
        <Image
          src={highResUrl}
          alt={`${productName} - ảnh ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md font-mono">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, idx) => {
            const thumbUrl = getWixOriginalImageUrl(img.thumbnail || img.url);
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  isSelected ? "border-forest-600 scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={thumbUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
