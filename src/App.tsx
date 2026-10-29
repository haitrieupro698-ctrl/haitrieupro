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
import { Footer } from './components/Footer';
import { FloatingZaloButton } from './components/FloatingZaloButton';
import { OrdersManagerModal } from './components/OrdersManagerModal';
import { GmailManagerModal } from './components/GmailManagerModal';
import { Sparkles, MessageCircle, ArrowRight, Mail, ShoppingBag } from 'lucide-react';
import { BANK_INFO } from './data/skillsData';
import { initAuth } from './services/gmailService';
import { auth } from './firebase';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>('skill-text-overlay');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [isGmailModalOpen, setIsGmailModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#0b0618] text-[#f8fafc] selection:bg-purple-600 selection:text-white">
      {/* Top Notification Announcement Bar - Purple & White Theme */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-900 text-white px-4 py-2 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md border-b border-purple-500/30">
        <Sparkles className="w-4 h-4 fill-purple-300 text-purple-300 animate-pulse" />
        <span>
          ƯU ĐÃI ĐỘC QUYỀN: BỘ SKILL TEXT OVERLAY GIẢM CÒN 99.000 VNĐ (GIÁ GỐC 299K) • QUÉT VIETQR SHB TỰ ĐỘNG
        </span>
        <a
          href={BANK_INFO.zaloGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-3 py-0.5 rounded-full text-xs transition-colors ml-2 border border-white/30"
        >
          <MessageCircle className="w-3 h-3 text-purple-200" />
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
      <main>
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

        {/* FAQs */}
        <FAQSection />
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

      {/* Persistent Floating Zalo Button */}
      <FloatingZaloButton />
    </div>
  );
}
