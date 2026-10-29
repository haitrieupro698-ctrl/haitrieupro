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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Purple & White Theme */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform duration-200">
              HT
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-black text-xl sm:text-2xl tracking-wider text-purple-900 group-hover:text-purple-700 transition-colors">
                HẢI TRIỀU AI
              </span>
              <span className="text-[10px] tracking-widest text-purple-600 uppercase -mt-1 font-semibold">
                Skill & Kịch Bản Triệu View
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-700">
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
              className="text-purple-700 hover:text-purple-900 transition-colors cursor-pointer font-bold flex items-center gap-1.5"
            >
              Kho Skill <span className="text-[10px] bg-purple-100 text-purple-700 font-extrabold px-2 py-0.5 rounded-full border border-purple-200">HOT</span>
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
              className="hover:text-blue-600 text-zinc-700 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              Nhóm Zalo
            </a>

            {/* Orders Firebase Link */}
            {onOpenOrders && (
              <button
                onClick={onOpenOrders}
                className="hover:text-purple-700 text-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
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
                className="hover:text-purple-700 text-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Quản lý kết nối Gmail gửi tài liệu"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>Gmail</span>
                {currentUser ? (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block ring-2 ring-white" />
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
              className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full cursor-pointer flex items-center gap-2 shadow-md hover:shadow-purple-500/30 transition-all active:scale-95"
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
              className="p-2 rounded-lg text-zinc-700 hover:text-purple-800 hover:bg-purple-50 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick('#gioithieu')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-zinc-800 hover:bg-purple-50 rounded-lg hover:text-purple-700 cursor-pointer"
          >
            Giới Thiệu
          </button>
          <button
            onClick={() => handleNavClick('#video')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-zinc-800 hover:bg-purple-50 rounded-lg hover:text-purple-700 cursor-pointer"
          >
            Video Hướng Dẫn
          </button>
          <button
            onClick={() => handleNavClick('#shop')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-purple-700 hover:bg-purple-50 rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>Kho Skill Kịch Bản AI</span>
            <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full border border-purple-200">99K</span>
          </button>
          <button
            onClick={() => handleNavClick('#thanhtoan')}
            className="block w-full text-left py-2 px-3 text-base font-semibold text-zinc-800 hover:bg-purple-50 rounded-lg hover:text-purple-700 cursor-pointer"
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
              className="flex items-center gap-2 w-full text-left py-2 px-3 text-base font-semibold text-red-600 hover:bg-purple-50 rounded-lg cursor-pointer"
            >
              <Mail className="w-5 h-5 text-red-500" />
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
            className="w-full mt-2 purple-gradient-btn text-white font-extrabold text-center py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>MUA SKILL NGAY - 99.000 VNĐ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
