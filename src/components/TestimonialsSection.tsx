import React from 'react';
import { Star, Award } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Chị Mai Lan',
    role: 'Chủ shop thời trang & livestream',
    comment: 'Trước đây mình rất ngại quay video vì không biết nói gì trước máy quay. Sau khi dùng Skill kịch bản Text Overlay của Hải Triều, mình làm được ngay 3 video đầu tiên và có video cán mốc 45.000 lượt xem chỉ sau 2 ngày!',
    stars: 5,
  },
  {
    name: 'Anh Quốc Bảo',
    role: 'Tư vấn bất động sản & tài chính',
    comment: 'Cực kỳ thực tế và dễ hiểu! Mình chỉ cần dán prompt vào ChatGPT là có sẵn timeline chi tiết từng giây chữ xuất hiện trên màn hình. Rất đáng giá cho người bận rộn.',
    stars: 5,
  },
  {
    name: 'Thu Hằng',
    role: 'Nhà sáng tạo nội dung ẩm thực',
    comment: 'Thích nhất là sự nhiệt tình trong nhóm Zalo của anh Hải Triều. Mỗi lần câu lệnh AI ra chưa đúng ý là được anh sửa trực tiếp ngay. Đã ủng hộ 3 Skill rồi!',
    stars: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f8f9fe] text-slate-900 relative overflow-hidden border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-purple-600" />
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
              className="bg-white rounded-3xl p-6 shadow-md border border-purple-200/90 hover:border-purple-300 hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
                <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center text-xs font-bold">
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
