import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  CornerDownLeft, 
  RefreshCw,
  PhoneCall,
  ExternalLink,
  ChevronDown,
  Bot
} from 'lucide-react';
import { BANK_INFO, FAQS, SKILL_PRODUCTS, SKILL_SANH_LIST } from '../data/skillsData';

export interface AssistantChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout?: (productId?: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    action: () => void;
    primary?: boolean;
    href?: string;
  }>;
}

const QUICK_QUESTIONS = [
  'Tôi không rành công nghệ, có dùng được không?',
  'Bán hàng online nên bắt đầu từ Sảnh nào?',
  'Sau khi thanh toán tôi nhận tài nguyên ở đâu?',
  'Tôi muốn nhận quà tặng Skill 0đ',
  'Tôi muốn được ANH HẢI TRIỀU AI tư vấn trực tiếp 1-1',
  'Thông tin chuyển khoản SHB như thế nào?'
];

export const AssistantChatbot: React.FC<AssistantChatbotProps> = ({
  isOpen,
  onClose,
  onOpenCheckout
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Dạ em chào Anh/Chị! Em là Trợ lý HẢI TRIỀU AI. Em ở đây để hỗ trợ Anh/Chị chọn đúng Skill, hướng dẫn nhận tài nguyên sau khi thanh toán hoặc hỗ trợ kết nối trực tiếp với Anh Hải Triều.',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: 'Anh/Chị đang vướng ở khâu nào (lên ý tưởng, viết kịch bản, làm ảnh hay chốt đơn), nhắn cho em để em tư vấn đúng việc nhé ạ!',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  // Audio chime feedback
  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // Audio context might be restricted before gesture
    }
  };

  const generateAnswer = (userQuery: string): { text: string; actions?: Message['actions'] } => {
    const q = userQuery.toLowerCase().trim();

    // 0. Check if user is asking about a specific Sảnh (Sảnh I, Sảnh II, Sảnh III, Sảnh IV, Sảnh V)
    if (q.includes('sảnh 1') || q.includes('sảnh i ') || q.includes('sảnh i—') || q.includes('hình ảnh thương hiệu')) {
      const skillsInSanh = SKILL_PRODUCTS.filter(s => s.sanhId === 'sanh-1');
      return {
        text: `Dạ, SẢNH I — HÌNH ẢNH THƯƠNG HIỆU gồm 8 Skill thực chiến:\n\n${skillsInSanh.map((s, i) => `${i + 1}. **${s.name}**:\n${s.description}`).join('\n\n')}\n\nAnh/Chị muốn tìm hiểu sâu hoặc nhận hướng dẫn thực hành của Skill nào cứ nhắn tên Skill cho em nhé!`,
        actions: [
          {
            label: 'Đến Sảnh I trên website',
            action: () => {
              const el = document.getElementById('sanh-1') || document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('sảnh 2') || q.includes('sảnh ii') || q.includes('video bán hàng')) {
      const skillsInSanh = SKILL_PRODUCTS.filter(s => s.sanhId === 'sanh-2');
      return {
        text: `Dạ, SẢNH II — VIDEO BÁN HÀNG gồm 8 Skill thực chiến:\n\n${skillsInSanh.map((s, i) => `${i + 1}. **${s.name}**:\n${s.description}`).join('\n\n')}\n\nAnh/Chị cần làm video dạng nào cứ nhắn em để em gửi chi tiết 3 bước thực hiện ạ!`,
        actions: [
          {
            label: 'Đến Sảnh II trên website',
            action: () => {
              const el = document.getElementById('sanh-2') || document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('sảnh 3') || q.includes('sảnh iii') || q.includes('nội dung & marketing')) {
      return {
        text: `Dạ, để tối ưu kết quả thực chiến, hệ thống đã tinh gọn và dồn toàn bộ nguồn lực vào các sảnh cốt lõi: Sảnh I (Hình ảnh thương hiệu), Sảnh II (Video bán hàng triệu view) và Sảnh IV (Trang bán hàng & Sàn dịch vụ tự động). Anh/Chị có thể tham khảo ngay các Skill nổi bật có poster tại Sảnh IV nhé!`,
        actions: [
          {
            label: 'Đến Sảnh IV trên website',
            action: () => {
              const el = document.getElementById('sanh-4') || document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('sảnh 4') || q.includes('sảnh iv') || q.includes('trang bán hàng')) {
      const skillsInSanh = SKILL_PRODUCTS.filter(s => s.sanhId === 'sanh-4');
      return {
        text: `Dạ, SẢNH IV — TRANG BÁN HÀNG & DỊCH VỤ gồm 8 Skill thực chiến:\n\n${skillsInSanh.map((s, i) => `${i + 1}. **${s.name}**:\n${s.description}`).join('\n\n')}\n\nAnh/Chị muốn dựng trang giới thiệu dịch vụ, đăng ký workshop hay trang nhận quà 0đ cứ nhắn em nhé!`,
        actions: [
          {
            label: 'Đến Sảnh IV trên website',
            action: () => {
              const el = document.getElementById('sanh-4') || document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('sảnh 5') || q.includes('sảnh v') || q.includes('video vip')) {
      const skillsInSanh = SKILL_PRODUCTS.filter(s => s.sanhId === 'sanh-5');
      return {
        text: `Dạ, SẢNH V — VIDEO VIP & ĐA KÊNH gồm 8 Skill cao cấp:\n\n${skillsInSanh.map((s, i) => `${i + 1}. **${s.name}**:\n${s.description}`).join('\n\n')}\n\nĐây là các công cụ đòn bẩy tự động hóa tối ưu cho người bận rộn ạ!`,
        actions: [
          {
            label: 'Đến Sảnh V trên website',
            action: () => {
              const el = document.getElementById('sanh-5') || document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    // 0.5. Check if user is asking about ANY of the specific 40 Skills
    const matchedSkill = SKILL_PRODUCTS.find(p => {
      const pNameLower = p.name.toLowerCase();
      // Match full or partial name
      if (q.includes(pNameLower)) return true;
      // Match specific keywords
      if (p.id === 'skill-avatar-chuyen-gia' && (q.includes('avatar') || q.includes('ảnh đại diện'))) return true;
      if (p.id === 'skill-poster-san-pham' && (q.includes('poster') || q.includes('poster sản phẩm'))) return true;
      if (p.id === 'skill-text-overlay' && (q.includes('text overlay') || q.includes('chữ trên ảnh') || q.includes('chữ trên màn hình'))) return true;
      if (p.id === 'skill-anh-bia-kenh' && (q.includes('ảnh bìa') || q.includes('ảnh bìa kênh'))) return true;
      if (p.id === 'skill-bo-anh-dich-vu' && (q.includes('bộ ảnh dịch vụ') || q.includes('ảnh dịch vụ'))) return true;
      if (p.id === 'skill-anh-feedback' && (q.includes('feedback') || q.includes('ảnh feedback') || q.includes('tin nhắn phản hồi'))) return true;
      if ((p.id === 'skill-mot-anh-chin-goc-quay' || p.id === 'skill-anh-quote-thuong-hieu') && (q.includes('chín góc') || q.includes('9 góc') || q.includes('multishot') || q.includes('góc quay') || q.includes('quote') || q.includes('châm ngôn'))) return true;
      if (p.id === 'skill-anh-chien-dich' && (q.includes('ảnh chiến dịch') || q.includes('chiến dịch ra mắt ảnh'))) return true;
      if ((p.id === 'skill-edit-video-kol-ai' || p.id === 'skill-kich-ban-video-30-giay') && (q.includes('edit video') || q.includes('kol ai') || q.includes('30 giây') || q.includes('30s') || q.includes('video 30'))) return true;
      if ((p.id === 'skill-hieu-ung-cao-cap' || p.id === 'skill-video-noi-chuyen-ban-hang') && (q.includes('hiệu ứng') || q.includes('cao cấp') || q.includes('sticker') || q.includes('nói chuyện'))) return true;
      if (p.id === 'skill-cat-video-dai-thanh-short' && (q.includes('cắt video') || q.includes('video dài thành short') || q.includes('short'))) return true;
      if (p.id === 'skill-video-giai-dap-khach-hoi' && (q.includes('giải đáp khách hỏi') || q.includes('video giải đáp') || q.includes('khách hỏi'))) return true;
      if (p.id === 'skill-video-ke-cau-chuyen-khach-hang' && (q.includes('kể câu chuyện') || q.includes('chuyện khách hàng') || q.includes('storytelling'))) return true;
      if (p.id === 'skill-video-theo-nhip-nhac' && (q.includes('nhịp nhạc') || q.includes('theo nhạc') || q.includes('beat'))) return true;
      if (p.id === 'skill-video-gioi-thieu-san-pham' && (q.includes('giới thiệu sản phẩm') || q.includes('video giới thiệu'))) return true;
      if (p.id === 'skill-video-livestream-moi' && (q.includes('livestream mồi') || q.includes('video mồi') || q.includes('kéo mắt xem live'))) return true;
      if (p.id === 'skill-bai-ban-hang-chieu-sau' && (q.includes('bài bán hàng') || q.includes('chiều sâu') || q.includes('bán hàng không ép'))) return true;
      if (p.id === 'skill-chuoi-cham-khach-zalo' && (q.includes('chăm khách zalo') || q.includes('chuỗi tin nhắn') || q.includes('chăm sóc zalo'))) return true;
      if (p.id === 'skill-lich-noi-dung-30-ngay' && (q.includes('30 ngày') || q.includes('lịch nội dung') || q.includes('kế hoạch 30 ngày'))) return true;
      if (p.id === 'skill-tieu-de-dung-luot' && (q.includes('tiêu đề') || q.includes('dừng lướt') || q.includes('giật tít'))) return true;
      if (p.id === 'skill-carousel-kien-thuc' && (q.includes('carousel') || q.includes('bài nhiều ảnh') || q.includes('trượt ảnh'))) return true;
      if (p.id === 'skill-kich-ban-tra-loi-binh-luan' && (q.includes('trả lời bình luận') || q.includes('comment') || q.includes('bình luận'))) return true;
      if (p.id === 'skill-bai-ke-chuyen-thuong-hieu' && (q.includes('kể chuyện thương hiệu') || q.includes('câu chuyện của tôi') || q.includes('bài kể chuyện'))) return true;
      if (p.id === 'skill-chien-dich-ra-mat' && (q.includes('chiến dịch ra mắt') || q.includes('mở bán'))) return true;
      if (p.id === 'skill-trang-gioi-thieu-dich-vu' && (q.includes('trang giới thiệu dịch vụ') || q.includes('trang dịch vụ') || q.includes('landing page dịch vụ'))) return true;
      if (p.id === 'skill-trang-dang-ky-workshop' && (q.includes('workshop') || q.includes('đăng ký lớp') || q.includes('webinar'))) return true;
      if (p.id === 'skill-trang-nhan-qua' && (q.includes('trang nhận quà') || q.includes('tặng tài nguyên') || q.includes('nam châm hút khách'))) return true;
      if (p.id === 'skill-trang-ban-san-pham-so' && (q.includes('sản phẩm số') || q.includes('bán file') || q.includes('khoá học'))) return true;
      if (p.id === 'skill-trang-ho-so-chuyen-gia' && (q.includes('hồ sơ chuyên gia') || q.includes('portfolio') || q.includes('trang cá nhân'))) return true;
      if (p.id === 'skill-trang-goi-dich-vu' && (q.includes('bảng giá') || q.includes('gói dịch vụ') || q.includes('so sánh gói'))) return true;
      if (p.id === 'skill-trang-cau-hoi-thuong-gap' && (q.includes('trang câu hỏi') || q.includes('faq page'))) return true;
      if (p.id === 'skill-trang-cam-on-sau-dang-ky' && (q.includes('trang cảm ơn') || q.includes('thank you page'))) return true;
      if (p.id === 'skill-video-zoom-gon-gang' && (q.includes('zoom') || q.includes('video zoom') || q.includes('tóm tắt zoom'))) return true;
      if (p.id === 'skill-video-ai-theo-kich-ban' && (q.includes('video ai') || q.includes('nhân vật ai') || q.includes('ai theo kịch bản'))) return true;
      if (p.id === 'skill-tro-ly-cham-cong-dong' && (q.includes('trợ lý chăm cộng đồng') || q.includes('chăm cộng đồng') || q.includes('bot zalo'))) return true;
      if (p.id === 'skill-tro-ly-nghien-cuu-chu-de' && (q.includes('nghiên cứu chủ đề') || q.includes('tìm chủ đề') || q.includes('ý tưởng video'))) return true;
      if (p.id === 'skill-seo-video-youtube' && (q.includes('seo youtube') || q.includes('seo video') || q.includes('lên top youtube'))) return true;
      if (p.id === 'skill-bai-facebook-dung-giong' && (q.includes('facebook đúng giọng') || q.includes('bài facebook') || q.includes('giữ chất riêng'))) return true;
      if (p.id === 'skill-kich-ban-video-lan-toa' && (q.includes('lan tỏa') || q.includes('viral') || q.includes('triệu view'))) return true;
      if (p.id === 'skill-slide-thuyet-trinh-ai' && (q.includes('slide') || q.includes('powerpoint') || q.includes('thuyết trình'))) return true;
      return false;
    });

    if (matchedSkill) {
      const priceText = matchedSkill.price === 0 ? 'MIỄN PHÍ [0đ]' : `${new Intl.NumberFormat('vi-VN').format(matchedSkill.price)} VNĐ (Ưu đãi)`;
      return {
        text: `Dạ, về Skill "${matchedSkill.name}" (${matchedSkill.sanhTitle}):\n\n${matchedSkill.description}\n\n• Skill giúp gì: ${matchedSkill.skillHelps || matchedSkill.description}\n• Cần chuẩn bị: ${matchedSkill.preparation || 'Điện thoại/máy tính có AI'}\n• 3 bước thực hiện:\n${(matchedSkill.steps || []).map((s, i) => `  ${i + 1}. ${s}`).join('\n')}\n• Kết quả nhận được: ${matchedSkill.result || 'Sản phẩm đầu ra rõ ràng, áp dụng được ngay'}\n• Học phí: ${priceText}`,
        actions: [
          {
            label: matchedSkill.price === 0 ? 'Nhận Quà Tặng 0đ' : 'Mở Khóa Skill Này',
            action: () => {
              onOpenCheckout?.(matchedSkill.id);
            },
            primary: true
          },
          {
            label: 'Xem trên Sàn Skill',
            action: () => {
              const el = document.getElementById(matchedSkill.sanhId || 'shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    // 1. Check exact or near match with the 10 official FAQs
    if (q.includes('không rành') || q.includes('chưa rành') || q.includes('công nghệ') || q.includes('không giỏi')) {
      return {
        text: 'Dạ, hoàn toàn dùng được ạ. Skill được thiết kế để Anh/Chị chỉ cần mô tả việc mình đang làm, dán hướng dẫn vào AI và làm theo từng bước. Quan trọng nhất không phải giỏi công nghệ mà là biết mình đang muốn giải quyết việc gì.',
        actions: [
          {
            label: 'Xem các Sảnh Skill phù hợp',
            action: () => {
              const el = document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    if (q.includes('gồm những gì') || q.includes('1 skill gồm')) {
      return {
        text: 'Mỗi Skill là một khung hướng dẫn thực hành: cần chuẩn bị gì, câu lệnh mẫu, cách chỉnh theo ngành nghề và hướng xử lý khi AI trả lời chưa đúng ý. Anh/Chị dùng để làm việc nhanh hơn, không phải học lý thuyết cho nhiều ạ.'
      };
    }

    if (q.includes('khác gì') || q.includes('phần mềm')) {
      return {
        text: 'Skill không phải phần mềm. Đây là cách hướng dẫn AI làm đúng một việc cụ thể như viết nội dung, lên video, làm ảnh hoặc xây trang bán hàng. Anh/Chị vẫn dùng ChatGPT, Gemini hoặc công cụ AI mình đang có bình thường ạ.'
      };
    }

    if (q.includes('bán hàng') || q.includes('sảnh nào') || q.includes('bắt đầu từ')) {
      return {
        text: 'Dạ nếu kênh của Anh/Chị chưa có hình ảnh rõ ràng, hãy bắt đầu từ Sảnh I (Skill Hình Ảnh Thương Hiệu). Nếu đã có sản phẩm nhưng chưa biết quay gì để khách dừng lại, mình đi từ Sảnh II (Video Ngắn Triệu View). Còn nếu khách xem nhiều nhưng chưa nhắn tin, Anh/Chị ưu tiên Sảnh IV (Trang Bán Hàng & Dịch Vụ Tự Động).',
        actions: [
          {
            label: 'Đi tới Sàn Skill ngay',
            action: () => {
              const el = document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('dịch vụ') || q.includes('đào tạo') || q.includes('spa') || q.includes('bất động sản')) {
      return {
        text: 'Rất phù hợp ạ. Người làm dịch vụ cần làm rõ chuyên môn, tạo niềm tin và có quy trình chăm khách. Các Skill hình ảnh, nội dung, video và trang giới thiệu dịch vụ đều có thể áp dụng theo ngành thực tế của Anh/Chị.'
      };
    }

    if (q.includes('40 skill') || q.includes('tất cả skill') || q.includes('mua hết')) {
      return {
        text: 'Không cần đâu ạ. Anh/Chị nên chọn theo đúng điểm nghẽn đang gặp nhất. Làm đúng một nhóm Skill trước, có kết quả rồi mới mở rộng, sẽ đỡ rối và dùng hiệu quả hơn rất nhiều.'
      };
    }

    if (q.includes('điện thoại') || q.includes('smartphone') || q.includes('máy tính') || q.includes('laptop')) {
      return {
        text: 'Dạ có. Phần lớn Skill dùng được trên điện thoại nếu Anh/Chị có ứng dụng AI (ChatGPT, Claude, Gemini, CapCut) và hình ảnh hoặc nội dung cần làm. Tuy nhiên, những việc như dựng website hoặc chỉnh nhiều file cùng lúc sẽ thuận tiện hơn khi dùng máy tính.'
      };
    }

    if (q.includes('chưa đúng ý') || q.includes('không đúng ý') || q.includes('sửa câu lệnh') || q.includes('prompt')) {
      return {
        text: 'Dạ Anh/Chị đừng bỏ ngay. Mình cần bổ sung ngữ cảnh như: sản phẩm cụ thể, khách hàng mục tiêu, mục đích bài viết, giọng văn mong muốn và ví dụ mẫu. Nếu vẫn chưa ưng ý, Anh/Chị cứ gửi câu lệnh vào đây hoặc qua Zalo, Trợ lý bên em sẽ gợi ý cách chỉnh câu lệnh ngay ạ!'
      };
    }

    if (q.includes('nhận tài nguyên') || q.includes('sau khi thanh toán') || q.includes('chuyển khoản xong') || q.includes('nhận ở đâu')) {
      return {
        text: 'Sau khi chuyển khoản đúng thông tin hiển thị trên website (SHB: 0913179424 - TRỊNH HAI TRIEU), Anh/Chị nhắn xác nhận qua Zalo của Hải Triều AI. Bên em sẽ kích hoạt và gửi link tải toàn bộ tài nguyên (file SKILL.md, prompt, video hướng dẫn) cùng link vào nhóm Zalo kín ngay lập tức ạ.',
        actions: [
          {
            label: 'Mở nhóm Zalo xác nhận',
            action: () => {
              window.open(BANK_INFO.zaloGroupUrl, '_blank');
            },
            primary: true,
            href: BANK_INFO.zaloGroupUrl
          }
        ]
      };
    }

    if (q.includes('tư vấn trực tiếp') || q.includes('gặp hải triều') || q.includes('1-1') || q.includes('anh hải triều tư vấn')) {
      return {
        text: 'Dạ, để được Anh Hải Triều AI tư vấn trực tiếp 1-1, Anh/Chị vui lòng để lại: [Họ tên] + [Số Zalo] + [Ngành nghề] + [Điểm đang vướng]. Trợ lý bên em sẽ tiếp nhận trước để Anh Hải Triều nhìn đúng bài toán và tư vấn đi thẳng vào việc, không mất thời gian của Anh/Chị ạ.',
        actions: [
          {
            label: 'Nhắn Zalo Trực Tiếp Anh Hải Triều',
            action: () => {
              window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
            },
            primary: true,
            href: `https://zalo.me/${BANK_INFO.supportPhone}`
          }
        ]
      };
    }

    if (q.includes('stk') || q.includes('tài khoản') || q.includes('thanh toán') || q.includes('ngân hàng') || q.includes('shb')) {
      return {
        text: `Dạ thông tin thanh toán chuyển khoản chính thức:\n• Ngân hàng: ${BANK_INFO.bankName} (${BANK_INFO.bankFullName})\n• Số tài khoản: ${BANK_INFO.accountNumber}\n• Chủ tài khoản: ${BANK_INFO.accountOwner}\n• Hệ thống hỗ trợ quét mã VietQR tự động 24/7.`,
        actions: [
          {
            label: 'Mở mục Quét mã VietQR',
            action: () => {
              const el = document.getElementById('thanhtoan');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          }
        ]
      };
    }

    if (q.includes('quà') || q.includes('0đ') || q.includes('miễn phí') || q.includes('tri ân')) {
      return {
        text: 'Dạ bên em đang tặng MIỄN PHÍ 0đ bộ 4 Quà Tặng Tri Ân Độc Quyền:\n1. Poster sản phẩm - Bộ 10 ảnh quảng cáo\n2. Kịch bản & Storyboard Tự Động\n3. 113 Âm Thanh Thao Túng Người Xem\n4. Kịch Bản Video Giọng Adam.\nAnh/Chị chỉ cần bấm "Nhận Quà Tặng Trị Giá 0đ" trên website là nhận được ngay qua Email & Zalo ạ!',
        actions: [
          {
            label: 'Nhận Quà Tặng 0đ Ngay',
            action: () => {
              onOpenCheckout?.('gift-poster-san-pham');
            },
            primary: true
          }
        ]
      };
    }

    // Default polite and grounded response
    return {
      text: 'Dạ, Trợ lý đã ghi nhận câu hỏi của Anh/Chị. Anh/Chị có thể bấm chọn một trong các câu hỏi gợi ý bên dưới hoặc kết nối trực tiếp với Anh Hải Triều qua số Zalo 0913179424 để được hỗ trợ cụ thể theo đúng trường hợp của mình nhé ạ!',
      actions: [
        {
          label: 'Nhắn Zalo 0913179424',
          action: () => {
            window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
          },
          primary: true
        }
      ]
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural response latency (400 - 800ms)
    setTimeout(() => {
      const responseData = generateAnswer(query);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        actions: responseData.actions,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      playChime();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Minimized Bar */}
      {isMinimized ? (
        <div 
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-3 bg-[#130728] border-2 border-purple-500/80 rounded-full py-2.5 px-4 shadow-2xl shadow-purple-950/80 cursor-pointer hover:bg-[#1a0a38] transition-all hover:scale-105"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-300">
            <img 
              src="/images/tro-ly-hai-trieu.jpg" 
              alt="Trợ lý Hải Triều AI" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
              }}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-purple-900" />
          </div>
          <div>
            <div className="text-white text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>Trợ lý HẢI TRIỀU AI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-purple-300 text-[10px]">Đang sẵn sàng • Bấm để mở</div>
          </div>
          <button 
            type="button" 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-purple-400 hover:text-white p-1 ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Full Chatbot Window */
        <div className="w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[85vh] bg-[#0c051a] border border-purple-700/60 rounded-3xl shadow-2xl shadow-purple-950/90 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-950 via-[#1e0a3d] to-indigo-950 p-4 border-b border-purple-800/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-purple-400 shadow-md">
                  <img
                    src="/images/tro-ly-hai-trieu.jpg"
                    alt="Trợ lý Hải Triều AI"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
                    }}
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#1e0a3d] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-white text-sm sm:text-base tracking-wide">
                    Trợ lý HẢI TRIỀU AI
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    Auto Bot
                  </span>
                </div>
                <p className="text-purple-300/80 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Trực tuyến 24/7 • Giải đáp thực tế
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                title="Thu nhỏ"
                className="w-8 h-8 rounded-lg hover:bg-purple-800/50 text-purple-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Đóng chatbot"
                className="w-8 h-8 rounded-lg hover:bg-purple-800/50 text-purple-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Announcement inside chatbot */}
          <div className="bg-purple-900/30 px-3.5 py-1.5 border-b border-purple-800/30 flex items-center justify-between text-[11px] text-purple-200">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-300" />
              SHB: <b className="text-white">0913179424</b> - TRỊNH HAI TRIEU
            </span>
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white underline font-medium"
            >
              Vào Zalo 1-1
            </a>
          </div>

          {/* Message History */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-purple-400/50 shrink-0 mt-1">
                      <img
                        src="/images/tro-ly-hai-trieu.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
                        }}
                      />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                        isBot
                          ? 'bg-[#190c33] text-purple-50 border border-purple-800/50 shadow-md shadow-purple-950/40 rounded-tl-sm'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/40 rounded-tr-sm font-medium'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Action buttons embedded in message */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.actions.map((act, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={act.action}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                              act.primary
                                ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm border border-purple-400/50'
                                : 'bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-700/60'
                            }`}
                          >
                            <span>{act.label}</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div
                      className={`text-[10px] text-purple-400/70 px-1 ${
                        isBot ? 'text-left' : 'text-right'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-purple-400/50 shrink-0">
                  <img
                    src="/images/tro-ly-hai-trieu.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
                    }}
                  />
                </div>
                <div className="bg-[#190c33] border border-purple-800/50 px-4 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 text-xs text-purple-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="ml-1 text-[11px] text-purple-300/80">Trợ lý đang trả lời...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Chips */}
          <div className="p-2.5 bg-[#0e0620] border-t border-purple-900/50">
            <div className="text-[11px] font-semibold text-purple-300/90 mb-1.5 px-1 flex items-center justify-between">
              <span>Gợi ý câu hỏi nhanh:</span>
              <span className="text-[10px] text-purple-400/60">Chạm để hỏi</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-purple-950/90 hover:bg-purple-900 text-purple-200 hover:text-white border border-purple-800/70 text-[11px] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0a0416] border-t border-purple-900/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhắn tin cho Trợ lý HẢI TRIỀU AI..."
              className="flex-1 bg-[#160a2c] text-white placeholder-purple-400/50 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-purple-800/60 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer shadow-md shadow-purple-950"
              title="Gửi câu hỏi"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
