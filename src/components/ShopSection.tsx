import React from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, Crown, Flame, Video, MessageCircle } from 'lucide-react';
import { SKILL_PRODUCTS, BANK_INFO } from '../data/skillsData';
import { SkillProduct } from '../types';

interface ShopSectionProps {
  onSelectProduct: (productId: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onSelectProduct }) => {
  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#0d0f12] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>KHO TÀI NGUYÊN SKILL HẢI TRIỀU AI</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            CHỌN GÓI SKILL <span className="gold-gradient-text">PHÙ HỢP VỚI BẠN</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Mỗi bộ Skill được tinh chỉnh chuẩn xác, dễ dùng và thực chiến ngay. Thanh toán chuyển khoản tự động qua mã VietQR SHB và vào nhóm Zalo nhận hỗ trợ 1-1.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {SKILL_PRODUCTS.map((product) => {
            const isFeatured = product.id === 'skill-text-overlay';
            const isCombo = product.id === 'combo-all-skills';

            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 ${
                  isCombo
                    ? 'bg-gradient-to-b from-[#1c160e] via-[#15120e] to-[#121418] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 lg:scale-105 z-20'
                    : isFeatured
                    ? 'bg-[#14161d] border-2 border-amber-500/60 shadow-xl shadow-black/80'
                    : 'bg-[#121418] border border-zinc-800 hover:border-amber-500/40 shadow-lg'
                }`}
              >
                {/* Top Badge */}
                {product.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span
                      className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg ${
                        isCombo
                          ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black border border-amber-200'
                          : 'bg-amber-500 text-black'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mt-2 text-center pb-4 border-b border-zinc-800">
                    <h3 className="font-serif-luxury font-black text-lg sm:text-xl text-white tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-1 min-h-[32px] flex items-center justify-center">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 text-center">
                    <div className="text-zinc-500 text-xs line-through">
                      Giá gốc: {formatVND(product.originalPrice)}
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="font-serif-luxury font-black text-3xl sm:text-4xl text-amber-400">
                        {formatVND(product.price)}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                      Tiết kiệm {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2.5 py-3 text-xs sm:text-sm text-zinc-300">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonuses if any */}
                  {product.bonuses && product.bonuses.length > 0 && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1.5">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Quà Tặng Đặc Quyền:
                      </span>
                      {product.bonuses.map((bonus, bIdx) => (
                        <p key={bIdx} className="text-xs text-zinc-300">
                          • {bonus}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                      isCombo || isFeatured
                        ? 'gold-gradient-btn text-black shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95'
                        : 'bg-zinc-800 hover:bg-amber-500 hover:text-black text-white border border-zinc-700 hover:border-amber-400'
                    }`}
                  >
                    <span>MUA NGAY - {formatVND(product.price)}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <div className="text-center mt-2.5">
                    <span className="text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Quét VietQR SHB Nhận Ngay
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Commitment Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#13161c] border border-amber-500/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury font-bold text-base sm:text-lg text-white">
                Cam Kết Đồng Hành & Hỗ Trợ 1-1 Cùng Hải Triều AI
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Mỗi học viên mua Skill đều được tham gia nhóm Zalo kín để được sửa kịch bản trực tiếp và cập nhật prompt mới hàng tuần.
              </p>
            </div>
          </div>
          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/40 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Vào Nhóm Zalo Giao Lưu</span>
          </a>
        </div>

      </div>
    </section>
  );
};
