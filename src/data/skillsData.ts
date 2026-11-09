import { BankAccountInfo, SkillProduct } from '../types';

export const BANK_INFO: BankAccountInfo = {
  bankName: 'SHB',
  bankFullName: 'Ngân hàng TMCP Sài Gòn - Hà Nội',
  bankShortCode: 'SHB',
  accountNumber: '0913179424',
  accountOwner: 'TRỊNH HAI TRIEU',
  defaultAmount: 199000,
  qrStaticUrl: 'https://img.vietqr.io/image/SHB-0913179424-compact2.png?amount=199000&accountName=TRINH%20HAI%20TRIEU',
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

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'Tất Cả Skill', icon: 'Sparkles', count: 41 },
  { id: 'zalo-gifts', label: '🎁 4 Skill Quà Tặng 0đ (Vào Zalo)', icon: 'Gift', count: 4 },
  { id: 'sanh-1', label: 'Sảnh I — Hình Ảnh Thương Hiệu', icon: 'Camera', count: 8 },
  { id: 'sanh-2', label: 'Sảnh II — Video Bán Hàng', icon: 'Video', count: 9 },
  { id: 'sanh-3', label: 'Sảnh III — Chatbot & Tự Động Hóa (Sắp mở)', icon: 'Bot', count: 0, isUpcoming: true },
  { id: 'sanh-4', label: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ', icon: 'Layout', count: 15 },
  { id: 'sanh-5', label: 'Sảnh V — Video VIP & Đa Kênh', icon: 'Crown', count: 9 },
];

export const SKILL_SANH_LIST = [
  {
    id: 'sanh-1',
    code: 'SẢNH I',
    name: 'HÌNH ẢNH THƯƠNG HIỆU',
    description: 'Xây dựng hình ảnh cá nhân và sản phẩm rõ nét, đúng thần thái chuyên gia và thu hút khách dừng lại.',
    icon: 'Camera',
  },
  {
    id: 'sanh-2',
    code: 'SẢNH II',
    name: 'VIDEO BÁN HÀNG',
    description: '9 kỹ năng video bán hàng – Text Overlay Triệu View 199k (VIP bán chạy), các kỹ năng còn lại đồng giá 135.000đ. Kịch bản video 30 giây, nói chuyện tự nhiên trước máy quay, cắt video dài thành short và video giải đáp thắc mắc.',
    icon: 'Video',
  },
  {
    id: 'sanh-3',
    code: 'SẢNH III',
    name: 'CHATBOT & TỰ ĐỘNG HÓA',
    description: 'Kỹ năng đang được Hải Triều AI kiểm thử trước khi phát hành. Bộ công cụ & Skill đang hoàn thiện.',
    icon: 'Bot',
    isUpcoming: true,
  },
  {
    id: 'sanh-4',
    code: 'SẢNH IV',
    name: 'TRANG BÁN HÀNG & DỊCH VỤ',
    description: 'Thiết kế landing page giới thiệu dịch vụ, đăng ký workshop và trang bán sản phẩm số chuyên nghiệp.',
    icon: 'Layout',
  },
  {
    id: 'sanh-5',
    code: 'SẢNH V',
    name: 'VIDEO VIP & ĐA KÊNH',
    description: '9 kỹ năng video & đa kênh – đồng giá 135.000đ. Khai thác video AI theo kịch bản, tối ưu SEO YouTube và trợ lý tự động nghiên cứu chủ đề xu hướng.',
    icon: 'Crown',
  },
];

