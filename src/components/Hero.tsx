import React from 'react';
import { ArrowRight, Play, MessageCircle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onExploreDemo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#0c071a] via-[#140b2e] to-[#0b0618]">
      {/* Background purple glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-violet-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Card - Purple & White Luxury Aesthetic */}
        <div className="bg-[#130b29]/95 border border-purple-500/30 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/90 purple-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top tag badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide">
                <Zap className="w-3.5 h-3.5 text-purple-300 fill-purple-300" />
                <span>BÍ QUYẾT TỪ HẢI TRIỀU AI • GIÁ CHỈ 99K</span>
              </div>

              {/* Big Headlines */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
                  TEXT OVERLAY
                </h1>
                <h2 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white drop-shadow-md">
                  TRIỆU VIEW
                </h2>
              </div>

              {/* Subtitle */}
              <p className="font-serif-luxury font-bold text-lg sm:text-2xl text-purple-300 tracking-wide uppercase border-l-3 border-purple-500 pl-3">
                CHỈ CẦN MỘT Ý TƯỞNG – CÓ NGAY KỊCH BẢN VIDEO THU HÚT!
              </p>

              {/* 3 Core Pain Points */}
              <div className="space-y-3.5 pt-2 text-zinc-200 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/25 text-purple-300 flex items-center justify-center text-xs mt-0.5 font-bold">
                    ?
                  </span>
                  <p>
                    Bạn muốn làm video <strong className="text-white">TikTok, Facebook Reels hoặc YouTube Shorts</strong> nhưng chưa biết viết kịch bản thế nào cho hấp dẫn?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/25 text-purple-300 flex items-center justify-center text-xs mt-0.5 font-bold">
                    ?
                  </span>
                  <p>
                    Bạn có nhiều ý tưởng trong đầu nhưng <strong className="text-white">loay hoay không biết bắt đầu từ đâu</strong> và tốn hàng giờ đồng hồ?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/25 text-purple-300 flex items-center justify-center text-xs mt-0.5 font-bold">
                    ?
                  </span>
                  <p>
                    Bạn muốn tạo những video có <strong className="text-purple-300 font-semibold">chữ xuất hiện trên màn hình</strong>, câu mở đầu "thôi miên" và nội dung khiến người xem phải xem đến giây cuối cùng?
                  </p>
                </div>
              </div>

              {/* Value Highlight Badge */}
              <div className="p-3.5 bg-black/40 border border-purple-900/50 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dùng ngay với ChatGPT / Gemini / Claude</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Quét VietQR SHB Nhận Skill Tức Thì</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onSelectProduct('skill-text-overlay')}
                  className="purple-gradient-btn text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>MUA SKILL NGAY - 99.000 VNĐ</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={onExploreDemo}
                  className="bg-[#1f113d]/80 hover:bg-[#2b1754] text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl border border-purple-500/30 hover:border-purple-400 cursor-pointer flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-purple-300 fill-purple-300" />
                  <span>Xem Video & Thử Mẫu</span>
                </button>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0068ff]/15 hover:bg-[#0068ff]/30 text-blue-300 border border-[#0068ff]/40 font-semibold text-sm px-5 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span>Nhóm Zalo</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Visual - Hải Triều Studio Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative glowing backdrops */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 rounded-3xl blur-lg opacity-80"></div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-400/50 bg-[#160c2e] shadow-2xl">
                  {/* Portrait photo of Hai Trieu */}
                  <img
                    src="/assets/aistudio/image_8e8d66ac.png"
                    alt="Hải Triều AI - Chuyên gia Sáng tạo Kịch bản Video"
                    className="w-full h-auto object-cover object-left-top max-h-[460px] filter brightness-[1.02] contrast-[1.05]"
                  />

                  {/* Gradient Overlay bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e0720] via-[#0e0720]/80 to-transparent p-5 pt-12">
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
                        <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-xs px-2.5 py-1 rounded-md shadow-md uppercase">
                          99.000 VNĐ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating highlight pills */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#180e36]/95 backdrop-blur-md border border-purple-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Quét VietQR SHB</div>
                    <div className="text-[10px] text-purple-200">Nhận Skill & Vào Zalo Ngay</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#180e36]/95 backdrop-blur-md border border-purple-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping" />
                  <div className="text-xs font-bold text-purple-200">
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
