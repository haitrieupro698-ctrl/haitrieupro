import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';
import { BANK_INFO, YOUTUBE_VIDEO } from '../data/skillsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-700 text-xs sm:text-sm border-t-2 border-purple-200 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-purple-100">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center font-bold text-white text-base shadow-md shadow-purple-600/30">
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

            <div className="p-3.5 rounded-xl bg-purple-50 border-2 border-purple-200">
              <p className="font-serif-luxury font-bold text-purple-900 text-xs">
                "HỌC ĐỂ LÀM ĐƯỢC, LÀM ĐỂ TẠO RA GIÁ TRỊ!"
              </p>
            </div>
          </div>

          {/* Bank Info Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-purple-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Thông Tin Tài Khoản Ngân Hàng
            </h4>
            <div className="space-y-2 text-xs text-slate-700 bg-purple-50/60 p-4 rounded-2xl border border-purple-200">
              <p>
                <span className="text-slate-500">Ngân hàng:</span>{' '}
                <strong className="text-purple-950 font-bold">{BANK_INFO.bankName}</strong> ({BANK_INFO.bankFullName})
              </p>
              <p>
                <span className="text-slate-500">Số tài khoản:</span>{' '}
                <strong className="text-purple-900 font-mono text-sm bg-white px-2.5 py-1 rounded-md border border-purple-300 font-black shadow-xs">{BANK_INFO.accountNumber}</strong>
              </p>
              <p>
                <span className="text-slate-500">Chủ tài khoản:</span>{' '}
                <strong className="text-purple-950 uppercase font-black">{BANK_INFO.accountOwner}</strong>
              </p>
              <p>
                <span className="text-slate-500">Giá Skill cơ bản:</span>{' '}
                <strong className="text-emerald-700 font-black text-sm">99.000 VNĐ</strong>
              </p>
              <p className="text-[11px] text-purple-700 pt-1 font-medium">
                * Hỗ trợ thanh toán quét mã VietQR tự động từ mọi ứng dụng ngân hàng 24/7.
              </p>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-purple-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              Hỗ Trợ & Cộng Đồng
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-800 border border-blue-200 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="truncate">Nhóm Zalo: zalo.me/g/bd8u0pauixb47416hzxo</span>
              </a>

              <a
                href={`tel:${BANK_INFO.supportPhone}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-50/60 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Hotline / Zalo: {BANK_INFO.supportPhone}</span>
              </a>

              <a
                href={`mailto:${BANK_INFO.supportEmail}`}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-purple-50/60 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Email: {BANK_INFO.supportEmail}</span>
              </a>

              <a
                href={YOUTUBE_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-900 border border-red-200 transition-colors font-medium"
              >
                <span className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                  ▶
                </span>
                <span>Kênh YouTube Shorts Hải Triều AI</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HẢI TRIỀU AI. Bản quyền thuộc về Trịnh Hải Triều.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-purple-700 hover:text-purple-900 font-bold transition-colors cursor-pointer bg-purple-50 hover:bg-purple-100 px-3.5 py-1.5 rounded-full border border-purple-200"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
