import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  MessageCircle, 
  Camera, 
  Upload, 
  X, 
  Image as ImageIcon 
} from 'lucide-react';
import { SKILL_PRODUCTS, BANK_INFO } from '../data/skillsData';
import { SkillProduct } from '../types';

interface ShopSectionProps {
  onSelectProduct: (productId: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onSelectProduct }) => {
  // State to hold and update product images locally if user uploads
  const [products, setProducts] = useState<SkillProduct[]>(SKILL_PRODUCTS);
  const [editingImageProduct, setEditingImageProduct] = useState<SkillProduct | null>(null);
  const [customImageUrl, setCustomImageUrl] = useState('');

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  // Handle local file upload (from phone or PC)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingImageProduct) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        updateProductImage(editingImageProduct.id, base64data);
        setEditingImageProduct(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingImageProduct && customImageUrl.trim()) {
      updateProductImage(editingImageProduct.id, customImageUrl.trim());
      setCustomImageUrl('');
      setEditingImageProduct(null);
    }
  };

  const updateProductImage = (productId: string, newUrl: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, imageUrl: newUrl } : p))
    );
  };

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#0c071a] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Purple & White Theme */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-purple-300 fill-purple-300" />
            <span>KHO TÀI NGUYÊN SKILL HẢI TRIỀU AI</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            CHỌN GÓI SKILL <span className="purple-gradient-text">PHÙ HỢP VỚI BẠN</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Mỗi bộ Skill được tinh chỉnh chuẩn xác, dễ dùng và thực chiến ngay. Thanh toán chuyển khoản tự động qua mã VietQR SHB và vào nhóm Zalo nhận hỗ trợ 1-1.
          </p>
        </div>

        {/* Image Upload Instruction Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-[#180e34] border border-purple-500/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-zinc-200">
            <div className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center flex-shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Hướng dẫn úp hình sản phẩm:</span>
              <span className="text-purple-200 text-xs">
                Bạn có thể bấm trực tiếp nút <strong>"Đổi Ảnh"</strong> trên từng thẻ sản phẩm bên dưới để chọn ảnh từ máy, hoặc gửi ảnh trực tiếp vào khung chat này để tôi gắn vào nhé!
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {products.map((product) => {
            const isFeatured = product.id === 'skill-text-overlay';
            const isCombo = product.id === 'combo-all-skills';

            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                  isCombo
                    ? 'bg-gradient-to-b from-[#231245] via-[#1a0c33] to-[#130728] border-2 border-purple-400 shadow-2xl shadow-purple-600/25 lg:scale-105 z-20'
                    : isFeatured
                    ? 'bg-[#180e34] border-2 border-purple-400/70 shadow-xl shadow-purple-950/60'
                    : 'bg-[#140a2a] border border-purple-900/50 hover:border-purple-500/50 shadow-lg'
                }`}
              >
                {/* Top Badge */}
                {product.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                    <span
                      className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg ${
                        isCombo
                          ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 text-white border border-purple-200'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Product Image Thumbnail with "Change Image" button */}
                  <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-purple-500/30 mb-4 group aspect-[16/10]">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-purple-300/60 p-4 text-center">
                        <ImageIcon className="w-8 h-8 mb-1" />
                        <span className="text-xs">Chưa có ảnh</span>
                      </div>
                    )}

                    {/* Change image overlay button */}
                    <button
                      type="button"
                      onClick={() => setEditingImageProduct(product)}
                      className="absolute bottom-2 right-2 px-2.5 py-1.5 rounded-lg bg-black/80 hover:bg-purple-600 text-white text-[11px] font-semibold border border-purple-400/50 flex items-center gap-1.5 backdrop-blur-sm transition-all cursor-pointer shadow-lg"
                      title="Bấm để úp ảnh hoặc đổi ảnh sản phẩm này"
                    >
                      <Camera className="w-3.5 h-3.5 text-purple-300" />
                      <span>Đổi ảnh</span>
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <div className="text-center pb-3 border-b border-purple-900/40">
                    <h3 className="font-serif-luxury font-black text-lg text-white tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-purple-200 font-medium mt-1 min-h-[32px] flex items-center justify-center">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-3 text-center">
                    <div className="text-zinc-400 text-xs line-through">
                      Giá gốc: {formatVND(product.originalPrice)}
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="font-serif-luxury font-black text-3xl sm:text-4xl text-white drop-shadow">
                        {formatVND(product.price)}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                      Tiết kiệm {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2 py-2 text-xs sm:text-sm text-zinc-200">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-300 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonuses if any */}
                  {product.bonuses && product.bonuses.length > 0 && (
                    <div className="mt-3 p-3 rounded-xl bg-purple-950/50 border border-purple-500/30 space-y-1.5">
                      <span className="text-[11px] font-bold text-purple-200 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Quà Tặng Đặc Quyền:
                      </span>
                      {product.bonuses.map((bonus, bIdx) => (
                        <p key={bIdx} className="text-xs text-zinc-200">
                          • {bonus}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-purple-900/50">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer purple-gradient-btn shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <span>MUA NGAY - {formatVND(product.price)}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <div className="text-center mt-2.5">
                    <span className="text-[10px] text-purple-300/80 flex items-center justify-center gap-1">
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
        <div className="mt-14 p-6 sm:p-8 bg-[#150b2b] border border-purple-500/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-luxury font-bold text-base sm:text-lg text-white">
                Cam Kết Đồng Hành & Hỗ Trợ 1-1 Cùng Trịnh Hải Triều
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                Mỗi học viên mua Skill đều được tham gia nhóm Zalo kín để được sửa kịch bản trực tiếp và cập nhật prompt mới hàng tuần.
              </p>
            </div>
          </div>
          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Vào Nhóm Zalo Giao Lưu</span>
          </a>
        </div>

      </div>

      {/* MODAL: ÚP HÌNH SẢN PHẨM TRỰC TIẾP */}
      {editingImageProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#180e34] border-2 border-purple-500/50 rounded-2xl p-6 max-w-md w-full shadow-2xl relative space-y-4">
            
            <div className="flex items-center justify-between border-b border-purple-900/50 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Úp Hình Cho: {editingImageProduct.name}
                  </h4>
                  <p className="text-[11px] text-purple-200">Chọn ảnh từ máy hoặc dán link ảnh</p>
                </div>
              </div>
              <button
                onClick={() => setEditingImageProduct(null)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Option 1: File Upload */}
            <div className="p-4 rounded-xl bg-black/40 border border-purple-500/30 text-center space-y-2">
              <span className="text-xs font-bold text-white block">
                Cách 1: Chọn ảnh từ máy tính hoặc điện thoại
              </span>
              <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl purple-gradient-btn text-white text-xs font-bold cursor-pointer hover:scale-105 transition-transform">
                <Upload className="w-4 h-4" />
                <span>Chọn File Ảnh Để Tải Lên</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Option 2: Image URL */}
            <form onSubmit={handleUrlSubmit} className="space-y-3 pt-1">
              <span className="text-xs font-bold text-white block">
                Cách 2: Hoặc dán đường link ảnh (URL)
              </span>
              <input
                type="url"
                placeholder="https://example.com/hinh-anh.jpg"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                className="w-full bg-black/60 border border-purple-500/30 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cập Nhật Link Ảnh
              </button>
            </form>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setEditingImageProduct(null)}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
