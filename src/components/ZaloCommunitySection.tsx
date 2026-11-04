import React from 'react';
import { MessageCircle, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const ZaloCommunitySection: React.FC = () => {
  return (
    <section id="zalo" className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-purple-100">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/50 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#f8f9fe] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden border border-purple-200/90">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold tracking-wider uppercase shadow-2xs">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>CỘNG ĐỒNG NHÀ SÁNG TẠO HẢI TRIỀU AI</span>
              </div>

              {/* Heading with 100% native Vietnamese font - fixes broken Đ in ĐỒNG HÀNH */}
              <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
                THAM GIA NHÓM ZALO <span className="text-blue-600">ĐỒNG HÀNH 1-1</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Đừng lo nếu bạn chưa từng viết kịch bản hay dùng công cụ AI! Khi tham gia nhóm Zalo, Hải Triều và đội ngũ sẽ trực tiếp sửa kịch bản, gợi ý chủ đề hot và cập nhật toàn bộ prompt mới hoàn toàn miễn phí.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-medium pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sửa kịch bản và góp ý video thực tế</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chia sẻ prompt AI kịch bản cập nhật hàng tuần</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Giao lưu cùng hơn 2.500+ nhà sáng tạo nội dung</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nhận giải đáp thắc mắc 24/7 trực tiếp từ Hải Triều</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>BẤM VÀO NHÓM ZALO NGAY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-500 font-semibold">
                  (Miễn phí tham gia • Hỗ trợ thực chiến)
                </span>
              </div>
            </div>

            {/* Right QR Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white p-5 rounded-2xl border border-purple-200 shadow-md text-center max-w-xs w-full">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 font-bold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Nhóm Zalo Hải Triều AI
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Quét mã hoặc bấm link để tham gia cùng 2.500+ anh chị em!
                </p>
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                  <img
                    src={BANK_INFO.qrStaticUrl}
                    alt="Mã QR Zalo Hải Triều AI"
                    className="w-full h-auto object-contain rounded-lg"
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
