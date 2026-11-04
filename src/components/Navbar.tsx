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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200/80 shadow-xs text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Luxury Purple Accent with crisp dark text */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-purple-600/30 border border-purple-300 group-hover:scale-105 transition-transform duration-200">
              HT
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-black text-xl sm:text-2xl tracking-wider text-slate-900 group-hover:text-purple-700 transition-colors">
                HẢI TRIỀU AI
              </span>
              <span className="text-[10px] tracking-widest text-purple-700 uppercase -mt-1 font-bold">
                Skill & Kịch Bản Triệu View
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - High Contrast Slate / Dark */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('#gioithieu')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Giới Thiệu
            </button>
            <button
              onClick={() => handleNavClick('#video')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Video Hướng Dẫn
            </button>
            <button
              onClick={() => handleNavClick('#shop')}
              className="text-purple-900 hover:text-orange-600 transition-colors cursor-pointer font-bold flex items-center gap-1.5"
            >
              <span>Kho 40 Skill</span>
              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded border border-orange-300 font-black">
                HOT
              </span>
            </button>
            <button
              onClick={() => handleNavClick('#thanhtoan')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Thanh Toán VietQR
            </button>
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 text-slate-700 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span>Nhóm Zalo</span>
            </a>

            {/* Orders Firebase Link */}
            {onOpenOrders && (
              <button
                onClick={onOpenOrders}
                className="hover:text-purple-700 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Xem danh sách đơn hàng đã lưu trong Firebase"
              >
                <ShoppingBag className="w-4 h-4 text-purple-600" />
                <span>Đơn Hàng</span>
              </button>
            )}

            {/* Gmail Connection Link */}
            {onOpenGmail && (
              <button
                onClick={onOpenGmail}
                className="hover:text-rose-700 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Quản lý kết nối Gmail gửi tài liệu"
              >
                <Mail className="w-4 h-4 text-rose-600" />
                <span>Gmail</span>
                {currentUser ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shadow-xs" />
                ) : null}
              </button>
            )}
          </nav>

          {/* CTA Buttons - High Contrast Purple Button matching image_039fb139.png */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenCheckout) {
                  onOpenCheckout('skill-text-overlay');
                } else {
                  handleNavClick('#shop');
                }
              }}
              className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-2.5 rounded-full cursor-pointer flex items-center gap-2 shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all border border-purple-400/40"
            >
              <span>MUA SKILL NGAY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-purple-900 hover:bg-purple-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-purple-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <button
            onClick={() => handleNavClick('#gioithieu')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-slate-700 hover:bg-purple-50 rounded-lg hover:text-purple-900 cursor-pointer"
          >
            Giới Thiệu
          </button>
          <button
            onClick={() => handleNavClick('#video')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-slate-700 hover:bg-purple-50 rounded-lg hover:text-purple-900 cursor-pointer"
          >
            Video Hướng Dẫn
          </button>
          <button
            onClick={() => handleNavClick('#shop')}
            className="block w-full text-left py-2 px-3 text-base font-bold text-purple-900 hover:bg-purple-50 rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>Kho 40 Skill & Quà Tặng AI</span>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded border border-orange-300 font-black">HOT</span>
          </button>
          <button
            onClick={() => handleNavClick('#thanhtoan')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-slate-700 hover:bg-purple-50 rounded-lg hover:text-purple-900 cursor-pointer"
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
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-base font-semibold text-purple-700 hover:bg-purple-50 rounded-lg cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-purple-600" />
              <span>Quản Lý Đơn Hàng (Firestore)</span>
            </button>
          )}

          {onOpenGmail && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGmail();
              }}
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-base font-semibold text-rose-700 hover:bg-purple-50 rounded-lg cursor-pointer"
            >
              <Mail className="w-5 h-5 text-rose-600" />
              <span>Quản Lý Gmail {currentUser ? `(${currentUser.email})` : ''}</span>
            </button>
          )}

          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full text-left py-2.5 px-3 text-base font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <MessageCircle className="w-5 h-5 text-blue-600" />
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
            className="w-full mt-2 purple-gradient-btn text-white font-extrabold text-center py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md border border-purple-400/40"
          >
            <span>MUA SKILL NGAY - 99.000 VNĐ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
