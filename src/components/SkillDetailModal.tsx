import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Copy, 
  CheckCheck, 
  ArrowRight, 
  ShieldCheck, 
  FileCode, 
  Star, 
  MessageCircle,
  Cpu,
  Compass
} from 'lucide-react';
import { SkillProduct } from '../types';
import { BANK_INFO } from '../data/skillsData';

interface SkillDetailModalProps {
  product: SkillProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onUnlockSkill: (productId: string) => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onUnlockSkill,
}) => {
  const [activeTab, setActiveTab] = useState<'howtouse' | 'sample' | 'skillmd'>('howtouse');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedSkillMd, setCopiedSkillMd] = useState(false);

  if (!isOpen || !product) return null;

  const formatVND = (amount: number) => {
    if (amount === 0) return 'MIỄN PHÍ [0đ]';
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(product.samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopySkillMd = () => {
    navigator.clipboard.writeText(product.skillMdSnippet);
    setCopiedSkillMd(true);
    setTimeout(() => setCopiedSkillMd(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-purple-200 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner - shrink-0 to prevent vertical squishing */}
        <div className="shrink-0 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white p-4 sm:p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 z-10"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-1.5 pr-10">
            <span className="text-[11px] sm:text-xs font-bold text-white bg-white/20 px-2.5 py-0.5 rounded-full">
              {product.sanhTitle || product.categoryName}
            </span>
            {product.badge && (
              <span className="text-[11px] sm:text-xs font-black bg-amber-300 text-slate-950 px-2 py-0.5 rounded-full shadow-xs">
                {product.badge}
              </span>
            )}
            <div className="flex items-center gap-1 text-xs text-amber-200 ml-auto font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{product.rating}</span>
              <span className="text-purple-200 hidden sm:inline">({product.reviewsCount} đánh giá)</span>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-start">
            {product.imageUrl && (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-14 sm:w-16 aspect-[3/4] rounded-xl object-cover border-2 border-white/40 shadow-lg shrink-0 mt-0.5"
              />
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-2xl font-black text-white font-serif-luxury tracking-tight pr-6">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-2xl font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">
                {product.description}
              </p>
            </div>
          </div>

          {/* AI Tools Supported Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2.5 border-t border-white/20">
            <span className="text-[10px] sm:text-[11px] text-purple-200 font-semibold flex items-center gap-1">
              <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Công cụ hỗ trợ:
            </span>
            {product.aiTools.map((tool, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] bg-white/15 text-white px-2 py-0.5 rounded-md font-mono border border-white/20"
              >
                {tool}
              </span>
            ))}
            <span className="text-[11px] text-purple-200 ml-auto hidden sm:inline">
              Đã dùng: <strong>{product.downloadsCount.toLocaleString()}</strong> học viên
            </span>
          </div>
        </div>

        {/* Tab Navigation Controls - shrink-0 & clear borders so tabs are NEVER sliced or overlapped */}
        <div className="shrink-0 flex items-center gap-1 sm:gap-2 px-3 sm:px-5 bg-purple-50/90 border-b border-purple-200 overflow-x-auto scrollbar-none text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('howtouse')}
            className={`py-2.5 sm:py-3 px-2.5 sm:px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 shrink-0 ${
              activeTab === 'howtouse'
                ? 'border-purple-700 text-purple-900 bg-white/80 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4 text-purple-600" />
            <span>Cách Dùng & 3 Bước</span>
          </button>

          <button
            onClick={() => setActiveTab('sample')}
            className={`py-2.5 sm:py-3 px-2.5 sm:px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 shrink-0 ${
              activeTab === 'sample'
                ? 'border-purple-700 text-purple-900 bg-white/80 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Xem Prompt Mẫu</span>
          </button>

          <button
            onClick={() => setActiveTab('skillmd')}
            className={`py-2.5 sm:py-3 px-2.5 sm:px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 shrink-0 ${
              activeTab === 'skillmd'
                ? 'border-purple-700 text-purple-900 bg-white/80 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-4 h-4 text-indigo-600" />
            <span>Cấu Trúc SKILL.md</span>
          </button>
        </div>

        {/* Tab Body Content - flex-1 min-h-0 overflow-y-auto ensures smooth scrolling and zero overlap */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-4 text-slate-800 text-sm bg-white">
          
          {/* TAB 1: CÁCH DÙNG (Skill giúp gì, Chuẩn bị gì, 3 bước thực hiện, Kết quả nhận được) */}
          {activeTab === 'howtouse' && (
            <div className="space-y-4">
              
              {/* Full HD Poster Preview for Visual Mastery */}
              {product.imageUrl && (
                <div className="rounded-2xl overflow-hidden border border-purple-200 shadow-md bg-slate-950 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-xs font-bold px-3.5 py-2 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Poster Skill Thực Chiến • Chuẩn HD</span>
                    </div>
                    <span className="text-[10px] text-purple-200 font-mono">Hải Triều AI</span>
                  </div>
                  <div className="w-full flex items-center justify-center p-3 bg-slate-900/90">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="max-h-[500px] w-auto max-w-full object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
              
              {/* 1. Skill giúp gì */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-50/80 border border-purple-200">
                <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm sm:text-base mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
                  <h4>Skill Giúp Gì Cho Bạn?</h4>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm pl-8">
                  {product.skillHelps || product.description}
                </p>
              </div>

              {/* 2. Chuẩn bị gì */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
                  <h4>Cần Chuẩn Bị Gì Trước Khi Dùng?</h4>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm pl-8">
                  {product.preparation || 'Chỉ cần một chiếc điện thoại hoặc máy tính có kết nối mạng và tài khoản ChatGPT hoặc Gemini miễn phí.'}
                </p>
              </div>

              {/* 3. 3 bước thực hiện */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-50/80 border border-indigo-200">
                <div className="flex items-center gap-2 text-indigo-950 font-extrabold text-sm sm:text-base mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
                  <h4>3 Bước Thực Hiện Chi Tiết:</h4>
                </div>
                <div className="space-y-2 pl-2 sm:pl-4">
                  {(product.steps || [
                    'Bước 1: Mở tệp hướng dẫn Skill và chọn khung kịch bản phù hợp với ngành của bạn.',
                    'Bước 2: Dán prompt mẫu vào công cụ AI (ChatGPT / Gemini / Claude) và điền thông tin sản phẩm.',
                    'Bước 3: Nhận kết quả hoàn chỉnh ngay lập tức và áp dụng vào bài đăng hoặc video của bạn.',
                  ]).map((step, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-indigo-100 flex items-start gap-2.5 sm:gap-3 shadow-2xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Kết quả nhận được */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/80 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-950 font-extrabold text-sm sm:text-base mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold shrink-0">4</span>
                  <h4>Kết Quả Nhận Được:</h4>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm pl-8 font-medium">
                  {product.result || 'Sản phẩm đầu ra rõ ràng, sắc nét, tiết kiệm 90% thời gian làm nội dung và tăng lượng khách hàng tương tác thực tế.'}
                </p>
              </div>

              {/* Hỗ trợ Zalo */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Có kèm video hướng dẫn cầm tay chỉ việc và hỗ trợ 24/7 trong nhóm Zalo của Hải Triều AI.</span>
                </div>
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 font-bold whitespace-nowrap self-end sm:self-auto"
                >
                  Vào nhóm Zalo →
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: PROMPT SAMPLE */}
          {activeTab === 'sample' && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Prompt Mẫu Thực Chiến (Chạy Thử):</h4>
                  <p className="text-xs text-slate-500">Sao chép câu lệnh này dán trực tiếp vào ChatGPT/Claude để thử nghiệm ngay</p>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md shrink-0"
                >
                  {copiedPrompt ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Đã Copy</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sample Prompt Box */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-purple-200 font-mono text-xs border border-slate-800 whitespace-pre-wrap leading-relaxed shadow-md">
                {product.samplePrompt}
              </div>

              {/* Sample Output Box */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-50/80 border border-purple-200">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900 block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Kết Quả AI Trả Về Mẫu:
                </span>
                <div className="text-xs text-slate-700 font-sans leading-relaxed whitespace-pre-wrap">
                  {product.sampleOutput}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKILL.MD STRUCTURE */}
          {activeTab === 'skillmd' && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Cấu Trúc Tệp SKILL.md Chuẩn Hóa:</h4>
                  <p className="text-xs text-slate-500">
                    Tệp cấu hình Agent Skills chuẩn Markdown được tối ưu hóa cho ChatGPT, Claude và Gemini.
                  </p>
                </div>
                <button
                  onClick={handleCopySkillMd}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  {copiedSkillMd ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Đã Copy</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SKILL.md</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl sm:rounded-2xl bg-slate-900 text-emerald-400 p-3.5 sm:p-4 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed shadow-inner">
                <pre>{product.skillMdSnippet}</pre>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-slate-700 flex items-start gap-2.5">
                <FileCode className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Cách dùng tệp SKILL.md:</span>
                  <span>
                    Tải tệp <code>SKILL.md</code> vào <strong>Custom GPTs (ChatGPT)</strong> hoặc <strong>Projects (Claude)</strong>, AI sẽ tự động hoạt động theo đúng quy chuẩn thực chiến của Hải Triều AI.
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Action Bar - shrink-0 to prevent overlapping */}
        <div className="shrink-0 px-3.5 py-3 sm:px-5 sm:py-3.5 border-t border-purple-100 bg-slate-50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div>
              {product.originalPrice > product.price && (
                <div className="text-[10px] sm:text-[11px] text-slate-400 line-through">
                  Giá gốc: {new Intl.NumberFormat('vi-VN').format(product.originalPrice)} đ
                </div>
              )}
              <div className="text-xl sm:text-2xl font-black font-serif-luxury text-purple-900 leading-none">
                {formatVND(product.price)}
              </div>
            </div>
            {product.originalPrice > product.price && (
              <span className="hidden sm:inline-block text-[11px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                Ưu đãi đặc quyền
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white hover:bg-slate-100 text-blue-700 border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Hỏi Qua Zalo</span>
            </a>

            {product.isZaloGift ? (
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>VÀO ZALO NHẬN QUÀ 0Đ</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </a>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onUnlockSkill(product.id);
                }}
                className="px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-600 to-fuchsia-600 hover:from-purple-800 hover:to-indigo-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                <span>{product.price === 0 ? 'NHẬN 0Đ NGAY' : 'MỞ KHÓA NGAY (49K)'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
