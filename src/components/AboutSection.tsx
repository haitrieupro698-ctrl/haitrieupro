import React from 'react';
import { Sparkles, Users, Video } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="gioithieu" className="py-16 sm:py-24 bg-[#0b0618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Box - Purple & White Luxury Style */}
        <div className="bg-[#130b29] border border-purple-500/25 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden purple-border-glow">
          {/* Subtle purple decorative gradient in top right */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Photo of Hai Trieu */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-35 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-400/40 bg-[#160c2e] shadow-xl">
                  <img
                    src="/assets/aistudio/image_70c6648a.png"
                    alt="Trịnh Hải Triều - Sáng tạo nội dung & AI"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e0720] via-[#0e0720]/80 to-transparent p-4 text-center">
                    <p className="font-serif-luxury font-bold text-white text-lg drop-shadow">
                      TRỊNH HẢI TRIỀU
                    </p>
                    <p className="text-xs text-purple-200">
                      Nhà Sáng Tạo Nội Dung • Chia Sẻ Kỹ Năng AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick stats under photo */}
              <div className="mt-5 grid grid-cols-3 gap-2 w-full max-w-sm">
                <div className="bg-black/50 border border-purple-900/40 rounded-xl p-2.5 text-center">
                  <div className="text-purple-300 font-extrabold text-base sm:text-lg">100K+</div>
                  <div className="text-[10px] text-zinc-300 uppercase">Lượt xem video</div>
                </div>
                <div className="bg-black/50 border border-purple-900/40 rounded-xl p-2.5 text-center">
                  <div className="text-purple-300 font-extrabold text-base sm:text-lg">2.500+</div>
                  <div className="text-[10px] text-zinc-300 uppercase">Thành viên Zalo</div>
                </div>
                <div className="bg-black/50 border border-purple-900/40 rounded-xl p-2.5 text-center">
                  <div className="text-purple-300 font-extrabold text-base sm:text-lg">100%</div>
                  <div className="text-[10px] text-zinc-300 uppercase">Hỗ trợ thực chiến</div>
                </div>
              </div>
            </div>

            {/* Right side: Recreating Image 3 message */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Câu Chuyện Của Tôi</span>
              </div>

              {/* Heading */}
              <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                XIN CHÀO, TÔI LÀ <span className="purple-gradient-text">HẢI TRIỀU!</span>
              </h2>

              {/* Exact paragraphs */}
              <div className="space-y-4 text-zinc-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Tôi yêu thích sáng tạo hình ảnh, video và khám phá cách ứng dụng AI để biến những ý tưởng thành nội dung gần gũi và ấn tượng.
                </p>

                <p>
                  Tôi tin rằng mỗi người đều có thể bắt đầu học và sử dụng những công cụ mới nếu có hướng dẫn phù hợp.
                </p>

                <p>
                  Vì vậy, tôi luôn mong muốn chia sẻ những cách làm đơn giản, dễ hiểu và có thể thực hành từng bước.
                </p>

                <p>
                  Tôi hy vọng những Skill này sẽ giúp các bạn tiết kiệm thời gian, có thêm ý tưởng và tự tin tạo ra những sản phẩm của riêng mình.
                </p>
              </div>

              {/* Brand Mantra Highlight */}
              <div className="pt-2">
                <div className="bg-gradient-to-r from-purple-600/20 via-purple-600/5 to-transparent border-l-4 border-purple-500 p-4 rounded-r-xl">
                  <p className="font-serif-luxury font-black text-white text-base sm:text-lg tracking-wide uppercase">
                    HẢI TRIỀU – HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!
                  </p>
                </div>
              </div>

              {/* Action buttons inside About */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Xem Danh Sách Skill</span>
                </a>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Tham Gia Nhóm Zalo Với Hải Triều</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
