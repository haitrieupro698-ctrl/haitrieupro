import React from 'react';
import { Star, Award, CheckCircle2, Quote } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  resultBadge: string;
  comment: string;
  stars: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Chị Mai Lan',
    role: 'Chủ shop thời trang & livestream',
    avatar: '/images/student_mai_lan.jpg',
    resultBadge: '🔥 45.000+ View sau 2 ngày',
    comment: 'Trước đây mình rất ngại quay video vì không biết nói gì trước máy quay. Sau khi dùng Skill kịch bản Text Overlay của Hải Triều, mình làm được ngay 3 video đầu tiên và có video cán mốc 45.000 lượt xem chỉ sau 2 ngày!',
    stars: 5,
  },
  {
    name: 'Anh Quốc Bảo',
    role: 'Tư vấn bất động sản & tài chính',
    avatar: '/images/student_quoc_bao.jpg',
    resultBadge: '⏱️ Tiết kiệm 3 tiếng/ngày',
    comment: 'Cực kỳ thực tế và dễ hiểu! Mình chỉ cần dán prompt vào ChatGPT là có sẵn timeline chi tiết từng giây chữ xuất hiện trên màn hình. Rất đáng giá cho người bận rộn.',
    stars: 5,
  },
  {
    name: 'Thu Hằng',
    role: 'Nhà sáng tạo nội dung ẩm thực',
    avatar: '/images/student_thu_hang.jpg',
    resultBadge: '⭐ Đã mở khóa 3 Skill',
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
            <span>KẾT QUẢ THỰC TẾ CỦA HỌC VIÊN</span>
          </div>
          <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900">
            HỌC VIÊN NÓI GÌ VỀ <span className="purple-gradient-text">HẢI TRIỀU AI</span>?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Hơn 2.500+ thành viên đã nhận Skill và áp dụng kịch bản Text Overlay để tăng view và chuyển đổi ra đơn hàng thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-md border border-purple-200/90 hover:border-purple-300 hover:shadow-xl transition-all relative flex flex-col justify-between group"
            >
              <div>
                {/* Result Badge & 5 Stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-purple-900 bg-purple-100/80 px-2.5 py-0.5 rounded-full border border-purple-200 shadow-2xs">
                    {item.resultBadge}
                  </span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-purple-200 absolute -top-2 -left-1 -z-0 opacity-60" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative z-10 pl-2">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Student Identity with Real Photo */}
              <div className="pt-4 border-t border-purple-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-300 shadow-sm shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </div>
                    <div className="text-[11px] text-purple-700 font-semibold">
                      {item.role}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold shrink-0">
                  Đã xác thực
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