export const SKILL_PRODUCTS: SkillProduct[] = [
  // =========================================================================
  // ⭐ SKILL VIP BÁN CHẠY SỐ 1 — ĐẶT HÀNG NHIỀU NHẤT
  // =========================================================================
  {
    id: 'skill-text-overlay',
    name: 'Text Overlay Triệu View (1,000,000+ Views)',
    bannerTitle: 'TEXT OVERLAY TRIỆU VIEW (1,000,000+ VIEWS)',
    tagline: 'Chỉ cần một ý tưởng – Có ngay kịch bản video thu hút triệu người xem',
    badge: '🔥 SKILL VIP BÁN CHẠY #1 • 199.000Đ',
    cardBadge: 'HOT TREND',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SÀNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SÀNH II — VIDEO BÁN HÀNG',
    isGift: false,
    isZaloGift: false,
    price: 199000,
    originalPrice: 350000,
    highlight: true,
    aiTools: ['ChatGPT', 'Canva', 'CapCut', 'Photoshop'],
    rating: 5.0,
    reviewsCount: 1450,
    downloadsCount: 12800,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Flame',
    imageUrl: '/assets/skill_text_overlay_poster.jpg',
    description: 'Bí quyết đặt tiêu đề thôi miên kéo khách dừng lướt trong 2 giây đầu và kịch bản video text overlay giữ chân người xem đến giây cuối cùng.',
    skillHelps: 'Tạo ra những video và hình ảnh có chữ xuất hiện đập vào mắt người xem ngay 2 giây đầu, khiến họ phải dừng lướt newsfeed để xem trọn vẹn.',
    preparation: 'Ý tưởng ban đầu hoặc chủ đề sản phẩm/dịch vụ bạn đang kinh doanh.',
    steps: [
      'Bước 1: Nạp câu chủ đề vào prompt Text Overlay của Hải Triều AI để AI lọc ra 3-5 từ đắt giá nhất.',
      'Bước 2: Chọn mẫu bố cục chữ (chữ viền neon, chữ đổ bóng 3D, chữ nền hộp mờ thanh lịch).',
      'Bước 3: Xuất kịch bản & hình ảnh hoàn thiện với sự tương phản chữ cực rõ, người xem lướt nhanh vẫn đọc được.',
    ],
    result: 'Video/ảnh có chữ bắt mắt, tăng gấp 3 lần tỷ lệ dừng lướt và nhận hàng ngàn lượt tương tác.',
    features: [
      'Bố cục chữ khoa học theo quy tắc thị giác người dùng',
      'Tương phản tuyệt đối trên nền sáng lẫn nền tối',
      'Phù hợp video ngắn TikTok, Reels, Shorts và bài viết bán hàng',
    ],
    skillMdSnippet: `---
name: text-overlay-trieu-view
version: 2.0.0
---
# Quy tắc Text Overlay Giữ Chân
1. Không quá 7 từ trên 1 dòng.
2. Từ khóa chính phóng to 150%, đổi màu nhấn.
3. Đặt ở vị trí mắt dễ quét nhất (vùng 1/3 phía trên).`,
    samplePrompt: 'Tạo công thức chữ hiển thị trên màn hình cho chủ đề "Sai Lầm Bán Hàng Khiến Khách Im Lặng", phong cách chữ in hoa đậm, có viền tương phản nổi bật.',
    sampleOutput: 'Bố cục chữ 3 tầng: DỪNG LẠI! (Đỏ) - 3 LỖI KHIẾN KHÁCH CHẠY (Trắng viền đen) - SỬA NGAY (Vàng).',
  },

  // =========================================================================
  // SẢNH I — HÌNH ẢNH THƯƠNG HIỆU (1 - 8)
  // =========================================================================
  {
    id: 'skill-avatar-chuyen-gia',
    name: 'Avatar chuyên gia (Xưởng ảnh)',
    bannerTitle: 'XƯỞNG ẢNH THƯƠNG HIỆU SKILL 01',
    tagline: 'Thương hiệu cá nhân & Text Overlay: Tạo ảnh đại diện rõ gương mặt, đúng thần thái',
    badge: 'QUÀ TẶNG ZALO 0Đ',
    cardBadge: 'Quà Tặng 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 340000,
    highlight: false,
    aiTools: ['Midjourney', 'Canva', 'Photoshop AI'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 4200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'UserCheck',
    imageUrl: '/assets/skill_1_thuong_hieu.jpg',
    description: 'Tạo ảnh đại diện rõ gương mặt, đúng thần thái và đúng vai trò chuyên gia. Dùng cho Facebook, Zalo, YouTube và khung chat.',
    skillHelps: 'Giúp bạn có ngay bộ ảnh đại diện sắc nét, sáng sủa, chuẩn phong thái chuyên gia và đáng tin cậy mà không cần tốn tiền triệu thuê studio.',
    preparation: 'Một vài bức ảnh chụp gương mặt bằng điện thoại rõ nét, đủ sáng (chụp góc thẳng hoặc nghiêng nhẹ).',
    steps: [
      'Bước 1: Tải ảnh gương mặt gốc của bạn vào công cụ AI theo hướng dẫn trong file Skill.',
      'Bước 2: Dán prompt mẫu của Hải Triều AI để AI phân tích nét mặt, chọn trang phục vest/áo sơ mi và ánh sáng phòng làm việc sang trọng.',
      'Bước 3: Nhận ngay 4 phiên bản avatar chuyên gia độ phân giải cao 4K để thay vào Facebook, Zalo, YouTube.',
    ],
    result: 'Bộ avatar chuyên nghiệp, tôn được uy tín cá nhân, tăng tỷ lệ phản hồi tin nhắn và khách hàng tin tưởng ngay từ cái nhìn đầu tiên.',
    features: [
      'Giữ trọn 100% đường nét khuôn mặt thật, không bị ảo hay biến dạng',
      'Đa dạng phong cách: Doanh nhân lịch lãm, chuyên gia đào tạo, diễn giả, tư vấn viên',
      'Chuẩn kích thước avatar hình tròn cho Facebook, Zalo, TikTok',
    ],
    skillMdSnippet: `---
name: avatar-chuyen-gia-hai-trieu
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc tạo Avatar Chuyên Gia
1. Nhận diện gương mặt và giữ nét tự nhiên.
2. Ánh sáng: Studio softbox 45 độ, xóa phông nhẹ.
3. Trang phục: Chuyên nghiệp, màu sắc nhã nhặn phù hợp phong thủy.`,
    samplePrompt: 'Dựa trên ảnh gương mặt của tôi, hãy tạo một ảnh avatar chuyên gia phong thái điềm đạm, tự tin, mặc trang phục thanh lịch, ánh sáng studio sang trọng.',
    sampleOutput: 'Đã tạo 4 mẫu avatar chuyên nghiệp độ phân giải cao 4K sẵn sàng tải về.',
  },
  {
    id: 'skill-poster-san-pham',
    name: 'Poster sản phẩm 10 tấm',
    bannerTitle: 'POSTER SẢN PHẨM 10 TẤM ĐỒNG BỘ SKILL 02',
    tagline: 'Từ ảnh sản phẩm có sẵn, tạo 10 poster đồng bộ rõ lợi ích, thông điệp và lời mời hành động',
    badge: 'QUÀ TẶNG ZALO 0Đ',
    cardBadge: 'Quà Tặng 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 340000,
    highlight: false,
    aiTools: ['Midjourney', 'Canva', 'Photoshop AI'],
    rating: 5.0,
    reviewsCount: 520,
    downloadsCount: 5200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Image',
    imageUrl: '/assets/skill_2_sp.jpg',
    description: 'Từ ảnh sản phẩm có sẵn, tạo poster rõ lợi ích, thông điệp và lời mời hành động để khách nhìn là hiểu mình đang bán gì.',
    skillHelps: 'Biến một tấm ảnh chụp sản phẩm đơn giản thành poster quảng cáo bắt mắt, nêu bật đúng lợi ích chính và thôi thúc khách đặt hàng.',
    preparation: 'Ảnh chụp sản phẩm thô, tên sản phẩm, 1 lợi ích lớn nhất và mức giá hoặc ưu đãi đi kèm.',
    steps: [
      'Bước 1: Tải ảnh sản phẩm vào và dùng lệnh tách nền tự động.',
      'Bước 2: Áp dụng prompt bố cục thương mại: bục trưng bày, ánh sáng nổi khối, vị trí đặt tiêu đề.',
      'Bước 3: Thêm câu chốt ưu đãi và nút kêu gọi hành động để xuất file hoàn chỉnh.',
    ],
    result: 'Poster bán hàng chuẩn thương mại điện tử, khách lướt qua là hiểu giá trị sản phẩm và muốn nhắn tin mua ngay.',
    features: [
      'Tự động đồng bộ ánh sáng giữa sản phẩm và bối cảnh',
      'Bố cục chữ rõ ràng, không che khuất điểm nhấn sản phẩm',
      'Tối ưu tỉ lệ 1:1 cho Feed và 9:16 cho Story',
    ],
    skillMdSnippet: `---
name: poster-san-pham-commercial
version: 1.0.0
---
# Bố cục Poster Sản Phẩm
- Sản phẩm chiếm 50% khung hình, đặt ở trung tâm hoặc 1/3 bên phải.
- Tiêu đề lợi ích in hoa đậm nét, tương phản cao.`,
    samplePrompt: 'Tạo poster thương mại cho sản phẩm chăm sóc da, bối cảnh đá thạch anh và nước trong lành, tiêu đề "Dưỡng Da Sáng Khỏe Sau 7 Ngày".',
    sampleOutput: 'Poster hoàn chỉnh với màu sắc tươi sáng và lời mời hành động rõ ràng.',
  },
  {
    id: 'skill-tach-nen-trong-suot',
    name: 'Tách nền trong suốt (Skill 03)',
    bannerTitle: 'TÁCH NỀN TRONG SUỐT SKILL 03',
    tagline: 'Xóa nền ảnh chuẩn đồ họa & xuất PNG trong suốt sắc nét từng sợi tóc trong 3 giây',
    badge: 'QUÀ TẶNG ZALO 0Đ',
    cardBadge: 'Quà Tặng 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 340000,
    highlight: true,
    aiTools: ['AI Magic Eraser', 'Photoshop AI', 'Canva', 'RemoveBg'],
    rating: 5.0,
    reviewsCount: 940,
    downloadsCount: 8200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_03_tach_nen.jpg',
    description: 'Xóa sạch phông nền phức tạp, giữ trọn vẹn chủ thể sắc nét từng sợi tóc, xuất file PNG trong suốt chuẩn đồ họa để ghép vào bất kỳ poster hay video nào.',
    skillHelps: 'Tách nền người, sản phẩm hoặc vật thể nhanh chóng không tì vết, dễ dàng ghép vào banner, video ngắn, sàn Shopee/TikTok Shop.',
    preparation: 'Ảnh chân dung, ảnh mẫu hoặc ảnh sản phẩm chụp điện thoại có phông nền cần tách.',
    steps: [
      'Bước 1: Chọn ảnh chân dung hoặc sản phẩm cần tách nền, dán prompt Tách Nền Trong Suốt của Hải Triều AI.',
      'Bước 2: AI tự động nhận diện mép biên, sợi tóc và các góc khuất để bóc tách chủ thể chuẩn xác 100%.',
      'Bước 3: Tải file PNG trong suốt độ phân giải cao hoặc ghép ngay vào bối cảnh studio mới lung linh.',
    ],
    result: 'File PNG trong suốt sắc nét từng sợi tóc, không viền răng cưa, sẵn sàng ghép mọi thiết kế.',
    features: [
      'Bóc tách chuẩn từng sợi tóc, viền áo và phụ kiện trong suốt',
      'Xuất file PNG nền trong suốt không vỡ hạt, chuẩn in ấn & thiết kế',
      'Phù hợp làm ảnh đại diện, ảnh sản phẩm TMĐT và ghép poster chuyên nghiệp',
    ],
    skillMdSnippet: `---
name: tach-nen-trong-suot
version: 1.0.0
---
# Bóc Tách Nền Trong Suốt Chuẩn Đồ Họa
1. Giữ nguyên viền tóc tơ mềm mại, không bị bết dính.
2. Khử viền ánh sáng nền cũ (defringe) hoàn hảo.
3. Xuất file PNG 32-bit trong suốt chuẩn 4K.`,
    samplePrompt: 'Tách nền trong suốt cho ảnh sản phẩm serum và người mẫu, giữ trọn vẹn viền phản chiếu ánh sáng và sợi tóc tơ, xuất định dạng PNG trong suốt sắc nét.',
    sampleOutput: 'Chủ thể được bóc tách hoàn hảo trên nền trong suốt caro, sẵn sàng kéo thả vào mọi ấn phẩm.',
  },
  {
    id: 'skill-anh-bia-kenh',
    name: 'Xoá vật thể khỏi ảnh (Xoá logo, vật thể)',
    bannerTitle: 'XOÁ VẬT THỂ KHỎI ẢNH SKILL 04',
    tagline: 'Xoá logo, dây điện, người lạ và chi tiết thừa khỏi ảnh trong 3 giây cực kỳ tự nhiên',
    badge: 'QUÀ TẶNG ZALO 0Đ',
    cardBadge: 'Quà Tặng 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 340000,
    highlight: true,
    aiTools: ['AI Magic Eraser', 'Photoshop AI', 'Canva'],
    rating: 5.0,
    reviewsCount: 340,
    downloadsCount: 3120,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_04.jpg',
    description: 'Xóa vật thể khỏi ảnh, xóa logo, chi tiết thừa hoặc người lạ chỉ bằng một nét cọ mà vẫn giữ trọn vẹn hậu cảnh tự nhiên.',
    skillHelps: 'Làm sạch mọi bức ảnh chụp dính người đi đường, rác nền, dây điện hay đồ đạc lộn xộn để có bức ảnh chân dung hoặc sản phẩm tinh tươm nhất.',
    preparation: 'Bức ảnh có chi tiết thừa cần xóa (logo, chữ chìm, người lạ, vật thể không mong muốn).',
    steps: [
      'Bước 1: Tải ảnh cần làm sạch vào công cụ Xoá Vật Thể theo link hướng dẫn.',
      'Bước 2: Dùng cọ quét nhẹ qua vùng vật thể, logo hoặc chi tiết thừa cần loại bỏ.',
      'Bước 3: AI tự động phân tích và tái tạo hậu cảnh tự nhiên, xuất ảnh sạch sẽ hoàn hảo.',
    ],
    result: 'Bức ảnh sạch bóng chi tiết thừa, hậu cảnh được bù đắp liền mạch không tì vết, sẵn sàng đăng bài bán hàng.',
    features: [
      'Xóa sạch logo đóng dấu, chữ mờ và chi tiết thừa',
      'Tự động bù đắp hậu cảnh và vân bề mặt chính xác 100%',
      'Xử lý tức thì trong 3 giây không làm giảm chất lượng ảnh',
    ],
    skillMdSnippet: `---
name: xoa-vat-the-khoi-anh-hai-trieu
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Xoá Vật Thể & Logo
1. Quét cọ chọn vùng vật thể thừa.
2. AI Context Fill tự động bù kết cấu xung quanh.
3. Xuất ảnh gốc độ phân giải cao.`,
    samplePrompt: 'Xóa bỏ người lạ đi ngang phía sau và dây điện trên tường trong bức ảnh chân dung này, giữ nguyên hậu cảnh quán cafe.',
    sampleOutput: 'Ảnh đã được làm sạch hoàn toàn, không để lại vết mờ hay loang lổ.',
  },
  {
    id: 'skill-bo-anh-dich-vu',
    name: 'Chỉnh sửa ảnh giữ đúng mặt',
    bannerTitle: 'CHỈNH SỬA ẢNH GIỮ ĐÚNG MẶT SKILL 05',
    tagline: 'Thay đổi kiểu tóc, trang phục, góc chụp nhưng giữ nguyên 100% gương mặt thật',
    badge: 'SKILL 05 • 135K',
    cardBadge: 'HOT TREND',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['FaceLock AI', 'Midjourney', 'Photoshop'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3950,
    author: 'Trịnh Hải Triều AI',
    iconName: 'UserCheck',
    imageUrl: '/assets/skill_05.jpg',
    description: 'Chỉnh sửa ảnh, thay trang phục, đổi kiểu tóc và góc chụp nhưng giữ nguyên 100% đường nét khuôn mặt thật của bạn.',
    skillHelps: 'Tạo hàng chục concept chụp ảnh khác nhau mà không sợ AI biến thành người khác, giữ trọn vẹn thần thái và nhận diện gương mặt thật.',
    preparation: 'Ảnh chân dung rõ mặt của bạn và ý tưởng kiểu trang phục hoặc phong cách muốn đổi.',
    steps: [
      'Bước 1: Nạp ảnh chân dung gốc và kích hoạt tính năng khóa khuôn mặt (FaceLock).',
      'Bước 2: Chọn phong cách trang phục (vest, váy dạ hội, áo sơ mi) và góc chụp mong muốn.',
      'Bước 3: Nhận ngay bộ ảnh chuẩn nét với khuôn mặt của chính bạn ở concept hoàn toàn mới.',
    ],
    result: 'Ảnh mới lạ mắt, đúng phong cách mong muốn nhưng người quen nhìn vào lập tức nhận ra chính là bạn.',
    features: [
      'Khóa 100% nhận diện gương mặt, không bị méo mó hay biến dạng',
      'Tùy biến trang phục và kiểu tóc linh hoạt theo mọi ngành nghề',
      'Ảnh xuất ra chuẩn studio ánh sáng chân thực',
    ],
    skillMdSnippet: `---
name: chinh-sua-anh-giu-dung-mat
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Chỉnh Sửa Ảnh Giữ Đúng Mặt
1. Khóa điểm đặc trưng khuôn mặt (Face Identity).
2. Tái tạo trang phục và tóc theo prompt chỉ định.
3. Đồng bộ ánh sáng tự nhiên giữa mặt và bối cảnh.`,
    samplePrompt: 'Giữ nguyên gương mặt trong ảnh gốc, thay đổi trang phục thành bộ vest doanh nhân màu xanh navy sang trọng, ánh sáng văn phòng hiện đại.',
    sampleOutput: 'Bộ 4 ảnh chân dung doanh nhân mới giữ đúng 100% gương mặt thật của bạn.',
  },
  {
    id: 'skill-anh-feedback',
    name: 'Tăng chất lượng ảnh chuẩn 4K',
    bannerTitle: 'ẢNH NÉT CHUẨN 4K SKILL 06',
    tagline: 'Phục hồi và nâng cấp ảnh mờ, vỡ hạt thành ảnh nét căng chuẩn 4K siêu sắc nét chỉ trong 10 giây',
    badge: 'SKILL 06 • 135K',
    cardBadge: 'Chuẩn 4K',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['AI Enhancer', 'Photoshop', 'Canva'],
    rating: 5.0,
    reviewsCount: 385,
    downloadsCount: 3420,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_06.jpg',
    description: 'Phục hồi và nâng cấp ảnh mờ, vỡ hạt thành ảnh nét căng chuẩn 4K siêu sắc nét trong 10 giây. Giữ trọn màu da tự nhiên và chi tiết ảnh không bị biến dạng.',
    skillHelps: 'Biến ảnh chụp bằng điện thoại, ảnh chụp màn hình và ảnh sản phẩm bị mờ nhòe thành ảnh nét căng 4K chuẩn studio, tôn trọn uy tín thương hiệu.',
    preparation: 'Ảnh chụp chân dung, ảnh sản phẩm hoặc ảnh tài liệu bị vỡ hạt, mờ nhòe cần làm nét lên chuẩn 4K.',
    steps: [
      'Bước 1: Tải ảnh cần xử lý vào công cụ Tăng Chất Lượng 4K theo link kèm theo.',
      'Bước 2: Chọn chế độ làm nét da mặt tự nhiên, tăng độ sắc nét văn bản và chi tiết ảnh.',
      'Bước 3: Nhận ảnh chuẩn 4K siêu nét chỉ sau 10 giây để đăng bài bán hàng hoặc làm tư liệu marketing.',
    ],
    result: 'Ảnh nét căng từng chi tiết, không còn vỡ hạt hay mờ nhòe, tăng độ tin cậy tức thì cho khách hàng.',
    features: [
      'Nâng cấp độ phân giải lên gấp 4 lần chuẩn 4K siêu thực',
      'Làm rõ từng đường nét, chi tiết vật thể và màu sắc ảnh',
      'Giữ trọn màu da tự nhiên, không bị ảo hay biến dạng',
    ],
    skillMdSnippet: `---
name: tang-chat-luong-4k-hai-trieu
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Tăng Chất Lượng 4K
1. Khôi phục chi tiết: Gương mặt, văn bản và sản phẩm.
2. Nâng phân giải: 4K Ultra HD.
3. Tối ưu xuất file: Đăng Facebook/Zalo không bị nén vỡ.`,
    samplePrompt: 'Nâng cấp chất lượng ảnh phản hồi khách hàng lên chuẩn 4K, làm rõ các dòng tin nhắn đánh giá 5 sao và bảo mật số điện thoại.',
    sampleOutput: 'Đã xuất file ảnh 4K độ phân giải cao, chữ rõ nét và hình ảnh sáng đẹp.',
  },
  {
    id: 'skill-mot-anh-chin-goc-quay',
    name: 'Một ảnh chín góc quay (Multishot)',
    bannerTitle: 'MỘT ẢNH CHÍN GÓC QUAY SKILL 07',
    tagline: 'Từ 1 ảnh duy nhất, AI tự động sinh 9 góc quay và góc chụp điện ảnh đồng bộ nhân vật',
    badge: 'SKILL 07 • 135K',
    cardBadge: 'Multishot 9 Góc',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Midjourney Multishot', 'Photoshop AI', 'CapCut'],
    rating: 5.0,
    reviewsCount: 430,
    downloadsCount: 4100,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Camera',
    imageUrl: '/assets/skill_07.jpg',
    description: 'Từ một bức ảnh chân dung hoặc sản phẩm duy nhất, AI tự động tạo 9 góc máy điện ảnh khác nhau (toàn cảnh, cận cảnh, góc nghiêng 45 độ, từ trên xuống) nhưng giữ trọn 100% nhân vật và trang phục của anh/chị.',
    skillHelps: 'Giải quyết triệt để vấn đề thiếu ảnh đa góc độ để dựng video ngắn triệu view, làm carousels hoặc catalog giới thiệu sản phẩm mà không phải tốn thời gian chụp lại 9 lần.',
    preparation: '1 bức ảnh chụp rõ mặt hoặc 1 bức ảnh chụp sản phẩm đủ sáng.',
    steps: [
      'Bước 1: Nạp 1 bức ảnh gốc vào công cụ Multishot của Hải Triều AI.',
      'Bước 2: AI tự động phân tích bối cảnh và chia camera thành 9 góc máy điện ảnh chuẩn.',
      'Bước 3: Xuất 9 tấm ảnh chất lượng cao 4K để làm poster ghép hoặc chèn vào video CapCut.',
    ],
    result: 'Bộ 9 bức ảnh đa góc máy đồng bộ hoàn hảo, chuyên nghiệp như đoàn quay phim điện ảnh thực hiện.',
    features: [
      'Tự động sinh 9 góc máy khác nhau từ 1 ảnh duy nhất',
      'Đồng bộ 100% trang phục, nét mặt và ánh sáng bối cảnh',
      'Tiết kiệm 95% thời gian và chi phí thuê ekip chụp hình studio',
    ],
    skillMdSnippet: `---
name: mot-anh-chin-goc-quay-multishot
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Một Ảnh Chín Góc Quay (Multishot)
1. Khóa đặc trưng chủ thể: Khuôn mặt, trang phục, màu sắc.
2. Thiết lập 9 góc camera: Wide, Medium, Close-up, Dutch angle, Over-the-shoulder, Top-down.
3. Xuất lưới 9 khung hình độ phân giải 4K.`,
    samplePrompt: 'Từ 1 ảnh chân dung này, hãy tạo bộ 9 góc máy điện ảnh khác nhau của nhân vật trong quán cafe, giữ nguyên thần thái và trang phục.',
    sampleOutput: 'Lưới 9 ảnh đa góc máy chân thực sắc nét, sẵn sàng làm storyboard hoặc video.',
  },
  {
    id: 'skill-anh-chien-dich',
    name: 'Hoán đổi nhân vật (Ảnh chiến dịch)',
    bannerTitle: 'MỘT NHÂN VẬT, MỌI BỐI CẢNH SKILL 08',
    tagline: 'Lên bộ ảnh đồng bộ cho đợt ra mắt, một nhân vật nhất quán trong mọi bối cảnh',
    badge: 'SKILL 08 • 135K',
    cardBadge: 'HOT TREND',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['Midjourney', 'Canva', 'Photoshop'],
    rating: 4.9,
    reviewsCount: 195,
    downloadsCount: 1540,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_08.jpg',
    description: 'Lên bộ hình ảnh đồng bộ cho một đợt ra mắt, khuyến mãi, workshop hoặc sự kiện để kênh nhìn chuyên nghiệp hơn.',
    skillHelps: 'Đảm bảo tất cả các bài đăng trong đợt chiến dịch đều mang chung một ngôn ngữ thiết kế, tạo cảm giác quy mô và kích thích người xem tham gia.',
    preparation: 'Tên chiến dịch, thời gian diễn ra sự kiện, thông điệp chính và màu sắc chủ đạo.',
    steps: [
      'Bước 1: Khởi tạo bảng màu và phong cách thị giác chủ đạo cho chiến dịch.',
      'Bước 2: AI tự động sinh chuỗi 5 ảnh: Thông báo sắp diễn ra -> Mở đăng ký -> Đếm ngược 24h -> Đang diễn ra -> Tổng kết.',
      'Bước 3: Lên lịch đăng xuyên suốt tuần lễ chiến dịch.',
    ],
    result: 'Kênh của bạn trông chuyên nghiệp như một thương hiệu lớn, tạo được không khí sôi động và bùng nổ doanh số.',
    features: [
      'Đồng bộ 100% nhận diện màu sắc, phông chữ và cảm xúc',
      'Bao trọn các giai đoạn của một chiến dịch marketing chuẩn',
    ],
    skillMdSnippet: `---
name: bo-anh-chien-dich-marketing
---
Thiết kế theo chu kỳ: Teaser -> Launch -> Urgency -> Wrap-up.`,
    samplePrompt: 'Lên bộ ảnh chiến dịch ra mắt chương trình khuyến mãi tháng mới cho khóa học AI thực chiến.',
    sampleOutput: 'Bộ 5 ảnh đồng bộ nhận diện sắc tím - cam rực rỡ.',
  },

  // =========================================================================
  // SẢNH II — VIDEO BÁN HÀNG (9 - 16)
  // =========================================================================
  {
    id: 'skill-edit-video-kol-ai',
    name: 'Edit Video KOL AI (Go Global)',
    bannerTitle: 'EDIT VIDEO KOL AI SKILL 09',
    tagline: 'KOL AI Go Global: Biên tập và dựng video ngắn chuyên nghiệp phủ sóng đa nền tảng',
    badge: 'SKILL 09 • 135K',
    cardBadge: 'KOL AI Global',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut Pro', 'ChatGPT', 'Premiere AI'],
    rating: 5.0,
    reviewsCount: 460,
    downloadsCount: 4250,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Video',
    imageUrl: '/assets/skill_09.jpg',
    description: 'Quy trình edit video ngắn chuẩn phong cách KOL AI quốc tế: cắt ghép nhịp nhàng theo timeline, chèn b-roll minh họa, zoom chuyển cảnh và tối ưu nhịp thở để video không một giây nhàm chán.',
    skillHelps: 'Biến video quay thô đơn điệu thành tác phẩm chuyên nghiệp, nhịp dựng cuốn hút, giữ chân người xem từ đầu đến cuối và sẵn sàng tiếp cận tệp khán giả toàn cầu.',
    preparation: 'Video quay thô của bạn (nói chuyện hoặc giới thiệu sản phẩm) và file âm thanh thu âm rõ tiếng.',
    steps: [
      'Bước 1: Nạp timeline video vào quy trình cắt gọt khoảng lặng (Jump Cut) tự động.',
      'Bước 2: AI tự động đề xuất vị trí chèn B-roll minh họa và hiệu ứng phóng to/thu nhỏ (Zoom in/out).',
      'Bước 3: Xuất video chuẩn dọc 9:16 sắc nét 4K với màu sắc sống động và nhịp điệu cuốn hút.',
    ],
    result: 'Video hoàn thiện đẹp mắt, nhịp độ dồn dập hấp dẫn, tỷ lệ xem hết (Retention Rate) tăng vọt trên TikTok và Reels.',
    features: [
      'Cắt bỏ 100% tiếng ậm ừ, ngắt quãng thừa thãi',
      'Tự động chèn B-roll minh họa ngữ cảnh đắt giá',
      'Định dạng chuẩn 9:16 cho TikTok, Reels, Shorts và Facebook',
    ],
    skillMdSnippet: `---
name: edit-video-kol-ai-go-global
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Edit Video KOL AI Global
1. Cắt khoảng lặng: Max silence 0.2s.
2. Nhịp chuyển cảnh: Cứ mỗi 3-4 giây thay đổi góc quay hoặc zoom 1.1x.
3. Chèn B-roll & Text Hook đè lên hình.`,
    samplePrompt: 'Lên cấu trúc edit video ngắn 45s chia sẻ bài học kinh doanh: vị trí cắt jump cut, thời điểm zoom camera và đoạn chèn hình minh họa.',
    sampleOutput: 'Kịch bản dựng chi tiết từng giây với chỉ dẫn hiệu ứng chuyển cảnh và âm thanh minh họa.',
  },
  {
    id: 'skill-hieu-ung-cao-cap',
    name: 'Hiệu ứng cao cấp (Video Effects & Stickers)',
    bannerTitle: 'HIỆU ỨNG CAO CẤP SKILL 10',
    tagline: 'Chèn hiệu ứng cao cấp, nhãn dán động và âm thanh thôi miên giữ chân người xem',
    badge: 'SKILL 10 • 135K',
    cardBadge: 'Hiệu Ứng VIP',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut Pro', 'After Effects AI', 'Canva'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3950,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_10.jpg',
    description: 'Bộ sưu tập hiệu ứng hình ảnh cao cấp: nhãn dán sticker động (callouts), bong bóng thoại bình luận, mũi tên chuyển động, hiệu ứng phát sáng neon và âm thanh tương tác đỉnh cao.',
    skillHelps: 'Tạo điểm nhấn thị giác liên tục trong video, biến những luận điểm quan trọng thành hình ảnh sinh động đập vào mắt người xem, giúp khách nhớ lâu và muốn tương tác.',
    preparation: 'Đoạn video đã dựng cơ bản và danh sách các luận điểm chính cần làm nổi bật.',
    steps: [
      'Bước 1: Chọn gói hiệu ứng phù hợp với ngành hàng (Doanh nhân, Mỹ phẩm, Giáo dục, Công nghệ).',
      'Bước 2: Gắn các sticker callout, bong bóng bình luận và âm thanh "ting / whoosh / pop" vào đúng từ khóa trọng tâm.',
      'Bước 3: Xuất video với hiệu ứng mượt mà 60fps sắc nét không giật lag.',
    ],
    result: 'Video sinh động, đậm chất giải trí và chuyên nghiệp, người xem không thể rời mắt và bình luận sôi nổi.',
    features: [
      'Hơn 50+ mẫu sticker callouts và bong bóng thoại thiết kế riêng',
      'Đồng bộ âm thanh sound effect (SFX) chính xác từng mili-giây',
      'Tạo cảm giác uy tín cao cấp cho thương hiệu cá nhân',
    ],
    skillMdSnippet: `---
name: hieu-ung-cao-cap-video-effects
version: 1.0.0
author: Hải Triều AI
---
# Cấu trúc Hiệu Ứng Cao Cấp
1. Keyframe Callout: Xuất hiện dạng nảy (Bounce in) tại từ khóa quan trọng.
2. Sound Effect: Kết hợp âm thanh pop/whoosh tương ứng.
3. Glow & Highlight: Viền sáng nhấn mạnh sản phẩm hoặc con số ấn tượng.`,
    samplePrompt: 'Gợi ý danh sách hiệu ứng cao cấp và âm thanh đi kèm cho video ngắn chia sẻ 3 con số tài chính ấn tượng.',
    sampleOutput: 'Bảng timeline chi tiết: Giây thứ 5 (Hiệu ứng đếm số + âm thanh cash register), Giây 15 (Bong bóng chat nảy ra + âm thanh ting).',
  },
  {
    id: 'skill-cat-video-dai-thanh-short',
    name: 'Video hướng dẫn tối giản cho coach (Skill 11)',
    bannerTitle: 'HƯỚNG DẪN TỐI GIẢN SKILL 11',
    tagline: 'Làm video truyền cảm hứng: 1. Ý tưởng tối giản, 2. Quay đơn giản, 3. Dựng nhanh gọn',
    badge: 'SKILL 11 • 135K',
    cardBadge: 'Coach Truyền Cảm Hứng',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut', 'ChatGPT', 'Canva'],
    rating: 5.0,
    reviewsCount: 390,
    downloadsCount: 3450,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Video',
    imageUrl: '/assets/skill_11.jpg',
    description: 'Quy trình sản xuất video hướng dẫn tối giản dành riêng cho Coach, Trainer và Chuyên gia: từ ý tưởng cô đọng, cách set góc quay đơn giản không cần studio đắt tiền đến kỹ thuật dựng nhanh gọn truyền cảm hứng.',
    skillHelps: 'Giúp người làm đào tạo, coaching hay chia sẻ kiến thức tự tin lên hình, truyền tải thông điệp sâu sắc và thu hút học viên tiềm năng mà không tốn hàng giờ loay hoay dựng phim.',
    preparation: 'Chủ đề bài học hoặc thông điệp giá trị bạn muốn chia sẻ, cùng một chiếc điện thoại và góc bàn làm việc gọn gàng.',
    steps: [
      'Bước 1: Nạp chủ đề chia sẻ vào prompt Hướng Dẫn Tối Giản của Hải Triều AI để lọc ra 3 luận điểm đắt giá nhất.',
      'Bước 2: Set góc máy thẳng mắt (Eye-level), ánh sáng tự nhiên và mở máy quay nói theo bullet points tự nhiên.',
      'Bước 3: Dựng siêu tốc bằng CapCut: cắt bỏ khoảng lặng, chèn chữ keyword và xuất video dọc 9:16 sắc nét.',
    ],
    result: 'Video phong thái chuyên gia đỉnh cao, chạm cảm xúc người xem, truyền cảm hứng mạnh mẽ và chuyển đổi thành học viên.',
    features: [
      'Công thức 3 bước: Ý tưởng tối giản - Quay đơn giản - Dựng nhanh gọn',
      'Định vị thần thái Coach uy tín, tự nhiên và giàu năng lượng',
      'Tiết kiệm 80% thời gian sản xuất video mỗi ngày',
    ],
    skillMdSnippet: `---
name: video-huong-dan-toi-gian-cho-coach
version: 1.0.0
---
# Cấu trúc Video Coach Tối Giản
1. Hook (0-3s): Đặt câu hỏi trúng nỗi đau học viên.
2. Bài học (3-35s): 3 gạch đầu dòng cô đọng nhất.
3. Kêu gọi (35-45s): Mời tham gia buổi chia sẻ sâu hơn.`,
    samplePrompt: 'Lên kịch bản video hướng dẫn tối giản cho Coach chủ đề "3 Thói Quen Nhỏ Thay Đổi Cả Sự Nghiệp", phong cách ấm áp, truyền cảm hứng.',
    sampleOutput: 'Kịch bản 45 giây hoàn chỉnh kèm hướng dẫn cử chỉ tay và ánh mắt khi chia sẻ.',
  },
  {
    id: 'skill-video-giai-dap-khach-hoi',
    name: 'Video talking-head kiểu infographic (Skill 12)',
    bannerTitle: 'INFOGRAPHIC TRẮNG SKILL 12',
    tagline: 'Video talking-head kiểu infographic: Quy trình sáng tạo từ nghiên cứu, kịch bản đến sản xuất hoàn thiện',
    badge: 'SKILL 12 • 135K',
    cardBadge: 'Infographic Trắng',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'CapCut Pro', 'Canva'],
    rating: 5.0,
    reviewsCount: 410,
    downloadsCount: 3620,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Layout',
    imageUrl: '/assets/skill_12.jpg',
    description: 'Phong cách video talking-head kết hợp đồ họa Infographic Trắng hiện đại: hiển thị sơ đồ khối, timeline quy trình sáng tạo (Nghiên cứu -> Kịch bản -> Sản xuất -> Hoàn thiện) song song với người nói.',
    skillHelps: 'Trực quan hóa mọi kiến thức phức tạp thành sơ đồ dễ hiểu, giúp người xem nắm bắt ngay lộ trình và tăng uy tín chuyên môn của bạn lên gấp 5 lần.',
    preparation: 'Quy trình, các bước giải quyết vấn đề hoặc lộ trình dịch vụ bạn muốn truyền tải cho khách hàng.',
    steps: [
      'Bước 1: Nạp quy trình dịch vụ vào prompt Infographic Trắng để AI chia thành các khối bước trực quan.',
      'Bước 2: Áp dụng template khung hình đồ họa trắng sang trọng, tối giản, tương phản cao.',
      'Bước 3: Quay talking-head tương tác với sơ đồ infographic (chỉ tay vào sơ đồ từng bước khi nói).',
    ],
    result: 'Video chuyên nghiệp như các kênh triệu view quốc tế, khách xem là hiểu ngay giá trị quy trình và tin tưởng tuyệt đối.',
    features: [
      'Giao diện Infographic Trắng thanh lịch, chuẩn xu hướng 2026',
      'Đồ họa trực quan hóa quy trình: Nghiên cứu -> Kịch bản -> Sản xuất -> Hoàn thiện',
      'Tương tác tay tự nhiên giữa người nói và sơ đồ đồ họa',
    ],
    skillMdSnippet: `---
name: video-talking-head-infographic-trang
version: 1.0.0
---
# Bố cục Infographic Trắng
1. Khung hình: 1/2 bên trái là sơ đồ khối tiến trình, 1/2 bên phải là người nói.
2. Màu sắc: Nền trắng tối giản, chữ đen đậm nét, điểm nhấn icon cam/vàng.
3. Chuyển động: Từng bước sáng lên đồng bộ với giọng nói.`,
    samplePrompt: 'Tạo sơ đồ infographic trắng và kịch bản talking-head giải thích "Quy Trình 4 Bước Tạo Ra Video Bán Hàng Triệu View Bằng AI".',
    sampleOutput: 'Kịch bản chi tiết kèm mẫu sơ đồ 4 khối trực quan sẵn sàng chèn vào video.',
  },
  {
    id: 'skill-video-ke-cau-chuyen-khach-hang',
    name: 'Cắt video dài thành nhiều short (Skill 13)',
    bannerTitle: 'CẮT VIDEO THÀNH SHORT SKILL 13',
    tagline: 'Cắt video dài thành nhiều video short: Tách highlight, giữ trọn ý đắt giá phủ sóng đa kênh',
    badge: 'SKILL 13 • 135K',
    cardBadge: 'Cắt Video Short',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut', 'OpusClip', 'ChatGPT'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 3200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Scissors',
    imageUrl: '/assets/skill_13.jpg',
    description: 'Quy trình dùng AI lọc và cắt video dài (livestream, podcast, buổi đào tạo) thành 10-15 video ngắn chuẩn 9:16 có hook thôi miên, tự động thêm phụ đề chạy chữ sinh động.',
    skillHelps: 'Tận dụng 1 buổi nói chuyện, livestream hoặc đào tạo dài 60 phút để tạo ra kho video ngắn đăng cả tuần đa nền tảng.',
    preparation: '1 video dài có sẵn hoặc link video YouTube của bạn.',
    steps: [
      'Bước 1: Nạp file văn bản (transcript) hoặc video vào công cụ AI để phân tích toàn bộ nội dung.',
      'Bước 2: AI tự động quét và đánh dấu những đoạn có năng lượng cao nhất, câu nói đắt giá nhất.',
      'Bước 3: Cắt xuất các video ngắn 45-60 giây chuẩn dọc 9:16 có phụ đề động sinh động.',
    ],
    result: 'Kho nội dung video ngắn dồi dào, phủ sóng đều đặn mỗi ngày mà không tốn công quay mới liên tục.',
    features: [
      'Tự động chọn lọc đoạn cao trào, không cắt cụt ý nghĩa',
      'Chèn phụ đề động chuẩn tiếng Việt tự động',
      'Định dạng chuẩn 9:16 cho TikTok, Reels và YouTube Shorts',
    ],
    skillMdSnippet: `---
name: cat-video-dai-thanh-nhieu-short
version: 1.0.0
---
Lọc theo tiêu chí: Có 1 bài học trọn vẹn trong 45-60s.`,
    samplePrompt: 'Phân tích đoạn nói chuyện dài này và chọn ra 3 đoạn cắt ngắn phù hợp đăng TikTok Reels.',
    sampleOutput: '3 đoạn cut kèm tiêu đề hook và gợi ý khung hình chữ nhật dọc 9:16.',
  },
  {
    id: 'skill-video-theo-nhip-nhac',
    name: 'Podcast 2 người (Skill 14)',
    bannerTitle: 'PODCAST 2 NGƯỜI SKILL 14',
    tagline: 'Video Podcast 2 người: Kịch bản phỏng vấn, bố cục chia đôi màn hình và nhịp đối thoại cuốn hút',
    badge: 'SKILL 14 • 135K',
    cardBadge: 'Podcast 2 Người',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut', 'ChatGPT', 'Riverside AI'],
    rating: 5.0,
    reviewsCount: 340,
    downloadsCount: 2950,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Users',
    imageUrl: '/assets/skill_14.jpg',
    description: 'Cấu trúc sản xuất video Podcast 2 người chuyên nghiệp: từ bộ câu hỏi đào sâu insight, kịch bản dẫn dắt tương tác tự nhiên đến bố cục khung hình chia đôi màn hình (Split-screen) linh hoạt.',
    skillHelps: 'Tổ chức các buổi trò chuyện, phỏng vấn chuyên gia hoặc chia sẻ 1-1 với hình ảnh chuyên nghiệp như các show podcast hàng đầu.',
    preparation: 'Chủ đề buổi trò chuyện, thông tin khách mời và thiết bị quay/thu âm 2 bên.',
    steps: [
      'Bước 1: Nạp chủ đề phỏng vấn vào prompt Podcast 2 Người để AI soạn 5 câu hỏi đào sâu insight đắt giá.',
      'Bước 2: Setup khung hình chia đôi (Split-screen trên/dưới hoặc trái/phải) cho 2 người nói chuyện online/offline.',
      'Bước 3: AI tự động cắt ghép camera chuyển theo giọng nói và chèn highlight câu nói tâm đắc lên màn hình.',
    ],
    result: 'Video Podcast đẳng cấp, cuộc đối thoại sâu sắc chạm đến người nghe và tăng uy tín thương hiệu vượt bậc.',
    features: [
      'Khung hình chia đôi trên/dưới hoặc trái/phải tối ưu hiển thị di động',
      'Chuyển cảnh camera thông minh theo người đang nói',
      'Kịch bản phỏng vấn dẫn dắt cảm xúc tự nhiên',
    ],
    skillMdSnippet: `---
name: podcast-hai-nguoi
version: 1.0.0
---
# Bố cục Podcast 2 Người
1. Khung hình: Split screen 50-50 trên điện thoại dọc.
2. Âm thanh: Thu âm đa kênh độc lập, lọc tạp âm.
3. Hook: Trích 1 câu nói gây sốc nhất lên đầu video.`,
    samplePrompt: 'Lên kịch bản phỏng vấn 2 người về chủ đề "Khởi nghiệp kinh doanh số ở tuổi 30: Thách thức và cơ hội".',
    sampleOutput: 'Bản thảo 5 câu hỏi khơi gợi và cách mở đầu tạo ấn tượng ngay 3 giây đầu.',
  },
  {
    id: 'skill-video-gioi-thieu-san-pham',
    name: 'Ghép nhiều clip theo nhạc trend (Skill 15)',
    bannerTitle: 'GHÉP CLIP THEO NHẠC SKILL 15',
    tagline: 'Ghép nhiều clip theo nhạc trend: Tự động bắt beat, giật nhịp chuyển cảnh mượt mà cuốn hút',
    badge: 'SKILL 15 • 135K',
    cardBadge: 'Ghép Theo Nhạc',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'CapCut Pro'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3800,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Music',
    imageUrl: '/assets/skill_15.jpg',
    description: 'Kỹ thuật ghép chuỗi 5-10 clip ngắn hoặc hình ảnh thành video liền mạch bắt nhịp theo giai điệu bài hát đang hot trend trên TikTok/Reels: từng cú chuyển cảnh, zoom in/out khớp chuẩn từng tiếng bass.',
    skillHelps: 'Tạo video có tiết tấu vui tươi, cuốn hút, từng cú giật chuyển cảnh ăn khớp chuẩn xác với beat nhạc xu hướng giúp video dễ viral.',
    preparation: '1 bản nhạc xu hướng trên TikTok/Reels và 5-7 bức ảnh hoặc clip ngắn quay hoạt động.',
    steps: [
      'Bước 1: Chọn bài nhạc trend đang thịnh hành và nhập link âm thanh vào Skill bắt beat của Hải Triều AI.',
      'Bước 2: AI đánh dấu các mốc timeline chuẩn từng mili-giây cần cắt đổi phân cảnh.',
      'Bước 3: Kéo thả chuỗi clip ngắn vào CapCut theo timeline mẫu có sẵn để tạo video giật nhịp mê hoặc.',
    ],
    result: 'Video cuốn hút, khiến người xem xem đi xem lại nhiều lần, tăng mạnh tỷ lệ xem hết và đề xuất xu hướng.',
    features: [
      'Khớp từng giây chuyển động với beat âm thanh',
      'Tạo cảm giác hiện đại, trẻ trung và tràn đầy năng lượng',
      'Tự động đồng bộ hiệu ứng chuyển cảnh flash/zoom theo nhạc',
    ],
    skillMdSnippet: `---
name: ghep-clip-theo-nhac-trend
version: 1.0.0
---
Timeline chuyển cảnh chuẩn xác 0.5s - 1.2s mỗi phân cảnh theo nhịp beat.`,
    samplePrompt: 'Lên timeline khớp nhạc trend TikTok cho chuỗi 7 clip ngắn giới thiệu ngày làm việc của một chuyên gia AI.',
    sampleOutput: 'Bảng timeline 7 phân cảnh chuyển đổi nhịp nhàng theo cao trào bài nhạc.',
  },
  {
    id: 'skill-video-livestream-moi',
    name: 'AI tự cắt highlight theo nhạc (Skill 16)',
    bannerTitle: 'AI CẮT HIGHLIGHT SKILL 16',
    tagline: 'AI tự cắt highlight theo nhạc: Quét khoảnh khắc bùng nổ, gắn sao cao trào và lồng nhạc viral',
    badge: 'SKILL 16 • 135K',
    cardBadge: 'AI Cắt Highlight',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['CapCut AI', 'ChatGPT', 'Premiere AI'],
    rating: 5.0,
    reviewsCount: 395,
    downloadsCount: 3510,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_16.jpg',
    description: 'Tận dụng AI quét toàn bộ video để tự động phát hiện những khoảnh khắc cao trào nhất, hành động đắt giá nhất và tự động cắt thành chuỗi clip highlight giật nhịp theo điệu nhạc sôi động.',
    skillHelps: 'Biến những video dài buồn ngủ thành một bản tóm tắt highlight cực cháy chỉ trong vài phút, người xem không thể rời mắt.',
    preparation: 'Video sự kiện, workshop, thể thao hoặc khoảnh khắc đời sống cần làm video tóm tắt highlight.',
    steps: [
      'Bước 1: Nạp video sự kiện hoặc workshop vào công cụ AI phân tích highlight.',
      'Bước 2: AI tự động nhận diện tiếng reo hò, nụ cười, cử chỉ mạnh mẽ để gắn sao đánh dấu Highlight.',
      'Bước 3: Tự động ghép các đoạn highlight vào bài nhạc nền sôi động với nhịp chuyển cảnh mượt mà.',
    ],
    result: 'Bản video recap/highlight bùng nổ năng lượng, truyền cảm hứng và thôi thúc người xem tham gia.',
    features: [
      'Tự động nhận diện khoảnh khắc cao trào bằng AI',
      'Đồng bộ nhịp điệu với bản nhạc nền sôi động',
      'Gắn sao đánh dấu timeline và xuất video 4K siêu tốc',
    ],
    skillMdSnippet: `---
name: ai-cat-highlight-theo-nhac
version: 1.0.0
---
# Quy trình AI Highlight
1. Quét audio & visual peak để gắn sao timeline.
2. Cắt các đoạn 1.5s - 3s ấn tượng nhất.
3. Ráp theo beat nhạc cao trào.`,
    samplePrompt: 'Lên cấu trúc cắt highlight 30s cho video buổi workshop 200 học viên vừa diễn ra cuối tuần.',
    sampleOutput: 'Bản kế hoạch chọn lọc 6 khoảnh khắc bùng nổ nhất kèm chỉ dẫn nhạc nền.',
  },

  // =========================================================================
  // SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ (Skill 17 - 20)
  // =========================================================================
  {
    id: 'skill-trang-gioi-thieu-dich-vu',
    name: 'Trang thu lead ra số điện thoại (Skill 17)',
    bannerTitle: 'TRANG THU LEAD RA SỐ ĐIỆN THOẠI SKILL 17',
    tagline: 'Trang thu lead ra số điện thoại: Thiết kế form đăng ký nhận quà/tư vấn, thu data khách hàng chuẩn nét',
    badge: 'SKILL 17 • 135K',
    cardBadge: 'Trang Thu Lead',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Vite', 'React', 'Tailwind CSS', 'ChatGPT'],
    rating: 5.0,
    reviewsCount: 360,
    downloadsCount: 3200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Layout',
    imageUrl: '/assets/skill_17.jpg',
    description: 'Dựng trang landing page thu lead chuyên nghiệp tối ưu tỷ lệ để lại số điện thoại và thông tin liên hệ: tiêu đề thôi miên, quà tặng/ưu đãi kích hoạt hành động và form đăng ký mượt mà trên di động.',
    skillHelps: 'Biến người xem vãng lai thành khách hàng tiềm năng thực tế có số điện thoại để đội ngũ tư vấn gọi điện chốt đơn hoặc chăm sóc qua Zalo.',
    preparation: 'Ưu đãi tặng quà (ebook, buổi tư vấn 1-1, voucher) và thông tin hotline/Zalo nhận data.',
    steps: [
      'Bước 1: Nạp sản phẩm/dịch vụ vào prompt Trang Thu Lead để AI viết tiêu đề và lời hứa hẹn giá trị cao.',
      'Bước 2: Thiết kế form đăng ký tối giản: Họ tên + Số điện thoại (Zalo), nút bấm Đăng ký ngay tương phản cao.',
      'Bước 3: Tự động đồng bộ data số điện thoại về Google Sheets hoặc thông báo về Zalo cá nhân ngay khi khách điền.',
    ],
    result: 'Trang thu lead hoạt động 24/7, tỷ lệ chuyển đổi ra số điện thoại tăng 300%, data đổ về đều đặn mỗi ngày.',
    features: [
      'Tối ưu form thu số điện thoại trên di động chỉ trong 5 giây',
      'Đồng bộ data khách hàng về Google Sheets / Zalo tự động',
      'Tốc độ tải trang siêu tốc chuẩn SEO và thân thiện với quảng cáo',
    ],
    skillMdSnippet: `---
name: trang-thu-lead-ra-so-dien-thoai
version: 1.0.0
---
# Cấu trúc Trang Thu Lead
1. Tiêu đề: Nêu rõ quà tặng/lợi ích nhận được khi để lại SĐT.
2. Form: Chỉ lấy Họ tên + Số điện thoại (tối đa 2 trường để tăng tỷ lệ điền).
3. CTA: Nút bấm màu cam/vàng "ĐĂNG KÝ NGAY".`,
    samplePrompt: 'Viết nội dung trang thu lead ra số điện thoại cho khóa học làm video AI miễn phí, kích thích người xem để lại SĐT nhận tài liệu.',
    sampleOutput: 'Giao diện landing page thu lead hoàn chỉnh kèm form đăng ký và kịch bản gửi quà tự động.',
  },
  {
    id: 'skill-trang-dang-ky-workshop',
    name: 'Trang bán workshop & sự kiện (Skill 18)',
    bannerTitle: 'TRANG BÁN WORKSHOP & SỰ KIỆN SKILL 18',
    tagline: 'Trang bán workshop & sự kiện: Thiết kế landing page bán vé sự kiện, lịch trình đào tạo và form giữ chỗ tự động',
    badge: 'SKILL 18 • 135K',
    cardBadge: 'Bán Workshop & Sự Kiện',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Vite', 'React', 'Tailwind CSS', 'VietQR', 'ChatGPT'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 3450,
    author: 'Trịnh Hải Triều AI',
    iconName: 'GraduationCap',
    imageUrl: '/assets/skill_18.jpg',
    description: 'Thiết kế trang bán vé workshop, khóa đào tạo và sự kiện chuyên nghiệp: trình bày lịch trình, quyền lợi, diễn giả uy tín và hệ thống giữ chỗ, quét mã VietQR ngân hàng SHB tự động.',
    skillHelps: 'Tối đa hóa tỷ lệ chuyển đổi người đăng ký tham gia workshop, tự động dẫn khách vào nhóm Zalo chờ lớp và thu học phí tự động 24/7 mà không lo sót học viên.',
    preparation: 'Chủ đề workshop, thời lượng đào tạo (Zoom/Offline), hồ sơ người chia sẻ và mức phí giữ chỗ.',
    steps: [
      'Bước 1: Nạp nội dung chương trình học vào template Trang Bán Workshop & Sự Kiện của Hải Triều AI.',
      'Bước 2: AI thiết kế các khối thôi miên: Lợi ích đạt được -> Timeline chi tiết -> Giới thiệu diễn giả -> Đồng hồ đếm ngược giữ chỗ.',
      'Bước 3: Tích hợp mã VietQR SHB thu phí tự động và chuyển hướng học viên vào nhóm Zalo lớp học ngay lập tức.',
    ],
    result: 'Trang bán vé hoạt động trơn tru 24/7, tỷ lệ lấp đầy phòng học đạt 100%, học viên tự động vào nhóm Zalo ngăn nắp.',
    features: [
      'Đồng hồ đếm ngược tạo sự cấp bách và thúc đẩy đăng ký sớm',
      'Tích hợp form đăng ký và thanh toán VietQR SHB tự động',
      'Tự động đồng bộ danh sách học viên và link nhóm Zalo lớp học',
    ],
    skillMdSnippet: `---
name: trang-ban-workshop-su-kien
version: 1.0.0
---
# Cấu trúc Trang Bán Workshop & Sự Kiện
1. Header: Tiêu đề lôi cuốn + Ngày giờ tổ chức + Diễn giả.
2. Giá trị nhận được: 5 kết quả then chốt học viên đạt được.
3. Lịch trình: Khung giờ & nội dung thực chiến từng module.
4. Ưu đãi & Giữ chỗ: Đồng hồ đếm ngược + Nút VietQR đăng ký ngay.`,
    samplePrompt: 'Thiết kế trang bán vé workshop trực tuyến 2 ngày "Nuôi AI Agent cày thay mình 24/7", kích thích học viên quét mã VietQR giữ chỗ sớm.',
    sampleOutput: 'Bản thiết kế trang bán workshop chuẩn chuyển đổi với giao diện hiện đại, nút đăng ký và thông tin thanh toán rõ ràng.',
  },
  {
    id: 'skill-trang-ho-so-chuyen-gia',
    name: 'Sàn dịch vụ theo hồ sơ (Skill 19)',
    bannerTitle: 'SÀN DỊCH VỤ THEO HỒ SƠ SKILL 19',
    tagline: 'Sàn dịch vụ theo hồ sơ: Trình bày danh mục nhân sự Agent AI, hồ sơ năng lực và cổng đặt lịch/thuê việc',
    badge: 'SKILL 19 • 135K',
    cardBadge: 'Sàn Dịch Vụ Agent',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Vite', 'React', 'Tailwind CSS', 'Claude', 'ChatGPT'],
    rating: 5.0,
    reviewsCount: 395,
    downloadsCount: 3620,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Award',
    imageUrl: '/assets/skill_19.jpg',
    description: 'Xây dựng trang sàn dịch vụ theo hồ sơ chuyên nghiệp: trình bày danh sách nhân sự AI Agent "quên ăn quên ngủ vì sếp", bảng hồ sơ kỹ năng, đánh giá và form đặt lịch thuê dịch vụ trực tiếp.',
    skillHelps: 'Định vị dịch vụ cao cấp, giúp khách hàng dễ dàng tìm kiếm, so sánh và lựa chọn nhân sự Agent AI hoặc chuyên gia theo đúng nhu cầu dự án.',
    preparation: 'Danh mục dịch vụ/Agent cung cấp, mô tả năng lực, case study thành công và bảng báo giá/đặt lịch.',
    steps: [
      'Bước 1: Nạp danh mục hồ sơ năng lực và dịch vụ vào template Sàn Dịch Vụ của Hải Triều AI.',
      'Bước 2: AI thiết kế giao diện danh mục nhân sự: Thẻ hồ sơ chuyên gia/Agent -> Kỹ năng cốt lõi -> Đánh giá 5 sao -> Nút đặt lịch ngay.',
      'Bước 3: Tích hợp hệ thống form đặt dịch vụ mượt mà, tự động chuyển data về Google Sheets và thông báo Zalo.',
    ],
    result: 'Sàn dịch vụ chuyên nghiệp, tạo niềm tin tuyệt đối cho khách hàng, chốt hợp đồng và nhận lịch tư vấn liên tục.',
    features: [
      'Bố cục thẻ hồ sơ năng lực trực quan chuẩn UI/UX quốc tế',
      'Hệ thống lọc theo chuyên môn và xếp hạng uy tín',
      'Nút đặt lịch và thanh toán tiện lợi chỉ trong 1 chạm',
    ],
    skillMdSnippet: `---
name: san-dich-vu-theo-ho-so
version: 1.0.0
---
# Cấu trúc Sàn Dịch Vụ Theo Hồ Sơ
1. Header: Định vị sàn nhân sự / dịch vụ chuyên gia chất lượng cao.
2. Danh sách Agent: Ảnh đại diện, chuyên môn, case study & giá thuê.
3. Bộ lọc: Theo ngành nghề, ngân sách và thời gian hoàn thành.
4. CTA: Form đặt lịch làm việc và thanh toán cọc trực tuyến.`,
    samplePrompt: 'Thiết kế trang sàn dịch vụ theo hồ sơ chuyên gia AI Agent "quên ăn quên ngủ", hiển thị danh sách agent chuyên viết kịch bản, làm video và chăm sóc khách hàng.',
    sampleOutput: 'Giao diện sàn dịch vụ theo hồ sơ hoàn chỉnh, hiện đại với đầy đủ thẻ hồ sơ agent và nút đặt lịch trực tuyến.',
  },
  {
    id: 'skill-trang-ban-san-pham-so',
    name: 'Trang bán sản phẩm số đồng giá (Skill 20)',
    bannerTitle: 'SẢN PHẨM SỐ ĐỒNG GIÁ SKILL 20',
    tagline: 'Trang bán sản phẩm số đồng giá: Thiết kế website bán tài nguyên số, file Skill và khóa học tự động hóa 24/7',
    badge: 'SKILL 20 • 135K',
    cardBadge: 'Sản Phẩm Số Đồng Giá',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Vite', 'React', 'Tailwind CSS', 'VietQR SHB', 'Firebase'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3890,
    author: 'Trịnh Hải Triều AI',
    iconName: 'CreditCard',
    imageUrl: '/assets/skill_20.jpg',
    description: 'Xây dựng website bán sản phẩm số đồng giá chuyên nghiệp: phân chia danh mục sảnh kỹ năng, hiển thị poster trực quan, tích hợp chuẩn VietQR chuyển khoản SHB tự động và bàn giao tài nguyên ngay lập tức.',
    skillHelps: 'Tạo cỗ máy bán hàng và kiếm tiền tự động suốt ngày đêm: khách hàng chọn skill, quét mã VietQR ngân hàng SHB và nhận file tài liệu tự động mà không cần nhân sự trực chốt đơn.',
    preparation: 'Danh mục sản phẩm số (file Skill, khóa học, ebook, prompt), link tải tài nguyên và thông tin tài khoản VietQR nhận tiền.',
    steps: [
      'Bước 1: Nạp danh mục sản phẩm số và bảng giá vào template Trang Bán Sản Phẩm Số Đồng Giá của Hải Triều AI.',
      'Bước 2: AI thiết kế các sảnh kỹ năng chuyên nghiệp: Phân loại theo chủ đề -> Gắn poster minh họa -> Nút thanh toán VietQR SHB tự động.',
      'Bước 3: Tích hợp hệ thống lưu đơn hàng và tự động mở tài nguyên/gửi link Zalo cho khách hàng ngay sau khi thanh toán thành công.',
    ],
    result: 'Cửa hàng sản phẩm số hoạt động tự động 24/7, tỷ lệ chuyển đổi cao, doanh thu đổ về tài khoản đều đặn mỗi ngày.',
    features: [
      'Phân chia sảnh kỹ năng trực quan chuẩn UI/UX thương mại điện tử',
      'Tích hợp tạo mã VietQR tự động theo từng đơn hàng chính xác 100%',
      'Tự động bàn giao file và kết nối nhóm hỗ trợ khách hàng',
    ],
    skillMdSnippet: `---
name: trang-ban-san-pham-so-dong-gia
version: 1.0.0
---
# Cấu trúc Trang Bán Sản Phẩm Số Đồng Giá
1. Header: Nhận diện thương hiệu & Lời hứa giá trị đồng giá 135K.
2. Danh mục Sảnh: Thẻ bài giảng, file prompt, video mẫu.
3. Thanh toán VietQR: Mã QR động tự điền số tiền và mã đơn.
4. Giao nhận: Mở link Google Drive / Nhóm Zalo hỗ trợ tức thì.`,
    samplePrompt: 'Thiết kế website bán sản phẩm số đồng giá 135K cho các gói AI Skill thực chiến kèm quét mã VietQR tự động.',
    sampleOutput: 'Website bán sản phẩm số đồng giá hoàn chỉnh với giao diện sảnh sang trọng và hệ thống thanh toán tự động 24/7.',
  },
  {
    id: 'skill-trang-cong-cu-dung-thu',
    name: 'Trang công cụ dùng thử (Skill 21)',
    bannerTitle: 'TRANG CÔNG CỤ DÙNG THỬ SKILL 21',
    tagline: 'Trang ứng dụng cho khách dùng thử: Tạo landing page trải nghiệm công cụ thử nghiệm cho khách hàng chuyển đổi cao',
    badge: 'SKILL 21 • 135K',
    cardBadge: 'Trang Dùng Thử',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['React', 'Next.js / Vite', 'AI Interactive Demo', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 365,
    downloadsCount: 3480,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Laptop',
    imageUrl: '/assets/skill_21.jpg',
    description: 'Xây dựng trang landing page công cụ cho khách dùng thử (Interactive Demo Tool): cho phép người xem trải nghiệm trực tiếp tính năng trước khi mua, tăng vọt tỷ lệ tin tưởng và thanh toán.',
    skillHelps: 'Khách hàng được trực tiếp trải nghiệm giá trị sản phẩm ngay trên website, phá vỡ mọi nghi ngại và kích thích ra quyết định mua hàng tức thì.',
    preparation: 'Bộ tính năng hoặc công cụ mẫu muốn cho người dùng trải nghiệm thử.',
    steps: [
      'Bước 1: Nạp kịch bản demo vào prompt Trang Công Cụ Dùng Thử của Hải Triều AI.',
      'Bước 2: AI thiết kế giao diện thử nghiệm tương tác kèm giới hạn dùng thử thông minh.',
      'Bước 3: Tự động kích hoạt thông báo nâng cấp bản quyền khi khách dùng thử thành công.',
    ],
    result: 'Trang công cụ dùng thử ấn tượng, thu hút người trải nghiệm và tự động chuyển đổi thành khách hàng trả phí.',
    features: [
      'Khung giao diện thử nghiệm trực tiếp mượt mà ngay trên web',
      'Tự động thu thập thông tin khách hàng trước khi trả kết quả',
      'Tối ưu tỷ lệ chuyển đổi từ người dùng thử thành đơn hàng trả phí',
    ],
    skillMdSnippet: `---
name: trang-cong-cu-dung-thu
version: 1.0.0
---
# Cấu trúc Trang Công Cụ Dùng Thử
1. Demo Container: Khung mô phỏng ứng dụng chạy mượt mà.
2. Trial Limit: Giới hạn số lượt dùng thử khéo léo.
3. Call to Action: Nút nâng cấp mở khóa toàn bộ tính năng VIP.`,
    samplePrompt: 'Thiết kế trang web cho khách dùng thử công cụ tạo video ngắn AI với giao diện trực quan và nút nâng cấp bản quyền.',
    sampleOutput: 'Mã nguồn trang web demo công cụ hoàn chỉnh, hỗ trợ tương tác dùng thử và kết nối cổng thanh toán tự động.',
  },
  {
    id: 'skill-qua-tang-thu-thach-30-ngay',
    name: 'Quà tặng thử thách 30 ngày (Skill 22)',
    bannerTitle: 'QUÀ TẶNG THỬ THÁCH 30 NGÀY SKILL 22',
    tagline: 'Trang quà tặng & thử thách 30 ngày: Thiết kế phễu nhận quà tặng và chuỗi thử thách 30 ngày tự động hút leads',
    badge: 'SKILL 22 • 135K',
    cardBadge: 'Thử Thách 30 Ngày',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Funnel Builder', 'React', 'Gamification Check-in', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 370,
    downloadsCount: 3560,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Calendar',
    imageUrl: '/assets/skill_22.jpg',
    description: 'Thiết kế trang tặng quà kết hợp chuỗi thử thách 30 ngày (30-Day Challenge Funnel): biến người theo dõi mới thành học viên gắn bó qua lộ trình thực chiến mỗi ngày có tích dấu hoàn thành.',
    skillHelps: 'Tạo động lực học tập hàng ngày cho học viên, xây dựng thói quen tương tác và chuẩn bị cho các đợt mở bán khóa học chuyên sâu tiếp theo.',
    preparation: 'Lộ trình 30 ngày và các tài nguyên quà tặng đính kèm.',
    steps: [
      'Bước 1: Nạp chủ đề và quà tặng vào prompt Thử Thách 30 Ngày của Hải Triều AI.',
      'Bước 2: AI tự tạo giao diện lịch 30 ô nhiệm vụ kèm tính năng tick xanh theo dõi tiến độ.',
      'Bước 3: Tích hợp hệ thống nhận quà tặng tức thì và tự động gửi lời nhắc mỗi ngày.',
    ],
    result: 'Trang thử thách 30 ngày chuyên nghiệp, tỷ lệ hoàn thành cao và cộng đồng học viên tương tác sôi nổi.',
    features: [
      'Giao diện bảng lịch thử thách 30 ngày có tick xanh trực quan',
      'Tích hợp form đăng ký nhận quà và khóa học miễn phí tự động',
      'Kịch bản giữ chân người tham gia từ ngày 1 đến ngày 30 liên tục',
    ],
    skillMdSnippet: `---
name: qua-tang-thu-thach-30-ngay
version: 1.0.0
---
# Cấu trúc Phễu Thử Thách 30 Ngày
1. Hero Gift: Nút nhận quà tặng giá trị cao kích thích đăng ký.
2. 30-Day Grid: Lịch trình 30 ngày có biểu tượng tick xanh tiến độ.
3. Community Gate: Dẫn dắt người tham gia vào nhóm Zalo đồng hành.`,
    samplePrompt: 'Tạo landing page nhận quà tặng kiếm tiền KOL AI kèm bảng thử thách 30 ngày với lịch trình tick xanh trực quan.',
    sampleOutput: 'Landing page phễu quà tặng và thử thách 30 ngày đầy đủ hiệu ứng điểm danh và kêu gọi hành động.',
  },
  {
    id: 'skill-teardown-kenh-doi-thu',
    name: 'Teardown kênh đối thủ (Skill 23)',
    bannerTitle: 'TEARDOWN KÊNH ĐỐI THỦ SKILL 23',
    tagline: 'Teardown kênh đối thủ: Bóc tách hồ sơ, định vị và đường tăng trưởng của mọi kênh đối thủ top ngành bằng AI',
    badge: 'SKILL 23 • 135K',
    cardBadge: 'Teardown Đối Thủ',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['AI Research Agent', 'Competitive Analysis', 'Growth Metric', 'Prompt AI'],
    rating: 5.0,
    reviewsCount: 360,
    downloadsCount: 3420,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Target',
    imageUrl: '/assets/skill_23.jpg',
    description: 'Phương pháp phân tích bóc tách (Teardown) toàn diện kênh đối thủ: từ chân dung khán giả, cấu trúc kịch bản triệu view, tần suất đăng video đến chiến lược chuyển đổi doanh thu bí mật.',
    skillHelps: 'Hiểu rõ tại sao đối thủ làm được video triệu view, học hỏi nhanh công thức thành công của họ mà không phải mất thời gian thử sai.',
    preparation: 'Đường link kênh TikTok, YouTube hoặc Facebook của đối thủ cần bóc tách.',
    steps: [
      'Bước 1: Nạp link hoặc danh sách video đối thủ vào prompt Teardown Kênh Đối Thủ của Hải Triều AI.',
      'Bước 2: AI tự phân tích ma trận định vị, 3 câu hook hiệu quả nhất và đường tăng trưởng người xem.',
      'Bước 3: Xuất báo cáo teardown chi tiết kèm gợi ý cải tiến để bạn làm tốt hơn đối thủ.',
    ],
    result: 'Bản báo cáo bóc tách sắc sảo, giúp bạn nắm trọn công thức làm nội dung viral của đối thủ và áp dụng ngay vào kênh mình.',
    features: [
      'Bóc tách hồ sơ định vị và công thức hook của video viral đối thủ',
      'Biểu đồ phân tích đường tăng trưởng lượt xem trung bình và cao nhất',
      'Bộ câu lệnh prompt AI quét và tóm tắt điểm mạnh yếu của mọi kênh đối thủ',
    ],
    skillMdSnippet: `---
name: teardown-kenh-doi-thu
version: 1.0.0
---
# Cấu trúc Teardown Kênh Đối Thủ
1. Hồ sơ & Định vị: Chân dung tệp xem và phong cách video chủ đạo.
2. Đường tăng trưởng: Phân tích các cột mốc lượt xem đột biến.
3. Kịch bản chuyển đổi: Cách đối thủ điều hướng khán giả thành người mua hàng.`,
    samplePrompt: 'Bóc tách và phân tích toàn diện kênh đối thủ mẫu, tìm ra công thức làm video triệu view và kịch bản bán hàng của họ.',
    sampleOutput: 'Bản báo cáo teardown chuyên sâu với phân tích định vị, cấu trúc kịch bản và chiến lược tăng trưởng chi tiết.',
  },
  {
    id: 'skill-bo-45-slide-mau-dung-san',
    name: 'Bộ 45 slide mẫu dựng sẵn (Skill 24)',
    bannerTitle: 'BỘ 45 SLIDE MẪU DỰNG SẴN SKILL 24',
    tagline: 'Bộ 45 slide mẫu dựng sẵn: Thư viện 45 layout slide thuyết trình, workshop và kịch bản bán hàng chuẩn thẩm mỹ cao',
    badge: 'SKILL 24 • 135K',
    cardBadge: '45 Slide Mẫu',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Canva / PPT', 'Figma Presentation', 'Slide Layout AI', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 385,
    downloadsCount: 3740,
    author: 'Trịnh Hải Triều AI',
    iconName: 'FileText',
    imageUrl: '/assets/skill_24.jpg',
    description: 'Trọn bộ 45 bố cục slide mẫu dựng sẵn chuẩn quốc tế: thiết kế tối giản hiện đại cho hội thảo, webinar bán hàng, bài giảng online và tài liệu đào tạo nội bộ tải về dùng ngay.',
    skillHelps: 'Tiết kiệm hàng chục giờ thiết kế slide, tự tin thuyết trình trước hàng trăm khán giả với bộ slide chuẩn phong cách chuyên gia cao cấp.',
    preparation: 'Nội dung bài thuyết trình hoặc kịch bản buổi chia sẻ.',
    steps: [
      'Bước 1: Chọn mẫu slide phù hợp trong bộ 45 layout dựng sẵn của Hải Triều AI.',
      'Bước 2: Dán nội dung và số liệu của bạn vào các ô bố cục đã được căn chỉnh tỉ lệ vàng.',
      'Bước 3: Xuất file PDF, PowerPoint hoặc trình chiếu trực tiếp trên máy tính.',
    ],
    result: 'Bộ slide thuyết trình đẹp mắt, mạch lạc, thu hút sự tập trung của người nghe từ đầu đến cuối buổi chia sẻ.',
    features: [
      '45 bố cục slide đa dạng: Phễu bán hàng, quy trình 5 bước, bảng so sánh',
      'Định dạng sẵn dễ dàng kéo thả trên Canva, PowerPoint và Figma',
      'Tông màu chuyên nghiệp, tinh chỉnh linh hoạt theo nhận diện thương hiệu',
    ],
    skillMdSnippet: `---
name: bo-45-slide-mau-dung-san
version: 1.0.0
---
# Cấu trúc Bộ 45 Slide Mẫu Dựng Sẵn
1. Cover & Hook: Slide mở đầu thu hút sự chú ý tức thì.
2. Content Framework: Bố cục 5 bước, kim tự tháp và mô hình so sánh.
3. Offer & CTA: Slide chốt bán hàng và hướng dẫn thanh toán rõ ràng.`,
    samplePrompt: 'Cung cấp thư viện 45 slide mẫu thiết kế sẵn cho bài thuyết trình hội thảo bán hàng trực tuyến.',
    sampleOutput: 'Bộ 45 slide bố cục chuẩn chuyên nghiệp, sẵn sàng thay thế nội dung và trình chiếu ngay lập tức.',
  },
  {
    id: 'skill-hieu-ung-3d-tren-trang',
    name: 'Hiệu ứng 3D trên trang (Skill 25)',
    bannerTitle: 'HIỆU ỨNG 3D TRÊN TRANG SKILL 25',
    tagline: 'Hiệu ứng 3D cho website: Tích hợp vật thể 3D tương tác xoay 360 độ nâng tầm trải nghiệm thị giác sống động',
    badge: 'SKILL 25 • 135K',
    cardBadge: 'Hiệu Ứng 3D',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Three.js', 'React Three Fiber', 'WebGL 3D', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 390,
    downloadsCount: 3820,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Box',
    imageUrl: '/assets/skill_25.jpg',
    description: 'Tích hợp hiệu ứng 3D trực quan cho website (Interactive 3D Object): đưa vật thể 3D hình khối, sản phẩm hoặc biểu tượng tương tác xoay 360 độ mượt mà theo chuyển động con trỏ chuột và cảm ứng tay.',
    skillHelps: 'Gây ấn tượng thị giác công nghệ cao đẳng cấp quốc tế ngay khi khách hàng truy cập, giữ chân người xem lâu hơn và tạo sự khác biệt hoàn toàn với đối thủ.',
    preparation: 'Mô hình hoặc ý tưởng vật thể 3D muốn đưa lên trang.',
    steps: [
      'Bước 1: Nạp concept vật thể 3D vào prompt Hiệu Ứng 3D Trên Trang của Hải Triều AI.',
      'Bước 2: AI tự xây dựng canvas Three.js / WebGL với khử răng cưa và điều khiển xoay OrbitControls mượt mà.',
      'Bước 3: Nhúng component 3D vào phần Header hoặc khối giới thiệu sản phẩm chỉ với 1 dòng code.',
    ],
    result: 'Vật thể 3D xoay chuyển mượt mà trên nền web, khách truy cập thích thú tương tác, nâng tầm giá trị thương hiệu vượt trội.',
    features: [
      'Tương tác xoay 360 độ tự nhiên theo chuột và ngón tay trên điện thoại',
      'Tối ưu WebGL siêu nhẹ, tốc độ khung hình 60fps mượt mà không hao pin',
      'Tự động quay chậm khi người dùng không chạm để tạo chiều sâu không gian',
    ],
    skillMdSnippet: `---
name: hieu-ung-3d-tren-trang
version: 1.0.0
---
# Cấu trúc Hiệu Ứng 3D Trên Trang
1. Three.js Canvas: WebGLRenderer khử răng cưa (antialias: true).
2. 3D Geometry: Vật thể đa diện (Icosahedron / Custom Model) có đổ bóng.
3. OrbitControls: Xoay tự do theo thao tác chuột và cảm ứng điện thoại.`,
    samplePrompt: 'Tạo component Three.js hiển thị khối đa diện 3D tương tác xoay 360 độ theo con trỏ chuột với ánh sáng studio tinh tế.',
    sampleOutput: 'Component React Three.js hoàn chỉnh với khả năng tương tác xoay 3D mượt mà và tối ưu hiệu năng.',
  },
  {
    id: 'skill-khoi-giao-dien-co-san',
    name: 'Khối giao diện có sẵn (Skill 26)',
    bannerTitle: 'KHỐI GIAO DIỆN CÓ SẴN SKILL 26',
    tagline: 'Thư viện giao diện web có sẵn: Bộ thẻ UI component dựng sẵn chuẩn chuyển đổi cao tải về lắp ráp ngay',
    badge: 'SKILL 26 • 135K',
    cardBadge: 'Khối Giao Diện',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Tailwind UI', 'React Components', 'Figma Blocks', 'CSS Modules'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 3750,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Layout',
    imageUrl: '/assets/skill_26.jpg',
    description: 'Thư viện toàn diện các khối giao diện dựng sẵn (Pre-built UI Blocks): Bảng giá (Pricing Tables), Lời chứng thực (Testimonials), Form thu thập khách hàng và Khối Hero bán hàng đạt tỷ lệ chuyển đổi cao nhất.',
    skillHelps: 'Lắp ráp một trang web bán hàng hoặc dịch vụ hoàn chỉnh chỉ trong 15 phút, không cần biết code từ đầu, chuẩn thẩm mỹ hiện đại.',
    preparation: 'Nội dung và hình ảnh dịch vụ bạn muốn đưa vào website.',
    steps: [
      'Bước 1: Chọn các khối giao diện cần thiết trong thư viện của Hải Triều AI.',
      'Bước 2: Thay thế câu từ và ảnh sản phẩm của bạn vào các vị trí đã đánh dấu.',
      'Bước 3: Xuất trang web và kết nối tên miền riêng sẵn sàng đón khách mua hàng.',
    ],
    result: 'Website bán hàng chuyên nghiệp được hoàn thành thần tốc với đầy đủ khối chức năng chuyển đổi cao.',
    features: [
      'Hơn 50+ mẫu khối giao diện thiết kế sẵn tối ưu tâm lý người mua hàng',
      'Định dạng React và Tailwind CSS sạch sẽ, tùy biến màu sắc linh hoạt',
      'Chuẩn responsive 100% trên điện thoại, máy tính bảng và màn hình lớn',
    ],
    skillMdSnippet: `---
name: khoi-giao-dien-co-san
version: 1.0.0
---
# Cấu trúc Khối Giao Diện Có Sẵn
1. Pricing Blocks: 3 gói so sánh minh bạch có nhãn Best Seller.
2. Testimonial Grid: Đánh giá học viên kèm ảnh avatar và số sao.
3. Feature Showcase: Danh sách tính năng kèm icon trực quan.`,
    samplePrompt: 'Cung cấp bộ khối giao diện bảng giá và feedback khách hàng chuẩn Tailwind CSS dễ dàng ghép vào landing page.',
    sampleOutput: 'Mã nguồn các khối giao diện chuẩn UI/UX, hỗ trợ copy-paste và tùy biến màu sắc thương hiệu ngay lập tức.',
  },
  {
    id: 'skill-chuyen-dong-muot-ma',
    name: 'Chuyển động mượt mà (Skill 27)',
    bannerTitle: 'CHUYỂN ĐỘNG MƯỢT MÀ SKILL 27',
    tagline: 'Hiệu ứng chuyển động website: Tinh chỉnh chuyển động animation và đường cong gia tốc mượt mà chuẩn Apple',
    badge: 'SKILL 27 • 135K',
    cardBadge: 'Chuyển Động Mượt',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Framer Motion', 'Cubic-Bezier GSAP', 'CSS Transitions', 'React'],
    rating: 5.0,
    reviewsCount: 375,
    downloadsCount: 3690,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Activity',
    imageUrl: '/assets/skill_27.jpg',
    description: 'Hiệu ứng chuyển động mượt mà chuẩn phong cách Apple & Awwwards (Smooth Motion & Micro-interactions): tinh chỉnh đường cong gia tốc (Cubic Bezier curve), hiệu ứng lướt thẻ và phản hồi chạm tinh tế.',
    skillHelps: 'Biến trang web bán hàng đơ cứng thành trải nghiệm mượt mà êm ru, tạo cảm giác tin cậy và định vị sản phẩm giá trị cao trong mắt khách hàng.',
    preparation: 'Các nút bấm, thẻ bài viết hoặc hình ảnh cần áp dụng chuyển động.',
    steps: [
      'Bước 1: Nạp danh sách component cần chuyển động vào prompt Chuyển Động Mượt Mà.',
      'Bước 2: AI thiết lập tham số lò xo (spring physics) và đường cong cubic-bezier lý tưởng.',
      'Bước 3: Tích hợp hiệu ứng trôi vào mượt mà khi người dùng cuộn đến vị trí tương ứng.',
    ],
    result: 'Website chuyển động êm ru như lụa, từng cú rê chuột và cuộn trang đều phản hồi sống động, thỏa mãn thị giác người xem.',
    features: [
      'Đường cong gia tốc tự nhiên triệt tiêu cảm giác giật cục',
      'Hiệu ứng rê chuột phản hồi tinh tế nâng cao trải nghiệm bấm mua',
      'Tối ưu GPU acceleration không gây đơ lag trình duyệt',
    ],
    skillMdSnippet: `---
name: chuyen-dong-muot-ma
version: 1.0.0
---
# Cấu trúc Chuyển Động Mượt Mà
1. Easing Curve: cubic-bezier(0.16, 1, 0.3, 1) cho độ lướt mượt.
2. Scroll Reveal: Intersection Observer kích hoạt trượt lên nhẹ nhàng.
3. Hover Feedback: Scale 1.02 và shadow mềm mại khi di chuột.`,
    samplePrompt: 'Cài đặt hiệu ứng chuyển động trượt thẻ mượt mà với đường cong cubic-bezier cho website bán khóa học cao cấp.',
    sampleOutput: 'Đoạn mã animation siêu nhẹ với hiệu ứng chuyển cảnh mượt mà và phản hồi di chuột chuẩn phong cách Apple.',
  },
  {
    id: 'skill-bang-truot-trung-bay-28',
    name: 'Băng trượt trưng bày (Skill 28)',
    bannerTitle: 'BĂNG TRƯỢT TRƯNG BÀY SKILL 28',
    tagline: 'Slider trình chiếu dịch vụ: Băng trượt carousel giới thiệu sản phẩm và portfolio mượt mà chuẩn tương tác cảm ứng',
    badge: 'SKILL 28 • 135K',
    cardBadge: 'Băng Trượt Trưng Bày',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Embla Carousel / Swiper', 'React', 'Framer Motion', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 395,
    downloadsCount: 3880,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sliders',
    imageUrl: '/assets/skill_28.jpg',
    description: 'Thiết kế slider / carousel băng trượt trình chiếu dịch vụ và sản phẩm chuyên nghiệp: vuốt chạm mượt mà trên điện thoại, tự động chuyển slide thông minh, phân trang dạng chấm hoặc thanh tiến trình hiện đại.',
    skillHelps: 'Trưng bày gọn gàng hàng chục dự án, feedback khách hàng hoặc gói dịch vụ trong một khung trượt trực quan, tăng độ thu hút và tương tác trên trang bán hàng.',
    preparation: 'Bộ ảnh sản phẩm, banner dịch vụ hoặc danh mục portfolio cần trình chiếu.',
    steps: [
      'Bước 1: Nạp danh sách thẻ dịch vụ vào prompt Băng Trượt Trưng Bày của Hải Triều AI.',
      'Bước 2: AI tự tạo component Slider đa tương tác với chế độ vuốt cảm ứng (touch swipe), tự động trôi (autoplay) và nút điều hướng 2 bên.',
      'Bước 3: Tích hợp hiệu ứng phóng to thẻ ở giữa (center zoom) tạo chiều sâu thị giác sang trọng.',
    ],
    result: 'Băng trượt trưng bày dịch vụ mượt mà chuẩn thương mại điện tử quốc tế, tối ưu trải nghiệm vuốt chạm trên cả máy tính lẫn điện thoại.',
    features: [
      'Hỗ trợ cảm ứng vuốt mượt mà trên iPhone và Android',
      'Chế độ vòng lặp vô tận (infinite loop) không ngắt quãng',
      'Tự động dừng khi di chuột hoặc chạm giữ để người xem đọc kỹ nội dung',
    ],
    skillMdSnippet: `---
name: bang-truot-trung-bay-slider-28
version: 1.0.0
---
# Cấu trúc Băng Trượt Trưng Bày Slider
1. Carousel Container: Tối ưu overflow-hidden, touch-action: pan-y.
2. Slide Card: Tỉ lệ 3:4 hoặc 16:9, hiệu ứng scale nhẹ khi active.
3. Pagination Dots: Chỉ số trang động đổi màu mượt mà.`,
    samplePrompt: 'Tạo component băng trượt carousel trình chiếu danh mục dịch vụ KOL AI với hiệu ứng vuốt mượt mà và nút điều hướng sang trọng.',
    sampleOutput: 'Mã nguồn React Slider hoàn chỉnh với hỗ trợ swipe cảm ứng, autoplay thông minh và giao diện đẳng cấp.',
  },
  {
    id: 'skill-trang-3d-bang-react-29',
    name: 'Trang 3D bằng React (Skill 29)',
    bannerTitle: 'TRANG 3D BẰNG REACT SKILL 29',
    tagline: 'Làm web 3D bằng React: Thiết kế mô hình lăng kính khúc xạ ánh sáng 3D tương tác đa chiều đẳng cấp',
    badge: 'SKILL 29 • 135K',
    cardBadge: 'Web 3D React',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['React Three Fiber', 'Three.js', 'Drei', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3950,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Box',
    imageUrl: '/assets/skill_29.jpg',
    description: 'Hướng dẫn xây dựng website 3D đỉnh cao bằng React & Three.js: mô hình 3D lăng kính tán sắc ánh sáng tương tác xoay lật theo chuột, tối ưu hiệu năng 60fps mượt mà trên mọi thiết bị máy tính và điện thoại.',
    skillHelps: 'Biến website giới thiệu sản phẩm công nghệ hoặc portfolio thành không gian 3D tương tác sống động, nâng tầm thương hiệu chuyên nghiệp và gây ấn tượng mạnh với khách hàng ngay lần đầu truy cập.',
    preparation: 'Mô hình 3D (.gltf / .glb) hoặc các khối hình học cơ bản muốn đưa lên web.',
    steps: [
      'Bước 1: Nạp cấu trúc canvas React Three Fiber và hiệu ứng ánh sáng vào dự án.',
      'Bước 2: AI thiết lập vật liệu lăng kính khúc xạ (transmission material) và ánh sáng cầu vồng tán sắc.',
      'Bước 3: Tích hợp tương tác chuột xoay lật 360 độ và tối ưu render nhẹ mượt không tốn pin.',
    ],
    result: 'Website 3D hiện đại chuẩn Awwwards, khách hàng có thể tương tác xoay ngắm sản phẩm trực tiếp trên trình duyệt.',
    features: [
      'Render 3D thời gian thực với React Three Fiber và Drei',
      'Hiệu ứng quang học lăng kính tán sắc ánh sáng tuyệt đẹp',
      'Tương thích mượt mà trên Safari iOS, Chrome Android và Desktop',
    ],
    skillMdSnippet: `---
name: trang-3d-bang-react-29
version: 1.0.0
---
# Cấu trúc Web 3D React Three Fiber
1. Canvas Container: shadows, dpr={[1, 2]}, camera={{ fov: 45 }}.
2. Mesh Prism: MeshTransmissionMaterial, roughness: 0.1, chromaticAberration: 0.4.
3. OrbitControls: enableZoom: false, autoRotate: true, autoRotateSpeed: 1.5.`,
    samplePrompt: 'Viết code React Three Fiber tạo lăng kính thủy tinh tán sắc ánh sáng 3D xoay theo con trỏ chuột cho landing page AI.',
    sampleOutput: 'Component Canvas 3D tương tác hoàn chỉnh sẵn sàng gắn vào hero section với độ mượt 60fps.',
  },
  {
    id: 'skill-cuon-trang-muot-nhu-lua-30',
    name: 'Cuộn trang mượt như lụa (Skill 30)',
    bannerTitle: 'CUỘN TRANG MƯỢT NHƯ LỤA SKILL 30',
    tagline: 'Hiệu ứng cuộn trang mượt: Tối ưu cảm giác lướt web êm ái như dải lụa không giật lag',
    badge: 'SKILL 30 • 135K',
    cardBadge: 'Cuộn Mượt Như Lụa',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Lenis Scroll', 'Locomotive Scroll', 'GSAP ScrollTrigger', 'CSS'],
    rating: 5.0,
    reviewsCount: 390,
    downloadsCount: 3820,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_30.jpg',
    description: 'Công thức tích hợp hiệu ứng cuộn mượt như lụa (Smooth Inertial Scrolling with Lenis / Locomotive): triệt tiêu hoàn toàn cảm giác giật nấc bánh xe chuột, điều chỉnh quán tính lăn mượt mà cho trải nghiệm đọc lướt vô tận.',
    skillHelps: 'Tạo cảm giác lướt website êm ái sang trọng bậc nhất, giữ chân người đọc xem hết toàn bộ kịch bản bán hàng và bảng báo giá dịch vụ.',
    preparation: 'Trang web có độ dài nội dung từ 3-5 màn hình cần cuộn.',
    steps: [
      'Bước 1: Cài đặt thư viện Lenis Scroll siêu nhẹ vào tệp layout chính.',
      'Bước 2: Đồng bộ hóa tốc độ cuộn với requestAnimationFrame và hiệu ứng parallax.',
      'Bước 3: Tối ưu quán tính bánh lăn mượt mà không làm trễ thao tác của người dùng.',
    ],
    result: 'Trải nghiệm lướt web êm ru như xem video, gia tăng thời gian đọc trang (Time on page) lên gấp đôi.',
    features: [
      'Triệt tiêu cảm giác giật cục khi lăn chuột trên Windows và Mac',
      'Đồng bộ hoàn hảo với hiệu ứng chuyển động GSAP ScrollTrigger',
      'Không can thiệp tiêu cực vào thao tác vuốt tự nhiên trên điện thoại',
    ],
    skillMdSnippet: `---
name: cuon-trang-muot-nhu-lua-30
version: 1.0.0
---
# Cài đặt Smooth Scroll Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});`,
    samplePrompt: 'Cung cấp cấu hình Lenis Scroll chuẩn React kết hợp hiệu ứng trượt mượt mà cho website bán khóa học.',
    sampleOutput: 'Mã khởi tạo hook useSmoothScroll điều khiển cuộn êm ái và sạch lỗi memory leak.',
  },
  {
    id: 'skill-hat-sang-nen-dong-31',
    name: 'Hạt sáng nền động (Skill 31)',
    bannerTitle: 'HẠT SÁNG NỀN ĐỘNG SKILL 31',
    tagline: 'Hiệu ứng hạt sáng nền web: Nền tương tác hạt bụi sáng phát quang huyền ảo nâng tầm giá trị trang',
    badge: 'SKILL 31 • 135K',
    cardBadge: 'Hạt Sáng Nền Động',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['tsparticles', 'Canvas API', 'WebGL', 'React'],
    rating: 5.0,
    reviewsCount: 410,
    downloadsCount: 4100,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sun',
    imageUrl: '/assets/skill_31.jpg',
    description: 'Tạo hiệu ứng hạt sáng nền web chuyên nghiệp: biến website của bạn trở nên sống động với hiệu ứng hạt sáng phát quang màu vàng cam mượt mà thu hút người xem, bay theo con trỏ chuột và tương tác nhịp nhàng.',
    skillHelps: 'Trang trí phần Hero và nền trang landing page với các hạt ánh sáng chuyển động nhịp nhàng, biến giao diện đơn điệu thành một tác phẩm nghệ thuật thu hút thị giác.',
    preparation: 'Khu vực nền Hero hoặc section điểm nhấn muốn đặt hiệu ứng hạt sáng.',
    steps: [
      'Bước 1: Nạp cấu hình hạt sáng phát quang (amber/gold particles) vào component Canvas.',
      'Bước 2: Cài đặt tương tác chuột: đẩy hạt nhẹ khi di chuột qua và nối dây hạt liên kết huyền ảo.',
      'Bước 3: Tối ưu bộ đếm hạt và tắt hiệu ứng khi người dùng cuộn khỏi màn hình để tiết kiệm tài nguyên.',
    ],
    result: 'Nền website phát sáng lấp lánh sang trọng, tôn vinh hình ảnh cá nhân và tiêu đề sản phẩm triệu view.',
    features: [
      'Hiệu ứng hạt ánh sáng vàng ấm tương phản hoàn hảo trên nền tối',
      'Tương tác chuột mượt mà phản hồi tức thì',
      'Tối ưu CPU cực thấp, không gây giật lag trình duyệt',
    ],
    skillMdSnippet: `---
name: hat-sang-nen-dong-31
version: 1.0.0
---
# Cấu hình Hạt Sáng Nền Động
particles: {
  number: { value: 60 },
  color: { value: ["#f59e0b", "#fbbf24", "#ffffff"] },
  opacity: { value: 0.6, random: true },
  size: { value: 3, random: true },
  move: { speed: 1.2, direction: "top", outModes: "out" }
}`,
    samplePrompt: 'Tạo component hạt sáng nền web màu vàng cam bay lơ lửng tương tác chuột cho header website Hải Triều AI.',
    sampleOutput: 'Component Canvas hạt sáng tự động tính toán vị trí và vẽ hạt phát sáng lung linh.',
  },

  // =========================================================================
  // SẢNH V — VIDEO VIP & ĐA KÊNH (32 - 40)
  // =========================================================================
  {
    id: 'skill-edit-video-zoom-32',
    name: 'Edit video Zoom tự động (Skill 32)',
    bannerTitle: 'EDIT VIDEO ZOOM SKILL 32',
    tagline: 'Edit video Zoom tự động: Tự động nhận diện khung hình, cắt lọc im lặng và zoom cận mặt người nói',
    badge: 'SKILL 32 • 135K',
    cardBadge: 'Edit Video Zoom',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['AutoPod', 'CapCut AI', 'Descript', 'Premiere Pro'],
    rating: 5.0,
    reviewsCount: 395,
    downloadsCount: 3750,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Video',
    imageUrl: '/assets/skill_32.jpg',
    description: 'Kỹ thuật edit video họp Zoom và podcast tự động bằng AI: tự động cắt bỏ đoạn im lặng (jump cut), tự động phóng to (auto zoom-in/zoom-out) theo nhịp nói và câu nhấn, chuyển đổi các góc máy sinh động như phim truyền hình chuyên nghiệp.',
    skillHelps: 'Tiết kiệm hàng chục giờ dựng phim thủ công, biến video Zoom đơn điệu thành video ngắn TikTok/Reels triệu view có hiệu ứng zoom giật nhịp nhàng thu hút.',
    preparation: 'File video quay họp Zoom, bài giảng hoặc podcast gốc.',
    steps: [
      'Bước 1: Nạp video Zoom vào AI để nhận diện giọng nói và các khoảng ngập ngừng ngắt quãng.',
      'Bước 2: AI tự động phân cảnh zoom cận mặt (close-up) ở các câu chốt giá trị và zoom rộng (wide) ở phần giải thích.',
      'Bước 3: Xuất video hoàn thiện có nhịp dựng nhanh, lôi cuốn người xem từ đầu đến cuối.',
    ],
    result: 'Video Zoom trở nên sống động, cắt sạch thời gian chết và hiệu ứng phóng to chuyên nghiệp giữ chân người xem.',
    features: [
      'Tự động nhận diện khuôn mặt để căn chỉnh khung hình zoom trung tâm',
      'Loại bỏ 100% khoảng lặng vô nghĩa và các tiếng ậm ừ',
      'Định dạng chuẩn 9:16 cho TikTok/Shorts và 16:9 cho YouTube',
    ],
    skillMdSnippet: `---
name: edit-video-zoom-tu-dong-32
version: 1.0.0
---
# Quy tắc Auto Zoom Video Zoom
1. Jump-cut: Cắt khoảng im lặng > 0.4s.
2. Auto Zoom In: Phóng to 115% ở câu chốt hoặc từ khóa mạnh.
3. Wide Cut: Trở về 100% khi chuyển sang luận điểm mới.`,
    samplePrompt: 'Kịch bản thiết lập edit video Zoom tự động bằng CapCut/Premiere với hiệu ứng zoom cận mặt nhịp nhàng.',
    sampleOutput: 'Quy trình phím tắt và preset tự động phóng to khung hình theo âm thanh giọng nói.',
  },
  {
    id: 'skill-video-tu-dong-google-flow-33',
    name: 'Tạo video tự động với Google Flow (Skill 33)',
    bannerTitle: 'VIDEO TỰ ĐỘNG GOOGLE FLOW SKILL 33',
    tagline: 'Tạo video tự động với Google Flow: Tự động hóa quy trình sản xuất video AI không cần lộ mặt theo luồng Google Cloud & Flow',
    badge: 'SKILL 33 • 135K',
    cardBadge: 'Google Flow Video',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Google Flow AI', 'HeyGen', 'ElevenLabs', 'CapCut'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 3200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Cpu',
    imageUrl: '/assets/skill_33.jpg',
    description: 'Quy trình tạo video tự động hóa hoàn toàn với Google Flow & AI: nạp ý tưởng, tự động sinh kịch bản, giọng đọc tiếng Việt siêu truyền cảm và ghép hình ảnh nhân vật chuyển động nhịp nhàng không cần quay dựng phức tạp.',
    skillHelps: 'Tạo video có người thuyết trình AI nói tiếng Việt trôi chảy, cử chỉ tự nhiên mà bạn không cần phải lộ mặt hay sắm máy quay đắt tiền.',
    preparation: 'Đoạn kịch bản muốn đọc và ảnh đại diện chuyên gia của bạn.',
    steps: [
      'Bước 1: Nạp kịch bản vào giọng đọc AI siêu thực (ElevenLabs/Vbee) qua kết nối Google Flow tự động.',
      'Bước 2: Ghép khẩu hình nhân vật AI nói khớp từng âm tiết theo giọng đọc chuẩn xác.',
      'Bước 3: Chèn thêm hình ảnh b-roll minh họa và chữ text overlay để hoàn thiện video.',
    ],
    result: 'Sản xuất hàng loạt video chất lượng cao mỗi ngày, nhân bản thời gian và công sức sáng tạo lên gấp 10 lần.',
    features: [
      'Khẩu hình khớp 100% với lời nói tiếng Việt',
      'Giữ nét mặt thương hiệu đồng nhất trên tất cả video',
    ],
    skillMdSnippet: `---
name: google-flow-auto-video-33
version: 1.0.0
---
Quy trình: Kịch bản Google Flow -> Giọng đọc siêu thực -> Sinh nhân vật AI nói -> Dựng CapCut tự động.`,
    samplePrompt: 'Tạo video AI 30s giải thích khái niệm Agent Skill cho người kinh doanh nhỏ lẻ.',
    sampleOutput: 'Quy trình tạo video AI hoàn thiện không cần lộ mặt.',
  },
  {
    id: 'skill-tra-loi-binh-luan-subagent-34',
    name: 'Trả lời bình luận - Subagent chăm sóc (Skill 34)',
    bannerTitle: 'TRẢ LỜI BÌNH LUẬN SKILL 34',
    tagline: 'Subagent chăm sóc: Trợ lý AI tự động trả lời bình luận, giải đáp thắc mắc và chăm sóc khách hàng 24/7 chuẩn giọng điệu thương hiệu',
    badge: 'SKILL 34 • 135K',
    cardBadge: 'Subagent Chăm Sóc',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Subagent AI', 'ChatGPT GPTs', 'Zalo Bot', 'Fanpage Auto'],
    rating: 5.0,
    reviewsCount: 390,
    downloadsCount: 3450,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Users',
    imageUrl: '/assets/skill_34.jpg',
    description: 'Thiết lập Subagent AI tự động phản hồi bình luận đa kênh (TikTok, Reels, YouTube Shorts, Fanpage): trả lời nhanh trong 5 giây, đúng tông giọng ấm áp và khéo léo điều hướng khách hàng nhắn tin riêng hoặc vào nhóm Zalo nhận quà.',
    skillHelps: 'Xây dựng một "trợ lý ảo" thấu hiểu toàn bộ sản phẩm và phong cách ứng xử của bạn, hỗ trợ thành viên nhóm Zalo và khán giả 24/7.',
    preparation: 'Các câu hỏi thành viên hay hỏi trong nhóm và nguyên tắc ứng xử của cộng đồng bạn.',
    steps: [
      'Bước 1: Nạp bộ tài liệu kiến thức và phong cách xưng hô vào trợ lý Subagent AI.',
      'Bước 2: Cài đặt quy tắc: Trả lời đúng trọng tâm, ấm áp, có dẫn chứng link tài liệu và chuyển việc khó cho người thật duyệt.',
      'Bước 3: Tích hợp vào nhóm Zalo hoặc khung chat fanpage.',
    ],
    result: 'Cộng đồng luôn được chăm sóc kịp thời, thành viên gắn bó và giảm tải 80% áp lực trực chat cho bạn.',
    features: [
      'Xưng hô chuẩn mực theo đúng giọng HẢI TRIỀU AI',
      'Cơ chế cảnh báo thông minh khi có câu hỏi phức tạp cần người quản trị can thiệp',
    ],
    skillMdSnippet: `---
name: subagent-comment-reply-34
version: 1.0.0
---
Giọng điệu: Thân thiện, thực tế, luôn sẵn sàng hướng dẫn từng bước nhỏ. Trả lời bình luận trong vòng 5 giây.`,
    samplePrompt: 'Cài đặt tính cách cho trợ lý Hải Triều AI trả lời thắc mắc trong nhóm Zalo học viên.',
    sampleOutput: 'Hệ thống kịch bản phản hồi tự động chuẩn mực và tận tình.',
  },
  {
    id: 'skill-tim-y-tuong-content-subagent-35',
    name: 'Tìm ý tưởng Content - Subagent nghiên cứu (Skill 35)',
    bannerTitle: 'TÌM Ý TƯỞNG CONTENT SKILL 35',
    tagline: 'Subagent nghiên cứu: Quét dữ liệu xu hướng, tìm góc tiếp cận độc lạ và lên kịch bản nội dung triệu view tự động',
    badge: 'SKILL 35 • 135K',
    cardBadge: 'Subagent Nghiên Cứu',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Subagent Research', 'Google Trends', 'TikTok Search', 'Deep Research'],
    rating: 5.0,
    reviewsCount: 430,
    downloadsCount: 3890,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Compass',
    imageUrl: '/assets/skill_35.jpg',
    description: 'Vận hành Subagent AI chuyên sâu nghiên cứu xu hướng và tìm ý tưởng content đắt giá: tự động phân tích hàng trăm video đối thủ cùng ngành, tìm ra các "khoảng trống nội dung" có nhu cầu tìm kiếm cao nhưng ít ai làm để bạn chiếm lĩnh thị trường.',
    skillHelps: 'Không bao giờ lo làm video ra mà không ai xem, vì mọi ý tưởng đều dựa trên số liệu tìm kiếm thực tế của người dùng trên Google và TikTok.',
    preparation: 'Từ khóa chính về lĩnh vực của bạn (ví dụ: làm đẹp, bất động sản, bán hàng online, AI).',
    steps: [
      'Bước 1: Nạp từ khóa vào công cụ quét nhu cầu tìm kiếm của Subagent Hải Triều AI.',
      'Bước 2: AI phân tích và lọc ra top 10 câu hỏi người dùng tìm kiếm nhiều nhất nhưng ít người làm video giải đáp.',
      'Bước 3: Chọn ra 3 góc tiếp cận độc đáo để bắt tay vào viết kịch bản ngay.',
    ],
    result: 'Video đăng lên dễ dàng bắt trúng nhu cầu tìm kiếm, nhận được lượt xem tự nhiên đều đặn mỗi ngày.',
    features: [
      'Phát hiện sớm các chủ đề đang chuẩn bị lên xu hướng',
      'Gợi ý góc nhìn mới lạ, tránh trùng lặp với các kênh đối thủ',
    ],
    skillMdSnippet: `---
name: subagent-topic-research-35
version: 1.0.0
---
Tiêu chí: Lượt tìm kiếm cao + Mức độ cạnh tranh trung bình + Phù hợp sản phẩm đang bán.`,
    samplePrompt: 'Tìm 5 chủ đề về ứng dụng AI đang được người kinh doanh tự do tại Việt Nam tìm kiếm nhiều nhất tuần này.',
    sampleOutput: 'Danh sách 5 chủ đề tiềm năng kèm số liệu tìm kiếm và góc triển khai cụ thể.',
  },
  {
    id: 'skill-subagent-seo-youtube-36',
    name: 'Subagent SEO kênh YouTube (Skill 36)',
    bannerTitle: 'SEO VIDEO YOUTUBE SKILL 36',
    tagline: 'Subagent SEO kênh YouTube: Tối ưu tiêu đề, mô tả, từ khóa và cấu trúc để video lọt top tìm kiếm bền vững',
    badge: 'SKILL 36 • 135K',
    cardBadge: 'SEO Video YouTube',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'vidIQ', 'TubeBuddy', 'YouTube Studio'],
    rating: 5.0,
    reviewsCount: 385,
    downloadsCount: 3520,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Search',
    imageUrl: '/assets/skill_36.jpg',
    description: 'Subagent chuyên sâu SEO YouTube: tự động phân tích từ khóa tìm kiếm, tối ưu tiêu đề giật tít chuẩn SEO dưới 60 ký tự, sinh 300 từ mô tả chứa từ khóa vàng và bộ 15 thẻ tag đưa video lọt top 3 tìm kiếm YouTube bền vững.',
    skillHelps: 'Biến video YouTube thành cỗ máy kéo khách hàng thụ động bền vững qua năm tháng mỗi khi có người gõ tìm kiếm trên Google/YouTube.',
    preparation: 'Chủ đề video đã quay và tóm tắt nội dung chính.',
    steps: [
      'Bước 1: Nạp nội dung video vào Subagent SEO của Hải Triều AI.',
      'Bước 2: AI tự tạo bộ thẻ Tags chuẩn, Tiêu đề chứa từ khóa chính, và Mô tả có gắn mốc thời gian (Chapter).',
      'Bước 3: Sao chép dán vào phần cài đặt video khi tải lên YouTube Studio.',
    ],
    result: 'Video nhanh chóng lọt vào top 3 tìm kiếm YouTube, mang lại lượt xem và khách hàng mới đều đặn suốt nhiều năm.',
    features: [
      'Tối ưu hóa theo thuật toán tìm kiếm mới nhất của Google & YouTube',
      'Định dạng phần mô tả chuyên nghiệp kèm link kêu gọi mua hàng',
    ],
    skillMdSnippet: `---
name: subagent-youtube-seo-36
version: 1.0.0
---
Thành phần: Title SEO (dưới 60 ký tự) + 300 từ Description chuẩn SEO + Bộ 15 Tags chuẩn.`,
    samplePrompt: 'Tối ưu SEO cho video YouTube ngắn: "Hướng dẫn cài đặt prompt kịch bản Text Overlay".',
    sampleOutput: 'Bộ tiêu đề, mô tả chuẩn SEO có gắn hashtag và timestamp hoàn chỉnh.',
  },
  {
    id: 'skill-viet-bai-facebook-37',
    name: 'Viết và đăng bài Facebook đúng giọng kênh (Skill 37)',
    bannerTitle: 'VIẾT BÀI FACEBOOK SKILL 37',
    tagline: 'Viết và đăng bài Facebook đúng giọng kênh: Viết bài theo cách bạn thường nói, giữ trọn chất riêng và cấu trúc chuyển đổi cao',
    badge: 'SKILL 37 • 135K',
    cardBadge: 'Viết Bài Facebook',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'Claude', 'Facebook Creator Studio'],
    rating: 5.0,
    reviewsCount: 395,
    downloadsCount: 3720,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Facebook',
    imageUrl: '/assets/skill_37.jpg',
    description: 'Viết và đăng bài Facebook đúng giọng văn của bạn: phân tích phong cách ngôn từ (Tone of Voice), ngắt dòng thoáng mắt trên điện thoại, giữ trọn sự mộc mạc và chân thành kết hợp lời kêu gọi hành động tinh tế.',
    skillHelps: 'AI viết bài mà không ai nhận ra là AI viết, câu chữ tự nhiên, mang đúng khẩu khí, cách xưng hô và cá tính độc nhất của bạn.',
    preparation: '3 bài viết cũ do chính bạn tự viết mà bạn cảm thấy ưng ý nhất.',
    steps: [
      'Bước 1: Nạp bài viết mẫu của bạn vào AI để phân tích phong cách ngôn từ (Tone of Voice).',
      'Bước 2: Nhập ý tưởng bài mới cần viết vào khung.',
      'Bước 3: AI tạo bài viết hoàn chỉnh mang trọn vẹn ngữ điệu của bạn kèm khoảng trắng dễ đọc trên điện thoại.',
    ],
    result: 'Bài viết nhận được nhiều tương tác từ bạn bè và người theo dõi vì giữ trọn được sự mộc mạc và chân thành.',
    features: [
      'Khắc phục hoàn toàn giọng văn dịch thuật vô hồn của AI thông thường',
      'Bố cục ngắt dòng thoáng mắt, không gây mỏi khi đọc trên màn hình điện thoại',
    ],
    skillMdSnippet: `---
name: facebook-tone-of-voice-37
version: 1.0.0
---
Phân tích: Cách dùng đại từ xưng hô, độ dài câu, thói quen dùng dấu câu và từ địa phương.`,
    samplePrompt: 'Học văn phong của Hải Triều để viết một bài chia sẻ về việc kiên trì làm video mỗi ngày.',
    sampleOutput: 'Bài viết gần gũi, ấm áp, kết bài bằng thông điệp hành động thực tế.',
  },
  {
    id: 'skill-tao-video-viral-38',
    name: 'Tạo video viral (Skill 38)',
    bannerTitle: 'VIDEO VIRAL SKILL 38',
    tagline: 'Tạo video viral: Công thức hook 3 giây đầu, 1 thông điệp đắt giá và câu kết kích hoạt thảo luận bùng nổ',
    badge: 'SKILL 38 • 135K',
    cardBadge: 'Tạo Video Viral',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'CapCut', 'TikTok Trends'],
    rating: 5.0,
    reviewsCount: 460,
    downloadsCount: 4250,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Flame',
    imageUrl: '/assets/skill_38.jpg',
    description: 'Quy trình sản xuất video ngắn triệu view lan tỏa tự nhiên: 3 giây đầu cú hích thị giác giữ chân người lướt -> 30 giây tiếp theo kể câu chuyện có nút thắt kịch tính -> 10 giây cuối kích hoạt hàng trăm bình luận tranh luận văn minh.',
    skillHelps: 'Phá vỡ giới hạn tài khoản mới, đưa video chạm mốc hàng trăm nghìn đến hàng triệu lượt xem tự nhiên mà không cần chi tiền quảng cáo.',
    preparation: '1 góc nhìn thú vị hoặc 1 bài học bất ngờ bạn muốn chia sẻ với số đông.',
    steps: [
      'Bước 1: Nạp ý tưởng vào công thức lan tỏa (Viral Blueprint) của Hải Triều AI.',
      'Bước 2: AI thiết kế: Giây 0-3 (Cú hích thị giác giật mình) -> Giây 4-35 (Kể một câu chuyện có nút thắt) -> Giây 36-45 (Câu hỏi mở để người xem bình luận).',
      'Bước 3: Quay video và đăng tải vào khung giờ nhiều người rảnh rỗi.',
    ],
    result: 'Video dễ dàng phá vỡ giới hạn tài khoản, chạm mốc hàng trăm nghìn hoặc hàng triệu lượt xem tự nhiên.',
    features: [
      'Tập trung duy nhất vào 1 ý tưởng đắt giá, không nhồi nhét nhiều thông điệp',
      'Kích hoạt mong muốn chia sẻ của người xem lên trang cá nhân',
    ],
    skillMdSnippet: `---
name: viral-video-blueprint-38
version: 1.0.0
---
3 yếu tố lan tỏa: Hook bất ngờ + 1 ý tưởng đắt giá + Câu kết kích hoạt tranh luận văn minh.`,
    samplePrompt: 'Lên kịch bản video ngắn chia sẻ về nghịch lý: Càng bận rộn thì càng phải dùng AI.',
    sampleOutput: 'Kịch bản cuốn hút từ giây đầu đến giây cuối, tạo nhiều thảo luận sôi nổi.',
  },
  {
    id: 'skill-slide-thuyet-trinh-tu-dong-39',
    name: 'Slide thuyết trình tự động (Skill 39)',
    bannerTitle: 'SLIDE THUYẾT TRÌNH TỰ ĐỘNG SKILL 39',
    tagline: 'Slide thuyết trình tự động: Chuyển nội dung thành bộ slide bài giảng, mô hình phễu và báo giá chuẩn doanh nghiệp',
    badge: 'SKILL 39 • 135K',
    cardBadge: 'Slide Tự Động',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Gamma App', 'Canva', 'PowerPoint AI'],
    rating: 5.0,
    reviewsCount: 410,
    downloadsCount: 3880,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Monitor',
    imageUrl: '/assets/skill_39.jpg',
    description: 'Tạo bộ slide thuyết trình đào tạo và bán hàng hoàn toàn tự động: mô hình sản phẩm phễu, bậc thang định giá và cấu trúc 1 slide - 1 thông điệp trực quan sang trọng, xuất file PowerPoint/Gamma trong 2 phút.',
    skillHelps: 'Không còn cảnh thức trắng đêm xếp từng ô chữ trong PowerPoint, AI sẽ tự động bố trí chữ và bảng biểu thành bộ slide chuẩn doanh nghiệp.',
    preparation: 'Đoạn văn bản tóm tắt nội dung bài học hoặc bản kế hoạch của bạn.',
    steps: [
      'Bước 1: Nạp bài viết thô vào prompt cấu trúc slide của Hải Triều AI.',
      'Bước 2: AI tự phân bổ thành từng trang slide: Trang tiêu đề -> Mục lục -> Các ý cốt lõi -> Trang đúc kết & liên hệ.',
      'Bước 3: Xuất sang định dạng PowerPoint hoặc Gamma để trình chiếu ngay.',
    ],
    result: 'Bộ slide thuyết trình đẹp mắt, chuyên nghiệp, hỗ trợ bạn tự tin đứng lớp hoặc chốt hợp đồng dự án lớn.',
    features: [
      'Quy chuẩn thiết kế tối giản, trực quan, không chữ dày đặc',
      'Đồng bộ màu sắc phong thủy sang trọng, dễ đọc trên máy chiếu',
    ],
    skillMdSnippet: `---
name: ai-presentation-slide-39
version: 1.0.0
---
Quy tắc: 1 slide - 1 thông điệp - 1 hình minh họa trực quan. Tối đa 6 dòng chữ mỗi trang.`,
    samplePrompt: 'Chuyển nội dung 5 bí quyết làm video ngắn thành bộ slide thuyết trình 8 trang cho buổi chia sẻ.',
    sampleOutput: 'Dàn ý và thiết kế 8 trang slide súc tích, chuyên nghiệp.',
  },
  {
    id: 'skill-xay-kenh-facebook-tu-dong-40',
    name: 'Xây kênh Facebook tự động (Skill 40)',
    bannerTitle: 'XÂY KÊNH TỰ ĐỘNG SKILL 40',
    tagline: 'Xây kênh Facebook tự động: Lên lịch đăng bài 30 ngày, sản xuất hình ảnh đồng bộ và vận hành kênh tự động bằng AI',
    badge: 'SKILL 40 • 135K',
    cardBadge: 'Xây Kênh Tự Động',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 135000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Meta Business Suite', 'ChatGPT', 'Midjourney', 'Canva'],
    rating: 5.0,
    reviewsCount: 450,
    downloadsCount: 4190,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Share2',
    imageUrl: '/assets/skill_40.jpg',
    description: 'Hệ thống xây dựng và vận hành kênh Facebook hoàn toàn tự động: thiết lập lịch phát sóng 30 ngày (Content Calendar), tự động sinh bộ hình ảnh đại diện nhất quán thần thái và tự động hóa toàn bộ quy trình chăm sóc kéo tương tác liên tục.',
    skillHelps: 'Vận hành fanpage và trang cá nhân chuyên nghiệp như một đội ngũ marketing 5 người, giải phóng 90% thời gian đăng bài thủ công mỗi ngày.',
    preparation: 'Định hướng sản phẩm hoặc dịch vụ bạn muốn phát triển trên Facebook.',
    steps: [
      'Bước 1: Nạp chủ đề kênh vào ma trận nội dung 30 ngày của Hải Triều AI.',
      'Bước 2: AI tự tạo tiêu đề, bài viết và prompt ảnh đồng nhất cho cả tháng.',
      'Bước 3: Lên lịch tự động trên Meta Business Suite và theo dõi tương tác tăng trưởng.',
    ],
    result: 'Fanpage phát triển ổn định, bài viết lên đều đặn mỗi ngày thu hút hàng nghìn người theo dõi mới.',
    features: [
      'Ma trận 30 ngày đa dạng góc nhìn không bao giờ cạn ý tưởng',
      'Đồng bộ hình ảnh nhận diện chuyên gia xuyên suốt các bài đăng',
    ],
    skillMdSnippet: `---
name: facebook-auto-growth-40
version: 1.0.0
---
Lịch trình: Thứ 2 (Kiến thức) - Thứ 4 (Câu chuyện) - Thứ 6 (Case study) - Chủ nhật (Tương tác).`,
    samplePrompt: 'Lên ma trận nội dung 4 tuần cho trang cá nhân chuyên gia tư vấn ứng dụng AI.',
    sampleOutput: 'Bản kế hoạch 30 bài viết chi tiết kèm tiêu đề và lời kêu gọi tương tác.',
  },
];

