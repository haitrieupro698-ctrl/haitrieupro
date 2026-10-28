import React from 'react';
import { MessageCircle, Phone, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { BANK_INFO, YOUTUBE_VIDEO } from '../data/skillsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] text-zinc-400 text-xs sm:text-sm border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-base shadow-md">
                HT
              </div>
              <div>
                <span className="font-serif-luxury font-black text-xl text-amber-400 block tracking-wider">
                  HẢI TRIỀU AI
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                  Skill & Kịch Bản Triệu View
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Chia sẻ những cách làm đơn giản, dễ hiểu và có thể thực hành từng bước để biến mọi ý tưởng thành video ngắn thu hút triệu lượt xem.
            </p>

            <div className="p-3 rounded-xl bg-[#101217] border border-amber-500/20">
              <p className="font-serif-luxury font-bold text-amber-400 text-xs">
                "HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!"
              </p>
            </div>
          </div>

          {/* Bank Info Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Thông Tin Tài Khoản Ngân Hàng
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <p>
                <span className="text-zinc-500">Ngân hàng:</span>{' '}
                <strong className="text-white">{BANK_INFO.bankName}</strong> ({BANK_INFO.bankFullName})
              </p>
              <p>
                <span className="text-zinc-500">Số tài khoản:</span>{' '}
                <strong className="text-amber-400 font-mono text-sm">{BANK_INFO.accountNumber}</strong>
              </p>
              <p>
                <span className="text-zinc-500">Chủ tài khoản:</span>{' '}
                <strong className="text-white uppercase">{BANK_INFO.accountOwner}</strong>
              </p>
              <p>
                <span className="text-zinc-500">Giá Skill cơ bản:</span>{' '}
                <strong className="text-emerald-400">99.000 VNĐ</strong>
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                * Hỗ trợ thanh toán quét mã VietQR tự động từ mọi ứng dụng ngân hàng 24/7.
              </p>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Hỗ Trợ & Cộng Đồng
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span>Nhóm Zalo: zalo.me/g/bd8u0pauixb47416hzxo</span>
              </a>

              <a
                href={`tel:${BANK_INFO.supportPhone}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-400"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Hotline / Zalo: {BANK_INFO.supportPhone}</span>
              </a>

              <a
                href={`mailto:${BANK_INFO.supportEmail}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-400"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email: {BANK_INFO.supportEmail}</span>
              </a>

              <a
                href={YOUTUBE_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-red-400"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} HẢI TRIỀU AI. Bản quyền thuộc về Trịnh Hải Triều.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
