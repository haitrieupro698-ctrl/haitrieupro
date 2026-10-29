import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Zap } from 'lucide-react';

const PRESET_TOPICS = [
  {
    id: 't1',
    label: 'Kinh Doanh & Khởi Nghiệp',
    title: 'Sai Lầm 90% Người Bán Hàng Mắc Phải Khiến Khách Im Lặng',
    hook: 'Đừng chào hàng vội! 3 giây đầu tiên này mới là thứ quyết định khách có mua hay không...',
    textOverlay: ['DỪNG NGAY!', '3 LỖI KHIẾN KHÁCH CHẠY MẤT DÉP', 'SỬA NGAY ĐIỀU NÀY'],
    scriptTimeline: [
      { time: '00:00 - 00:03', visual: 'Chỉ tay vào màn hình, biểu cảm cảnh báo nghiêm túc', text: 'DỪNG BÁN HÀNG THEO KIỂU NÀY LẠI!', voice: 'Nếu bạn vẫn nhắn tin giới thiệu sản phẩm kiểu này thì đừng hỏi vì sao khách xem xong chỉ "Đã xem" rồi im lặng!' },
      { time: '00:04 - 00:15', visual: 'Đưa ra bằng chứng tin nhắn thực tế / text nhảy từng dòng', text: 'KHÁCH KHÔNG MUA TÍNH NĂNG', voice: 'Khách hàng không bao giờ quan tâm sản phẩm của bạn tốt cỡ nào, họ chỉ quan tâm nó giải quyết được nỗi đau nào của họ ngay bây giờ.' },
      { time: '00:16 - 00:30', visual: 'Cười tự tin, đưa ra giải pháp 3 bước cụ thể', text: 'CÔNG THỨC 3 BƯỚC', voice: 'Bước 1: Nêu đúng vấn đề. Bước 2: Chỉ ra hậu quả. Bước 3: Đưa giải pháp gọn gàng.' },
      { time: '00:31 - 00:40', visual: 'Chỉ tay xuống phần bình luận / bio', text: 'LƯU LẠI ÁP DỤNG NGAY', voice: 'Bấm lưu video này và áp dụng ngay cho bài viết tiếp theo của bạn nhé!' }
    ]
  },
  {
    id: 't2',
    label: 'Phát Triển Bản Thân',
    title: 'Cách 1 Ý Tưởng AI Kiếm Tiền Thụ Động Cực Đơn Giản',
    hook: 'Nếu bạn có 1 chiếc điện thoại và 30 phút mỗi tối, đừng chỉ lướt xem người khác kiếm tiền...',
    textOverlay: ['30 PHÚT MỖI TỐI', 'KIẾM THÊM THU NHẬP', 'KHÔNG CẦN LỘ MẶT'],
    scriptTimeline: [
      { time: '00:00 - 00:03', visual: 'Cầm điện thoại hiển thị số dư / thông báo tinh tinh', text: 'CHỈ CẦN 30 PHÚT MỖI NGÀY!', voice: 'Bạn có biết chỉ cần 1 mẫu Prompt AI đơn giản này, bạn có thể tạo hàng chục video kịch bản triệu view?' },
      { time: '00:04 - 00:15', visual: 'Màn hình hiển thị prompt ChatGPT chạy chữ nhanh', text: 'AI TỰ LÀM KỊCH BẢN', voice: 'Không cần kỹ năng viết văn, AI sẽ đóng vai chuyên gia biên kịch chuyên nghiệp số 1 cho bạn.' },
      { time: '00:16 - 00:30', visual: 'Hiển thị các video lên xu hướng với text overlay', text: 'CÔNG THỨC GIỮ CHÂN 100%', voice: 'Người xem sẽ bị hút bởi từng dòng chữ xuất hiện đúng nhịp beat nhạc.' }
    ]
  },
  {
    id: 't3',
    label: 'Sức Khỏe & Giảm Cân',
    title: 'Thực Đơn Đốt Mỡ Buổi Sáng Siêu Tốc Cho Dân Văn Phòng',
    hook: 'Uống thứ này trước khi ăn sáng 15 phút, mỡ bụng tự động biến mất không cần nhịn ăn!',
    textOverlay: ['ĐỪNG NHỊN ĂN SÁNG', 'MẸO ĐỐT MỠ 15 PHÚT', 'ÁP DỤNG NGAY HÔM NAY'],
    scriptTimeline: [
      { time: '00:00 - 00:03', visual: 'Cầm ly nước ấm, lắc nhẹ trước ống kính', text: 'BÍ QUYẾT ĐỐT MỠ', voice: 'Đừng bao giờ bỏ bữa sáng nếu bạn muốn giảm mỡ bụng lâu dài!' },
      { time: '00:04 - 00:18', visual: 'Chèn text công thức nước ấm chanh gừng mật ong', text: 'CÔNG THỨC 1 LY NƯỚC ẤM', voice: 'Uống ly này khi vừa thức dậy sẽ kích hoạt hệ trao đổi chất chạy hết công suất cả ngày.' }
    ]
  }
];

