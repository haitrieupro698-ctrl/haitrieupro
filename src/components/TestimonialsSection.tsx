import React from 'react';
import { Star, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/skillsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#090514] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-2">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>KẾT QUẢ THỰC TẾ</span>
          </div>
          <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-white">
            HỌC VIÊN NÓI GÌ VỀ <span className="purple-gradient-text">HẢI TRIỀU AI</span>?
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm mt-2">
            Hơn 2.500+ học viên đã áp dụng thành công kịch bản Text Overlay để tăng view và chuyển đổi ra đơn hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#130a29] border border-purple-500/30 rounded-2xl p-6 shadow-xl relative flex flex-col justify-between purple-border-glow"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>

                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-purple-300">
                    {item.role}
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