export const FAQS = [
  {
    question: '1. Tôi không rành công nghệ, có dùng được Skill không?',
    answer: 'Dùng được. Skill được thiết kế để anh/chị chỉ cần mô tả việc mình đang làm, dán hướng dẫn vào AI và làm theo từng bước. Quan trọng nhất không phải giỏi công nghệ mà là biết mình đang muốn giải quyết việc gì.',
  },
  {
    question: '2. Một Skill gồm những gì?',
    answer: 'Mỗi Skill là một khung hướng dẫn thực hành: cần chuẩn bị gì, câu lệnh mẫu, cách chỉnh theo ngành nghề và hướng xử lý khi AI trả lời chưa đúng ý. Anh/chị dùng để làm việc nhanh hơn, không phải học lý thuyết cho nhiều.',
  },
  {
    question: '3. Skill khác gì so với phần mềm?',
    answer: 'Skill không phải phần mềm. Đây là cách hướng dẫn AI làm đúng một việc cụ thể như viết nội dung, lên video, làm ảnh hoặc xây trang bán hàng. Anh/chị vẫn dùng ChatGPT, Gemini hoặc công cụ AI mình đang có.',
  },
  {
    question: '4. Tôi bán hàng online thì nên bắt đầu từ Sảnh nào?',
    answer: 'Nếu kênh chưa có hình ảnh rõ ràng, bắt đầu từ Sảnh I. Nếu đã có sản phẩm nhưng chưa biết quay gì để khách dừng lại, đi từ Sảnh II. Nếu khách xem nhiều nhưng chưa nhắn tin, ưu tiên Sảnh IV (Trang Bán Hàng & Dịch Vụ Tự Động).',
  },
  {
    question: '5. Tôi làm dịch vụ hoặc đào tạo có phù hợp không?',
    answer: 'Rất phù hợp. Người làm dịch vụ cần làm rõ chuyên môn, tạo niềm tin và có quy trình chăm khách. Các Skill hình ảnh, video và trang giới thiệu dịch vụ đều có thể áp dụng theo ngành của anh/chị.',
  },
  {
    question: '6. Tôi có cần mua tất cả Skill không?',
    answer: 'Không cần. Anh/chị nên chọn theo điểm nghẽn đang gặp. Làm đúng một nhóm Skill trước, có kết quả rồi mới mở rộng, sẽ đỡ rối và dùng hiệu quả hơn.',
  },
  {
    question: '7. Tôi có thể dùng Skill trên điện thoại không?',
    answer: 'Có. Phần lớn Skill dùng được trên điện thoại nếu anh/chị có ứng dụng AI và hình ảnh hoặc nội dung cần làm. Tuy nhiên, những việc như dựng website hoặc chỉnh nhiều file sẽ thuận tiện hơn khi dùng máy tính.',
  },
  {
    question: '8. Tôi dùng AI nhưng câu trả lời chưa đúng ý, phải làm sao?',
    answer: 'Đừng bỏ ngay. Anh/chị cần bổ sung ngữ cảnh như sản phẩm, khách hàng, mục tiêu, giọng văn và ví dụ mong muốn. Nếu vẫn chưa ra, hãy hỏi Trợ lý HẢI TRIỀU AI để được gợi ý cách chỉnh câu lệnh.',
  },
  {
    question: '9. Sau khi thanh toán tôi nhận tài nguyên ở đâu?',
    answer: 'Sau khi chuyển khoản đúng thông tin hiển thị trên website, anh/chị nhắn xác nhận qua Zalo của Hải Triều AI. Bên em sẽ hướng dẫn anh/chị nhận tài nguyên và bước tiếp theo phù hợp.',
  },
  {
    question: '10. Tôi muốn được anh Hải Triều AI tư vấn trực tiếp thì làm thế nào?',
    answer: 'Anh/chị để lại họ tên, số Zalo, ngành nghề và việc đang vướng. Trợ lý HẢI TRIỀU AI sẽ tiếp nhận trước để anh Hải Triều nhìn đúng bài toán và tư vấn đi thẳng vào việc.',
  },
];
