import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Camera, 
  Video, 
  FileText, 
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
  HelpCircle
} from 'lucide-react';
import { SKILL_PRODUCTS, SKILL_CATEGORIES, SKILL_SANH_LIST, BANK_INFO } from '../data/skillsData';
import { SkillProduct, SkillCategory } from '../types';
import { SkillDetailModal } from './SkillDetailModal';

interface ShopSectionProps {
  onSelectProduct: (productId: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onSelectProduct }) => {
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
    return products.filter((p) => p.sanhId === 'sanh-2' || p.category === 'sanh-2');
  }, [products]);

  const sanh3Products = useMemo(() => {
    return products.filter((p) => p.sanhId === 'sanh-3' || p.category === 'sanh-3');
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
      if (selectedCategory !== 'all') {
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
    const discountPercent = item.originalPrice > item.price
      ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
      : null;

    return (
      <div
        key={item.id}
        className="market-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between bg-white border border-purple-200/80 shadow-md hover:shadow-xl transition-all duration-300 group"
      >
        <div>
          {/* Card Header Strip: Badges & Sảnh category OUTSIDE the poster so 0% of poster text is covered */}
          <div className="px-3.5 py-2.5 bg-slate-50 border-b border-purple-100/80 flex items-center justify-between gap-2 shrink-0">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wide shadow-2xs ${
              isFree 
                ? 'bg-emerald-600 text-white' 
                : item.highlight 
                ? 'bg-purple-600 text-white' 
                : 'bg-orange-500 text-white'
            }`}>
              {isFree ? <Gift className="w-3 h-3 fill-white" /> : <Flame className="w-3 h-3 fill-white" />}
              <span>{item.cardBadge || (isFree ? 'Quà 0đ' : 'Hot')}</span>
            </span>
            
            <span className="text-[11px] font-bold text-purple-900 bg-white px-2.5 py-0.5 rounded-full border border-purple-200/80 shadow-2xs truncate">
              {item.sanhTitle?.split('—')[0]?.trim() || item.categoryName}
            </span>
          </div>

          {/* Full Poster Visual - Aspect 3:4 displays the entire 896x1200 image with ZERO cropping and ZERO text covered! */}
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
                  SKILL {String(item.orderNumber).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold text-purple-700 bg-white/90 px-2 py-0.5 rounded border border-purple-200/50">
                  {item.format}
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
            {/* Title */}
            <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-purple-700 transition-colors">
              {item.name}
            </h3>

            {/* Exact 1-2 sentence description - 100% clear and legible */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mt-1.5 min-h-[38px] font-normal">
              {item.description}
            </p>

            {/* Price Row matching image_cf4f315e.png */}
            <div className="mt-3 pt-3 border-t border-purple-100 flex items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2">
                <span className={`font-black text-lg sm:text-xl font-mono ${isFree ? 'text-emerald-600' : 'text-purple-700'}`}>
                  {isFree ? '0 đ' : formatVND(item.price)}
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
              </div>

              {/* Star Rating & Downloads Count */}
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">{item.rating}</span>
                <span className="text-[11px] text-slate-400">
                  ({item.downloadsCount >= 1000 ? (item.downloadsCount / 1000).toFixed(1) + 'k' : item.downloadsCount})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Action Buttons & Footer Links */}
        <div className="p-4 sm:p-5 pt-0 space-y-2">
          {/* Main Action Button (Coral-Orange Gradient matching image_cf4f315e.png) */}
          <button
            onClick={() => onSelectProduct(item.id)}
            className="coral-gradient-btn w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {isFree ? (
              <>
                <Gift className="w-4 h-4" />
                <span>Nhận Quà Tặng Tri Ân [0đ]</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Mua Skill ngay</span>
              </>
            )}
          </button>

          {/* Button: "Xem cách dùng" as explicitly requested by user */}
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
      {/* Soft Luminous Ambient Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-200/40 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-indigo-200/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Marketplace Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
            <span>SÀN GIAO DỊCH 40 AI SKILLS • CHUẨN THỰC CHIẾN</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            KHO SKILL & KỊCH BẢN <span className="purple-gradient-text">HẢI TRIỀU AI</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mỗi Skill là một khung hướng dẫn thực hành: cần chuẩn bị gì, câu lệnh mẫu, cách chỉnh theo ngành nghề và 3 bước thực hiện để bạn áp dụng ngay vào công việc mà không phải học lý thuyết rườm rà.
          </p>
        </div>

        {/* Marketplace Metrics Strip - Fresh, High Contrast & Auspicious */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-purple-950">
              40
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              AI Skills trong 5 Sảnh
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-purple-950">
              5.200+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Học Viên Đã Nhận & Mở Khóa
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-amber-500 flex items-center justify-center gap-1">
              <span>4.95</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Đánh Giá Thực Tế (5 Sao)
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-purple-200/80 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-black font-serif-luxury text-emerald-600">
              100%
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Quét VietQR SHB Tự Động
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
                    {cat.count}
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

        {/* Conditional Rendering: Grouped view of 5 Sảnh OR Filtered search results */}
        {filteredProducts !== null ? (
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
                      <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">8 Kỹ Năng</span>
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
                      <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">8 Kỹ Năng</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      VIDEO BÁN HÀNG
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  Kịch bản video 30 giây, nói chuyện tự nhiên trước máy quay, cắt video dài thành short và video giải đáp thắc mắc.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh2Products.map((p) => renderProductCard(p))}
              </div>
            </section>

            {/* SẢNH III — NỘI DUNG & MARKETING */}
            <section id="sanh-3" className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-purple-200 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-100 border border-teal-300 flex items-center justify-center text-teal-700 font-black shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-teal-700 tracking-wider">SẢNH III</span>
                      <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">8 Kỹ Năng</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      NỘI DUNG & MARKETING
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  Bài bán hàng có chiều sâu, chuỗi chăm khách Zalo tự động, lịch nội dung 30 ngày và tiêu đề dừng lướt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh3Products.map((p) => renderProductCard(p))}
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
                      <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">8 Kỹ Năng</span>
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
                      <span className="text-xs bg-fuchsia-100 text-fuchsia-800 font-bold px-2 py-0.5 rounded-full">8 Kỹ Năng VIP</span>
                    </div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                      VIDEO VIP & ĐA KÊNH
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-500 max-w-md">
                  Video AI theo kịch bản, trợ lý chăm cộng đồng 24/7, trợ lý nghiên cứu chủ đề và slide thuyết trình AI.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sanh5Products.map((p) => renderProductCard(p))}
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
