import Link from "next/link";
import { TreePine, Award, Users, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export const metadata = {
  title: "Giới thiệu Công ty TNHH Gỗ LAM | LamLumber",
  description: "LamLumber thành lập từ năm 2014, chuyên nhập khẩu gỗ xẻ sấy trực tiếp từ các sawmill hàng đầu Mỹ, Brazil, Chile, EU.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      role: "Giám đốc Bán hàng",
      desc: "Phụ trách điều phối kinh doanh, hợp đồng nguyên cont và khách hàng dự án lớn.",
    },
    {
      role: "Chuyên gia Gỗ cứng (Hardwood)",
      desc: "Tư vấn chuyên sâu Gỗ Sồi (Oak), Tần Bì (Ash), Dẻ Gai (Beech), Óc Chó (Walnut) nội ngoại thất.",
    },
    {
      role: "Chuyên gia Gỗ Thông & Gỗ Dương",
      desc: "Tư vấn quy cách gỗ Thông Brazil, Chile, New Zealand và Gỗ Dương Poplar phục vụ xưởng xẻ.",
    },
    {
      role: "Chuyên viên Chăm sóc Khách hàng",
      desc: "Hỗ trợ thủ tục giao nhận, kiểm định phẩm cấp hàng hóa và hậu mãi sau bán hàng.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
          <TreePine className="w-4 h-4 text-forest-700" />
          <span>Về Chúng Tôi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-wood-950 tracking-tight">
          CÔNG TY TNHH GỖ LAM
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Cạnh tranh, chuyên nghiệp và dịch vụ tận tâm. Đối tác tin cậy của hàng trăm xưởng sản xuất và nhà thầu nội thất trên toàn quốc.
        </p>
      </div>

      {/* Story & Background */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-wood-200 shadow-sm">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-slate-900">
            Hơn 10 năm kinh nghiệm trong ngành gỗ xẻ sấy nhập khẩu
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Công ty TNHH Gỗ LAM được thành lập từ năm 2014, với sứ mệnh cung cấp nguồn nguyên liệu gỗ tự nhiên xẻ sấy nhập khẩu ổn định, chuẩn phẩm cấp quốc tế cho thị trường chế biến gỗ Việt Nam.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Thế mạnh vượt trội của Gỗ LAM là việc hợp tác trực tiếp dài hạn với những sawmill (xưởng cưa xẻ) hàng đầu đến từ Mỹ, Chile, Brazil, Liên minh Châu Âu (EU) và New Zealand. Nhờ đó, chúng tôi đảm bảo nguồn cung liên tục, chất lượng đồng đều và mức giá cạnh tranh nhất.
          </p>
          <div className="pt-2 flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-forest-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Nhập khẩu trực tiếp nguyên container (FCL) và bán lẻ m3 tại kho</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-forest-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Tiêu chuẩn sấy lò KD (Kiln Dried) đạt độ ẩm lý tưởng dưới 12%</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-forest-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Kho bãi rộng rãi tại Thuận An, Bình Dương, thuận tiện giao thông</span>
            </div>
          </div>
        </div>

        {/* Feature box */}
        <div className="bg-wood-50 p-8 rounded-2xl border border-wood-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-forest-700 text-amber-300 flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Cam kết chất lượng</h3>
              <p className="text-xs text-slate-500">Xử lý minh bạch trong vòng 7 ngày</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gỗ LAM hy vọng sẽ luôn có cơ hội hợp tác với Quý khách hàng, cùng xây dựng sự tin tưởng, gắn kết dài lâu và mang lại hiệu quả kinh tế cao nhất cho Quý đối tác.
          </p>
          <div className="p-4 bg-white rounded-xl border border-wood-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Hotline ban lãnh đạo:</span>
            <a href={`tel:${companyInfo.hotline}`} className="text-xl font-black text-forest-700 hover:underline block">
              {companyInfo.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-wood-950">
            NHÀ LAM SẴN SÀNG PHỤC VỤ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Đội ngũ tư vấn giàu kinh nghiệm, trung thực và tận tâm vì sự thành công của khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-wood-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{member.role}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{member.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-wood-100 flex items-center gap-2">
                <a
                  href={companyInfo.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  Zalo
                </a>
                <a
                  href={`tel:${companyInfo.hotline}`}
                  className="flex-1 py-2 text-center text-xs font-bold text-forest-800 bg-forest-50 hover:bg-forest-100 rounded-lg transition-colors"
                >
                  Gọi điện
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