interface PromptSimulatorProps {
  onBuyClick: () => void;
}

export const PromptSimulator: React.FC<PromptSimulatorProps> = ({ onBuyClick }) => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTopic = PRESET_TOPICS[selectedTopicIndex];

  const handleCopySample = () => {
    const fullText = `CHỦ ĐỀ: ${currentTopic.title}\nCÂU HOOK 3S: ${currentTopic.hook}\nTEXT OVERLAY: ${currentTopic.textOverlay.join(' - ')}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative border-y border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold tracking-wider uppercase mb-2">
            <Zap className="w-3.5 h-3.5 fill-purple-700 text-purple-700" />
            <span>TRẢI NGHIỆM TRỰC TIẾP</span>
          </div>
          <h2 className="font-serif-luxury font-black text-2xl sm:text-4xl text-slate-900">
            THỬ XEM SỨC MẠNH CỦA <span className="purple-gradient-text">SKILL AI</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Chọn chủ đề bên dưới để xem kịch bản mẫu được tạo ra chuẩn xác từ bộ Skill Text Overlay của Hải Triều AI!
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {PRESET_TOPICS.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicIndex(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTopicIndex === idx
                  ? 'purple-gradient-btn text-white shadow-md shadow-purple-600/30 scale-105'
                  : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>

        {/* Interactive Result Card */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 shadow-lg shadow-purple-900/5 relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-purple-100 gap-3">
            <div>
              <span className="text-xs font-mono text-purple-700 font-extrabold uppercase tracking-widest">
                [OUTPUT CHUẨN TỪ SKILL PROMPT]
              </span>
              <h3 className="font-serif-luxury font-bold text-lg sm:text-xl text-slate-900 mt-1">
                {currentTopic.title}
              </h3>
            </div>
            <button
              onClick={handleCopySample}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200 transition-colors cursor-pointer self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép mẫu</span>
                </>
              )}
            </button>
          </div>

          {/* Hook & Text overlay previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
              <span className="text-[11px] font-extrabold text-purple-800 uppercase tracking-wider block mb-1">
                ⚡ 3 Giây Đầu Thôi Miên (Hook)
              </span>
              <p className="text-slate-900 text-sm font-semibold italic">
                "{currentTopic.hook}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
              <span className="text-[11px] font-extrabold text-purple-800 uppercase tracking-wider block mb-1">
                📱 Text Overlay Hiển Thị Trên Màn Hình
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {currentTopic.textOverlay.map((txt, i) => (
                  <span
                    key={i}
                    className="bg-white border border-purple-300 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-2xs"
                  >
                    #{txt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Timeline Table */}
          <div className="overflow-x-auto mt-2 rounded-xl border border-purple-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-purple-100/70 text-purple-900 font-bold text-[11px] uppercase border-b border-purple-200">
                <tr>
                  <th className="py-2.5 px-3">Thời gian</th>
                  <th className="py-2.5 px-3">Hình ảnh / Góc quay</th>
                  <th className="py-2.5 px-3">Chữ trên màn hình</th>
                  <th className="py-2.5 px-3">Lời thoại / Giọng đọc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {currentTopic.scriptTimeline.map((item, index) => (
                  <tr key={index} className="hover:bg-purple-50/50 transition-colors">
                    <td className="py-3 px-3 font-mono text-purple-700 font-bold whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="py-3 px-3 text-slate-700">
                      {item.visual}
                    </td>
                    <td className="py-3 px-3">
                      <span className="bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded border border-purple-200 text-xs">
                        {item.text}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-800 font-medium">
                      {item.voice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Banner inside simulator */}
          <div className="mt-6 pt-5 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-700 text-xs sm:text-sm text-center sm:text-left">
              <span className="text-slate-900 font-bold">Muốn sở hữu ngay trọn bộ Prompt này cho mọi ngành nghề?</span>
              <p className="text-purple-700 text-xs mt-0.5 font-medium">Chỉ 99.000 VNĐ • Nhận file và tham gia nhóm Zalo hướng dẫn ngay</p>
            </div>
            <button
              onClick={onBuyClick}
              className="purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-md hover:scale-105 transition-transform"
            >
              <span>MUA SKILL CHỈ 99K</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
