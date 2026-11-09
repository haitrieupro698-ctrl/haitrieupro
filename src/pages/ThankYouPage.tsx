import React, { useEffect, useState } from 'react';
import { CheckCircle2, Gift, MessageCircle, ArrowRight, Phone, Download, Sparkles, ShieldCheck } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';
import { trackPageView, trackPurchase, trackZaloClick } from '../services/analytics';

interface ThankYouPageProps {
  onNavigateHome: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigateHome }) => {
  const [orderCode, setOrderCode] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Đặt Hàng Thành Công • Cảm Ơn Bạn | Hải Triều AI';

    // Generate readable random order ID if not stored
    const existingCode = sessionStorage.getItem('last_order_code');
    const code = existingCode || `HT-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(code);

    // Track PageView & Purchase Conversion for Facebook Pixel & Google Analytics
    trackPageView('/cam-on', 'Trang Cảm Ơn - Chuyển Đổi Thành Công');
    trackPurchase(code, 135000, ['skill-ai-thuc-chien']);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-800 flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center font-black text-sm">
              HT
            </div>
            <span className="font-serif-luxury font-black text-base text-purple-950">
              HẢI TRIỀU AI
            </span>
          </div>

          <button
            onClick={onNavigateHome}
            className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-950 cursor-pointer"
          >
            ← Về Kho 41 Skill
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-400 shadow-2xl space-y-8 text-center relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-100/60 blur-[120px] pointer-events-none rounded-full" />

          {/* Success Checkmark */}
          <div className="relative z-10 space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg border-4 border-emerald-200">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Giao Dịch Đã Ghi Nhận Thành Công</span>
            </div>

            <h1 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              CẢM ƠN BẠN ĐÃ MỞ KHÓA SKILL!
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Đơn hàng của bạn đã được kết nối với hệ thống bàn giao tự động. Dưới đây là thông tin nhận file và hỗ trợ thực hành:
            </p>
          </div>

          {/* Order Details Receipt Box */}
          <div className="bg-slate-50 border border-purple-200/80 rounded-2xl p-5 text-left space-y-3 relative z-10">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">Mã đơn hàng:</span>
              <span className="font-mono font-black text-purple-900 text-base">{orderCode}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">Học phí Skill:</span>
              <span className="font-mono font-black text-emerald-600 text-base">135.000 VNĐ / 199.000 VNĐ</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">Hình thức bàn giao:</span>
              <span className="font-bold text-slate-800">Nhận file Google Drive + Hỗ trợ Zalo 1-1</span>
            </div>
          </div>

          {/* Action Step 1: Enter Zalo Group */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-300 rounded-3xl p-6 sm:p-8 space-y-4 text-center relative z-10 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>

            <h3 className="font-serif-luxury font-black text-xl sm:text-2xl text-blue-950">
              BƯỚC 1: VÀO NHÓM ZALO ĐỂ NHẬN FILE NGAY
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
              Bấm nút bên dưới để tham gia nhóm Zalo chính thức của Hải Triều AI. Trợ lý và anh Hải Triều sẽ gửi trực tiếp link file và hỗ trợ bạn từng bước.
            </p>

            <div className="pt-2">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackZaloClick('Thank You Page Button', '/cam-on')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>👉 VÀO NHÓM ZALO NHẬN FILE NGAY</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Không cần chờ đợi • Hỗ trợ duyệt tự động vào nhóm 24/7
            </p>
          </div>

          {/* Hotline direct contact */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm relative z-10">
            <div className="text-left">
              <div className="font-bold text-purple-950">Cần hỗ trợ gấp hoặc gặp trục trặc kỹ thuật?</div>
              <div className="text-slate-600 text-xs">Liên hệ trực tiếp anh Trịnh Hải Triều:</div>
            </div>
            <a
              href={`https://zalo.me/${BANK_INFO.supportPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackZaloClick('Thank You Hotline', '/cam-on')}
              className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-1.5 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline / Zalo: {BANK_INFO.supportPhone}</span>
            </a>
          </div>

          {/* Return Home Button */}
          <div className="pt-4 border-t border-purple-100 flex items-center justify-center relative z-10">
            <button
              onClick={onNavigateHome}
              className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-950 underline cursor-pointer"
            >
              ← Tiếp tục xem kho 41 Skill thực chiến
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
