"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import { woodCategories } from "@/data/company";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductFilterProps {
  initialProducts: Product[];
}

export default function ProductFilter({ initialProducts }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Category Tabs & Search Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-wood-200/80 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên gỗ (Thông, Sồi, Dẻ gai, Tần bì...), xuất xứ..."
            className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent bg-slate-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Count badge */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 px-3 py-2 bg-wood-100 rounded-xl shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-forest-700" />
          Hiển thị: <strong className="text-forest-800">{filteredProducts.length}</strong> sản phẩm
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {woodCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                isActive
                  ? "bg-forest-700 text-white shadow-forest-800/20"
                  : "bg-white text-slate-700 hover:bg-wood-100 border border-wood-200"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-wood-300 p-8">
          <p className="text-slate-600 font-medium">
            Không tìm thấy loại gỗ nào khớp với từ khóa &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-3 px-4 py-2 text-xs font-bold text-forest-700 bg-wood-100 rounded-lg hover:bg-wood-200"
          >
            Xem toàn bộ 30 sản phẩm
          </button>
        </div>
      )}
    </div>
  );
}
