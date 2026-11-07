import React, { useState } from 'react';
import { MessageCircle, Users, CheckCircle2, ArrowRight, Copy, Check, ExternalLink } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const ZaloCommunitySection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_INFO.zaloGroupUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="zalo" className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-purple-100 scroll-mt-16">
      {/* Target anchor for #lienhe */}
      <div id="lienhe" className="sr-only" />

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

              {/* Action Buttons & Visible Link Box */}
              <div className="pt-3 space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={BANK_INFO.zaloGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>BẤM VÀO NHÓM ZALO NGAY</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <span className="text-xs text-slate-500 font-semibold">
                    (Miễn phí tham gia • Hỗ trợ thực chiến)
                  </span>
                </div>

                {/* Explicitly displayed link box */}
                <div className="p-3 bg-white rounded-xl border border-blue-200 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-700">Link Nhóm Zalo chính thức:</span>
                    <a
                      href={BANK_INFO.zaloGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {BANK_INFO.zaloGroupUrl}
                    </a>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Đã chép link' : 'Sao chép link'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Direct Contact Box - NO QR CODE as user requested, direct phone & buttons */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-slate-950 p-6 rounded-3xl border-2 border-amber-400 shadow-xl text-center max-w-sm w-full text-white space-y-4">
                {/* Circular Portrait of Hai Trieu */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-amber-400 shadow-xl shadow-amber-400/25 ring-4 ring-amber-400/20">
                  <img
                    src="/assets/aistudio/image_5c7412ca.png"
                    alt="Trịnh Hải Triều"
                    className="w-full h-full object-cover object-top"
                  />
                  <span
                    className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-950 rounded-full"
                    title="Trực tiếp hỗ trợ 24/7"
                  />
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
                <div className="space-y-2.5 pt-1">
                  <a
                    href={BANK_INFO.zaloGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-blue-400/30"
                  >
                    <Users className="w-4 h-4" />
                    <span>VÀO NHÓM ZALO: 4 SKILL 0Đ</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://zalo.me/${BANK_INFO.supportPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Nhắn Zalo Riêng: {BANK_INFO.supportPhone}</span>
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
