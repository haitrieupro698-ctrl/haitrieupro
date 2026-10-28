import React from 'react';
import { ArrowRight, Play, MessageCircle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onExploreDemo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#0d0f12] via-[#121316] to-[#0d0f12]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Card - exact dark gold aesthetic from screenshot */}
        <div className="bg-[#121418] border border-amber-500/25 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/80 gold-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top tag badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>BÍ QUYẾT TỪ HẢI TRIỀU AI • GIÁ CHỈ 99K</span>
              </div>

              {/* Big Headlines matching Image 4 */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                  TEXT OVERLAY
                </h1>
                <h2 className="font-serif-luxury font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
                  TRIỆU VIEW
                </h2>
              </div>

              {/* Subtitle */}
              <p className="font-serif-luxury font-bold text-lg sm:text-2xl text-amber-400/95 tracking-wide uppercase border-l-2 border-amber-500 pl-3">
                CHỈ CẦN MỘT Ý TƯỞNG – CÓ NGAY KỊCH BẢN VIDEO THU HÚT!
              </p>

              {/* 3 Core Pain Points from Image 4 screenshot */}
              <div className="space-y-3.5 pt-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs mt-0.5">
                    ?
                  </span>
                  <p>
                    Bạn muốn làm video <strong className="text-white">TikTok, Facebook Reels hoặc YouTube Shorts</strong> nhưng chưa biết viết kịch bản thế nào cho hấp dẫn?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs mt-0.5">
                    ?
                  </span>
                  <p>
                    Bạn có nhiều ý tưởng trong đầu nhưng <strong className="text-white">loay hoay không biết bắt đầu từ đâu</strong> và tốn hàng giờ đồng hồ?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs mt-0.5">
                    ?
                  </span>
                  <p>
                    Bạn muốn tạo những video có <strong className="text-amber-300 font-medium">chữ xuất hiện trên màn hình</strong>, câu mở đầu "thôi miên" và nội dung khiến người xem phải xem đến giây cuối cùng?
                  </p>
                </div>
              </div>

              {/* Value Highlight Badge */}
              <div className="p-3.5 bg-black/40 border border-zinc-800 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dùng ngay với ChatGPT / Gemini / Claude</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Quét VietQR SHB Nhận Skill Tức Thì</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onSelectProduct('skill-text-overlay')}
                  className="gold-gradient-btn text-black font-extrabold text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>MUA SKILL NGAY - 99.000 VNĐ</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={onExploreDemo}
                  className="bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl border border-zinc-700 hover:border-amber-400/40 cursor-pointer flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Xem Video & Thử Mẫu</span>
                </button>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0068ff]/15 hover:bg-[#0068ff]/30 text-blue-400 border border-[#0068ff]/40 font-semibold text-sm px-5 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
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
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-700/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-zinc-900 shadow-2xl">
                  {/* Portrait photo of Hai Trieu */}
                  <img
                    src="/assets/aistudio/image_8e8d66ac.png"
                    alt="Hải Triều AI - Chuyên gia Sáng tạo Kịch bản Video"
                    className="w-full h-auto object-cover object-left-top max-h-[460px] filter brightness-[1.02] contrast-[1.05]"
                  />

                  {/* Gradient Overlay bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif-luxury font-black text-xl text-amber-400">
                          HẢI TRIỀU AI
                        </div>
                        <p className="text-xs text-zinc-300 font-medium">
                          Học Để Làm Được • Làm Để Tạo Ra Giá Trị
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-amber-500 text-black font-black text-xs px-2.5 py-1 rounded-md shadow-md uppercase">
                          99.000 VNĐ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating highlight pills */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#16181f]/95 backdrop-blur-md border border-amber-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Quét VietQR SHB</div>
                    <div className="text-[10px] text-zinc-400">Nhận Skill & Vào Zalo Ngay</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#16181f]/95 backdrop-blur-md border border-amber-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                  <div className="text-xs font-bold text-amber-300">
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
