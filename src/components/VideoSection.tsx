import React from 'react';
import { Play, ExternalLink, Sparkles, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { YOUTUBE_VIDEO, BANK_INFO } from '../data/skillsData';

interface VideoSectionProps {
  onBuyClick: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onBuyClick }) => {
  return (
    <section id="video" className="py-16 sm:py-24 bg-[#090514] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-3">
            <Play className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
            <span>VIDEO DEMO THỰC CHIẾN</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            XEM CÁCH TẠO <span className="purple-gradient-text">VIDEO TRIỆU VIEW</span> TRONG VÀI PHÚT
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Hải Triều chia sẻ từng bước ứng dụng công thức Text Overlay và AI để biến một ý tưởng đơn giản thành kịch bản giữ chân người xem đỉnh cao.
          </p>
        </div>

        {/* Video Player + Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Smartphone frame with embedded YouTube Shorts */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Phone Frame Mockup */}
              <div className="relative bg-[#170c32] border-4 border-purple-500/40 rounded-[38px] p-2.5 shadow-2xl shadow-black purple-border-glow">
                
                {/* Speaker notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-purple-950/80 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black/60 mr-2" />
                  <div className="w-8 h-1 bg-purple-800 rounded-full" />
                </div>

                {/* Video container (9:16 aspect ratio) */}
                <div className="relative rounded-[30px] overflow-hidden bg-black aspect-[9/16] z-10">
                  <iframe
                    src={YOUTUBE_VIDEO.embedUrl}
                    title={YOUTUBE_VIDEO.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Bottom home indicator bar */}
                <div className="w-28 h-1 bg-purple-400/50 rounded-full mx-auto mt-2" />
              </div>

              {/* YouTube external link badge */}
              <div className="mt-4 text-center">
                <a
                  href={YOUTUBE_VIDEO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-purple-300 hover:text-white transition-colors"
                >
                  <span>Mở xem trực tiếp trên ứng dụng YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Key takeaways & Value proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-[#130b29] border border-purple-500/25 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="font-serif-luxury font-black text-2xl text-white flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span>3 Bí Quyết Được Bật Mí Trong Video</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/40 border border-purple-900/40">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Công thức 3 Giây Đầu "Đóng Đinh" Ánh Nhìn
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                      Tại sao 90% người xem lướt qua video của bạn? Khám phá câu nói mở đầu đánh trúng tâm lý tò mò khiến người ta phải nán lại.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/40 border border-purple-900/40">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Text Overlay Nhịp Điệu - Đọc Là Muốn Xem Tiếp
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                      Cách hiển thị từng dòng chữ ngắn gọn, đồng bộ cùng âm nhạc và biểu cảm để tạo thói quen theo dõi cho khán giả.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-black/40 border border-purple-900/40">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      Tự Động Hóa 100% Kịch Bản Bằng Prompt AI
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                      Không cần tư duy vắt óc viết văn, chỉ cần thả chủ đề vào Skill AI, bạn nhận lại bảng kịch bản phân cảnh chuẩn xác từng giây.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-200">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Có file mẫu tải về
                </span>
                <span className="flex items-center gap-1.5 text-purple-300 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Kèm hỗ trợ Zalo trực tiếp
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onBuyClick}
                  className="purple-gradient-btn text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  <span>MUA SKILL NGAY (99.000 VNĐ)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1f113d] hover:bg-[#2e1957] text-blue-300 border border-blue-500/40 text-sm font-semibold px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span>Tham Gia Nhóm Zalo Nhận Quà</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
