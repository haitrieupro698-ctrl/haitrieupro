export interface SkillProduct {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: number;
  originalPrice: number;
  highlight: boolean;
  features: string[];
  bonuses?: string[];
  description: string;
  iconName: string;
  imageUrl?: string;
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
