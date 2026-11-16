## Elicitation — 2026-11-16

Problem: Website hiện tại của LamLumber đang chạy trên nền tảng Wix miễn phí (chautnus.wixsite.com/website), bị gắn banner quảng cáo của Wix, tốc độ tải phụ thuộc vào viewer client nặng nề (~1.5MB JS/trang), SEO và trải nghiệm thương hiệu chưa tối ưu cho domain riêng lamlumber.com.
Goal: Xây dựng lại website độc lập bằng Next.js trên Git, deploy Vercel, trỏ domain lamlumber.com, giữ nguyên 100% dữ liệu 30 sản phẩm, hình ảnh từ Wix CDN (sử dụng pattern xử lý ảnh Wix tương tự dự án Orangeshome), các trang thông tin doanh nghiệp, chính sách bán hàng và tối ưu gọi/chat Zalo chuyển đổi khách sỉ.
Scope IN:
- Khởi tạo dự án Next.js 15 App Router + Tailwind CSS.
- Chuyển đổi 30 sản phẩm gỗ nhập khẩu và quy cách độ dầy, hình ảnh từ Wix về catalog cục bộ.
- Trang chủ với bộ lọc loại gỗ (Thông, Sồi, Dẻ gai, Tần bì, Dương, Óc chó, Phong), tình trạng kho (Sẵn kho, Sắp về cảng, CIF).
- Trang chi tiết sản phẩm chuẩn SEO, gallery ảnh nhiều góc chụp, nút gọi điện và chat Zalo 0902 769 692.
- Các trang nội dung: Giới thiệu Gỗ LAM, Chính sách bán hàng & nghiệm thu 7 ngày, Báo giá, Liên hệ & vị trí kho Bình Chuẩn / văn phòng Đảo Kim Cương.
- Nút liên hệ nhanh nổi góc màn hình (Floating Hotline & Zalo).
- Đẩy source lên GitHub (chautnus/lamlumber) và deploy lên Vercel.
Scope OUT:
- Cổng thanh toán trực tuyến thẻ tín dụng (bán sỉ gỗ xuất/nhập khẩu giao dịch qua hợp đồng & báo giá Zalo/Hotline).
- Quản lý tài khoản đăng nhập người dùng cuối.
Users: Khách hàng mua sỉ gỗ xẻ sấy, xưởng mộc, nhà thầu nội thất, đối tác thương mại tìm kiếm nguồn gỗ thông, gỗ sồi, tần bì nhập khẩu.
Stories:
- US-01: Khách hàng xem danh mục gỗ theo loại (Thông, Sồi, Tần bì...) và tìm kiếm nhanh theo độ dày quy cách.
- US-02: Khách hàng xem chi tiết hình ảnh thực tế của kiện gỗ tại kho/cảng và bấm 1 chạm để gọi hoặc nhắn Zalo nhận báo giá theo cont/m3.
- US-03: Khách hàng tra cứu bảng báo giá CIF, danh sách công hàng sắp cập cảng Cái Mép/Cát Lái và chính sách bảo hành nghiệm thu.
Constraints: Next.js App Router, Tailwind CSS, deploy Vercel, Git repo tại GitHub chautnus.
NFR: Tốc độ load < 1.5s, mobile responsive 100%, SEO metadata đầy đủ.

---

## PRD — 2026-11-16

Path: docs/prd/build-lamlumber-website.md
Version: 1.0
Summary: Website giới thiệu sản phẩm và năng lực nhập khẩu gỗ LamLumber thay thế Wix cũ, tích hợp catalog 30 sản phẩm, bộ lọc linh hoạt và CTA liên hệ Zalo/Hotline.

---

## Architecture — 2026-11-16

Pattern: Next.js App Router (Static Site Generation / Server Components) kết hợp Client Components cho Filter và Image Gallery.
ADR-001: Next.js 15 + Tailwind CSS on Vercel with Wix CDN / Local Image fallback.
Media Strategy: Trích xuất URL ảnh gốc Wix bằng Regex `WIX_STATIC_MEDIA` (học từ `Orangeshome`), cấu hình `remotePatterns` trong `next.config.ts`.
