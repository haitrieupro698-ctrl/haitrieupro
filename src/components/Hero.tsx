import React from 'react';
import { ArrowRight, Play, MessageCircle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onExploreDemo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#f8f9fe] text-slate-900">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-purple-200/50 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-200/40 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Card - Luminous Frosted Translucent Aesthetic */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-purple-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top tag badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
                <Zap className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
                <span>BÍ QUYẾT TỪ HẢI TRIỀU AI • GIÁ CHỈ 99K</span>
              </div>

              {/* Big Headlines */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-800 to-fuchsia-700">
                  TEXT OVERLAY
                </h1>
                <h2 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-slate-900">
                  TRIỆU VIEW
                </h2>
              </div>

              {/* Subtitle */}
              <p className="font-serif-luxury font-bold text-lg sm:text-2xl text-purple-900 tracking-wide uppercase border-l-4 border-purple-600 pl-3">
                CHỈ CẦN MỘT Ý TƯỞNG – CÓ NGAY KỊCH BẢN VIDEO THU HÚT!
              </p>

              {/* 3 Core Pain Points with high contrast legible typography */}
              <div className="space-y-3.5 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center text-xs mt-0.5 font-black">
                    ?
                  </span>
                  <p>
                    Bạn muốn làm video <strong className="text-slate-900 font-bold">TikTok, Facebook Reels hoặc YouTube Shorts</strong> nhưng chưa biết viết kịch bản thế nào cho hấp dẫn?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center text-xs mt-0.5 font-black">
                    ?
                  </span>
                  <p>
                    Bạn có nhiều ý tưởng trong đầu nhưng <strong className="text-slate-900 font-bold">loay hoay không biết bắt đầu từ đâu</strong> và tốn hàng giờ đồng hồ?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center text-xs mt-0.5 font-black">
                    ?
                  </span>
                  <p>
                    Bạn muốn tạo những video có <strong className="text-purple-900 font-bold">chữ xuất hiện trên màn hình</strong>, câu mở đầu "thôi miên" và nội dung khiến người xem phải xem đến giây cuối cùng?
                  </p>
                </div>
              </div>

              {/* Value Highlight Badge */}
              <div className="p-4 bg-purple-50/80 border border-purple-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dùng ngay với ChatGPT / Gemini / Claude</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>Quét VietQR SHB Nhận Skill Tức Thì</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onSelectProduct('skill-text-overlay')}
                  className="purple-gradient-btn text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>MUA SKILL NGAY - 99.000 VNĐ</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={onExploreDemo}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-sm sm:text-base px-6 py-4 rounded-xl border border-purple-200 cursor-pointer flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
                  <span>Xem Video & Thử Mẫu</span>
                </button>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-sm px-5 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span>Nhóm Zalo</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Visual - Hải Triều Studio Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative glowing backdrops */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-md opacity-30"></div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200 bg-white shadow-xl">
                  {/* Portrait photo of Hai Trieu */}
                  <img
                    src="/assets/aistudio/image_8e8d66ac.png"
                    alt="Hải Triều AI - Chuyên gia Sáng tạo Kịch bản Video"
                    className="w-full h-auto object-cover object-left-top max-h-[460px]"
                  />

                  {/* Gradient Overlay bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif-luxury font-black text-xl text-white">
                          HẢI TRIỀU AI
                        </div>
                        <p className="text-xs text-purple-200 font-medium">
                          Học Để Làm Được • Làm Để Tạo Ra Giá Trị
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs px-2.5 py-1 rounded-md shadow-md uppercase">
                          99.000 VNĐ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating highlight pills */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-purple-200 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Quét VietQR SHB</div>
                    <div className="text-[10px] text-purple-700 font-medium">Nhận Skill & Vào Zalo Ngay</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-purple-200 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-ping" />
                  <div className="text-xs font-bold text-purple-900">
                    2.500+ Học Viên Đã Áp Dụng
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
