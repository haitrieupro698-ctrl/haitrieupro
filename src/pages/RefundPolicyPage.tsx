import React, { useEffect } from 'react';
import { ArrowLeft, RefreshCw, CheckCircle2, ShieldCheck, Clock, HelpCircle, Phone } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';
import { trackPageView, trackZaloClick } from '../services/analytics';

interface PageProps {
  onNavigateHome: () => void;
}

export const RefundPolicyPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Chính Sách Hoàn Tiền & Bàn Giao | Hải Triều AI';
    trackPageView('/chinh-sach-hoan-tien', 'Chính Sách Hoàn Tiền & Bàn Giao');
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <RefreshCw className="w-4 h-4 text-emerald-700" />
              <span>Bảo Hành Quyền Lợi & Hỗ Trợ 100% Thực Chiến</span>
            </div>
            <h1 className="font-serif-luxury font-black text-2xl sm:text-4xl text-purple-950 tracking-tight">
              CHÍNH SÁCH BÀN GIAO & HOÀN TIỀN
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Cam kết bàn giao đúng file, đúng hướng dẫn và hỗ trợ đến khi thực hành thành thạo
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                1. Thời gian và quy trình bàn giao
              </h2>
              <p>
                100% đơn hàng sau khi chuyển khoản thành công được hệ thống gửi file và link nhóm hỗ trợ:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li><strong className="text-slate-900">Tự động ngay lập tức:</strong> Màn hình xác nhận thành công hiển thị link Google Drive và nhóm Zalo hướng dẫn kèm theo mã đơn.</li>
                <li><strong className="text-slate-900">Qua Zalo hỗ trợ:</strong> Trong vòng tối đa 15-30 phút, đội ngũ hỗ trợ của anh Hải Triều kiểm tra và gửi lại file trực tiếp qua tin nhắn Zalo để đảm bảo bạn không bị thất lạc.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                2. Điều kiện áp dụng hoàn tiền 100%
              </h2>
              <p>
                Hải Triều AI cam kết hoàn lại 100% số tiền đã thanh toán (135.000 VNĐ / 199.000 VNĐ) trong các trường hợp sau:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Khách hàng chuyển khoản nhầm số tiền hoặc chuyển khoản trùng nhiều lần cho cùng 1 Skill.</li>
                <li>Hệ thống gặp sự cố kỹ thuật và quá 24 giờ kể từ khi thanh toán mà khách hàng chưa nhận được file hoặc link nhóm hướng dẫn.</li>
                <li>File tài liệu bị lỗi liên kết hoặc không thể mở được và đội ngũ kỹ thuật không thể khắc phục trong vòng 24 giờ.</li>
                <li>Khách hàng làm đúng theo từng bước hướng dẫn nhưng gặp vướng mắc kỹ thuật không thể sử dụng và không được hỗ trợ giải đáp.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-600" />
                3. Thủ tục yêu cầu hoàn tiền cực kỳ đơn giản
              </h2>
              <p>
                Không cần giấy tờ phức tạp, bạn chỉ cần gửi ảnh chụp hóa đơn giao dịch hoặc số điện thoại đăng ký đến Zalo hỗ trợ của Hải Triều:
              </p>
              <div className="mt-3 p-4 bg-purple-50 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-purple-950">Kênh Tiếp Nhận Hoàn Tiền 24/7:</div>
                  <div className="text-xs text-slate-600">Tiền được chuyển khoản trả lại tài khoản ngân hàng của bạn trong vòng 2 - 4 giờ làm việc.</div>
                </div>
                <a
                  href={`https://zalo.me/${BANK_INFO.supportPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackZaloClick('Refund Zalo', '/chinh-sach-hoan-tien')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Nhắn Zalo: {BANK_INFO.supportPhone}</span>
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
