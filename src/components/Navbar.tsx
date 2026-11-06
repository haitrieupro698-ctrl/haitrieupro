import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Mail, ShoppingBag, Gift } from 'lucide-react';
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
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-purple-600/30 border border-amber-300 group-hover:scale-105 transition-transform duration-200">
              HT
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif-luxury font-black text-xl sm:text-2xl tracking-wider text-slate-900 group-hover:text-purple-700 transition-colors">
                  HẢI TRIỀU AI
                </span>
                <span className="text-[10px] bg-purple-900 text-amber-300 font-extrabold px-1.5 py-0.2 rounded border border-amber-400/60 uppercase">
                  OFFICIAL
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium -mt-0.5">
                AI cho cuộc sống tốt đẹp hơn
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - High Contrast Slate / Dark */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('#gioithieu')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Về Hải Triều AI
            </button>
            <button
              onClick={() => handleNavClick('#video')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Sản phẩm nổi bật
            </button>
            <button
              onClick={() => handleNavClick('#qua-tang')}
              className="text-amber-950 hover:text-amber-900 transition-colors cursor-pointer font-bold flex items-center gap-1.5 bg-amber-100/90 px-3 py-1.5 rounded-full border border-amber-300 shadow-2xs"
            >
              <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded font-black">
                HOT
              </span>
              <span>4 Quà Tặng 0đ</span>
            </button>
            <button
              onClick={() => handleNavClick('#thanhtoan')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Hướng dẫn thanh toán
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Hỏi đáp (FAQ)
            </button>
          </nav>

          {/* CTA Buttons - Yellow Zalo button matching screenshot with direct phone */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('#shop')}
              className="px-4 py-2 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm transition-colors border border-purple-700 cursor-pointer shadow-xs"
            >
              Xem sản phẩm
            </button>

            <a
              href={`https://zalo.me/${BANK_INFO.supportPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/30 border border-amber-300 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Nhắn tin Zalo trực tiếp"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Liên hệ Zalo</span>
              <span className="font-mono bg-slate-950 text-amber-300 px-2 py-0.5 rounded text-[11px] font-black">
                {BANK_INFO.supportPhone}
              </span>
            </a>
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
            onClick={() => handleNavClick('#qua-tang')}
            className="block w-full text-left py-2 px-3 text-base font-black text-amber-900 bg-amber-50 border border-amber-200 rounded-lg cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-amber-600 fill-amber-600" />
              <span>Quà Tặng 4 Skill 0đ (Vào Zalo)</span>
            </div>
            <span className="text-xs bg-rose-600 text-white px-2 py-0.5 rounded-full font-bold">0Đ</span>
          </button>
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
