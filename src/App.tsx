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
import { Sparkles, MessageCircle, ArrowRight, Mail, ShoppingBag, ChevronDown, MessageSquareText } from 'lucide-react';
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
      {/* Top Notification Announcement Bar - Exactly as in image_5a00c292.png */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-center flex items-center justify-center flex-wrap gap-2 shadow-lg border-b border-purple-800/40">
        <div className="flex items-center gap-1.5 shrink-0">
          <Sparkles className="w-4 h-4 fill-purple-300 text-purple-300 animate-pulse" />
          <span>
            ƯU ĐÃI ĐỘC QUYỀN: BỘ SKILL TEXT OVERLAY GIẢM CÒN 99.000 VNĐ (GIÁ GỐC 299K) • QUÉT VIETQR SHB TỰ ĐỘNG
          </span>
        </div>
        <a
          href="https://zalo.me/g/bd8u0pauixb47416hzxo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 active:bg-white/35 text-white px-3 py-1 rounded-full text-xs font-bold transition-all border border-white/30 shrink-0 cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-purple-200" />
          <span>Vào Zalo ngay</span>
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
