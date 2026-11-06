import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowUp, Users, ExternalLink, Check, Copy } from 'lucide-react';
import { BANK_INFO, YOUTUBE_VIDEO } from '../data/skillsData';

export const Footer: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(BANK_INFO.zaloGroupUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <footer id="footer" className="bg-[#f3efff] text-slate-700 text-xs sm:text-sm border-t border-purple-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Zalo Group Call-to-Action Banner in Footer */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-purple-950 border-2 border-purple-400/50 shadow-2xl shadow-purple-950/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#0068ff] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/40">
              <MessageCircle className="w-8 h-8 fill-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1 border border-blue-400/30">
                <Users className="w-3.5 h-3.5" />
                <span>Nhóm Zalo Chính Thức — Hải Triều AI</span>
              </div>
              <h3 className="font-serif-luxury font-black text-xl sm:text-2xl text-white tracking-wide">
                Tham Gia Nhóm Zalo Nhận 4 Skill 0đ & Hỗ Trợ 1-1
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <span className="text-purple-200 text-xs">Liên kết tham gia:</span>
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-amber-300 hover:text-amber-200 font-black text-xs sm:text-sm hover:underline"
                >
                  {BANK_INFO.zaloGroupUrl}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={handleCopyLink}
              className="px-4 py-3.5 rounded-xl bg-purple-950 hover:bg-purple-900 text-purple-200 hover:text-white text-xs font-bold transition-all border border-purple-700/60 flex items-center gap-1.5 cursor-pointer shrink-0"
              title="Sao chép link Zalo"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Đã sao chép' : 'Copy link'}</span>
            </button>

            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all border border-blue-400/40 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>BẤM VÀO NHÓM ZALO NGAY</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-purple-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 flex items-center justify-center font-bold text-white text-base shadow-md border-2 border-white ring-2 ring-purple-200">
                HT
              </div>
              <div>
                <span className="font-serif-luxury font-black text-xl text-purple-950 block tracking-wider">
                  HẢI TRIỀU AI
                </span>
                <span className="text-[10px] text-purple-700 uppercase tracking-widest font-bold">
                  Skill & Kịch Bản Triệu View
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Chia sẻ những cách làm đơn giản, dễ hiểu và có thể thực hành từng bước để biến mọi ý tưởng thành video ngắn thu hút triệu lượt xem.
            </p>

            <div className="p-3.5 rounded-xl bg-white/80 border border-purple-200/80 shadow-2xs">
              <p className="font-serif-luxury font-bold text-purple-900 text-xs">
                "HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!"
              </p>
            </div>
          </div>

          {/* Bank Info Summary - Exactly matching User Request */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-purple-950 text-sm uppercase tracking-wider">
              THÔNG TIN TÀI KHOẢN NGÂN HÀNG
            </h4>
            <div className="p-4 rounded-2xl bg-white/90 border border-purple-200/80 shadow-2xs space-y-2 text-xs text-slate-700">
              <p>
                <span className="text-slate-500">Ngân hàng:</span>{' '}
                <strong className="text-purple-950">{BANK_INFO.bankName}</strong> ({BANK_INFO.bankFullName})
              </p>
              <p className="flex items-center gap-1.5 flex-wrap">
                <span className="text-slate-500">Số tài khoản:</span>{' '}
                <strong className="text-amber-400 font-mono text-sm bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-700 font-black shadow-2xs">
                  {BANK_INFO.accountNumber}
                </strong>
              </p>
              <p>
                <span className="text-slate-500">Chủ tài khoản:</span>{' '}
                <strong className="text-purple-950 font-bold">{BANK_INFO.accountOwner}</strong>
              </p>
              <p>
                <span className="text-slate-500">Giá Skill cơ bản:</span>{' '}
                <strong className="text-emerald-700 font-black">99.000 VNĐ</strong>{' '}
                <span className="text-slate-500">(Quà tặng tri ân: 0đ)</span>
              </p>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-purple-100">
                * Hỗ trợ thanh toán quét mã VietQR tự động từ mọi ứng dụng ngân hàng 24/7.
              </p>
            </div>
          </div>

          {/* Support & Community */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-purple-950 text-sm uppercase tracking-wider">
              HỖ TRỢ & CỘNG ĐỒNG
            </h4>
            <div className="space-y-3 text-xs text-slate-700">
              {/* Highlighted Zalo Group Link Card */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    Nhóm Zalo Hải Triều
                  </span>
                  <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded">
                    4 Skill 0đ
                  </span>
                </div>
                
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Vào Nhóm Zalo Ngay</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="text-[11px] text-slate-500 pt-0.5">
                  Link: <a href={BANK_INFO.zaloGroupUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-purple-700 font-bold hover:underline break-all">{BANK_INFO.zaloGroupUrl}</a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Hotline / Zalo: <a href={`https://zalo.me/${BANK_INFO.supportPhone}`} target="_blank" rel="noopener noreferrer" className="text-purple-950 font-mono font-bold hover:text-purple-700 hover:underline">{BANK_INFO.supportPhone}</a></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Email: <strong className="text-purple-950">{BANK_INFO.supportEmail}</strong></span>
              </div>

              <a
                href={YOUTUBE_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-semibold transition-colors pt-1"
              >
                <span>Kênh YouTube Shorts Hải Triều AI</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Trịnh Hải Triều AI. Bản quyền nội dung & kỹ năng thực chiến được bảo lưu.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-purple-700 hover:text-purple-950 font-bold transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
