import React from 'react';
import { Play, Gift, CheckCircle, Sparkles, Flame } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDemo }) => {
  // Dải chip ngang nhỏ (mỗi chip 5-7 chữ)
  const chips = [
    'Hook thôi miên 3 giây đầu',
    'Giữ chân người xem tới cuối',
    'Tự động hóa kịch bản AI',
    'Tăng vọt tương tác đơn hàng',
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-[#f8f9fe] text-slate-900 border-b border-purple-100">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-purple-200/40 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-200/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-purple-200/90">
          {/* Hero 2 cột (mobile xếp dọc) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Cột Trái: Tiêu đề H1, mô tả <= 20 từ, chip ngang, 2 nút, dòng tin cậy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Tiêu đề H1 duy nhất */}
              <h1 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-purple-950 tracking-tight leading-[1.25]">
                CHỈ CẦN MỘT Ý TƯỞNG – CÓ NGAY KỊCH BẢN VIDEO TRIỆU VIEW!
              </h1>

              {/* 1 dòng mô tả <= 20 từ */}
              <p className="text-slate-700 text-base sm:text-lg leading-[1.5] font-normal">
                Biến ý tưởng thô thành kịch bản video viral cuốn hút, giữ chân người xem từng giây với trợ lý AI thực chiến.
              </p>

              {/* Dải chip ngang nhỏ (mỗi chip 5-7 chữ) thay thế các câu hỏi dài */}
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-xs sm:text-sm font-semibold hover:bg-purple-100 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{chip}</span>
                  </span>
                ))}
              </div>

              {/* 2 Nút: Chính (Vào Zalo nhận 4 skill 0đ), Phụ (Xem Video Mẫu) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Nút chính */}
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all border border-amber-300"
                >
                  <Gift className="w-5 h-5 fill-slate-950" />
                  <span>VÀO ZALO NHẬN 4 SKILL 0Đ</span>
                </a>

                {/* Nút phụ */}
                <button
                  onClick={onExploreDemo}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-sm sm:text-base px-6 py-4 rounded-xl border border-purple-200 cursor-pointer flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-4 h-4 text-purple-700 fill-purple-700" />
                  <span>▶ Xem Video Mẫu</span>
                </button>
              </div>

              {/* Dòng tin cậy */}
              <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">✓ 2.500+ học viên đã áp dụng thành công</span>
              </div>

            </div>

            {/* Cột Phải: 1 ảnh nhân vật sắc nét + badge "HOT TREND" góc trên */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                
                {/* Badge "HOT TREND" góc trên */}
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-1.5 tracking-wider">
                  <Flame className="w-3.5 h-3.5 fill-white text-white" />
                  <span>HOT TREND</span>
                </div>

                {/* Khung ảnh nhân vật sắc nét */}
                <div className="rounded-2xl overflow-hidden border-2 border-purple-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="/assets/skill_text_overlay_poster.jpg"
                    alt="KOL AI Hải Triều - Text Overlay Triệu View"
                    className="w-full h-auto object-cover max-h-[500px] hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
