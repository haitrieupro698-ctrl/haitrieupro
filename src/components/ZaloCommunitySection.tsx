import React from 'react';
import { MessageCircle, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const ZaloCommunitySection: React.FC = () => {
  return (
    <section id="zalo" className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-blue-50/80 via-purple-50/50 to-blue-50/80 border-2 border-blue-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold tracking-wider uppercase">
                <Users className="w-3.5 h-3.5 text-blue-700" />
                <span>CỘNG ĐỒNG NHÀ SÁNG TẠO HẢI TRIỀU AI</span>
              </div>

              <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900">
                THAM GIA NHÓM ZALO <span className="text-blue-700">ĐỒNG HÀNH 1-1</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Đừng lo nếu bạn chưa từng viết kịch bản hay dùng công cụ AI! Khi tham gia nhóm Zalo, Hải Triều và đội ngũ sẽ trực tiếp sửa kịch bản, gợi ý chủ đề hot và cập nhật toàn bộ prompt mới hoàn toàn miễn phí.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sửa kịch bản và góp ý video thực tế</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Chia sẻ prompt AI kịch bản cập nhật hàng tuần</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Giao lưu cùng hơn 2.500+ nhà sáng tạo nội dung</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Nhận giải đáp thắc mắc 24/7 trực tiếp từ Hải Triều</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-md shadow-blue-600/25 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>THAM GIA NHÓM ZALO MIỄN PHÍ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-xs text-blue-900 font-mono font-medium">
                  Link: <span className="font-bold">zalo.me/g/bd8u0pauixb47416hzxo</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-white border-2 border-blue-200 rounded-2xl p-6 text-center space-y-4 shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Hỗ Trợ Nhanh Qua Zalo
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Hotline / Zalo Hải Triều AI:
                  </p>
                  <p className="text-lg font-mono font-black text-purple-700 mt-0.5">
                    {BANK_INFO.supportPhone}
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-3">
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
