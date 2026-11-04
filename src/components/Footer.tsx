import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';
import { BANK_INFO, YOUTUBE_VIDEO } from '../data/skillsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070210] text-slate-400 text-xs sm:text-sm border-t border-purple-900/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-md border border-purple-400/30">
                HT
              </div>
              <div>
                <span className="font-serif-luxury font-black text-xl text-white block tracking-wider">
                  HẢI TRIỀU AI
                </span>
                <span className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">
                  Skill & Kịch Bản Triệu View
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Chia sẻ những cách làm đơn giản, dễ hiểu và có thể thực hành từng bước để biến mọi ý tưởng thành video ngắn thu hút triệu lượt xem.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-serif-luxury font-bold text-orange-400 text-xs">
                "HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!"
              </p>
            </div>
          </div>

          {/* Bank Info Summary - Exactly matching User Request */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-orange-400">
              THÔNG TIN TÀI KHOẢN NGÂN HÀNG
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <span className="text-slate-400">Ngân hàng:</span>{' '}
                <strong className="text-white">{BANK_INFO.bankName}</strong> ({BANK_INFO.bankFullName})
              </p>
              <p>
                <span className="text-slate-400">Số tài khoản:</span>{' '}
                <strong className="text-amber-400 font-mono text-sm bg-slate-800 px-2 py-0.5 rounded border border-slate-700 font-black">
                  {BANK_INFO.accountNumber}
                </strong>
              </p>
              <p>
                <span className="text-slate-400">Chủ tài khoản:</span>{' '}
                <strong className="text-white font-bold">{BANK_INFO.accountOwner}</strong>
              </p>
              <p>
                <span className="text-slate-400">Giá Skill cơ bản:</span>{' '}
                <strong className="text-emerald-400 font-bold">99.000 VNĐ</strong> (Quà tặng tri ân: 0đ)
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                * Hỗ trợ thanh toán quét mã VietQR tự động từ mọi ứng dụng ngân hàng 24/7.
              </p>
            </div>
          </div>

          {/* Support & Community */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-orange-400">
              HỖ TRỢ & CỘNG ĐỒNG
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="underline truncate">Nhóm Zalo: {BANK_INFO.zaloGroupUrl}</span>
              </a>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hotline / Zalo: <strong className="text-white font-mono">{BANK_INFO.supportPhone}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Email: <strong className="text-white">{BANK_INFO.supportEmail}</strong></span>
              </div>

              <a
                href={YOUTUBE_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors pt-1"
              >
                <span>Kênh YouTube Shorts Hải Triều AI</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Trịnh Hải Triều AI. Bản quyền nội dung & kỹ năng thực chiến được bảo lưu.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
