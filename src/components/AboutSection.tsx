import React from 'react';
import { Sparkles, Users, Video } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="gioithieu" className="py-16 sm:py-24 bg-white text-slate-900 relative border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Box - Luminous Frosted Translucent Aesthetic */}
        <div className="bg-[#f8f9fe] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden border border-purple-200/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Photo of Hai Trieu */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-300 bg-white shadow-xl">
                  <img
                    src="/assets/aistudio/image_5c7412ca.png"
                    alt="Trịnh Hải Triều - Sáng tạo nội dung & AI"
                    className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-center">
                    <p className="font-serif-luxury font-bold text-white text-lg drop-shadow">
                      TRỊNH HẢI TRIỀU
                    </p>
                    <p className="text-xs text-purple-200 font-medium">
                      Nhà Sáng Tạo Nội Dung • Chia Sẻ Kỹ Năng AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick stats under photo - High contrast white cards */}
              <div className="mt-5 grid grid-cols-3 gap-2 w-full max-w-sm">
                <div className="bg-white border border-purple-200 rounded-xl p-2.5 text-center shadow-xs">
                  <div className="text-purple-900 font-extrabold text-base sm:text-lg">100K+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Lượt xem video</div>
                </div>
                <div className="bg-white border border-purple-200 rounded-xl p-2.5 text-center shadow-xs">
                  <div className="text-purple-900 font-extrabold text-base sm:text-lg">2.500+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Thành viên Zalo</div>
                </div>
                <div className="bg-white border border-purple-200 rounded-xl p-2.5 text-center shadow-xs">
                  <div className="text-purple-900 font-extrabold text-base sm:text-lg">100%</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Hỗ trợ thực chiến</div>
                </div>
              </div>
            </div>

            {/* Right side: Recreating Image 3 message */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Câu Chuyện Của Tôi</span>
              </div>

              {/* Heading */}
              <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                XIN CHÀO, TÔI LÀ <span className="purple-gradient-text">HẢI TRIỀU!</span>
              </h2>

              {/* Exact paragraphs with high contrast black/slate typography */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Tôi yêu thích sáng tạo hình ảnh, video và khám phá cách ứng dụng AI để biến những ý tưởng thành nội dung gần gũi và ấn tượng.
                </p>

                <p>
                  Tôi tin rằng mỗi người đều có thể bắt đầu học và sử dụng công cụ mới nếu có hướng dẫn phù hợp. Vì vậy tôi luôn chia sẻ cách làm đơn giản, dễ hiểu, thực hành được từng bước.
                </p>

                <p>
                  Tôi hy vọng những Skill này sẽ giúp bạn tiết kiệm thời gian, có thêm ý tưởng và tự tin tạo ra sản phẩm của riêng mình.
                </p>
              </div>

              {/* Brand Mantra Highlight */}
              <div className="pt-2">
                <div className="bg-gradient-to-r from-purple-100 via-indigo-50 to-transparent border-l-4 border-purple-600 p-4 rounded-r-xl">
                  <p className="font-serif-luxury font-black text-purple-950 text-base sm:text-lg tracking-wide uppercase">
                    HẢI TRIỀU – HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!
                  </p>
                </div>
              </div>

              {/* Action buttons inside About */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Xem Kho 41 Skill</span>
                </a>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <Users className="w-4 h-4 text-blue-600" />
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
