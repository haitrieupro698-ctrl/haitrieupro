import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';
import { BANK_INFO, YOUTUBE_VIDEO } from '../data/skillsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070311] text-zinc-300 text-xs sm:text-sm border-t border-purple-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-purple-900/40">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-md shadow-purple-600/30">
                HT
              </div>
              <div>
                <span className="font-serif-luxury font-black text-xl text-white block tracking-wider">
                  HẢI TRIỀU AI
                </span>
                <span className="text-[10px] text-purple-300 uppercase tracking-widest font-medium">
                  Skill & Kịch Bản Triệu View
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed max-w-sm">
              Chia sẻ những cách làm đơn giản, dễ hiểu và có thể thực hành từng bước để biến mọi ý tưởng thành video ngắn thu hút triệu lượt xem.
            </p>

            <div className="p-3 rounded-xl bg-[#120826] border border-purple-500/30">
              <p className="font-serif-luxury font-bold text-white text-xs">
                "HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!"
              </p>
            </div>
          </div>

          {/* Bank Info Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-purple-300">
              Thông Tin Tài Khoản Ngân Hàng
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-200">
              <p>
                <span className="text-zinc-400">Ngân hàng:</span>{' '}
                <strong className="text-white">{BANK_INFO.bankName}</strong> ({BANK_INFO.bankFullName})
              </p>
              <p>
                <span className="text-zinc-400">Số tài khoản:</span>{' '}
                <strong className="text-white font-mono text-sm bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">{BANK_INFO.accountNumber}</strong>
              </p>
              <p>
                <span className="text-zinc-400">Chủ tài khoản:</span>{' '}
                <strong className="text-white uppercase">{BANK_INFO.accountOwner}</strong>
              </p>
              <p>
                <span className="text-zinc-400">Giá Skill cơ bản:</span>{' '}
                <strong className="text-emerald-400">99.000 VNĐ</strong>
              </p>
              <p className="text-[11px] text-purple-300/80 pt-1">
                * Hỗ trợ thanh toán quét mã VietQR tự động từ mọi ứng dụng ngân hàng 24/7.
              </p>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-purple-300">
              Hỗ Trợ & Cộng Đồng
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-300 hover:text-white hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span>Nhóm Zalo: zalo.me/g/bd8u0pauixb47416hzxo</span>
              </a>

              <a
                href={`tel:${BANK_INFO.supportPhone}`}
                className="flex items-center gap-2 text-zinc-200 hover:text-purple-300"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Hotline / Zalo: {BANK_INFO.supportPhone}</span>
              </a>

              <a
                href={`mailto:${BANK_INFO.supportEmail}`}
                className="flex items-center gap-2 text-zinc-200 hover:text-purple-300"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Email: {BANK_INFO.supportEmail}</span>
              </a>

              <a
                href={YOUTUBE_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-200 hover:text-red-400"
              >
                <span className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[9px] text-white font-bold">
                  ▶
                </span>
                <span>Kênh YouTube Shorts Hải Triều AI</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} HẢI TRIỀU AI. Bản quyền thuộc về Trịnh Hải Triều.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
