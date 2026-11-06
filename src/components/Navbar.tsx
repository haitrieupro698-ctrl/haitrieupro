import React, { useState } from 'react';
import { Menu, X, Gift, Phone, MessageCircle, ExternalLink, ShoppingBag, Mail } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

interface NavbarProps {
  onOpenCheckout?: (productId?: string) => void;
  currentUser?: any;
  onOpenOrders?: () => void;
  onOpenGmail?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200/90 shadow-xs text-slate-900">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar chỉ 1 dòng */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Trái: Logo HẢI TRIỀU AI + tagline "AI cho cuộc sống tốt đẹp hơn" */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 flex items-center justify-center font-black text-white text-base sm:text-lg shadow-md border-2 border-white ring-2 ring-purple-100">
              HT
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-luxury font-black text-lg sm:text-xl tracking-wider text-purple-950 block leading-tight">
                HẢI TRIỀU AI
              </span>
              <span className="text-[11px] sm:text-xs text-purple-700 font-medium tracking-normal block">
                AI cho cuộc sống tốt đẹp hơn
              </span>
            </div>
          </a>

          {/* Menu rút gọn: Sản phẩm | Quà tặng | FAQ | Nhóm Zalo */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('#shop')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Sản phẩm
            </button>
            <button
              onClick={() => handleNavClick('#qua-tang')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Quà tặng
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors cursor-pointer flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Nhóm Zalo</span>
            </a>
          </nav>

          {/* Phải: 1 nút CTA "🎁 Nhận 4 Skill 0đ" + hotline */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Nút CTA Nhận 4 Skill 0đ */}
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/25 border border-amber-300 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Gift className="w-4 h-4 fill-slate-950" />
              <span>🎁 Nhận 4 Skill 0đ</span>
            </a>

            {/* Hotline */}
            <a
              href={`tel:${BANK_INFO.supportPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200 transition-colors"
              title="Gọi hotline tư vấn"
            >
              <Phone className="w-3.5 h-3.5 text-purple-700" />
              <span className="font-mono">{BANK_INFO.supportPhone}</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-black text-xs border border-amber-300 shadow-2xs"
            >
              <span>🎁 4 Skill 0đ</span>
            </a>

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
        <div className="md:hidden bg-white border-t border-purple-100 px-4 pt-3 pb-6 space-y-2.5 shadow-xl">
          <button
            onClick={() => handleNavClick('#shop')}
            className="block w-full text-left py-2.5 px-3 text-base font-bold text-purple-950 hover:bg-purple-50 rounded-lg cursor-pointer"
          >
            Sản phẩm
          </button>
          <button
            onClick={() => handleNavClick('#qua-tang')}
            className="block w-full text-left py-2.5 px-3 text-base font-bold text-purple-950 hover:bg-purple-50 rounded-lg cursor-pointer"
          >
            Quà tặng
          </button>
          <button
            onClick={() => handleNavClick('#faq')}
            className="block w-full text-left py-2.5 px-3 text-base font-bold text-purple-950 hover:bg-purple-50 rounded-lg cursor-pointer"
          >
            FAQ
          </button>
          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full py-2.5 px-3 text-base font-bold text-blue-700 hover:bg-blue-50 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 fill-blue-600 text-blue-600" />
              <span>Nhóm Zalo</span>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-500" />
          </a>

          {/* Mobile Orders & Gmail if logged in */}
          {onOpenOrders && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrders();
              }}
              className="flex items-center gap-2 w-full text-left py-2.5 px-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 rounded-lg cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-purple-600" />
              <span>Quản Lý Đơn Hàng</span>
            </button>
          )}

          {onOpenGmail && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGmail();
              }}
              className="flex items-center gap-2 w-full text-left py-2.5 px-3 text-sm font-semibold text-rose-700 hover:bg-purple-50 rounded-lg cursor-pointer"
            >
              <Mail className="w-4 h-4 text-rose-600" />
              <span>Quản Lý Gmail {currentUser ? `(${currentUser.email})` : ''}</span>
            </button>
          )}

          {/* CTA & Hotline Buttons inside mobile menu */}
          <div className="pt-2 space-y-2 border-t border-purple-100">
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-md"
            >
              <Gift className="w-4 h-4 fill-slate-950" />
              <span>🎁 Nhận 4 Skill 0đ (Vào Nhóm Zalo)</span>
            </a>

            <a
              href={`tel:${BANK_INFO.supportPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-purple-50 text-purple-950 font-bold text-sm border border-purple-200"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              <span>Hotline: {BANK_INFO.supportPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
