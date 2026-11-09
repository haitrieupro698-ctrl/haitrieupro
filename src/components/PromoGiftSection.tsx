import React, { useState } from 'react';
import { 
  Gift, 
  MessageCircle, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Sparkles, 
  ExternalLink,
  Flame,
  PhoneCall,
  Check
} from 'lucide-react';
import { BANK_INFO, SKILL_PRODUCTS } from '../data/skillsData';
import { SkillProduct } from '../types';
import { SkillDetailModal } from './SkillDetailModal';

export const PromoGiftSection: React.FC = () => {
  const [activeDetailProduct, setActiveDetailProduct] = useState<SkillProduct | null>(null);

  // 4 Skill Quà Tặng Miễn Phí 100% (Dành tặng riêng cho thành viên nhóm Zalo)
  const gift1 = SKILL_PRODUCTS.find((s) => s.id === 'skill-avatar-chuyen-gia') || SKILL_PRODUCTS[0];
  const gift2 = SKILL_PRODUCTS.find((s) => s.id === 'skill-poster-san-pham') || SKILL_PRODUCTS[1];
  const gift3 = SKILL_PRODUCTS.find((s) => s.id === 'skill-tach-nen-trong-suot') || SKILL_PRODUCTS[2];
  const gift4 = SKILL_PRODUCTS.find((s) => s.id === 'skill-anh-bia-kenh') || SKILL_PRODUCTS[3];

  const giftItems = [
    {
      skill: gift1,
      boxNumber: '01',
      badgeTopRight: 'HOT TREND TIKTOK',
      categoryTag: 'ỨNG DỤNG TẠO ẢNH & VIDEO AI',
      title: 'Xưởng Ảnh Thương Hiệu Cá Nhân (Skill 01)',
      originalPrice: '340.000đ',
      desc: 'Tạo ảnh đại diện rõ gương mặt, chuẩn phong thái chuyên gia và xây dựng thương hiệu cá nhân thu hút người xem ngay từ cái nhìn đầu tiên.',
      bullets: [
        { label: 'Tự động đồng bộ nét mặt:', text: 'Gõ kịch bản, AI tự giữ 100% đường nét khuôn mặt thật, không bị ảo hay biến dạng.' },
        { label: 'Rất dễ cho người mới:', text: 'Không cần biết photoshop hay đồ họa phức tạp, làm trực tiếp trên điện thoại & máy tính.' },
        { label: 'Kèm video hướng dẫn:', text: 'Hướng dẫn chi tiết từng bước xuất file sắc nét chuẩn 4K giữ chân người xem.' },
      ],
      quote: 'Mỗi Skill – một nền móng vững chắc để biến kiến thức thành thương hiệu, biến giá trị thành thu nhập.',
    },
    {
      skill: gift2,
      boxNumber: '02',
      badgeTopRight: 'BỘ SKILL HẢI TRIỀU AI',
      categoryTag: 'POSTER THƯƠNG MẠI ĐIỆN TỬ',
      title: 'Poster Sản Phẩm 10 Tấm Đồng Bộ Thương Mại (Skill 02)',
      originalPrice: '340.000đ',
      desc: 'Từ 1 ảnh sản phẩm chụp điện thoại, AI tự động sinh chuỗi 10 poster thương mại với ánh sáng studio, bục trưng bày và câu chốt ưu đãi.',
      bullets: [
        { label: 'Tự động đồng bộ ánh sáng:', text: 'Hòa quyện sản phẩm vào mọi bối cảnh sang trọng, nổi khối như chụp tạp chí cao cấp.' },
        { label: 'Rõ ràng thông điệp bán hàng:', text: 'Bố cục chữ tương phản cao, khách nhìn vào là hiểu ngay lợi ích và muốn nhắn tin mua.' },
        { label: 'Đầy đủ tỷ lệ khung hình:', text: 'Tối ưu 1:1 cho bài đăng Facebook/Zalo và 9:16 cho Story, Reels, TikTok.' },
      ],
      quote: 'Một tấm poster rõ lợi ích đáng giá hơn ngàn lời giải thích dài dòng khi tư vấn bán hàng.',
    },
    {
      skill: gift3,
      boxNumber: '03',
      badgeTopRight: 'CHUẨN ĐỒ HỌA 4K',
      categoryTag: 'TÁCH NỀN TRONG SUỐT',
      title: 'Tách Nền Trong Suốt & Đồ Họa Đỉnh Cao (Skill 03)',
      originalPrice: '340.000đ',
      desc: 'Xóa sạch phông nền phức tạp, giữ trọn vẹn chủ thể sắc nét từng sợi tóc, xuất file PNG trong suốt chất lượng cao để ghép poster hay làm video.',
      bullets: [
        { label: 'Tách nền chuẩn xác từng chi tiết:', text: 'Tự động bóc tách từng sợi tóc, mép áo, trang sức mà không để lại vệt răng cưa hay lem nhem.' },
        { label: 'Xuất file PNG trong suốt sắc nét:', text: 'Tải ngay file không nền độ phân giải cao, sẵn sàng chèn vào Canva, Photoshop hoặc CapCut.' },
        { label: 'Ghép nền mới cực kỳ tự nhiên:', text: 'Tự do ghép chủ thể vào bất kỳ không gian studio, văn phòng hay bối cảnh sang trọng nào.' },
      ],
      quote: 'Tách nền sạch là bước đầu tiên để biến bức ảnh chụp nghiệp dư thành tác phẩm đồ họa triệu view.',
    },
    {
      skill: gift4,
      boxNumber: '04',
      badgeTopRight: 'SIÊU TIỆN ÍCH 2026',
      categoryTag: 'CHỈNH SỬA ẢNH THỰC CHIẾN',
      title: 'Xoá Vật Thể, Logo & Chi Tiết Rác Khỏi Ảnh (Skill 04)',
      originalPrice: '340.000đ',
      desc: 'Xoá sạch người đi đường, rác nền, dây điện, logo hoặc chi tiết thừa trong 3 giây. AI tự động bù đắp hậu cảnh hoàn hảo không tì vết.',
      bullets: [
        { label: 'Một nét cọ xóa sạch chi tiết thừa:', text: 'Chỉ cần quét cọ qua vùng muốn bỏ, AI phân tích và tái tạo hậu cảnh tự nhiên.' },
        { label: 'Xóa logo đóng dấu mờ:', text: 'Làm sạch ảnh tư liệu, ảnh chụp vội để có bức ảnh lung linh như chụp studio chuyên nghiệp.' },
        { label: 'Bảo toàn chất lượng ảnh gốc:', text: 'Không làm mờ nhòe hay vỡ hạt các vùng xung quanh, giữ nguyên độ phân giải cao.' },
      ],
      quote: 'Một bức ảnh sạch bóng rác nền sẽ nâng tầm giá trị sản phẩm của bạn lên gấp nhiều lần.',
    },
  ];

  return (
    <section id="qua-tang" className="py-12 sm:py-16 bg-white text-slate-900 relative overflow-hidden border-y border-purple-100">
      {/* Background ambient lighting in soft lavender and purple */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-purple-200/35 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Ribbon & Title - White background with rich Purple Text */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-300 text-purple-900 font-black text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-2xs">
            <Gift className="w-4 h-4 text-purple-700 fill-purple-700" />
            <span>ĐẶC QUYỀN TRI ÂN • QUÀ TẶNG MIỄN PHÍ</span>
            <span className="bg-rose-600 text-white px-2 py-0.2 rounded-full text-[11px] font-black uppercase">
              0 ĐỒNG
            </span>
          </div>

          <h2 className="font-serif-luxury font-black text-3xl sm:text-5xl lg:text-6xl text-purple-950 tracking-tight leading-tight">
            4 Skill Quà Tặng <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-700 to-fuchsia-700">Miễn Phí 100%</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-[1.5]">
            Dành tặng riêng cho bạn từ <strong className="text-purple-900 font-bold">Hải Triều AI</strong>. Tham gia{' '}
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 font-black underline decoration-purple-400 hover:text-purple-950"
            >
              Nhóm Zalo Nhận Quà
            </a>{' '}
            để nhận trọn vẹn 4 món quà trị giá <strong className="text-rose-600 font-black">340.000đ</strong> hoàn toàn miễn phí.
          </p>
        </div>

        {/* 4 Gift Cards Grid - Clean White Cards with Purple Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12">
          {giftItems.map((item) => (
            <div 
              key={item.skill.id}
              className="bg-white rounded-2xl sm:rounded-3xl border-2 border-purple-200/90 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group ring-1 ring-purple-100"
            >
              <div>
                {/* Visual Header with Badges on Poster */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-purple-950 overflow-hidden border-b border-purple-100">
                  <img 
                    src={item.skill.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-black/50" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wide shadow-md">
                      <Gift className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Ô QUÀ {item.boxNumber} · 0 ĐỒNG</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-rose-600 text-white font-black text-[11px] uppercase tracking-wide shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      <span>{item.badgeTopRight}</span>
                    </span>
                  </div>

                  {/* Play Video / Demo Pill on image */}
                  <div className="absolute bottom-3 left-3.5 z-10">
                    <button
                      onClick={() => setActiveDetailProduct(item.skill)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs font-bold backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>Bấm xem hướng dẫn mẫu</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Body - White background with purple headings */}
                <div className="p-5 sm:p-7 space-y-4 bg-white">
                  {/* Category & Free 100% Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-purple-700 font-black text-xs uppercase tracking-wider">
                      {item.categoryTag}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-black text-xs px-2.5 py-0.5 rounded-md uppercase">
                      MIỄN PHÍ 100%
                    </span>
                  </div>

                  {/* Big Card Title - Purple */}
                  <h3 className="font-serif-luxury font-black text-xl sm:text-2xl text-purple-950 leading-snug group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Price Row: Gốc 350.000đ -> 0 ĐỒNG */}
                  <div className="flex items-baseline gap-2.5 pb-2 border-b border-purple-100">
                    <span className="text-slate-400 text-xs sm:text-sm line-through">
                      Giá gốc: {item.originalPrice}
                    </span>
                    <span className="text-emerald-600 font-black text-xl sm:text-2xl font-mono">
                      0 ĐỒNG
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* 3 Key Checkpoints */}
                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <p className="leading-relaxed">
                          <strong className="text-purple-950 font-bold">{b.label}</strong> {b.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote Box - Lavender Purple */}
                  <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 text-purple-900 text-xs sm:text-[13px] italic flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>"{item.quote}"</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: CHỈ 1 nút nhận (Point 4) */}
              <div className="p-5 sm:p-6 pt-0 bg-white">
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-amber-300"
                >
                  <Gift className="w-4 h-4 fill-slate-950" />
                  <span>Nhận Quà 0đ (Vào Nhóm Zalo)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Dedicated Full-Width Zalo Banner - Light Lavender & Purple */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-50 via-white to-indigo-50 border-2 border-purple-300 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start sm:items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg font-black text-xl border border-amber-300">
                <Users className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif-luxury font-black text-xl sm:text-2xl text-purple-950">
                    Nhóm Zalo Nhận Quà Tặng Độc Quyền Hải Triều AI
                  </h3>
                  <span className="bg-rose-600 text-white font-black text-xs px-2.5 py-0.5 rounded-full uppercase">
                    MIỄN PHÍ 0Đ
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Tham gia nhóm Zalo ngay để nhận trọn bộ <strong className="text-purple-900 font-bold">4 Skill Quà Tặng</strong> và được anh Hải Triều hướng dẫn giải đáp trực tiếp!
                </p>

                <div className="flex items-center gap-2 text-xs text-purple-900 font-semibold pt-0.5">
                  <PhoneCall className="w-3.5 h-3.5 text-purple-700" />
                  <span>Hotline / Zalo hỗ trợ kích hoạt:</span>
                  <a href={`https://zalo.me/${BANK_INFO.supportPhone}`} target="_blank" rel="noopener noreferrer" className="font-mono font-black text-purple-700 hover:underline">
                    {BANK_INFO.supportPhone}
                  </a>
                  <span className="text-slate-500">• Không cần quét mã, bấm là mở Zalo ngay!</span>
                </div>
              </div>
            </div>

            {/* Big Yellow Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-400/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-300"
              >
                <Users className="w-5 h-5 fill-slate-950" />
                <span>👉 Vào Nhóm Zalo Nhận Quà Ngay</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {activeDetailProduct && (
        <SkillDetailModal
          product={activeDetailProduct}
          isOpen={!!activeDetailProduct}
          onClose={() => setActiveDetailProduct(null)}
          onUnlockSkill={() => {
            setActiveDetailProduct(null);
            window.open(BANK_INFO.zaloGroupUrl, '_blank');
          }}
        />
      )}

    </section>
  );
};
