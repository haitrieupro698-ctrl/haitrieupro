import { BankAccountInfo, SkillProduct } from '../types';

export const BANK_INFO: BankAccountInfo = {
  bankName: 'SHB',
  bankFullName: 'Ngân hàng TMCP Sài Gòn - Hà Nội',
  bankShortCode: 'SHB',
  accountNumber: '0913179424',
  accountOwner: 'NGUYEN HAI TRIEU',
  defaultAmount: 99000,
  qrStaticUrl: '/assets/aistudio/image_7dffb38f.png',
  zaloGroupUrl: 'https://zalo.me/g/bd8u0pauixb47416hzxo',
  supportPhone: '0913179424',
  supportEmail: 'haitrieu.pro698@gmail.com',
};

export const YOUTUBE_VIDEO = {
  id: 'lAAvb2_MWdM',
  url: 'https://youtube.com/shorts/lAAvb2_MWdM?si=wJuu6bCNj8ULoI8p',
  embedUrl: 'https://www.youtube.com/embed/lAAvb2_MWdM?autoplay=0&rel=0',
  title: 'Bí Quyết Làm Video Triệu View Với Kịch Bản Text Overlay Cùng Hải Triều AI',
};

export const SKILL_PRODUCTS: SkillProduct[] = [
  {
    id: 'skill-text-overlay',
    name: 'TEXT OVERLAY TRIỆU VIEW',
    tagline: 'Chỉ cần một ý tưởng – Có ngay kịch bản video thu hút!',
    badge: 'BÁN CHẠY NHẤT ★',
    price: 99000,
    originalPrice: 299000,
    highlight: true,
    iconName: 'Sparkles',
    description:
      'Công thức chuẩn tạo video chữ xuất hiện trên màn hình, câu mở đầu hook 3s cuốn hút, giữ chân người xem từ đầu đến cuối trên TikTok, Facebook Reels và YouTube Shorts.',
    features: [
      'Bộ Prompt chuyên sâu tạo cấu trúc kịch bản Timeline (Visual - Audio - Text On Screen)',
      'Công thức 3 Giây Đầu (Hook) "thôi miên" khiến người xem không thể lướt qua',
      'Hướng dẫn chèn chữ Text Overlay nhịp điệu kích thích dopamine người đọc',
      'Cách dùng với ChatGPT, Claude, Gemini không cần biết viết kịch bản',
      'Tặng danh sách 30 câu mở đầu mẫu ứng dụng ngay cho mọi ngành nghề',
      'Tham gia nhóm Zalo hỗ trợ và cập nhật kịch bản mới trọn đời',
    ],
    bonuses: [
      'Tài liệu PDF hướng dẫn từng bước chi tiết',
      'Quyền truy cập kho Prompt cập nhật liên tục',
    ],
  },
  {
    id: 'skill-expert-storytelling',
    name: 'KỊCH BẢN CHUYÊN GIA & BÁN HÀNG',
    tagline: 'Biến kiến thức chuyên môn thành nội dung chạm cảm xúc',
    badge: 'XÂY KÊNH CHUYÊN NGHIỆP',
    price: 99000,
    originalPrice: 299000,
    highlight: false,
    iconName: 'Mic',
    description:
      'Bộ khung kịch bản giúp bạn tự tin chia sẻ kiến thức, tâm sự, định vị thương hiệu cá nhân uy tín và khéo léo lồng ghép bán sản phẩm/dịch vụ.',
    features: [
      'Công thức kịch bản "Vấn đề - Nỗi đau - Giải pháp - Hành động" chuẩn tâm lý',
      'Cách viết lời thoại tự nhiên, gần gũi như đang trò chuyện với bạn bè',
      'Kỹ thuật lồng ghép kêu gọi hành động (Call To Action) chuyển đổi cao',
      'Prompt phân tích chân dung khách hàng mục tiêu theo từng độ tuổi',
      'Tặng 20 mẫu kịch bản ngành nghề: Bất động sản, Đào tạo, Sức khỏe, Bán lẻ',
      'Tham gia nhóm Zalo giải đáp và sửa kịch bản',
    ],
  },
  {
    id: 'skill-ai-character-visual',
    name: 'PROMPT TẠO ẢNH & VIDEO AI ĐỘC BẢN',
    tagline: 'Tạo hình ảnh và video AI sắc nét, đúng phong cách cá nhân',
    badge: 'CÔNG NGHỆ MỚI',
    price: 99000,
    originalPrice: 299000,
    highlight: false,
    iconName: 'Image',
    description:
      'Tuyển tập Prompt Midjourney, Stable Diffusion và công cụ tạo nhân vật AI nhất quán nhiều góc độ, làm tư liệu hình ảnh độc quyền cho video của bạn.',
    features: [
      'Prompt tạo nhân vật AI nhận diện thương hiệu nhất quán 360 độ',
      'Cách phối màu, ánh sáng cinematic đẳng cấp sang trọng',
      'Kỹ thuật chuyển ảnh AI thành video động mượt mà',
      'Bộ từ khóa độc quyền tăng độ chi tiết 4K - 8K',
      'Danh sách các công cụ AI miễn phí tốt nhất hiện nay',
      'Hỗ trợ kỹ thuật thực hành trong nhóm Zalo',
    ],
  },
  {
    id: 'combo-all-skills',
    name: 'TRỌN BỘ COMBO 3 SKILL HẢI TRIỀU AI',
    tagline: 'Gói toàn diện nhất – Sở hữu tất cả công cụ sáng tạo đỉnh cao',
    badge: 'TIẾT KIỆM 78% • SIÊU ƯU ĐÃI',
    price: 199000,
    originalPrice: 897000,
    highlight: true,
    iconName: 'Crown',
    description:
      'Sở hữu trọn bộ cả 3 Skill: Text Overlay Triệu View + Kịch Bản Chuyên Gia + Prompt Ảnh Video AI cùng toàn bộ quà tặng đặc quyền từ Hải Triều AI.',
    features: [
      'Bao gồm TOÀN BỘ 3 Skill cao cấp phía trên (Trị giá 897.000đ)',
      'Tặng Kho 50+ Template CapCut thịnh hành chỉ cần thay chữ và video',
      'Tặng Ebook "Bí kíp tối ưu kênh ngắn đạt 100K người theo dõi đầu tiên"',
      'Ưu tiên giải đáp kịch bản 1:1 trực tiếp từ Hải Triều trong Zalo',
      'Cập nhật toàn bộ các bài học, Skill và Prompt mới trong tương lai hoàn toàn miễn phí',
      'Nhận link tải tài nguyên ngay tức thì sau khi quét mã VietQR',
    ],
    bonuses: [
      'Tiết kiệm ngay 698.000đ so với mua lẻ',
      'Huy hiệu Thành Viên VIP trong Nhóm Zalo',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Nguyễn Văn Hùng',
    role: 'Kinh doanh thời trang & TikToker',
    comment:
      'Áp dụng kịch bản Text Overlay của anh Hải Triều, video đầu tiên của mình đã lên 240K view chỉ sau 1 ngày! Khung prompt quá dễ làm, chỉ việc điền ý tưởng là ra kịch bản chi tiết.',
    stars: 5,
  },
  {
    name: 'Trần Thị Mai Phương',
    role: 'Tư vấn Tài chính & Bảo hiểm',
    comment:
      'Trước đây mình ngồi cả buổi chiều không viết nổi 1 kịch bản. Giờ chỉ mất đúng 3 phút với bộ Skill này. Đặc biệt vào nhóm Zalo được anh Hải Triều hướng dẫn rất tận tình.',
    stars: 5,
  },
  {
    name: 'Lê Hoàng Nam',
    role: 'Sáng tạo nội dung số',
    comment:
      'Thanh toán qua quét mã VietQR SHB siêu nhanh, tiền chuyển xong là có thông tin vào nhóm Zalo nhận tài liệu ngay. Quá uy tín và chuyên nghiệp!',
    stars: 5,
  },
];

export const FAQS = [
  {
    question: 'Tôi chưa từng làm video hoặc chưa rành về AI thì có làm được không?',
    answer:
      'Hoàn toàn làm được! Toàn bộ Skill của Hải Triều AI được thiết kế theo dạng "Cầm tay chỉ việc - Điền vào chỗ trống". Bạn chỉ cần copy mẫu prompt, dán vào ChatGPT hoặc Gemini và điền chủ đề bạn muốn làm, AI sẽ tự động sinh ra kịch bản chi tiết từng giây cho bạn.',
  },
  {
    question: 'Sau khi chuyển khoản bao lâu thì tôi nhận được Skill và tài liệu?',
    answer:
      'Ngay sau khi bạn chuyển khoản thành công qua mã VietQR, hệ thống sẽ xác nhận và đưa bạn vào Nhóm Zalo riêng. Bạn sẽ được duyệt và tải toàn bộ file tài liệu, video hướng dẫn và bộ Prompt ngay lập tức. Hải Triều cũng có mặt trong nhóm Zalo để hỗ trợ bạn 24/7.',
  },
  {
    question: 'Tôi có thể dùng mã QR để quét bằng app ngân hàng nào?',
    answer:
      'Bạn có thể quét bằng bất kỳ ứng dụng ngân hàng nào có tính năng VietQR/Napas247 (như Vietcombank, Techcombank, MBBank, BIDV, Agribank, VPBank, SHB, Cake, Viettel Money...). Mã QR đã được tích hợp sẵn số tài khoản SHB 0913179424 và số tiền chính xác, giúp bạn không cần phải nhập tay.',
  },
  {
    question: 'Nếu cần hỗ trợ kỹ thuật hoặc có thắc mắc tôi liên hệ ai?',
    answer:
      'Bạn có thể tham gia trực tiếp nhóm Zalo cộng đồng qua link https://zalo.me/g/bd8u0pauixb47416hzxo hoặc liên hệ trực tiếp số điện thoại / Zalo: 0913.179.424 (Hải Triều AI) để được hỗ trợ tức thì.',
  },
];
