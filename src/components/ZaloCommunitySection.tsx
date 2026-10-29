import React from 'react';
import { MessageCircle, Users, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const ZaloCommunitySection: React.FC = () => {
  return (
    <section id="zalo" className="py-16 sm:py-20 bg-gradient-to-b from-[#0a0c0f] via-[#10131a] to-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-blue-950/40 via-[#151924] to-blue-950/40 border-2 border-blue-500/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>CỘNG ĐỒNG NHÀ SÁNG TẠO HẢI TRIỀU AI</span>
              </div>

              <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-white">
                THAM GIA NHÓM ZALO <span className="text-blue-400">ĐỒNG HÀNH 1-1</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Đừng lo nếu bạn chưa từng viết kịch bản hay dùng công cụ AI! Khi tham gia nhóm Zalo, Hải Triều và đội ngũ sẽ trực tiếp sửa kịch bản, gợi ý chủ đề hot và cập nhật toàn bộ prompt mới hoàn toàn miễn phí.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sửa kịch bản và góp ý video thực tế</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Chia sẻ prompt AI kịch bản cập nhật hàng tuần</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Giao lưu cùng hơn 2.500+ nhà sáng tạo nội dung</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Nhận giải đáp thắc mắc 24/7 trực tiếp từ Hải Triều</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>THAM GIA NHÓM ZALO MIỄN PHÍ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-xs text-zinc-400 font-mono">
                  Link: <span className="text-blue-300">zalo.me/g/bd8u0pauixb47416hzxo</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-black/60 border border-blue-500/30 rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    Hỗ Trợ Nhanh Qua Zalo
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Hotline / Zalo Hải Triều AI:
                  </p>
                  <p className="text-lg font-mono font-bold text-amber-400 mt-0.5">
                    {BANK_INFO.supportPhone}
                  </p>
                </div>
                <div className="text-[11px] text-zinc-500 border-t border-zinc-800 pt-3">
                  Hoạt động từ 8:00 - 23:00 hàng ngày (Cả thứ 7 & Chủ Nhật)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
