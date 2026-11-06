import { BankAccountInfo, SkillProduct } from '../types';

export const BANK_INFO: BankAccountInfo = {
  bankName: 'SHB',
  bankFullName: 'Ngân hàng TMCP Sài Gòn - Hà Nội',
  bankShortCode: 'SHB',
  accountNumber: '0913179424',
  accountOwner: 'TRỊNH HAI TRIEU',
  defaultAmount: 49000,
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

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'Tất Cả Skill', icon: 'Sparkles', count: 37 },
  { id: 'zalo-gifts', label: '🎁 4 Skill Quà Tặng 0đ (Vào Zalo)', icon: 'Gift', count: 4 },
  { id: 'featured', label: '⭐ Skill Thực Chiến Có Poster', icon: 'Star', count: 25 },
  { id: 'sanh-1', label: 'Sảnh I — Hình Ảnh Thương Hiệu', icon: 'Camera', count: 8 },
  { id: 'sanh-2', label: 'Sảnh II — Video Bán Hàng', icon: 'Video', count: 9 },
  { id: 'sanh-4', label: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ', icon: 'Layout', count: 12 },
  { id: 'sanh-5', label: 'Sảnh V — Video VIP & Đa Kênh', icon: 'Crown', count: 8 },
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
    description: 'Sản xuất video ngắn triệu view có hook thôi miên, giữ chân người xem và chuyển đổi thành đơn hàng.',
    icon: 'Video',
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
    description: 'Khai thác video AI theo kịch bản, tối ưu SEO YouTube và trợ lý tự động nghiên cứu chủ đề xu hướng.',
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
    badge: 'SKILL VIP BÁN • 99.000Đ',
    cardBadge: 'Bán 99.000đ (VIP)',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    isZaloGift: false,
    price: 99000,
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
    cardBadge: 'Vào Zalo Nhận 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 199000,
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
    cardBadge: 'Vào Zalo Nhận 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 199000,
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
    cardBadge: 'Vào Zalo Nhận 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 199000,
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
    cardBadge: 'Vào Zalo Nhận 0đ',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: true,
    isZaloGift: true,
    price: 0,
    originalPrice: 199000,
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
    badge: 'SKILL 05 • 49K',
    cardBadge: 'HOT VIP',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 49000,
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
    name: 'Tăng chất lượng 4K (Ảnh feedback)',
    bannerTitle: 'ẢNH NÉT CHUẨN 4K SKILL 06',
    tagline: 'Phục hồi và nâng cấp ảnh mờ, vỡ hạt thành ảnh nét căng chuẩn 4K siêu sắc nét',
    badge: 'SKILL 06 • 49K',
    cardBadge: 'Chuẩn 4K',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['AI Enhancer', 'Photoshop', 'Canva'],
    rating: 5.0,
    reviewsCount: 385,
    downloadsCount: 3420,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_06.jpg',
    description: 'Trình bày phản hồi thật của khách hàng gọn gàng, chuyên nghiệp và tôn trọng thông tin riêng tư của khách. Tăng chất lượng ảnh lên chuẩn 4K siêu nét.',
    skillHelps: 'Biến ảnh chụp màn hình tin nhắn, ảnh chân dung và ảnh sản phẩm bị mờ nhòe thành ảnh nét căng 4K chuẩn studio, tôn trọn uy tín thương hiệu.',
    preparation: 'Ảnh chụp màn hình kết quả khách hàng, ảnh chụp chân dung hoặc ảnh sản phẩm cần làm nét 4K.',
    steps: [
      'Bước 1: Tải ảnh cần xử lý vào công cụ Tăng Chất Lượng 4K theo link kèm theo.',
      'Bước 2: Chọn chế độ làm nét da mặt tự nhiên, tăng độ sắc nét văn bản và chi tiết ảnh.',
      'Bước 3: Nhận ảnh chuẩn 4K siêu nét chỉ sau 10 giây để đăng bài bán hàng hoặc làm tư liệu marketing.',
    ],
    result: 'Ảnh nét căng từng chi tiết, không còn vỡ hạt hay mờ nhòe, tăng độ tin cậy tức thì cho khách hàng.',
    features: [
      'Nâng cấp độ phân giải lên gấp 4 lần chuẩn 4K siêu thực',
      'Làm rõ từng dòng tin nhắn phản hồi của khách hàng',
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
    badge: 'SKILL 07 • 49K',
    cardBadge: 'Multishot 9 Góc',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 08 • 49K',
    cardBadge: 'HOT VIP',
    category: 'sanh-1',
    categoryName: 'Sảnh I — Hình Ảnh Thương Hiệu',
    branch: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    sanhId: 'sanh-1',
    sanhTitle: 'SẢNH I — HÌNH ẢNH THƯƠNG HIỆU',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 09 • 49K',
    cardBadge: 'KOL AI Global',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 10 • 49K',
    cardBadge: 'Hiệu Ứng VIP',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 11 • 49K',
    cardBadge: 'Coach Truyền Cảm Hứng',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 12 • 49K',
    cardBadge: 'Infographic Trắng',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 13 • 49K',
    cardBadge: 'Cắt Video Short',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 14 • 49K',
    cardBadge: 'Podcast 2 Người',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 15 • 49K',
    cardBadge: 'Ghép Theo Nhạc',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 16 • 49K',
    cardBadge: 'AI Cắt Highlight',
    category: 'sanh-2',
    categoryName: 'Sảnh II — Video Bán Hàng',
    branch: 'SẢNH II — VIDEO BÁN HÀNG',
    sanhId: 'sanh-2',
    sanhTitle: 'SẢNH II — VIDEO BÁN HÀNG',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 17 • 49K',
    cardBadge: 'Trang Thu Lead',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 18 • 49K',
    cardBadge: 'Bán Workshop & Sự Kiện',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 19 • 49K',
    cardBadge: 'Sàn Dịch Vụ Agent',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
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
    badge: 'SKILL 20 • 49K',
    cardBadge: 'Sản Phẩm Số Đồng Giá',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
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
1. Header: Nhận diện thương hiệu & Lời hứa giá trị đồng giá 49K.
2. Danh mục Sảnh: Thẻ bài giảng, file prompt, video mẫu.
3. Thanh toán VietQR: Mã QR động tự điền số tiền và mã đơn.
4. Giao nhận: Mở link Google Drive / Nhóm Zalo hỗ trợ tức thì.`,
    samplePrompt: 'Thiết kế website bán sản phẩm số đồng giá 49K cho các gói AI Skill thực chiến kèm quét mã VietQR tự động.',
    sampleOutput: 'Website bán sản phẩm số đồng giá hoàn chỉnh với giao diện sảnh sang trọng và hệ thống thanh toán tự động 24/7.',
  },
  {
    id: 'skill-bang-truot-trung-bay',
    name: 'Băng trượt trưng bày (Skill 21)',
    bannerTitle: 'BĂNG TRƯỢT TRƯNG BÀY SKILL 21',
    tagline: 'Slider trình chiếu dịch vụ: Băng trượt carousel giới thiệu sản phẩm và portfolio mượt mà chuẩn tương tác cảm ứng',
    badge: 'SKILL 21 • 49K',
    cardBadge: 'Slider Trình Chiếu',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Embla Carousel / Swiper', 'React', 'Framer Motion', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 365,
    downloadsCount: 3480,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Layers',
    imageUrl: '/assets/skill_21.jpg',
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
name: bang-truot-trung-bay-slider
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
    id: 'skill-lam-web-3d-bang-react',
    name: 'Trang 3D bằng React (Skill 22)',
    bannerTitle: 'TRANG 3D BẰNG REACT SKILL 22',
    tagline: 'Làm web 3D bằng React: Tạo khối 3D tán sắc cầu vồng, tương tác xoay 360 độ sống động',
    badge: 'SKILL 22 • 49K',
    cardBadge: 'Web 3D React',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 370,
    downloadsCount: 3560,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Box',
    imageUrl: '/assets/skill_22.jpg',
    description: 'Làm web 3D bằng React chuyên nghiệp: tích hợp vật thể 3D lăng kính pha lê tán sắc ánh sáng, xoay tương tác theo con trỏ chuột và cảm ứng mượt mà.',
    skillHelps: 'Biến website bán hàng thông thường thành không gian trải nghiệm 3D đẳng cấp quốc tế, tăng thời gian ở lại trang và gây ấn tượng mạnh với khách hàng.',
    preparation: 'Mô hình hoặc ý tưởng vật thể 3D (lăng kính, sản phẩm, hình khối không gian).',
    steps: [
      'Bước 1: Nạp concept 3D vào prompt Làm Web 3D Bằng React của Hải Triều AI.',
      'Bước 2: AI tự xây dựng canvas React Three Fiber với hiệu ứng đổ bóng, tán sắc ánh sáng và khử răng cưa mượt mà.',
      'Bước 3: Nhúng component 3D vào website với độ phân giải cao và FPS tối ưu 60fps.',
    ],
    result: 'Trang web 3D sống động, người xem thích thú tương tác xoay vật thể, nâng tầm định vị thương hiệu công nghệ vượt trội.',
    features: [
      'Hiệu ứng quang học tán sắc cầu vồng lung linh chuẩn studio',
      'Tương tác xoay 360 độ theo cử chỉ chuột và chạm màn hình',
      'Tối ưu hiệu năng Three.js mượt mà không hao pin điện thoại',
    ],
    skillMdSnippet: `---
name: lam-web-3d-bang-react
version: 1.0.0
---
# Cấu trúc Làm Web 3D Bằng React
1. Three.js Canvas: Tối ưu WebGL context, DPR 1.5 - 2.0.
2. Vật liệu Glass/Prism: Độ truyền sáng (transmission) & tán sắc (dispersion).
3. OrbitControls: Xoay tự do theo chuột và tự căn giữa khi dừng.`,
    samplePrompt: 'Tạo component React Three Fiber hiển thị lăng kính thủy tinh 3D phát tán dải sáng cầu vồng xoay mượt mà khi di chuột.',
    sampleOutput: 'Mã nguồn React Three.js hoàn chỉnh với ánh sáng, vật liệu thủy tinh và khả năng tương tác xoay 360 độ.',
  },
  {
    id: 'skill-hieu-ung-cuon-trang-muot',
    name: 'Cuộn trang mượt như lụa (Skill 23)',
    bannerTitle: 'CUỘN TRANG MƯỢT NHƯ LỤA SKILL 23',
    tagline: 'Hiệu ứng cuộn trang mượt: Tối ưu quán tính cuộn trang êm ái như dải lụa, nâng tầm trải nghiệm đọc',
    badge: 'SKILL 23 • 49K',
    cardBadge: 'Cuộn Mượt Như Lụa',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Lenis Scroll', 'GSAP ScrollTrigger', 'React', 'Tailwind CSS'],
    rating: 5.0,
    reviewsCount: 360,
    downloadsCount: 3420,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sliders',
    imageUrl: '/assets/skill_23.jpg',
    description: 'Tạo hiệu ứng cuộn trang mượt mà như lụa (Smooth Scroll): tinh chỉnh quán tính cuộn chuột tự nhiên, triệt tiêu giật khựng và mang lại cảm giác lướt web êm ái cao cấp.',
    skillHelps: 'Khách hàng lướt xem sản phẩm và kịch bản bán hàng với tốc độ mượt mà, không bị mỏi mắt, tăng tỷ lệ đọc hết nội dung trang từ đầu đến cuối.',
    preparation: 'Trang landing page dài nhiều khối nội dung cần hiệu ứng cuộn êm ái.',
    steps: [
      'Bước 1: Nạp cấu trúc trang vào prompt Cuộn Trang Mượt Như Lụa của Hải Triều AI.',
      'Bước 2: AI tự tích hợp bộ điều hướng quán tính Lenis / Smooth Scroll với thông số giảm chấn tối ưu.',
      'Bước 3: Tự động kích hoạt hiệu ứng parallax và chuyển cảnh mượt mà khi khách cuộn trang.',
    ],
    result: 'Cảm giác lướt web êm ru như trên các trang web Apple hay Awwwards, nâng tầm trải nghiệm người dùng vượt bậc.',
    features: [
      'Triệt tiêu hoàn toàn cảm giác khựng giật khi lăn chuột trên máy tính',
      'Hỗ trợ thanh tiến trình cuộn trang trực quan bên góc màn hình',
      'Tương thích hoàn hảo trên cả Chrome, Safari, Edge và di động',
    ],
    skillMdSnippet: `---
name: cuon-trang-muot-lenis
version: 1.0.0
---
# Cấu trúc Smooth Scroll Lenis
1. Damping: Giảm xóc 0.1 để cuộn êm tự nhiên.
2. ScrollTrigger integration: Khóa vị trí khi chuyển phân đoạn.
3. Progress Indicator: Thanh viền tiến trình đọc bài bên phải.`,
    samplePrompt: 'Cài đặt hiệu ứng cuộn trang Lenis Smooth Scroll cho landing page dài, quán tính êm ái và thanh cuộn tiến trình hiện đại.',
    sampleOutput: 'Đoạn mã React hook tích hợp smooth scroll siêu nhẹ, chạy êm ái trên mọi trình duyệt.',
  },
  {
    id: 'skill-hieu-ung-hat-sang-nen-web',
    name: 'Hạt sáng nền động (Skill 24)',
    bannerTitle: 'HẠT SÁNG NỀN ĐỘNG SKILL 24',
    tagline: 'Hạt sáng nền động: Tạo hiệu ứng hạt sáng nền web lung linh, tương tác mượt mà theo chuột và chạm',
    badge: 'SKILL 24 • 49K',
    cardBadge: 'Hạt Sáng Nền Web',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & DỊch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['Canvas API', 'Three.js / TS Particles', 'Tailwind CSS', 'React'],
    rating: 5.0,
    reviewsCount: 385,
    downloadsCount: 3740,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Sparkles',
    imageUrl: '/assets/skill_24.jpg',
    description: 'Tạo hiệu ứng hạt sáng nền web chuyên nghiệp: biến website của bạn trở nên sống động với hiệu ứng hạt sáng (particle light effect) lấp lánh, mượt mà và tương tác di chuột đầy lôi cuốn.',
    skillHelps: 'Nâng tầm đẳng cấp giao diện website bán hàng, tạo ấn tượng thị giác công nghệ cao ngay khi khách truy cập, giữ chân người xem lâu hơn trên trang.',
    preparation: 'Website hoặc landing page muốn chèn hiệu ứng hạt sáng nền động.',
    steps: [
      'Bước 1: Nạp phong cách và tông màu website vào prompt Hạt Sáng Nền Động của Hải Triều AI.',
      'Bước 2: AI tự sinh mã nguồn Canvas / Particle nhẹ nhàng, tối ưu FPS 60fps mượt mà không giật lag.',
      'Bước 3: Nhúng vào phần Header hoặc toàn trang web chỉ với 1 đoạn mã đơn giản.',
    ],
    result: 'Website lung linh huyền ảo, chuyển động hạt mượt mà theo cử chỉ người dùng, tạo cảm giác sang trọng và chuyên nghiệp vượt trội.',
    features: [
      'Tối ưu hiệu năng siêu nhẹ, chạy mượt mà trên cả điện thoại cấu hình yếu',
      'Tùy biến màu sắc hạt sáng vàng gold, tím neon hoặc xanh công nghệ',
      'Tương tác di chuột phản hồi tức thì đầy mê hoặc',
    ],
    skillMdSnippet: `---
name: hieu-ung-hat-sang-nen-web
version: 1.0.0
---
# Cấu trúc Hiệu Ứng Hạt Sáng Nền Web
1. Canvas Layer: Nền mờ z-index thấp, không che text/nút bấm.
2. Particle Engine: Tạo 50-80 hạt sáng chuyển động Brown ngẫu nhiên.
3. Mouse Attraction: Hạt sáng tụ lại hoặc tỏa sáng khi rê chuột.
4. Mobile Touch: Phản hồi chạm mượt mà 60fps.`,
    samplePrompt: 'Tạo hiệu ứng hạt sáng nền động màu vàng gold lơ lửng cho trang landing page giới thiệu sản phẩm cao cấp.',
    sampleOutput: 'Đoạn mã React/HTML Canvas hiệu ứng hạt sáng mượt mà, sẵn sàng dán vào website.',
  },
  {
    id: 'skill-trang-nhan-qua',
    name: 'Trang phễu quà tặng thu hút',
    bannerTitle: 'TRANG PHỄU QUÀ TẶNG THU HÚT',
    tagline: 'Dựng trang tặng tài nguyên miễn phí thu hút đúng người và dẫn vào hành trình bán hàng',
    badge: 'SẢNH IV',
    cardBadge: 'Trang Phễu Quà',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['Vite', 'React', 'Zalo Group'],
    rating: 5.0,
    reviewsCount: 650,
    downloadsCount: 7100,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Gift',
    description: 'Dựng trang tặng tài nguyên chất lượng cao để thu hút đúng người quan tâm và dẫn họ vào nhóm Zalo hoặc hành trình mua sản phẩm chính.',
    skillHelps: 'Xây dựng tệp khách hàng tiềm năng khổng lồ nhờ nam châm hút khách (Lead Magnet) chất lượng cao và quy trình chuyển đổi tự động.',
    preparation: '1 món quà bạn muốn tặng (Ebook, bộ prompt mẫu, danh sách công cụ hay video hướng dẫn ngắn).',
    steps: [
      'Bước 1: Nạp thông tin món quà vào mẫu trang quà tặng tinh gọn của Hải Triều AI.',
      'Bước 2: AI thiết kế giao diện đơn giản: Hình ảnh món quà hấp dẫn -> Nút "Bấm nhận miễn phí ngay".',
      'Bước 3: Cài đặt đường dẫn chuyển hướng thẳng vào nhóm Zalo hỗ trợ của bạn sau khi bấm.',
    ],
    result: 'Hàng trăm người tham gia nhóm Zalo mỗi ngày, tạo nên cộng đồng sôi nổi sẵn sàng đón nhận các sản phẩm tiếp theo.',
    features: [
      'Tối giản thao tác, người nhận chỉ cần 1 cú nhấp chuột',
      'Định vị sự hào phóng và chuyên môn cao của bạn',
    ],
    skillMdSnippet: `---
name: lead-magnet-page-hai-trieu
---
Quy tắc: Tiêu đề quà tặng hấp dẫn, loại bỏ mọi rào cản, 1 nút bấm duy nhất.`,
    samplePrompt: 'Tạo trang tặng miễn phí bộ 113 âm thanh thao túng tâm lý người xem video.',
    sampleOutput: 'Trang nhận quà cực đẹp với nút chuyển thẳng vào nhóm Zalo nhận tài nguyên.',
  },
  {
    id: 'skill-trang-goi-dich-vu',
    name: 'Trang gói dịch vụ',
    bannerTitle: 'TRANG BẢNG GIÁ DỊCH VỤ',
    tagline: 'So sánh các gói dịch vụ minh bạch về quyền lợi giúp khách tự chọn trước khi hỏi',
    badge: 'SẢNH IV',
    cardBadge: 'Dễ chốt gói cao',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['React', 'Tailwind CSS'],
    rating: 4.8,
    reviewsCount: 195,
    downloadsCount: 1680,
    author: 'Trịnh Hải Triều AI',
    iconName: 'CheckSquare',
    description: 'So sánh các gói dịch vụ minh bạch về phạm vi, khách phù hợp và quyền lợi, giúp khách tự chọn trước khi tư vấn.',
    skillHelps: 'Xây dựng bảng giá 3 bậc (Cơ bản - Tiêu chuẩn - Cao cấp) thông minh, hướng khách hàng tự động chọn gói mang lại giá trị cao nhất.',
    preparation: 'Các gói dịch vụ bạn cung cấp và danh sách quyền lợi chi tiết của từng gói.',
    steps: [
      'Bước 1: Nạp danh mục quyền lợi vào ma trận so sánh gói giá.',
      'Bước 2: AI thiết kế bảng so sánh trực quan có dấu tích xanh, đánh dấu gói "Phổ biến nhất" hoặc "Khuyên dùng".',
      'Bước 3: Đặt nút chọn gói liên kết trực tiếp tới bước thanh toán hoặc tư vấn.',
    ],
    result: 'Khách hàng tự so sánh và nhận ra giá trị vượt trội của gói cao cấp, giúp nâng cao giá trị trung bình trên mỗi đơn hàng.',
    features: [
      'Minh bạch mọi chi phí, không có phụ phí ẩn',
      'Định hướng tâm lý khách hàng chọn gói dịch vụ tối ưu nhất',
    ],
    skillMdSnippet: `---
name: pricing-table-comparison
---
Quy tắc 3 gói: Gói mồi -> Gói mục tiêu (nổi bật nhất) -> Gói VIP.`,
    samplePrompt: 'Lên bảng giá 3 gói dịch vụ xây kênh video ngắn cho doanh nghiệp vừa và nhỏ.',
    sampleOutput: 'Bảng so sánh chi tiết tính năng từng gói với nút chọn mua thuận tiện.',
  },
  {
    id: 'skill-trang-cau-hoi-thuong-gap',
    name: 'Trang câu hỏi thường gặp',
    bannerTitle: 'TRANG CÂU HỎI THƯỜNG GẶP',
    tagline: 'Gom các băn khoăn về giá, cách dùng, quy trình để khách yên tâm ra quyết định',
    badge: 'SẢNH IV',
    cardBadge: 'Xóa tan do dự',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['React Accordion', 'ChatGPT'],
    rating: 4.8,
    reviewsCount: 170,
    downloadsCount: 1520,
    author: 'Trịnh Hải Triều AI',
    iconName: 'HelpCircle',
    description: 'Gom các băn khoăn về giá, cách dùng, quy trình và thanh toán để khách có câu trả lời trước khi quyết định.',
    skillHelps: 'Xóa bỏ những rào cản tâm lý cuối cùng ngăn cản khách hàng bấm nút mua hàng thông qua dạng thẻ bấm mở (accordion) tiện lợi.',
    preparation: '10 câu hỏi khách hàng thường băn khoăn nhất trước khi xuống tiền.',
    steps: [
      'Bước 1: Nạp 10 câu hỏi và câu trả lời vào khung FAQ chuẩn của Hải Triều AI.',
      'Bước 2: AI định dạng theo kiểu accordion: Bấm vào câu hỏi để mở câu trả lời, mỗi lần mở 1 câu gọn gàng.',
      'Bước 3: Đặt phía dưới trang bán hàng kèm nút gọi Trợ lý AI hỗ trợ.',
    ],
    result: 'Trang web giải đáp tức thì mọi thắc mắc, khách hàng yên tâm tuyệt đối và bấm mua ngay mà không cần đợi nhân viên trả lời.',
    features: [
      'Giao diện đóng mở mượt mà, không làm rối mắt người dùng',
      'Câu trả lời thực tế, thẳng thắn, tạo cảm giác đáng tin cậy',
    ],
    skillMdSnippet: `---
name: faq-accordion-page
---
10 câu hỏi cốt lõi: Độ khó, Thời gian nhận, Thanh toán, Hỗ trợ sau mua...`,
    samplePrompt: 'Soạn 10 câu hỏi thường gặp và câu trả lời cho website bán Skill AI Hải Triều.',
    sampleOutput: 'Bộ 10 câu hỏi đáp chuẩn xác với nút nhắn Trợ lý AI giải đáp thêm.',
  },
  {
    id: 'skill-trang-cam-on-sau-dang-ky',
    name: 'Trang cảm ơn sau đăng ký',
    bannerTitle: 'TRANG CẢM ƠN SAU ĐĂNG KÝ',
    tagline: 'Hướng dẫn khách biết ngay bước tiếp theo: nhận quà, vào nhóm, xem tài liệu',
    badge: 'SẢNH IV',
    cardBadge: 'Trải nghiệm trọn vẹn',
    category: 'sanh-4',
    categoryName: 'Sảnh IV — Trang Bán Hàng & Dịch Vụ',
    branch: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    sanhId: 'sanh-4',
    sanhTitle: 'SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['React', 'Zalo'],
    rating: 4.9,
    reviewsCount: 195,
    downloadsCount: 1740,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Smile',
    description: 'Hướng dẫn khách vừa đăng ký biết ngay bước tiếp theo: nhận quà, vào nhóm, xem tài liệu hoặc đặt lịch tư vấn.',
    skillHelps: 'Khách hàng không bao giờ bị bỡ ngỡ hay lo lắng "tiền đi đâu về đâu", tạo trải nghiệm chăm sóc sau mua hàng hoàn hảo.',
    preparation: 'Đường link tải tài liệu, link nhóm Zalo kín và số điện thoại hỗ trợ khẩn cấp.',
    steps: [
      'Bước 1: Nạp quy trình bàn giao vào template trang cảm ơn (Thank You Page).',
      'Bước 2: AI thiết kế các bước tiếp theo được đánh số rõ ràng: 1. Xem video hướng dẫn -> 2. Bấm vào nhóm Zalo -> 3. Tải file về máy.',
      'Bước 3: Hiển thị ngay sau khi đơn hàng được ghi nhận thành công.',
    ],
    result: 'Khách hàng an tâm 100%, hài lòng với sự chuyên nghiệp và sẵn sàng giới thiệu cho bạn bè.',
    features: [
      'Giao diện chúc mừng tươi vui, mang lại cảm xúc tích cực cho người mua',
      'Hướng dẫn từng bước chi tiết kèm video ngắn 60 giây',
    ],
    skillMdSnippet: `---
name: thank-you-onboarding-page
---
3 bước Onboarding: Nhận file -> Tham gia nhóm Zalo hỗ trợ -> Bắt đầu thực hành.`,
    samplePrompt: 'Thiết kế trang cảm ơn sau khi khách quét mã chuyển khoản thành công bộ Skill AI.',
    sampleOutput: 'Trang cảm ơn ấm áp với mã số đơn hàng, link nhóm Zalo và tài liệu mở khóa.',
  },

  // =========================================================================
  // SẢNH V — VIDEO VIP & ĐA KÊNH (33 - 40)
  // =========================================================================
  {
    id: 'skill-video-zoom-gon-gang',
    name: 'Video Zoom gọn gàng',
    bannerTitle: 'VIDEO ZOOM GỌN GÀNG',
    tagline: 'Biến buổi Zoom dài thành video dễ xem lại bằng cách bỏ chờ, chia ý và phụ đề',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Học nhanh',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['CapCut', 'Descript', 'ChatGPT'],
    rating: 4.9,
    reviewsCount: 230,
    downloadsCount: 2050,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Video',
    description: 'Biến buổi Zoom, đào tạo hoặc họp dài thành video dễ xem lại bằng cách bỏ phần chờ, chia ý chính và thêm phụ đề.',
    skillHelps: 'Tiết kiệm 70% thời gian cho học viên và đồng nghiệp, biến video ghi hình dài 2 tiếng buồn ngủ thành bản tóm tắt 15 phút súc tích.',
    preparation: 'File ghi hình buổi Zoom hoặc link lưu trữ đám mây.',
    steps: [
      'Bước 1: Nạp file âm thanh buổi Zoom vào AI để trích xuất văn bản và phát hiện khoảng im lặng.',
      'Bước 2: AI tự động cắt bỏ phần chờ đợi đầu giờ, những đoạn "à, ừm" và chia các chương mục chính.',
      'Bước 3: Xuất video kèm phụ đề và mục lục thời gian (Timestamp) dễ theo dõi.',
    ],
    result: 'Video đào tạo cô đọng, dễ hiểu, người xem nắm trọn kiến thức trọng tâm mà không tốn cả buổi xem lại.',
    features: [
      'Tự động cắt bỏ các đoạn chết và lỗi kỹ thuật',
      'Tạo phụ đề chạy chữ chuẩn xác cho các thuật ngữ chuyên ngành',
    ],
    skillMdSnippet: `---
name: zoom-condensed-video
---
Loại bỏ: Phần chờ đầu giờ, mic rè, khoảng lặng thừa. Thêm: Tiêu đề chương, phụ đề.`,
    samplePrompt: 'Lên cấu trúc tóm tắt buổi Zoom đào tạo 90 phút thành video 12 phút gồm 4 phần chính.',
    sampleOutput: 'Bản phân cảnh tóm tắt với timeline từng chương mục.',
  },
  {
    id: 'skill-video-ai-theo-kich-ban',
    name: 'Video AI theo kịch bản',
    bannerTitle: 'VIDEO AI THEO KỊCH BẢN',
    tagline: 'Dùng kịch bản và hình ảnh thương hiệu tạo video AI có định hướng rõ',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Tự động sản xuất',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['HeyGen', 'Midjourney', 'ElevenLabs', 'CapCut'],
    rating: 5.0,
    reviewsCount: 380,
    downloadsCount: 3200,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Cpu',
    description: 'Dùng kịch bản và hình ảnh thương hiệu để tạo video AI có định hướng rõ, hỗ trợ sản xuất nội dung nhanh hơn.',
    skillHelps: 'Tạo video có người thuyết trình AI nói tiếng Việt trôi chảy, cử chỉ tự nhiên mà bạn không cần phải lộ mặt hay sắm máy quay đắt tiền.',
    preparation: 'Đoạn kịch bản muốn đọc và ảnh đại diện chuyên gia của bạn.',
    steps: [
      'Bước 1: Nạp kịch bản vào giọng đọc AI siêu thực (ElevenLabs/Vbee).',
      'Bước 2: Ghép khẩu hình nhân vật AI nói khớp từng âm tiết theo giọng đọc.',
      'Bước 3: Chèn thêm hình ảnh b-roll minh họa và chữ text overlay để hoàn thiện video.',
    ],
    result: 'Sản xuất hàng loạt video chất lượng cao mỗi ngày, nhân bản thời gian và công sức sáng tạo lên gấp 10 lần.',
    features: [
      'Khẩu hình khớp 100% với lời nói tiếng Việt',
      'Giữ nét mặt thương hiệu đồng nhất trên tất cả video',
    ],
    skillMdSnippet: `---
name: ai-avatar-video-pipeline
---
Quy trình: Kịch bản -> Giọng đọc siêu thực -> Sinh nhân vật AI nói -> Dựng CapCut.`,
    samplePrompt: 'Tạo video AI 30s giải thích khái niệm Agent Skill cho người kinh doanh nhỏ lẻ.',
    sampleOutput: 'Quy trình tạo video AI hoàn thiện không cần lộ mặt.',
  },
  {
    id: 'skill-tro-ly-cham-cong-dong',
    name: 'Trợ lý chăm cộng đồng',
    bannerTitle: 'TRỢ LÝ CHĂM CỘNG ĐỒNG',
    tagline: 'Khung trả lời bình luận, tin nhắn theo giọng thương hiệu chăm cộng đồng đều đặn',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Trợ lý 24/7',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['ChatGPT GPTs', 'Zalo Bot'],
    rating: 4.9,
    reviewsCount: 260,
    downloadsCount: 2280,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Users',
    description: 'Thiết lập khung trả lời bình luận và tin nhắn theo giọng thương hiệu để chăm cộng đồng đều hơn, nhưng vẫn cần người duyệt khi cần.',
    skillHelps: 'Xây dựng một "trợ lý ảo" thấu hiểu toàn bộ sản phẩm và phong cách ứng xử của bạn, hỗ trợ thành viên nhóm Zalo 24/7.',
    preparation: 'Các câu hỏi thành viên hay hỏi trong nhóm và nguyên tắc ứng xử của cộng đồng bạn.',
    steps: [
      'Bước 1: Nạp bộ tài liệu kiến thức và phong cách xưng hô vào trợ lý AI.',
      'Bước 2: Cài đặt quy tắc: Trả lời đúng trọng tâm, ấm áp, có dẫn chứng link tài liệu và chuyển việc khó cho người thật duyệt.',
      'Bước 3: Tích hợp vào nhóm Zalo hoặc khung chat fanpage.',
    ],
    result: 'Cộng đồng luôn được chăm sóc kịp thời, thành viên gắn bó và giảm tải 80% áp lực trực chat cho bạn.',
    features: [
      'Xưng hô chuẩn mực theo đúng giọng HẢI TRIỀU AI',
      'Cơ chế cảnh báo thông minh khi có câu hỏi phức tạp cần người quản trị can thiệp',
    ],
    skillMdSnippet: `---
name: community-support-assistant
---
Giọng điệu: Thân thiện, thực tế, luôn sẵn sàng hướng dẫn từng bước nhỏ.`,
    samplePrompt: 'Cài đặt tính cách cho trợ lý Hải Triều AI trả lời thắc mắc trong nhóm Zalo học viên.',
    sampleOutput: 'Hệ thống kịch bản phản hồi tự động chuẩn mực và tận tình.',
  },
  {
    id: 'skill-tro-ly-nghien-cuu-chu-de',
    name: 'Trợ lý nghiên cứu chủ đề',
    bannerTitle: 'TRỢ LÝ NGHIÊN CỨU CHỦ ĐỀ',
    tagline: 'Tìm chủ đề khách quan tâm, phân tích góc nội dung có thể triển khai ngay',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Bắt trend nhanh',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['Google Trends', 'TikTok Search', 'ChatGPT'],
    rating: 4.9,
    reviewsCount: 290,
    downloadsCount: 2500,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Compass',
    description: 'Hỗ trợ tìm chủ đề khách đang quan tâm, phân tích góc nội dung và chọn ý tưởng có thể triển khai ngay.',
    skillHelps: 'Không bao giờ lo làm video ra mà không ai xem, vì mọi ý tưởng đều dựa trên số liệu tìm kiếm thực tế của người dùng trên Google và TikTok.',
    preparation: 'Từ khóa chính về lĩnh vực của bạn (ví dụ: làm đẹp, bất động sản, bán hàng online, AI).',
    steps: [
      'Bước 1: Nạp từ khóa vào công cụ quét nhu cầu tìm kiếm của Hải Triều AI.',
      'Bước 2: AI phân tích và lọc ra top 10 câu hỏi người dùng tìm kiếm nhiều nhất nhưng ít người làm video giải đáp.',
      'Bước 3: Chọn ra 3 góc tiếp cận độc đáo để bắt tay vào viết kịch bản ngay.',
    ],
    result: 'Video đăng lên dễ dàng bắt trúng nhu cầu tìm kiếm, nhận được lượt xem tự nhiên đều đặn mỗi ngày.',
    features: [
      'Phát hiện sớm các chủ đề đang chuẩn bị lên xu hướng',
      'Gợi ý góc nhìn mới lạ, tránh trùng lặp với các kênh đối thủ',
    ],
    skillMdSnippet: `---
name: topic-research-assistant
---
Tiêu chí: Lượt tìm kiếm cao + Mức độ cạnh tranh trung bình + Phù hợp sản phẩm đang bán.`,
    samplePrompt: 'Tìm 5 chủ đề về ứng dụng AI đang được người kinh doanh tự do tại Việt Nam tìm kiếm nhiều nhất tuần này.',
    sampleOutput: 'Danh sách 5 chủ đề tiềm năng kèm số liệu tìm kiếm và góc triển khai cụ thể.',
  },
  {
    id: 'skill-seo-video-youtube',
    name: 'SEO video YouTube',
    bannerTitle: 'SEO VIDEO YOUTUBE',
    tagline: 'Tối ưu tiêu đề, mô tả, từ khóa và cấu trúc để khách dễ tìm thấy nội dung',
    badge: 'SẢNH V • VIP',
    cardBadge: 'View bền vững',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['ChatGPT', 'vidIQ', 'TubeBuddy'],
    rating: 4.9,
    reviewsCount: 275,
    downloadsCount: 2420,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Search',
    description: 'Tối ưu tiêu đề, mô tả, từ khóa và cấu trúc video để khách có nhu cầu dễ tìm thấy nội dung của anh/chị hơn.',
    skillHelps: 'Biến video YouTube thành cỗ máy kéo khách hàng thụ động bền vững qua năm tháng mỗi khi có người gõ tìm kiếm trên Google/YouTube.',
    preparation: 'Chủ đề video đã quay và tóm tắt nội dung chính.',
    steps: [
      'Bước 1: Nạp nội dung video vào bộ tối ưu chuẩn SEO của Hải Triều AI.',
      'Bước 2: AI tự tạo bộ thẻ Tags chuẩn, Tiêu đề chứa từ khóa chính, và Mô tả có gắn mốc thời gian (Chapter).',
      'Bước 3: Sao chép dán vào phần cài đặt video khi tải lên YouTube Studio.',
    ],
    result: 'Video nhanh chóng lọt vào top 3 tìm kiếm YouTube, mang lại lượt xem và khách hàng mới đều đặn suốt nhiều năm.',
    features: [
      'Tối ưu hóa theo thuật toán tìm kiếm mới nhất của Google & YouTube',
      'Định dạng phần mô tả chuyên nghiệp kèm link kêu gọi mua hàng',
    ],
    skillMdSnippet: `---
name: youtube-seo-optimizer
---
Thành phần: Title SEO (dưới 60 ký tự) + 300 từ Description chuẩn SEO + Bộ 15 Tags chuẩn.`,
    samplePrompt: 'Tối ưu SEO cho video YouTube ngắn: "Hướng dẫn cài đặt prompt kịch bản Text Overlay".',
    sampleOutput: 'Bộ tiêu đề, mô tả chuẩn SEO có gắn hashtag và timestamp hoàn chỉnh.',
  },
  {
    id: 'skill-bai-facebook-dung-giong',
    name: 'Bài Facebook đúng giọng',
    bannerTitle: 'BÀI FACEBOOK ĐÚNG GIỌNG',
    tagline: 'Viết bài theo cách bạn thường nói, giữ chất riêng nhưng cấu trúc rõ ràng',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Chất riêng',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['ChatGPT', 'Claude'],
    rating: 4.9,
    reviewsCount: 310,
    downloadsCount: 2650,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Facebook',
    description: 'Viết bài Facebook theo cách anh/chị thường nói, giữ chất riêng nhưng vẫn có cấu trúc rõ ràng và lời mời hành động phù hợp.',
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
name: facebook-tone-of-voice
---
Phân tích: Cách dùng đại từ xưng hô, độ dài câu, thói quen dùng dấu câu và từ địa phương.`,
    samplePrompt: 'Học văn phong của Hải Triều để viết một bài chia sẻ về việc kiên trì làm video mỗi ngày.',
    sampleOutput: 'Bài viết gần gũi, ấm áp, kết bài bằng thông điệp hành động thực tế.',
  },
  {
    id: 'skill-kich-ban-video-lan-toa',
    name: 'Kịch bản video có khả năng lan tỏa',
    bannerTitle: 'KỊCH BẢN VIDEO LAN TỎA',
    tagline: 'Mở đầu cuốn hút, một ý chính dễ nhớ và kết thúc tạo đối thoại tự nhiên',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Triệu view',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: true,
    aiTools: ['ChatGPT', 'CapCut'],
    rating: 5.0,
    reviewsCount: 420,
    downloadsCount: 3600,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Share2',
    description: 'Xây kịch bản có phần mở đầu cuốn hút, một ý chính dễ nhớ và kết thúc tạo đối thoại tự nhiên với người xem.',
    skillHelps: 'Được thiết kế để tối ưu các chỉ số lan truyền: Tỷ lệ xem lại, lượt gửi cho bạn bè và hàng trăm bình luận tranh luận văn minh.',
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
name: viral-video-blueprint
---
3 yếu tố lan tỏa: Hook bất ngờ + 1 ý tưởng đắt giá + Câu kết kích hoạt tranh luận văn minh.`,
    samplePrompt: 'Lên kịch bản video ngắn chia sẻ về nghịch lý: Càng bận rộn thì càng phải dùng AI.',
    sampleOutput: 'Kịch bản cuốn hút từ giây đầu đến giây cuối, tạo nhiều thảo luận sôi nổi.',
  },
  {
    id: 'skill-slide-thuyet-trinh-ai',
    name: 'Slide thuyết trình AI',
    bannerTitle: 'SLIDE THUYẾT TRÌNH AI',
    tagline: 'Chuyển nội dung thành bộ slide rõ ràng, mỗi slide 1 ý, dùng đào tạo hay bán hàng',
    badge: 'SẢNH V • VIP',
    cardBadge: 'Thuyết phục',
    category: 'sanh-5',
    categoryName: 'Sảnh V — Video VIP & Đa Kênh',
    branch: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    sanhId: 'sanh-5',
    sanhTitle: 'SẢNH V — VIDEO VIP & ĐA KÊNH',
    isGift: false,
    price: 49000,
    originalPrice: 199000,
    highlight: false,
    aiTools: ['Gamma App', 'Canva', 'PowerPoint'],
    rating: 4.9,
    reviewsCount: 310,
    downloadsCount: 2600,
    author: 'Trịnh Hải Triều AI',
    iconName: 'Monitor',
    description: 'Chuyển nội dung anh/chị có thành bộ slide rõ ràng, mỗi slide một ý, dùng cho đào tạo, tư vấn hoặc thuyết trình bán hàng.',
    skillHelps: 'Không còn cảnh thức trắng đêm xếp từng ô chữ trong PowerPoint, AI sẽ tự động bố trí chữ và ảnh minh họa thành bộ slide chuẩn doanh nghiệp trong 2 phút.',
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
name: ai-presentation-slide-generator
---
Quy tắc: 1 slide - 1 thông điệp - 1 hình minh họa trực quan. Tối đa 6 dòng chữ mỗi trang.`,
    samplePrompt: 'Chuyển nội dung 5 bí quyết làm video ngắn thành bộ slide thuyết trình 8 trang cho buổi chia sẻ.',
    sampleOutput: 'Dàn ý và thiết kế 8 trang slide súc tích, chuyên nghiệp.',
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
