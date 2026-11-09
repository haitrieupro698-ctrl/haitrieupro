import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Camera, 
  Video, 
  Layout, 
  Crown, 
  Search, 
  Star, 
  Gift, 
  ChevronRight, 
  ShoppingCart, 
  Compass,
  SlidersHorizontal,
  Layers,
  HelpCircle,
  MessageCircle,
  Clock,
  Bot,
  Bell,
  ExternalLink
} from 'lucide-react';
import { SKILL_PRODUCTS, SKILL_CATEGORIES, SKILL_SANH_LIST, BANK_INFO } from '../data/skillsData';
import { SkillProduct, SkillCategory } from '../types';
import { SkillDetailModal } from './SkillDetailModal';
import { CountdownWidget } from './CountdownWidget';
import { trackBuyClick, trackZaloClick } from '../services/analytics';

interface ShopSectionProps {
  onSelectProduct: (productId: string) => void;
  onOpenChatbot?: () => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onSelectProduct, onOpenChatbot }) => {
  const [products] = useState<SkillProduct[]>(SKILL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailProduct, setActiveDetailProduct] = useState<SkillProduct | null>(null);

  const formatVND = (amount: number) => {
    if (amount === 0) return '0 đ';
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  // Group products by the 5 Sảnh
  const sanh1Products = useMemo(() => {
    return products.filter((p) => p.sanhId === 'sanh-1' || p.category === 'sanh-1');
  }, [products]);

  const sanh2Products = useMemo(() => {
    const list = products.filter((p) => p.sanhId === 'sanh-2' || p.category === 'sanh-2');
    const textOverlayIndex = list.findIndex((p) => p.id === 'skill-text-overlay');
    if (textOverlayIndex > 0) {
      const [item] = list.splice(textOverlayIndex, 1);
      list.unshift(item);
    }
    return list;
  }, [products]);

  const sanh4Products = useMemo(() => {
    return products.filter((p) => p.sanhId === 'sanh-4' || p.category === 'sanh-4');
  }, [products]);

  const sanh5Products = useMemo(() => {
    return products.filter((p) => p.sanhId === 'sanh-5' || p.category === 'sanh-5');
  }, [products]);

  // Filtered view when user searches or filters by specific tab
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all' && !searchQuery.trim()) {
      return null; // Return null to show the structured grouped view by default!
    }

    return products.filter((item) => {
      if (selectedCategory === 'zalo-gifts') {
        if (!item.isZaloGift) return false;
      } else if (selectedCategory !== 'all') {
        if (item.sanhId !== selectedCategory && item.category !== selectedCategory) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchTagline = item.tagline.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTools = item.aiTools.some((t) => t.toLowerCase().includes(query));
        if (!matchName && !matchTagline && !matchDesc && !matchTools) return false;
      }
      return true;
    });
  }, [products, selectedCategory, searchQuery]);

  const getCatCount = (catId: string) => {
    if (catId === 'all') return products.length;
    if (catId === 'zalo-gifts') return products.filter((p) => p.isZaloGift).length;
    if (catId === 'sanh-3') return 'Sắp mở';
    return products.filter((p) => p.sanhId === catId || p.category === catId).length;
  };

  // Poster gradient scheme by product ID for artistic card covers
  const getPosterGradient = (id: string) => {
    if (id.includes('avatar') || id.includes('chuyen-gia')) return 'from-purple-100 via-indigo-50 to-pink-100 text-purple-950';
    if (id.includes('poster')) return 'from-amber-100 via-orange-50 to-rose-100 text-amber-950';
    if (id.includes('overlay')) return 'from-violet-100 via-purple-50 to-indigo-100 text-violet-950';
    if (id.includes('video') || id.includes('short')) return 'from-blue-100 via-sky-50 to-indigo-100 text-blue-950';
    if (id.includes('kich-ban') || id.includes('bai-ban-hang')) return 'from-teal-100 via-emerald-50 to-cyan-100 text-teal-950';
    if (id.includes('trang') || id.includes('landing')) return 'from-indigo-100 via-violet-50 to-blue-100 text-indigo-950';
    if (id.includes('zalo') || id.includes('cham-khach')) return 'from-sky-100 via-blue-50 to-slate-100 text-sky-950';
    if (id.includes('ai') || id.includes('vip')) return 'from-fuchsia-100 via-purple-50 to-rose-100 text-fuchsia-950';
    return 'from-slate-100 via-purple-50 to-indigo-100 text-slate-900';
  };

  // Card component matching image_cf4f315e.png with prominent "Xem cách dùng" button
  const renderProductCard = (item: SkillProduct) => {
    const isFree = item.price === 0 || item.isGift;
    const isVipHero = item.id === 'skill-text-overlay';
    const discountPercent = item.originalPrice > item.price
      ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
      : null;
    const skillIndex = products.findIndex((p) => p.id === item.id) + 1;

    return (
      <div
        key={item.id}
        className={`market-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between bg-white transition-all duration-300 group ${
          isVipHero
            ? 'border-2 border-amber-400 ring-2 ring-amber-300/40 shadow-xl shadow-amber-500/10'
            : 'border border-purple-200/80 shadow-md hover:shadow-xl'
        }`}
      >
        <div>
          {/* Full Poster Visual - Aspect 3:4 displays the entire 896x1200 image with ZERO cropping */}
          {item.imageUrl ? (
            <div 
              onClick={() => setActiveDetailProduct(item)}
              className="relative w-full aspect-[3/4] bg-slate-950 overflow-hidden border-b border-purple-100 flex items-center justify-center cursor-pointer group/poster"
              title="Bấm để xem chi tiết poster & hướng dẫn"
            >
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/poster:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ) : (
            <div 
              onClick={() => setActiveDetailProduct(item)}
              className={`relative aspect-[3/4] w-full bg-gradient-to-br ${getPosterGradient(item.id)} p-5 flex flex-col justify-between overflow-hidden border-b border-purple-100 cursor-pointer group/poster`}
              title="Bấm để xem chi tiết & hướng dẫn skill"
            >
              {/* Top skill index and format indicator */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-800 border border-purple-200/60 shadow-2xs">
                  SKILL {String(skillIndex).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-purple-700 bg-white/90 px-2 py-0.5 rounded border border-purple-200/50">
                  {isFree ? 'QUÀ 0Đ' : (item.price === 199000 ? 'VIP 199K' : 'ĐỒNG GIÁ 135K')}
                </span>
              </div>

              {/* Poster typography center */}
              <div className="my-auto text-center px-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-1">
                  {item.categoryName}
                </div>
                <h4 className="font-sans-vietnam font-black text-base sm:text-lg uppercase tracking-tight text-slate-900 drop-shadow-2xs leading-snug line-clamp-3">
                  {item.bannerTitle || item.name}
                </h4>
                <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap">
                  {item.aiTools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-purple-200 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual footer on poster mockup */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-200/60 text-[11px] font-semibold text-slate-700">
                <span className="font-bold text-purple-900">Hải Triều AI</span>
                <span className="text-purple-600 font-bold bg-purple-100/80 px-1.5 py-0.2 rounded text-[10px]">100% Thực Chiến</span>
              </div>
            </div>
          )}

          {/* Card Body with High Contrast Black/Slate Text */}
          <div className="p-4 sm:p-5">
            {/* Badges inside card body - Fixed position directly above skill title */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wide shadow-2xs ${
                isFree 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                  : isVipHero
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black shadow-xs' 
                  : item.highlight 
                  ? 'bg-purple-100 text-purple-900 border border-purple-200' 
                  : 'bg-orange-100 text-orange-900 border border-orange-200'
              }`}>
                {isFree ? <Gift className="w-3 h-3 fill-emerald-700" /> : <Flame className="w-3 h-3 fill-current" />}
                <span>{item.cardBadge || (isFree ? 'Quà Tặng 0đ' : 'Thực Chiến')}</span>
              </span>
              
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border shadow-2xs truncate ${
                isVipHero
                  ? 'text-amber-950 bg-amber-100 border-amber-300'
                  : 'text-purple-900 bg-purple-50 border-purple-200/80'
              }`}>
                {isVipHero ? '⭐ BÁN CHẠY #1' : (item.sanhTitle?.split('—')[0]?.trim() || item.categoryName)}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-purple-700 transition-colors">
              {item.name}
            </h3>

            {/* Exact 1-2 sentence description - 100% clear and legible */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mt-1.5 min-h-[38px] font-normal">
              {item.description}
            </p>

            {/* Price Row */}
            <div className="mt-3 pt-3 border-t border-purple-100 flex items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2">
                {isFree ? (
                  <span className="font-black text-xs sm:text-sm text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Quà tặng 0đ
                  </span>
                ) : (
                  <>
                    <span className="font-black text-lg sm:text-xl font-mono text-purple-700">
                      {formatVND(item.price)}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-slate-400 text-xs line-through">
                        {formatVND(item.originalPrice)}
                      </span>
                    )}
                    {discountPercent && (
                      <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                        -{discountPercent}%
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Star Rating only (5 sao, bỏ toàn bộ số review trong ngoặc để tránh bị Facebook Ads gắn cờ) */}
              <div className="flex items-center gap-1 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Action Buttons & Footer Links */}
        <div className="p-4 sm:p-5 pt-0 space-y-2">
          {item.isZaloGift ? (
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackZaloClick(`Gift Card ${item.name}`, '/shop')}
              className="w-full py-2.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Vào Zalo Nhận Quà 0đ</span>
            </a>
          ) : (
            <button
              onClick={() => {
                trackBuyClick(item.id, item.name, item.price);
                onSelectProduct(item.id);
              }}
              className="coral-gradient-btn w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Mua Skill ngay ({item.price === 199000 ? '199k' : '135k'})</span>
            </button>
          )}

          {/* Button: "Xem cách dùng" */}
          <button
            onClick={() => setActiveDetailProduct(item)}
            className="w-full py-2 px-3 rounded-xl border border-purple-200 bg-purple-50/70 hover:bg-purple-100 text-purple-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Xem hướng dẫn chi tiết, chuẩn bị và 3 bước thực hiện"
          >
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>Xem cách dùng</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="shop" className="py-16 sm:py-24 pb-28 sm:pb-36 bg-[#f8f9fe] text-slate-900 relative overflow-hidden">
      {/* Target anchor for #kho-skill */}
      <div id="kho-skill" className="sr-only" />
      {/* Soft Luminous Ambient Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-200/40 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-indigo-200/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Marketplace Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
            <span>SÀN GIAO DỊCH 41 AI SKILLS • ĐỒNG GIÁ 135.000Đ/SKILL (VIP 199K) • TẶNG 4 SKILL 0Đ</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            KHO SKILL & KỊCH BẢN <span className="purple-gradient-text">HẢI TRIỀU AI</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mỗi Skill là một khung hướng dẫn thực hành: cần chuẩn bị gì, câu lệnh mẫu, cách chỉnh theo ngành nghề và 3 bước thực hiện để bạn áp dụng ngay vào công việc mà không phải học lý thuyết rườm rà.
          </p>
        </div>

        {/* KHỐI 1: ĐỒNG HỒ TRONG TRANG - HẢI TRIỀU AI */}
        <CountdownWidget />

        {/* Marketplace Metrics Strip - 4 Số Liệu Chuẩn */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-purple-950">
              135K
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Đồng giá 135.000đ (VIP Text Overlay 199k)
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-purple-950">
              41
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Kỹ năng thực chiến đang mở
            </div>
            <div className="text-[11px] text-purple-700 font-bold mt-0.5">
              (5.200+ lượt tải & mở khóa Skill)
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-amber-500 flex items-center justify-center gap-1">
              <span>5.0</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Cam kết chất lượng 5 sao thực chiến
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-emerald-600">
              100%
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Quét VietQR SHB tự động, nhận file ngay
            </div>
          </div>
        </div>

        {/* Category Tabs & Quick Search */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-purple-200/80 shadow-md mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-md'
                      : 'bg-purple-50 hover:bg-purple-100 text-slate-700 border border-purple-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-purple-200/80 text-purple-900'
                  }`}>
                    {getCatCount(cat.id)}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-purple-600 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kịch bản, quà tặng, prompt..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Conditional Rendering: Grouped view of 5 Sảnh OR Filtered search results OR Sảnh III Teaser */}
        {selectedCategory === 'sanh-3' ? (
          <div className="py-6">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900 border-2 border-purple-400/50 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="max-w-2xl text-left space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/40 text-xs font-black uppercase tracking-wider">
                  <Bot className="w-4 h-4 text-amber-400" />
                  <span>SẢNH III — SẮP MỞ (ĐANG HOÀN THIỆN)</span>
                </div>

                <h3 className="font-serif-luxury font-black text-3xl sm:text-4xl text-white tracking-wide">
                  CHATBOT & TỰ ĐỘNG HÓA
                </h3>

                <p className="text-amber-200 text-sm font-bold">
                  các tool và skill (Đang hoàn thiện)
                </p>

                <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
                  Kỹ năng đang được <strong className="text-amber-300 font-bold">Hải Triều AI</strong> kiểm thử trước khi phát hành. Bao gồm: Chatbot Zalo OA trả lời tự động 24/7, Bot tư vấn Messenger Fanpage, kịch bản nhắc đơn tự động và quy trình chăm sóc khách hàng tự động đa kênh.
                </p>

                <p className="text-xs text-purple-300 italic pt-1">
                  * Thành viên nhóm Zalo sẽ được nhận thông báo và ưu đãi đặc biệt đầu tiên khi Sảnh III chính thức mở.
                </p>

                <div className="pt-4">
                  <a
                    href={BANK_INFO.zaloGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-400/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Nhận thông báo mở Sảnh III</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : filteredProducts !== null ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                Kết quả tìm kiếm ({filteredProducts.length} kỹ năng)
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs text-purple-700 hover:underline font-bold"
              >
                Xóa bộ lọc
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => renderProductCard(p))}
            </div>

            {/* CTA cho kết quả tìm kiếm / lọc */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-purple-950">Chưa biết chọn Skill nào?</span>{' '}
                <span>Nhắn Trợ lý trên web để được gợi ý đúng nghề của bạn trong 2 phút.</span>
              </div>
              <button
                type="button"
                onClick={onOpenChatbot}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>Nhắn Trợ Lý Trên Web</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            
            {/* SẢNH I — HÌNH ẢNH THƯƠNG HIỆU */}
            <section id="sanh-1" className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-purple-200 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-700 font-black shadow-xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-purple-700 tracking-wider">SẢNH I</span>
                      <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">{sanh1Products.length} Kỹ Năng</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      HÌNH ẢNH THƯƠNG HIỆU
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  Tạo avatar chuyên gia, poster sản phẩm, ảnh text overlay dừng lướt và nhận diện kênh chuyên nghiệp.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh1Products.map((p) => renderProductCard(p))}
              </div>

              {/* CTA cuối Sảnh I */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-purple-950">Chưa biết chọn Skill nào?</span>{' '}
                  <span>Nhắn Trợ lý trên web để được gợi ý đúng nghề của bạn trong 2 phút.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Nhắn Trợ Lý Trên Web</span>
                </button>
              </div>
            </section>

            {/* SẢNH II — VIDEO BÁN HÀNG */}
            <section id="sanh-2" className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-purple-200 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 font-black shadow-xs">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-blue-700 tracking-wider">SẢNH II</span>
                      <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">{sanh2Products.length} Kỹ Năng</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      VIDEO BÁN HÀNG
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium max-w-md">
                  9 kỹ năng video bán hàng thực chiến – Text Overlay Triệu View 199k (VIP bán chạy), các kỹ năng còn lại đồng giá 135.000đ/skill. Kịch bản video 30 giây, nói chuyện tự nhiên trước máy quay, cắt video dài thành short và video giải đáp thắc mắc.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh2Products.map((p) => renderProductCard(p))}
              </div>

              {/* CTA cuối Sảnh II */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-blue-950">Chưa biết chọn Skill nào?</span>{' '}
                  <span>Nhắn Trợ lý trên web để được gợi ý đúng nghề của bạn trong 2 phút.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Nhắn Trợ Lý Trên Web</span>
                </button>
              </div>
            </section>

            {/* SẢNH III — SẮP MỞ (Teaser card giữ vững link neo và kích hoạt tò mò) */}
            <section id="sanh-3" className="scroll-mt-24">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900 border-2 border-purple-400/50 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 blur-[100px] pointer-events-none rounded-full" />
                
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-3 max-w-2xl text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/40 text-xs font-black uppercase tracking-wider">
                      <Bot className="w-4 h-4 text-amber-400" />
                      <span>SẢNH III — SẮP MỞ</span>
                    </div>

                    <h3 className="font-serif-luxury font-black text-2xl sm:text-3xl text-white tracking-wide">
                      CHATBOT & TỰ ĐỘNG HÓA
                    </h3>

                    <p className="text-amber-200 text-xs sm:text-sm font-bold">
                      Bộ công cụ & Skill đang hoàn thiện
                    </p>

                    <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                      Kỹ năng đang được <strong className="text-amber-300 font-bold">Hải Triều AI</strong> kiểm thử trước khi phát hành. Thành viên nhóm Zalo sẽ được nhận thông báo và ưu đãi đặc biệt đầu tiên khi Sảnh III chính thức mở.
                    </p>
                  </div>

                  <a
                    href={BANK_INFO.zaloGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-400/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Nhận thông báo mở Sảnh III</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ */}
            <section id="sanh-4" className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-purple-200 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-700 font-black shadow-xs">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-indigo-700 tracking-wider">SẢNH IV</span>
                      <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">{sanh4Products.length} Kỹ Năng</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      TRANG BÁN HÀNG & DỊCH VỤ
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  Trang giới thiệu dịch vụ, đăng ký workshop, trang nhận quà 0đ và hệ thống bán sản phẩm số quét VietQR tự động.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh4Products.map((p) => renderProductCard(p))}
              </div>

              {/* CTA cuối Sảnh IV */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-indigo-950">Chưa biết chọn Skill nào?</span>{' '}
                  <span>Nhắn Trợ lý trên web để được gợi ý đúng nghề của bạn trong 2 phút.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Nhắn Trợ Lý Trên Web</span>
                </button>
              </div>
            </section>

            {/* SẢNH V — VIDEO VIP & ĐA KÊNH */}
            <section id="sanh-5" className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-purple-200 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-fuchsia-100 border border-fuchsia-300 flex items-center justify-center text-fuchsia-700 font-black shadow-xs">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-fuchsia-700 tracking-wider">SẢNH V</span>
                      <span className="text-xs bg-fuchsia-100 text-fuchsia-800 font-bold px-2 py-0.5 rounded-full">{sanh5Products.length} Kỹ Năng • Đồng Giá 135K</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      VIDEO VIP & ĐA KÊNH
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  9 kỹ năng tự động hoá video & đa kênh – Đồng giá 135.000đ/skill. Trợ lý chăm cộng đồng 24/7, nghiên cứu kịch bản và slide thuyết trình AI.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh5Products.map((p) => renderProductCard(p))}
              </div>

              {/* CTA cuối Sảnh V */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-fuchsia-50 via-purple-50 to-fuchsia-50 border border-fuchsia-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-fuchsia-950">Chưa biết chọn Skill nào?</span>{' '}
                  <span>Nhắn Trợ lý trên web để được gợi ý đúng nghề của bạn trong 2 phút.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Nhắn Trợ Lý Trên Web</span>
                </button>
              </div>
            </section>

          </div>
        )}

      </div>

      {/* Skill Detail Modal (triggered when clicking "Xem cách dùng" or details) */}
      <SkillDetailModal
        product={activeDetailProduct}
        isOpen={!!activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
        onUnlockSkill={(productId) => {
          setActiveDetailProduct(null);
          onSelectProduct(productId);
        }}
      />
    </section>
  );
};
