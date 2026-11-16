# Design Blueprint: build-lamlumber-website

## Module hiện hữu bị chạm
Không có (thư mục dự án mới hoàn toàn).

## File mới thiết kế (Tuân thủ giới hạn ≤ 150 dòng/file, trần cứng ≤ 250 dòng)

### 1. Data & Models
- `src/types/index.ts` (~60 dòng): Interface cho `Product`, `ProductImage`, `ProductOption`, `CompanyInfo`.
- `src/data/company.ts` (~50 dòng): Thông tin công ty, hotline, địa chỉ kho Bình Chuẩn, văn phòng Đảo Kim Cương.
- `src/data/products.json` (~200 sản phẩm items): Chứa 30 sản phẩm gỗ nhập khẩu và URL ảnh gốc từ Wix CDN.
- `src/lib/wix-media.ts` (~40 dòng): Hàm chuẩn hóa ảnh Wix trích xuất URL gốc (theo pattern `Orangeshome`).

### 2. UI Components
- `src/components/Navbar.tsx` (~90 dòng): Thanh điều hướng responsive, logo, menu links, CTA Hotline.
- `src/components/Footer.tsx` (~110 dòng): Chân trang thông tin pháp lý, địa chỉ kho xưởng, liên hệ.
- `src/components/FloatingContact.tsx` (~60 dòng): Widget Hotline & Zalo cố định góc dưới màn hình.
- `src/components/ProductCard.tsx` (~80 dòng): Thẻ hiển thị sản phẩm, ảnh đại diện, giá, quy cách.
- `src/components/ProductFilter.tsx` (~120 dòng): Thanh tìm kiếm, tabs phân loại gỗ (Thông, Sồi, Dẻ gai...).
- `src/components/ImageGallery.tsx` (~100 dòng): Gallery xem ảnh chi tiết với thumbnail chuyển đổi mượt mà.

### 3. Pages / Routes
- `src/app/layout.tsx` (~50 dòng): Root layout, meta title/description, font, favicon.
- `src/app/page.tsx` (~130 dòng): Trang chủ, hero section, bộ lọc và danh sách sản phẩm.
- `src/app/san-pham/[slug]/page.tsx` (~140 dòng): Chi tiết sản phẩm, gallery ảnh, thông số và nút Zalo CTA.
- `src/app/gioi-thieu/page.tsx` (~90 dòng): Giới thiệu công ty Gỗ LAM, lịch sử từ 2014, thế mạnh đối tác.
- `src/app/chinh-sach-ban-hang/page.tsx` (~80 dòng): Chính sách cam kết chất lượng & nghiệm thu 7 ngày.
- `src/app/bao-gia/page.tsx` (~110 dòng): Bảng báo giá CIF & giá kho, danh sách lô hàng cập cảng.
- `src/app/lien-he/page.tsx` (~100 dòng): Trang liên hệ, form tư vấn, bản đồ chỉ đường.

Thứ tự implement:
1. Setup config (`package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`)
2. Data & Media helper (`types`, `company.ts`, `products.json`, `wix-media.ts`)
3. Core layout & components (`Navbar`, `Footer`, `FloatingContact`, `ProductCard`, `ProductFilter`, `ImageGallery`)
4. Pages (`page.tsx`, `san-pham/[slug]`, `gioi-thieu`, `chinh-sach-ban-hang`, `bao-gia`, `lien-he`)
5. Verification, Git commit, Push GitHub và Deploy Vercel.
