import React, { useEffect } from 'react';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Award, Phone } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';
import { trackPageView, trackZaloClick } from '../services/analytics';

interface PageProps {
  onNavigateHome: () => void;
}

export const TermsPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Điều Khoản Dịch Vụ & Sử Dụng | Hải Triều AI';
    trackPageView('/dieu-khoan-su-dung', 'Điều Khoản Dịch Vụ & Sử Dụng');
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-800 flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-purple-900 hover:text-purple-700 font-bold text-xs sm:text-sm cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Trang Chủ</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center font-black text-sm">
              HT
            </div>
            <span className="font-serif-luxury font-black text-base text-purple-950">
              HẢI TRIỀU AI
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-200/90 shadow-xl space-y-8">
          
          <div className="border-b border-purple-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-4 h-4 text-purple-700" />
              <span>Quy Chế Hoạt Động & Bản Quyền</span>
            </div>
            <h1 className="font-serif-luxury font-black text-2xl sm:text-4xl text-purple-950 tracking-tight">
              ĐIỀU KHOẢN DỊCH VỤ & SỬ DỤNG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Có hiệu lực từ ngày 01/01/2026 • Nền tảng chia sẻ kỹ năng thực chiến Hải Triều AI
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                1. Tính chất sản phẩm & Dịch vụ bàn giao
              </h2>
              <p>
                Các sản phẩm trên website <strong className="text-purple-950">haitrieu.pro.vn</strong> là các tài liệu số hóa (Digital Skills / AI Workflows), bao gồm kịch bản prompt mẫu, cấu trúc câu lệnh đã qua kiểm thử, file mẫu đồ họa và video bài giảng thực hành từng bước.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Sản phẩm được bàn giao dưới dạng link Google Drive / file kỹ thuật số trực tuyến.</li>
                <li>Khách hàng được sở hữu quyền sử dụng vĩnh viễn (Lifetime Access) cho cá nhân hoặc doanh nghiệp của mình.</li>
                <li>Đi kèm quyền tham gia nhóm Zalo hỏi đáp trực tiếp 1-1 không giới hạn thời gian.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                2. Quy định về giá và phương thức thanh toán
              </h2>
              <p>
                Toàn bộ kỹ năng thực chiến đang mở trên hệ thống được áp dụng chính sách <strong className="text-emerald-700 font-bold">đồng giá 135.000 VNĐ / Skill (riêng Skill VIP Text Overlay Triệu View là 199.000 VNĐ)</strong> (giá gốc niêm yết 340.000đ - 350.000đ). Bốn skill khởi đầu tại Sảnh I là quà tặng tri ân 0đ (trị giá 340.000đ) cho thành viên Zalo.
              </p>
              <p className="mt-2 text-slate-600">
                Thanh toán được thực hiện an toàn qua chuyển khoản VietQR Ngân hàng TMCP Sài Gòn - Hà Nội (SHB), số tài khoản <strong>0913179424</strong>, chủ tài khoản <strong>TRỊNH HẢI TRIỀU</strong>. Hệ thống tự động kích hoạt ngay khi nhận được giao dịch.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-600" />
                3. Quyền sở hữu trí tuệ và chống sao chép thương mại
              </h2>
              <p>
                Khách hàng được tự do sử dụng câu lệnh, kịch bản để tạo ra video, hình ảnh và ấn phẩm phục vụ kinh doanh cá nhân. Tuy nhiên:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Nghiêm cấm hành vi tải toàn bộ file nguyên gốc về để đóng gói bán lại dưới dạng khóa học của bên khác.</li>
                <li>Nghiêm cấm chia sẻ tài khoản hoặc phát tán link tải công khai nhằm mục đích trục lợi cá nhân.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-600" />
                4. Liên hệ giải quyết tranh chấp
              </h2>
              <p>
                Mọi thắc mắc hoặc phát sinh trong quá trình nhận file và sử dụng dịch vụ được ưu tiên xử lý trực tiếp qua đường dây nóng:
              </p>
              <div className="mt-3 p-4 bg-purple-50 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-purple-950">Chăm sóc khách hàng & Pháp lý:</div>
                  <div className="text-xs text-slate-600">Hỗ trợ nhanh trong vòng 15 phút qua Zalo</div>
                </div>
                <a
                  href={`https://zalo.me/${BANK_INFO.supportPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackZaloClick('Terms Zalo', '/dieu-khoan-su-dung')}
                  className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BANK_INFO.supportPhone}</span>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-purple-100 flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition-colors"
            >
              ← Quay Lại Kho 41 Skill
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-100 py-6 text-center text-xs text-slate-500">
        © 2026 Hải Triều AI • 41 Skill Thực Chiến Đồng Giá 135.000đ (VIP 199k) • Hotline: {BANK_INFO.supportPhone}
      </footer>
    </div>
  );
};
