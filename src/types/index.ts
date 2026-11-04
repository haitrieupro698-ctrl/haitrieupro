export type SkillCategory = 
  | 'all' 
  | 'gift' 
  | 'branding' 
  | 'video' 
  | 'character' 
  | 'sales' 
  | 'automation' 
  | 'combo' 
  | string;

export interface SkillProduct {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  cardBadge?: string;
  bannerTitle?: string;
  branch?: string;
  isGift?: boolean;
  category: SkillCategory;
  categoryName: string;
  price: number;
  originalPrice: number;
  highlight: boolean;
  aiTools: string[];
  rating: number;
  reviewsCount: number;
  downloadsCount: number;
  author: string;
  description: string;
  features: string[];
  bonuses?: string[];
  deliverables?: string[];
  iconName: string;
  imageUrl?: string;
  skillMdSnippet: string;
  samplePrompt: string;
  sampleOutput: string;
  // Cấu trúc "Xem cách dùng" (Skill giúp gì, chuẩn bị gì, 3 bước thực hiện, kết quả nhận được)
  skillHelps?: string;
  preparation?: string;
  steps?: string[];
  result?: string;
  sanhId?: string;
  sanhTitle?: string;
}

export interface BankAccountInfo {
  bankName: string;
  bankFullName: string;
  bankShortCode: string;
  accountNumber: string;
  accountOwner: string;
  defaultAmount: number;
  qrStaticUrl: string;
  zaloGroupUrl: string;
  supportPhone: string;
  supportEmail: string;
}

export interface OrderFormState {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  note: string;
  selectedProductId: string;
  orderCode: string;
}
