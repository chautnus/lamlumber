export interface ProductImage {
  title?: string;
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
}

export interface ProductOption {
  title: string;
  choices: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // "thong" | "soi" | "de-gai" | "tan-bi" | "duong" | "oc-cho" | "phong" | "khac"
  categoryName: string;
  origin: string; // "Brazil" | "Mỹ" | "EU" | "Chile" | "New Zealand" | "Châu Âu"
  price: number;
  formattedPrice: string;
  description: string;
  sku: string;
  inStock: boolean;
  status: "ready" | "otw" | "cif"; // Hàng sẵn kho, sắp về, CIF
  images: ProductImage[];
  options: ProductOption[];
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  established: string;
  hotline: string;
  hotlineDisplay: string;
  zaloPhone: string;
  zaloUrl: string;
  email: string;
  warehouse: string;
  office: string;
  workHours: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  content: string[];
}
