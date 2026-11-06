import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VideoSection } from './components/VideoSection';
import { ShopSection } from './components/ShopSection';
import { PromptSimulator } from './components/PromptSimulator';
import { CheckoutSection } from './components/CheckoutSection';
import { ZaloCommunitySection } from './components/ZaloCommunitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { AssistantChatbot } from './components/AssistantChatbot';
import { Footer } from './components/Footer';
import { FloatingZaloButton } from './components/FloatingZaloButton';
import { BackgroundMusicPlayer } from './components/BackgroundMusicPlayer';
import { OrdersManagerModal } from './components/OrdersManagerModal';
import { GmailManagerModal } from './components/GmailManagerModal';
import { PromoGiftSection } from './components/PromoGiftSection';
import { Sparkles, MessageCircle, ArrowRight, Mail, ShoppingBag, ChevronDown, MessageSquareText, Gift } from 'lucide-react';
import { BANK_INFO } from './data/skillsData';
import { initAuth } from './services/gmailService';
import { auth } from './firebase';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>('skill-text-overlay');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [isGmailModalOpen, setIsGmailModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    // Listen to scroll position: hide scroll-down button once user starts browsing
    const handleScroll = () => {
      setShowScrollDown(window.scrollY < 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen to Google/Firebase auth changes
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
      },
      () => {
        setCurrentUser(null);
      }
    );
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleSelectProduct = (productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    const checkoutEl = document.getElementById('thanhtoan');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDemo = () => {
    const videoEl = document.getElementById('video');
    if (videoEl) {
      videoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-800 selection:bg-purple-600 selection:text-white">
      {/* Top Notification Announcement Bar matching user preference: purple instead of black */}
      <div className="bg-gradient-to-r from-[#2e1065] via-[#4c1d95] to-[#2e1065] text-amber-300 px-3 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold text-center flex items-center justify-center flex-wrap gap-2 sm:gap-4 shadow-md border-b border-purple-500/40">
        <div className="flex items-center gap-1.5 shrink-0 text-amber-400 font-bold">
          <span>🌐</span>
          <span>haitrieu.pro.vn</span>
        </div>
        <span className="hidden sm:inline text-purple-300/60">•</span>
        <div className="text-white">
          Chính sách kích hoạt nhanh qua Zalo: <a href="https://zalo.me/0913179424" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-black hover:underline font-mono">0913179424</a>
        </div>
        <span className="hidden sm:inline text-purple-300/60">•</span>
        <div className="hidden md:inline text-purple-200 italic">
          Học để phát triển, chia sẻ để cùng nhau tiến xa hơn
        </div>
        <a
          href="https://zalo.me/g/bd8u0pauixb47416hzxo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-0.5 rounded-full text-xs font-black transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <Gift className="w-3 h-3 fill-slate-950" />
          <span>4 Quà Tặng 0đ</span>
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar 
        onOpenCheckout={handleSelectProduct}
        currentUser={currentUser}
        onOpenOrders={() => setIsOrdersModalOpen(true)}
        onOpenGmail={() => setIsGmailModalOpen(true)}
      />

      {/* Hero Section */}
      <main className="pb-20 sm:pb-28">
        <Hero
          onSelectProduct={handleSelectProduct}
          onExploreDemo={handleExploreDemo}
        />

        {/* Exclusive Promotional Gift: 4 First Skills for Zalo Members */}
        <PromoGiftSection />

        {/* About Hải Triều AI */}
        <AboutSection />

        {/* Video Shorts Showcase */}
        <VideoSection onBuyClick={() => handleSelectProduct('skill-text-overlay')} />

        {/* Prompt Simulator Test Drive */}
        <PromptSimulator onBuyClick={() => handleSelectProduct('skill-text-overlay')} />

        {/* Shop Section (#shop as in san-skill.vercel.app/index.html#shop) */}
        <ShopSection onSelectProduct={handleSelectProduct} />

        {/* Câu hỏi thường gặp (FAQ) - Đặt sau phần Sàn Skill và trước phần cộng đồng/liên hệ */}
        <FAQSection onOpenChatbot={() => setIsChatbotOpen(true)} />

        {/* Dedicated Checkout Section (#thanhtoan with user's SHB STK 0913179424) */}
        <CheckoutSection
          selectedProductId={selectedProductId}
          onSelectProduct={setSelectedProductId}
          currentUser={currentUser}
          onOpenGmailConnect={() => setIsGmailModalOpen(true)}
        />

        {/* Zalo Community Section */}
        <ZaloCommunitySection />

        {/* Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals for Firebase Orders & Gmail Integration */}
      <OrdersManagerModal
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        currentUserEmail={currentUser?.email}
        onOpenGmailLogin={() => {
          setIsOrdersModalOpen(false);
          setIsGmailModalOpen(true);
        }}
      />

      <GmailManagerModal
        isOpen={isGmailModalOpen}
        onClose={() => setIsGmailModalOpen(false)}
        user={currentUser}
        onAuthChange={() => {
          setCurrentUser(auth.currentUser);
        }}
      />

      {/* Floating Trợ lý HẢI TRIỀU AI Button - Prominently positioned at Bottom Right */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          title="Nhắn tin với Trợ lý HẢI TRIỀU AI"
          aria-label="Mở Trợ lý HẢI TRIỀU AI"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white py-2.5 px-4 rounded-full border-2 border-white/80 shadow-2xl shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/80 shrink-0 shadow-md">
            <img
              src="/images/tro-ly-hai-trieu.jpg"
              alt="Trợ lý Hải Triều AI"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_70c6648a.png';
              }}
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Trợ lý HẢI TRIỀU AI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[11px] text-purple-200 font-medium">Hỏi đáp 24/7 • Bấm nhắn</div>
          </div>
          <span className="sm:hidden text-xs font-bold text-white">Trợ lý AI</span>
        </button>
      )}

      {/* Interactive Chatbot */}
      <AssistantChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpenCheckout={handleSelectProduct}
      />

      {/* Floating Scroll Down Button (only visible near top of page) */}
      {showScrollDown && (
        <button
          onClick={handleScrollDown}
          title="Cuộn xuống khám phá thêm"
          aria-label="Cuộn xuống"
          className="fixed bottom-24 right-6 z-30 w-10 h-10 rounded-full bg-white/95 text-purple-700 hover:text-purple-900 border border-purple-200 shadow-xl flex items-center justify-center cursor-pointer hover:bg-purple-50 transition-all hover:scale-105 active:scale-95 group backdrop-blur-md animate-in fade-in"
        >
          <div className="flex flex-col items-center -space-y-2">
            <ChevronDown className="w-4 h-4 text-purple-700 group-hover:text-purple-900 group-hover:translate-y-0.5 transition-all" />
            <ChevronDown className="w-4 h-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-y-0.5 transition-all" />
          </div>
        </button>
      )}

      {/* Background Music Player (Bottom Left with Music Note Icon, 30% Vol, Autoplay & Video clash protection) */}
      <BackgroundMusicPlayer defaultAudioSrc="/audio/background-music.mp3" />
    </div>
  );
}
