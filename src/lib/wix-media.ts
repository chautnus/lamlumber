// Wix static media URL normalization helper adapted from Orangeshome pattern
const WIX_STATIC_MEDIA = /^(https:\/\/static\.wixstatic\.com\/media\/[^/?#]+)(?:\/v1\/.*)?$/;

export function getWixOriginalImageUrl(rawUrl?: string): string {
  if (!rawUrl || typeof rawUrl !== "string") return "/images/placeholder-wood.jpg";
  const trimmed = rawUrl.trim();
  const match = WIX_STATIC_MEDIA.exec(trimmed);
  return match ? match[1] : trimmed;
}

export function formatPriceVnd(price: number, formattedStr?: string): string {
  if (formattedStr && formattedStr !== "$0.00" && formattedStr !== "$0" && formattedStr !== "0") {
    return formattedStr;
  }
  if (price > 0) {
    return `${price.toLocaleString("vi-VN")} đ`;
  }
  return "Liên hệ báo giá";
}
