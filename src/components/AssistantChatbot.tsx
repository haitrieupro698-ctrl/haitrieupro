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
  Bot,
  Gift,
  HelpCircle,
  Phone
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

const ASSISTANT_AVATAR = '/assets/aistudio/HT_V_NG_e1df51c9.jpg';
const ASSISTANT_AVATAR_FALLBACK = '/images/tro-ly-hai-trieu.jpg';

const QUICK_QUESTIONS = [
  '🎬 b) Làm video ngắn',
  '🛍️ c) Bán hàng online',
  '📚 d) Soạn bài giảng & slide',
  '👀 Xem thử',
  '🎁 Nhận quà 0đ',
  '📞 Gặp người thật',
  'Giá 135k có đắt không?',
  'Sợ không dùng được'
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
      text: 'Dạ em chào Anh/Chị! Em là Trợ lý HẢI TRIỀU AI. Em ở đây để tư vấn gợi ý đúng Skill theo ngành nghề của mình, hướng dẫn nhận tài nguyên hoặc kết nối trực tiếp với Anh Hải Triều ạ.',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: 'Anh/Chị bấm nhanh vào một trong các lựa chọn bên dưới để em gợi ý đúng việc nhé ạ:\n• b) Làm video ngắn (TikTok, Reels)\n• c) Bán hàng online, sản phẩm\n• d) Soạn bài giảng, slide\n• Nút 4: Xem thử\n• Nút 5: Nhận quà 0đ\n• Nút 6: Gặp người thật',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      actions: [
        {
          label: '🎬 Làm video ngắn',
          action: () => handleSend('Làm video ngắn')
        },
        {
          label: '🛍️ Bán hàng online',
          action: () => handleSend('Bán hàng online')
        },
        {
          label: '📚 Soạn bài giảng & slide',
          action: () => handleSend('Soạn bài giảng và slide')
        },
        {
          label: '👀 Xem thử',
          action: () => handleSend('Xem thử'),
          primary: true
        },
        {
          label: '🎁 Nhận quà 0đ',
          action: () => handleSend('Nhận quà 0đ')
        },
        {
          label: '📞 Gặp người thật',
          action: () => handleSend('Gặp người thật')
        }
      ]
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

    // =========================================================================
    // 1. XỬ LÝ TỪ CHỐI (Theo kịch bản chốt của Hải Triều AI)
    // =========================================================================
    if (q.includes('đắt') || q.includes('giá cao') || q.includes('mắc') || q.includes('bớt') || q.includes('giảm giá')) {
      return {
        text: 'Dạ 135k bằng 2 ly cà phê thôi ạ, mà dùng được vĩnh viễn, tiết kiệm hàng chục tiếng mỗi lần làm video và thiết kế ạ.',
        actions: [
          {
            label: 'Mở Khóa Skill (Chỉ 135k)',
            action: () => {
              const el = document.getElementById('shop');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          },
          {
            label: '👀 Xem thử 4 Skill 0đ',
            action: () => handleSend('Xem thử')
          }
        ]
      };
    }

    if (q.includes('để em xem') || q.includes('để xem') || q.includes('suy nghĩ') || q.includes('tính sau') || q.includes('chưa mua')) {
      return {
        text: 'Dạ anh/chị cứ xem thoải mái ạ. Em gửi trước 4 Skill 0đ để mình trải nghiệm cho chắc nhé?',
        actions: [
          {
            label: '🎁 Nhận 4 Skill 0đ Trải Nghiệm',
            action: () => {
              window.open(BANK_INFO.zaloGroupUrl, '_blank');
            },
            primary: true
          },
          {
            label: '📞 Gặp Anh Hải Triều',
            action: () => handleSend('Gặp người thật')
          }
        ]
      };
    }

    if (q.includes('sợ không dùng được') || q.includes('không dùng được') || q.includes('sợ khó') || q.includes('không biết dùng')) {
      return {
        text: 'Dạ bên em hỗ trợ 1-1 qua Zalo đến khi dùng được mới thôi ạ, không bỏ mặc đâu ạ.',
        actions: [
          {
            label: '💬 Nhắn Zalo Hỗ Trợ 1-1',
            action: () => {
              window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
            },
            primary: true
          },
          {
            label: '👀 Xem thử 4 Skill 0đ',
            action: () => handleSend('Xem thử')
          }
        ]
      };
    }

    // =========================================================================
    // 2. NÚT 4, 5, 6
    // =========================================================================
    // Nút 4 — Xem thử
    if (q.includes('xem thử') || q.includes('dùng thử') || q.includes('nút 4')) {
      return {
        text: 'Dạ có ạ, bên em có 4 Skill tặng 0đ để anh/chị dùng thử trước: Avatar, Poster, Tách nền, Xóa vật thể. Em gửi link nhận ngay nhé?',
        actions: [
          {
            label: '🎁 Bấm Nhận Link 4 Skill 0đ Ngay',
            action: () => {
              window.open(BANK_INFO.zaloGroupUrl, '_blank');
            },
            primary: true
          },
          {
            label: '📞 Gặp người thật tư vấn',
            action: () => handleSend('Gặp người thật')
          }
        ]
      };
    }

    // Nút 5 — Nhận quà 0đ
    if (q.includes('nhận quà 0đ') || q.includes('nhận quà 0 đồng') || q.includes('quà 0đ') || q.includes('nút 5')) {
      return {
        text: 'Dạ anh/chị để lại em xin Tên + Số Zalo, em gửi link tải 4 Skill 0đ liền ạ. Không mất phí gì đâu ạ.',
        actions: [
          {
            label: '👉 Vào Nhóm Zalo Nhận Quà 0đ Liền',
            action: () => {
              window.open(BANK_INFO.zaloGroupUrl, '_blank');
            },
            primary: true
          },
          {
            label: '💬 Nhắn Zalo 0913179424',
            action: () => {
              window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
            }
          }
        ]
      };
    }

    // Nút 6 — Gặp người thật
    if (q.includes('gặp người thật') || q.includes('người thật') || q.includes('chuyển máy') || q.includes('nút 6') || q.includes('hải triều')) {
      return {
        text: 'Dạ em chuyển máy cho anh Hải Triều ngay ạ. Anh/chị để lại số điện thoại, hoặc gọi trực tiếp 0913179424 giúp em nhé.',
        actions: [
          {
            label: '📞 Gọi Trực Tiếp 0913 179 424',
            action: () => {
              window.open(`tel:${BANK_INFO.supportPhone}`, '_self');
            },
            primary: true
          },
          {
            label: '💬 Nhắn Zalo Anh Hải Triều',
            action: () => {
              window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
            }
          }
        ]
      };
    }

    // =========================================================================
    // 3. GỢI Ý THEO NHU CẦU: b), c), d)
    // =========================================================================
    // b) Làm video ngắn
    if (q.includes('b)') || q.includes('làm video') || q.includes('tiktok') || q.includes('reels') || q.includes('video ngắn')) {
      return {
        text: 'Dạ nên lấy Skill kịch bản video + Skill tách nền + Skill phụ đề ạ.',
        actions: [
          {
            label: '⭐ Mở Skill Text Overlay Triệu View (99k)',
            action: () => onOpenCheckout?.('skill-text-overlay'),
            primary: true
          },
          {
            label: '🎁 Nhận Skill Tách Nền 0đ',
            action: () => onOpenCheckout?.('gift-tach-nen')
          },
          {
            label: 'Khám phá Sảnh II (Video bán hàng)',
            action: () => {
              document.getElementById('sanh-2')?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    // c) Bán hàng online, sản phẩm
    if (q.includes('c)') || q.includes('bán hàng') || q.includes('sản phẩm') || q.includes('kinh doanh online')) {
      return {
        text: 'Dạ hợp Skill Poster, Skill Avatar và Skill xóa vật thể ạ.',
        actions: [
          {
            label: '🎁 Nhận Skill Poster Sản Phẩm 0đ',
            action: () => onOpenCheckout?.('gift-poster-san-pham'),
            primary: true
          },
          {
            label: 'Xem Skill Avatar Chuyên Gia',
            action: () => onOpenCheckout?.('skill-avatar-chuyen-gia')
          },
          {
            label: 'Khám phá Sảnh I (Hình ảnh)',
            action: () => {
              document.getElementById('sanh-1')?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    // d) Soạn bài giảng, slide
    if (q.includes('d)') || q.includes('bài giảng') || q.includes('slide') || q.includes('giáo viên') || q.includes('đào tạo')) {
      return {
        text: 'Dạ hợp Skill soạn bài giảng và Skill tạo slide ạ.',
        actions: [
          {
            label: 'Xem Skill Slide Thuyết Trình AI',
            action: () => onOpenCheckout?.('skill-slide-thuyet-trinh-ai'),
            primary: true
          },
          {
            label: 'Khám phá Sảnh IV (Đào tạo & Workshop)',
            action: () => {
              document.getElementById('sanh-4')?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    // =========================================================================
    // 4. KỊCH BẢN CHỐT ĐƠN (3 Bước)
    // =========================================================================
    if (q.includes('chốt đơn') || q.includes('mua skill') || q.includes('thanh toán') || q.includes('chuyển khoản')) {
      return {
        text: 'Dạ quy trình nhận Skill cực kỳ nhanh chóng và an toàn ạ:\n\n• Bước 1: "Dạ Skill này đúng nhu cầu của mình luôn ạ. Giá 135k (riêng Text Overlay 199k), dùng vĩnh viễn, có hướng dẫn kèm theo."\n• Bước 2: "Em gửi anh/chị mã QR, mình chuyển 135.000đ với nội dung là SĐT của mình nhé."\n• Bước 3: "Dạ em nhận được rồi ạ, em gửi file Skill + hướng dẫn ngay bây giờ. Có gì chưa dùng được anh/chị nhắn em hỗ trợ 1-1 ạ."',
        actions: [
          {
            label: '⚡ Mở Quét Mã VietQR SHB Tự Động',
            action: () => {
              const el = document.getElementById('thanhtoan');
              el?.scrollIntoView({ behavior: 'smooth' });
            },
            primary: true
          },
          {
            label: '💬 Nhắn Zalo Nhận File 1-1 Ngay',
            action: () => {
              window.open(BANK_INFO.zaloGroupUrl, '_blank');
            }
          }
        ]
      };
    }

    // =========================================================================
    // 5. Kiểm tra tên Skill cụ thể
    // =========================================================================
    const matchedSkill = SKILL_PRODUCTS.find(p => {
      const pNameLower = p.name.toLowerCase();
      if (q.includes(pNameLower)) return true;
      if (p.id === 'skill-avatar-chuyen-gia' && (q.includes('avatar') || q.includes('ảnh đại diện'))) return true;
      if (p.id === 'skill-poster-san-pham' && (q.includes('poster') || q.includes('poster sản phẩm'))) return true;
      if (p.id === 'skill-text-overlay' && (q.includes('text overlay') || q.includes('chữ trên ảnh') || q.includes('chữ trên màn hình'))) return true;
      if (p.id === 'skill-anh-bia-kenh' && (q.includes('ảnh bìa') || q.includes('ảnh bìa kênh'))) return true;
      if (p.id === 'skill-bo-anh-dich-vu' && (q.includes('bộ ảnh dịch vụ') || q.includes('ảnh dịch vụ'))) return true;
      if (p.id === 'skill-cat-video-dai-thanh-short' && (q.includes('cắt video') || q.includes('short'))) return true;
      if (p.id === 'skill-slide-thuyet-trinh-ai' && (q.includes('slide') || q.includes('powerpoint'))) return true;
      return false;
    });

    if (matchedSkill) {
      const priceText = matchedSkill.price === 0 ? 'MIỄN PHÍ [0đ]' : `${new Intl.NumberFormat('vi-VN').format(matchedSkill.price)} VNĐ (Ưu đãi)`;
      const skillPriceLabel = matchedSkill.price === 0 ? '0đ' : matchedSkill.price === 199000 ? '199k' : '135k';
      return {
        text: `Dạ, về Skill "${matchedSkill.name}" (${matchedSkill.sanhTitle}):\n\n${matchedSkill.description}\n\n• Bước 1: "Dạ Skill này đúng nhu cầu của mình luôn ạ. Giá ${skillPriceLabel}, dùng vĩnh viễn, có hướng dẫn kèm theo."\n• Bước 2: "Em gửi anh/chị mã QR, mình chuyển ${new Intl.NumberFormat('vi-VN').format(matchedSkill.price)}đ với nội dung là SĐT của mình nhé."\n• Bước 3: "Dạ em nhận được rồi ạ, em gửi file Skill + hướng dẫn ngay bây giờ. Có gì chưa dùng được anh/chị nhắn em hỗ trợ 1-1 ạ."\n\n• Học phí: ${priceText}`,
        actions: [
          {
            label: matchedSkill.price === 0 ? 'Nhận Quà Tặng 0đ' : `Mở Khóa Skill Này (${skillPriceLabel})`,
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

    // 0. Check if user is asking about a specific Sảnh
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
        text: `Dạ, SẢNH II — VIDEO BÁN HÀNG gồm 9 Skill thực chiến:\n\n${skillsInSanh.map((s, i) => `${i + 1}. **${s.name}**:\n${s.description}`).join('\n\n')}\n\nĐặc biệt Skill Text Overlay Triệu View đang là VIP bán chạy #1 giá 199k, các Skill còn lại đồng giá 135k ạ!`,
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

    // Default polite response
    return {
      text: 'Dạ, Trợ lý đã ghi nhận câu hỏi của Anh/Chị. Anh/Chị có thể bấm chọn một trong các gợi ý bên dưới hoặc kết nối trực tiếp với Anh Hải Triều qua số Zalo 0913179424 để được hỗ trợ cụ thể theo đúng trường hợp của mình nhé ạ!',
      actions: [
        {
          label: 'Nhắn Zalo 0913179424',
          action: () => {
            window.open(`https://zalo.me/${BANK_INFO.supportPhone}`, '_blank');
          },
          primary: true
        },
        {
          label: '👀 Xem thử 4 Skill 0đ',
          action: () => handleSend('Xem thử')
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
    }, 500);
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
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-purple-300">
            <img 
              src={ASSISTANT_AVATAR} 
              alt="Trợ lý Hải Triều AI" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = ASSISTANT_AVATAR_FALLBACK;
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
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
                  <img
                    src={ASSISTANT_AVATAR}
                    alt="Trợ lý Hải Triều AI"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = ASSISTANT_AVATAR_FALLBACK;
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
                  <span className="text-[10px] bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black px-1.5 py-0.2 rounded shadow-2xs">
                    VIP
                  </span>
                </div>
                <p className="text-[11px] text-purple-200/90 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>Trực tuyến 24/7 • Tư vấn chọn Skill</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                className="w-8 h-8 rounded-full hover:bg-white/10 text-purple-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Thu nhỏ khung chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-white/10 text-purple-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Đóng chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-400/50 shrink-0 mt-1">
                      <img
                        src={ASSISTANT_AVATAR}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = ASSISTANT_AVATAR_FALLBACK;
                        }}
                      />
                    </div>
                  )}

                  <div className={`max-w-[84%] space-y-2`}>
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
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-sm border border-purple-400/50'
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
                <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-400/50 shrink-0">
                  <img
                    src={ASSISTANT_AVATAR}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = ASSISTANT_AVATAR_FALLBACK;
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

          {/* Quick Consultation Chips */}
          <div className="p-2.5 bg-[#0e0620] border-t border-purple-900/50">
            <div className="text-[11px] font-semibold text-purple-300/90 mb-1.5 px-1 flex items-center justify-between">
              <span>Gợi ý chọn nhanh theo nhu cầu:</span>
              <span className="text-[10px] text-purple-400/60">Chạm để hỏi</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-purple-950/90 hover:bg-purple-900 text-purple-200 hover:text-white border border-purple-800/70 text-[11px] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
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
