import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Sparkles, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/skillsData';

interface FAQSectionProps {
  onOpenChatbot?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenChatbot }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white text-slate-900 relative overflow-hidden border-t border-b border-purple-100">
      {/* Background glowing ambient effects in subtle lavender */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4 font-serif-luxury">
            Có điều gì chị <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-700 to-fuchsia-700">còn băn khoăn?</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hỏi đúng để bắt đầu đúng. Nếu vẫn chưa rõ, hãy nhắn <span className="text-purple-800 font-bold underline decoration-purple-400 underline-offset-4">Trợ lý HẢI TRIỀU AI</span>.
          </p>
        </div>

        {/* Accordion List (Single item open at a time) */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-purple-50/80 border-purple-300 shadow-md ring-1 ring-purple-200'
                    : 'bg-[#f8f9fe] border-purple-200/80 hover:border-purple-300 hover:bg-purple-50/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base pr-2 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-purple-800' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-purple-200/70 pt-4 bg-white/70 pl-14 pr-6">
                    <p className="font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button to trigger Chatbot */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenChatbot}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-fuchsia-600 hover:from-purple-800 hover:to-indigo-700 text-white font-bold text-base sm:text-lg shadow-xl shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/40 group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border border-white/60 shrink-0 bg-purple-800 shadow-xs">
              <img
                src="/images/tro-ly-hai-trieu.jpg"
                alt="Trợ lý Hải Triều AI"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
                }}
              />
            </div>
            <span>Nhắn Trợ lý HẢI TRIỀU AI →</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">💬</span>
          </button>
          <p className="text-slate-500 text-xs mt-3 font-medium">
            Hỗ trợ tự động 24/7 • Giải đáp chi tiết từng thắc mắc và hướng dẫn nhận tài nguyên
          </p>
        </div>

      </div>
    </section>
  );
};
