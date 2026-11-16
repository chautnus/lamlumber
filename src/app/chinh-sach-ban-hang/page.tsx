import { ShieldCheck, CheckCircle2, AlertTriangle, Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export const metadata = {
  title: "Chính sách bán hàng & nghiệm thu | LamLumber",
  description: "Chính sách cam kết chất lượng, bảo hành và đổi trả của Công ty TNHH Gỗ LAM trong vòng 7 ngày kể từ ngày giao nhận.",
};

export default function SalesPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-forest-700" />
          <span>Cam Kết Uy Tín</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-wood-950 tracking-tight">
          CHÍNH SÁCH BÁN HÀNG CỦA LAM
        </h1>
        <p className="text-sm text-slate-600">
          Đảm bảo tối đa lợi ích và sự an tâm tuyệt đối của Quý khách hàng khi hợp tác cùng LamLumber.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-wood-200/80 shadow-md space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-forest-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-xl font-bold text-slate-900">
              Cam kết xử lý yêu cầu chất lượng trong vòng 7 ngày
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed pl-9">
            LamLumber cam kết tiếp nhận và xử lý mọi yêu cầu có liên quan đến chất lượng sản phẩm trong vòng <strong>7 ngày</strong> kể từ ngày Quý khách nhận hàng tại kho hoặc nhận bàn giao nguyên cont tại cảng.
          </p>
        </div>

        <div className="space-y-4 border-t border-wood-100 pt-6">
          <div className="flex items-center gap-3 text-forest-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-xl font-bold text-slate-900">
              Trường hợp sản phẩm không đúng phẩm cấp thỏa thuận
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed pl-9">
            Trong trường hợp hàng thực tế không đúng với quy cách, phẩm cấp đã thống nhất trong đơn hàng hoặc hợp đồng, Gỗ LAM cam kết sẽ nhận lại sản phẩm hoặc thực hiện chiết khấu tương xứng theo đề xuất của Quý khách hàng.
          </p>
        </div>

        <div className="space-y-4 border-t border-wood-100 pt-6">
          <div className="flex items-center gap-3 text-forest-800">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
            <h2 className="text-xl font-bold text-slate-900">
              Trường hợp sản phẩm phát sinh khiếm khuyết tự nhiên
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed pl-9">
            Đối với trường hợp hàng bị khiếm khuyết cục bộ (như mốc bề mặt do vận chuyển đường biển, lẹm cạnh, hoặc lỗi ruột cây), hai bên sẽ tiến hành đàm phán thiện chí dựa trên tỷ lệ hư hao thực tế để đưa ra mức giá hỗ trợ phù hợp nhất.
          </p>
        </div>

        <div className="p-5 bg-wood-50 rounded-2xl border border-wood-200 text-xs text-wood-900 space-y-2">
          <p className="font-bold">Lưu ý quan trọng:</p>
          <p className="text-slate-600 leading-relaxed">
            Để đảm bảo đầy đủ quyền lợi của mình, rất mong Quý khách hàng tiến hành nghiệm thu, kiểm tra số lượng và phẩm cấp hàng hóa trong vòng 7 ngày kể từ ngày nhận hàng. Sau thời hạn này, LamLumber xin phép chỉ hỗ trợ các dịch vụ kỹ thuật thông thường.
          </p>
        </div>

        <div className="pt-6 border-t border-wood-100 flex flex-col sm:flex-row gap-4">
          <a
            href={companyInfo.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-colors text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Zalo trao đổi chính sách
          </a>
          <a
            href={`tel:${companyInfo.hotline}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl shadow-sm transition-colors text-sm"
          >
            <Phone className="w-5 h-5 text-amber-300" />
            Hotline: {companyInfo.hotlineDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
