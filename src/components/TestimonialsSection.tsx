import React from 'react';
import { Star, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/skillsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#faf7ff] relative overflow-hidden border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold tracking-wider uppercase mb-2">
            <Award className="w-3.5 h-3.5 text-purple-700" />
            <span>KẾT QUẢ THỰC TẾ</span>
          </div>
          <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900">
            HỌC VIÊN NÓI GÌ VỀ <span className="purple-gradient-text">HẢI TRIỀU AI</span>?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Hơn 2.500+ học viên đã áp dụng thành công kịch bản Text Overlay để tăng view và chuyển đổi ra đơn hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-purple-100 hover:border-purple-300 rounded-3xl p-6 shadow-md shadow-purple-900/5 relative flex flex-col justify-between transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-purple-700 font-semibold">
                    {item.role}
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
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
