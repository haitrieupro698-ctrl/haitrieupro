import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Mail, ShoppingBag } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface NavbarProps {
  onOpenCheckout?: (productId?: string) => void;
  currentUser?: any;
  onOpenOrders?: () => void;
  onOpenGmail?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCheckout,
  currentUser,
  onOpenOrders,
  onOpenGmail,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c071a]/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Purple & White Luxury Style */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-200">
              HT
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-black text-xl sm:text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300 group-hover:text-white transition-colors">
                HẢI TRIỀU AI
              </span>
              <span className="text-[10px] tracking-widest text-purple-300/80 uppercase -mt-1 font-medium">
                Skill & Kịch Bản Triệu View
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-200">
            <button
              onClick={() => handleNavClick('#gioithieu')}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              Giới Thiệu
            </button>
            <button
              onClick={() => handleNavClick('#video')}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              Video Hướng Dẫn
            </button>
            <button
              onClick={() => handleNavClick('#shop')}
              className="hover:text-white transition-colors cursor-pointer text-purple-300 font-semibold flex items-center gap-1"
            >
              Kho Skill <span className="text-[10px] bg-purple-500/25 text-purple-200 px-1.5 py-0.5 rounded border border-purple-500/40">HOT</span>
            </button>
            <button
              onClick={() => handleNavClick('#thanhtoan')}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              Thanh Toán VietQR
            </button>
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-blue-400" />
              Nhóm Zalo
            </a>

            {/* Orders Firebase Link */}
            {onOpenOrders && (
              <button
                onClick={onOpenOrders}
                className="hover:text-purple-300 text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Xem danh sách đơn hàng đã lưu trong Firebase"
              >
                <ShoppingBag className="w-4 h-4 text-purple-400" />
                <span>Đơn Hàng</span>
              </button>
            )}

            {/* Gmail Connection Link */}
            {onOpenGmail && (
              <button
                onClick={onOpenGmail}
                className="hover:text-purple-300 text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Quản lý kết nối Gmail gửi tài liệu"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>Gmail</span>
                {currentUser ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-sm shadow-emerald-400" />
                ) : null}
              </button>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenCheckout) {
                  onOpenCheckout('skill-text-overlay');
                } else {
                  handleNavClick('#shop');
                }
              }}
              className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-purple-500/40 transition-all active:scale-95"
            >
              <span>MUA SKILL NGAY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                if (onOpenCheckout) {
                  onOpenCheckout('skill-text-overlay');
                } else {
                  handleNavClick('#shop');
                }
              }}
              className="purple-gradient-btn text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full cursor-pointer"
            >
              MUA SKILL
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-950/60 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#130b29] border-b border-purple-500/25 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('#gioithieu')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-zinc-100 hover:bg-purple-900/40 rounded-lg hover:text-purple-300 cursor-pointer"
          >
            Giới Thiệu
          </button>
          <button
            onClick={() => handleNavClick('#video')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-zinc-100 hover:bg-purple-900/40 rounded-lg hover:text-purple-300 cursor-pointer"
          >
            Video Hướng Dẫn
          </button>
          <button
            onClick={() => handleNavClick('#shop')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-purple-200 hover:bg-purple-900/40 rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>Kho Skill Kịch Bản AI</span>
            <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded border border-purple-500/40">99K</span>
          </button>
          <button
            onClick={() => handleNavClick('#thanhtoan')}
            className="block w-full text-left py-2 px-3 text-base font-medium text-zinc-100 hover:bg-purple-900/40 rounded-lg hover:text-purple-300 cursor-pointer"
          >
            Thanh Toán Chuyển Khoản SHB
          </button>

          {/* Mobile Orders & Gmail buttons */}
          {onOpenOrders && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrders();
              }}
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-base font-medium text-purple-300 hover:bg-purple-900/40 rounded-lg cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-purple-400" />
              <span>Quản Lý Đơn Hàng (Firestore)</span>
            </button>
          )}

          {onOpenGmail && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGmail();
              }}
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-base font-medium text-red-300 hover:bg-purple-900/40 rounded-lg cursor-pointer"
            >
              <Mail className="w-5 h-5 text-red-400" />
              <span>Quản Lý Gmail {currentUser ? `(${currentUser.email})` : ''}</span>
            </button>
          )}

          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full text-left py-2.5 px-3 text-base font-medium text-blue-300 bg-blue-950/40 border border-blue-500/40 rounded-lg"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span>Tham Gia Nhóm Zalo Hỗ Trợ</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenCheckout) {
                onOpenCheckout('skill-text-overlay');
              } else {
                handleNavClick('#shop');
              }
            }}
            className="w-full mt-2 purple-gradient-btn text-white font-extrabold text-center py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
          >
            <span>MUA SKILL NGAY - 99.000 VNĐ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
