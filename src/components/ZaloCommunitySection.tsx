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
                Đừng lo nếu bạn chưa từng viết kịch bản hay dùng công cụ AI! Khi tham gia nhóm Zalo, bạn sẽ được <strong className="text-rose-600 font-bold">nhận miễn phí 100% trọn bộ 4 Skill đầu tiên</strong> (đang được ghim ở đầu nhóm), đồng thời được Hải Triều và đội ngũ trực tiếp sửa bài, góp ý video và cập nhật prompt mới hàng tuần.
              </p>

              {/* Gift Highlight Strip */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 flex items-center gap-3 text-amber-900 text-xs sm:text-sm font-bold shadow-2xs">
                <span className="text-lg">🎁</span>
                <span>Tài nguyên ghim sẵn trong nhóm: Trọn bộ 4 Skill (Avatar chuyên gia, Poster sản phẩm, Tách nền & Xoá vật thể) — Tải về dùng ngay trọn đời!</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-medium pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nhận trọn bộ 4 Skill quà tặng 0đ ghim đầu nhóm</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sửa kịch bản và góp ý video thực tế từ Hải Triều</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chia sẻ prompt AI kịch bản cập nhật hàng tuần</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Giao lưu cùng hơn 2.680+ nhà sáng tạo nội dung</span>
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

            {/* Right Direct Contact Box - NO QR CODE as user requested, direct phone & buttons */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-slate-950 p-6 rounded-3xl border-2 border-amber-400 shadow-xl text-center max-w-sm w-full text-white space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-md font-bold">
                  <MessageCircle className="w-8 h-8 fill-slate-950 text-slate-950" />
                </div>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Liên Hệ Trực Tiếp Không Cần Quét Mã
                  </div>
                  <h4 className="font-serif-luxury font-black text-xl text-white mt-1">
                    Hải Triều AI
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Bấm là mở ứng dụng Zalo ngay trên máy của bạn
                  </p>
                </div>

                {/* Big Direct Phone Number Display */}
                <div className="p-3.5 bg-slate-900 rounded-2xl border border-amber-400/40">
                  <div className="text-[11px] text-slate-400 font-semibold mb-0.5">
                    Số Zalo / Hotline hỗ trợ 24/7:
                  </div>
                  <div className="font-mono font-black text-2xl text-amber-400 tracking-wider">
                    {BANK_INFO.supportPhone}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-1">
                  <a
                    href={`https://zalo.me/${BANK_INFO.supportPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Nhắn Zalo Riêng: {BANK_INFO.supportPhone}</span>
                  </a>

                  <a
                    href={BANK_INFO.zaloGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Users className="w-4 h-4" />
                    <span>Mở Nhóm Zalo Nhận 4 Quà 0đ</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
