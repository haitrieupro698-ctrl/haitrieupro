import React, { useState, useEffect } from 'react';
import { 
  Copy, 
  Check, 
  QrCode, 
  ShieldCheck, 
  Smartphone, 
  MessageCircle, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ExternalLink,
  Mail,
  Send,
  RefreshCw
} from 'lucide-react';
import { BANK_INFO, SKILL_PRODUCTS } from '../data/skillsData';
import { createOrderInFirestore, updateOrderStatusInFirestore } from '../firebase';
import { 
  getAccessToken, 
  sendEmailViaGmail, 
  generateSkillDeliveryEmail 
} from '../services/gmailService';

interface CheckoutSectionProps {
  selectedProductId: string;
  onSelectProduct: (productId: string) => void;
  currentUser?: any;
  onOpenGmailConnect?: () => void;
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  selectedProductId,
  onSelectProduct,
  currentUser,
  onOpenGmailConnect,
}) => {
  const currentProduct =
    SKILL_PRODUCTS.find((p) => p.id === selectedProductId) || SKILL_PRODUCTS[0];

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [orderCode, setOrderCode] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [qrType, setQrType] = useState<'static' | 'dynamic'>('static');
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);

  // Gmail delivery state
  const [isConfirmingEmailSend, setIsConfirmingEmailSend] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ sent: boolean; message: string } | null>(null);

  // Generate unique order code on mount or when phone changes
  useEffect(() => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const cleanPhone = customerPhone.replace(/\D/g, '').slice(-4);
    const code = cleanPhone
      ? `HT ${cleanPhone} ${randomSuffix}`
      : `SKILL HT ${randomSuffix}`;
    setOrderCode(code);
  }, [customerPhone]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
  };

  // Dynamic VietQR generator URL with TRỊNH HAI TRIEU
  const dynamicQrUrl = `https://img.vietqr.io/image/${BANK_INFO.bankShortCode}-${BANK_INFO.accountNumber}-compact2.png?amount=${currentProduct.price}&addInfo=${encodeURIComponent(orderCode)}&accountName=${encodeURIComponent(BANK_INFO.accountOwner)}`;

  // Submit order to Firestore
  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const orderId = await createOrderInFirestore({
        orderCode,
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerEmail: customerEmail.trim() || undefined,
        productId: currentProduct.id,
        productName: currentProduct.name,
        amount: currentProduct.price,
        status: 'pending',
        createdAt: new Date().toISOString(),
        userId: currentUser?.uid || undefined,
      });

      setCreatedOrderId(orderId);
      setIsSuccessModalOpen(true);
    } catch (err) {
      console.error('Error creating order in Firestore:', err);
      // Still open modal so customer has Zalo link and transfer info
      setIsSuccessModalOpen(true);
    }
  };

  // Send confirmation email via Gmail with mandatory user confirmation
  const handleExecuteSendEmail = async () => {
    if (!customerEmail) return;

    const token = await getAccessToken();
    if (!token) {
      if (onOpenGmailConnect) {
        onOpenGmailConnect();
      }
      return;
    }

    setIsSendingEmail(true);
    try {
      const emailContent = generateSkillDeliveryEmail(
        customerName || 'Bạn',
        orderCode,
        currentProduct.name,
        currentProduct.price,
        BANK_INFO.zaloGroupUrl
      );

      await sendEmailViaGmail({
        to: customerEmail,
        subject: emailContent.subject,
        htmlBody: emailContent.html,
      });

      if (createdOrderId) {
        await updateOrderStatusInFirestore(createdOrderId, 'delivered', true);
      }

      setEmailStatus({
        sent: true,
        message: `Đã gửi tài liệu và hướng dẫn thành công tới email ${customerEmail}!`,
      });
      setIsConfirmingEmailSend(false);
    } catch (err: any) {
      console.error('Error sending email:', err);
      setEmailStatus({
        sent: false,
        message: err.message || 'Gửi email qua Gmail thất bại',
      });
      setIsConfirmingEmailSend(false);
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <section id="thanhtoan" className="py-16 sm:py-24 bg-[#0a0c0f] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-amber-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CỔNG THANH TOÁN VIETQR SHB TỰ ĐỘNG 24/7</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            THANH TOÁN CHUYỂN KHOẢN <span className="gold-gradient-text">DỄ DÀNG</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Quét mã VietQR trên bất kỳ ứng dụng ngân hàng nào để thanh toán nhanh chóng và tự động, hoặc sao chép thông tin tài khoản bên dưới.
          </p>
        </div>

        {/* Product Selector Bar */}
        <div className="mb-10 max-w-3xl mx-auto bg-[#121419] p-2 rounded-2xl border border-zinc-800 flex flex-wrap gap-2">
          {SKILL_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => onSelectProduct(prod.id)}
              className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                selectedProductId === prod.id
                  ? 'gold-gradient-btn text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <div className="truncate">{prod.name}</div>
              <div className="text-[10px] opacity-80">{formatVND(prod.price)}</div>
            </button>
          ))}
        </div>

        {/* Main Payment Container */}
        <div className="bg-[#121419] border-2 border-amber-500/35 rounded-3xl p-6 sm:p-10 shadow-2xl gold-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: VietQR Code Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="w-full max-w-sm bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-4 border-amber-500/30 text-center relative">
                
                {/* QR Type Switcher */}
                <div className="flex items-center justify-center gap-1 mb-3 bg-zinc-100 p-1 rounded-xl">
                  <button
                    onClick={() => setQrType('static')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'static'
                        ? 'bg-amber-500 text-black shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Mã VietQR Chuẩn
                  </button>
                  <button
                    onClick={() => setQrType('dynamic')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'dynamic'
                        ? 'bg-amber-500 text-black shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Mã Tự Điền Nội Dung
                  </button>
                </div>

                {/* QR Image */}
                <div className="relative rounded-xl overflow-hidden bg-white p-2">
                  <img
                    src={qrType === 'static' ? BANK_INFO.qrStaticUrl : dynamicQrUrl}
                    alt="Mã VietQR SHB TRỊNH HẢI TRIỀU"
                    className="w-full h-auto object-contain mx-auto max-h-[300px]"
                  />
                </div>

                {/* Bank badge under QR */}
                <div className="mt-3 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-700">
                  <div className="text-left font-bold text-black flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Napas247 | SHB</span>
                  </div>
                  <div className="text-right font-black text-amber-700 text-sm">
                    {formatVND(currentProduct.price)}
                  </div>
                </div>

                {/* QR quick tip */}
                <p className="text-[11px] text-zinc-500 mt-2">
                  Dùng app <span className="font-semibold text-zinc-800">Vietcombank, MB, Techcombank, VPBank, SHB...</span> quét là chuyển được ngay!
                </p>
              </div>

              {/* Download QR Button */}
              <a
                href={BANK_INFO.qrStaticUrl}
                download="VietQR_Hai_Trieu_AI.png"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải ảnh mã QR về máy</span>
              </a>

              {/* Zalo group callout below QR */}
              <div className="mt-5 w-full max-w-sm p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center">
                <p className="text-xs text-blue-200">
                  Sau khi chuyển khoản, bấm nút <strong className="text-white">"Vào Nhóm Zalo"</strong> để nhận file Skill và được kèm 1-1 ngay nhé!
                </p>
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Mở Nhóm Zalo: https://zalo.me/g/bd8u0pauixb47416hzxo</span>
                </a>
              </div>

            </div>

            {/* Right Column: Bank Details with 1-Click Copy & Confirmation Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product chosen summary */}
              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                    ĐANG THANH TOÁN GÓI:
                  </span>
                  <span className="font-serif-luxury font-bold text-lg sm:text-xl text-white">
                    {currentProduct.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif-luxury font-black text-xl sm:text-2xl text-amber-400">
                    {formatVND(currentProduct.price)}
                  </span>
                </div>
              </div>

              {/* Bank Account Info Cards - 1-CLICK COPY BUTTONS */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG CHÍNH CHỦ
                </span>

                {/* 1. Bank Name */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400">Ngân hàng thụ hưởng:</div>
                    <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <span className="text-amber-400 font-black">{BANK_INFO.bankName}</span>
                      <span className="text-xs text-zinc-400">({BANK_INFO.bankFullName})</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.bankName, 'bankName')}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedField === 'bankName' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. Account Number */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-amber-300 font-semibold">Số tài khoản:</div>
                    <div className="text-lg sm:text-2xl font-mono font-black text-amber-400 tracking-wider">
                      {BANK_INFO.accountNumber}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.accountNumber, 'accountNumber')}
                    className="gold-gradient-btn px-4 py-2 rounded-xl text-xs font-black text-black flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    {copiedField === 'accountNumber' ? (
                      <>
                        <Check className="w-4 h-4 text-black stroke-[3]" />
                        <span>ĐÃ SAO CHÉP</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-black stroke-[2.5]" />
                        <span>SAO CHÉP STK</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3. Account Owner - TRỊNH HAI TRIEU */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400">Chủ tài khoản:</div>
                    <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                      {BANK_INFO.accountOwner}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.accountOwner, 'accountOwner')}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedField === 'accountOwner' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 4. Amount */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400">Số tiền:</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                      {formatVND(currentProduct.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentProduct.price.toString(), 'amount')}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedField === 'amount' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 5. Transfer Memo */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-amber-400 font-semibold">Nội dung chuyển khoản (Memo):</div>
                    <div className="text-sm sm:text-base font-mono font-bold text-white">
                      {orderCode}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(orderCode, 'orderCode')}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-xs text-amber-300 border border-amber-500/40 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copiedField === 'orderCode' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép nội dung</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Customer registration / confirmation form */}
              <form onSubmit={handleConfirmPayment} className="pt-2 space-y-3.5">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                  ĐIỀN THÔNG TIN ĐỂ KÍCH HOẠT VÀ VÀO NHÓM ZALO:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-black/70 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">
                      Số điện thoại / Zalo:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0913179424"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-black/70 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 mb-1">
                    Email nhận tài nguyên & file Skill (tùy chọn):
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-black/70 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full gold-gradient-btn text-black font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span>TÔI ĐÃ CHUYỂN KHOẢN • VÀO NHÓM ZALO NHẬN SKILL</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>

                <p className="text-[11px] text-center text-zinc-400">
                  Sau khi bấm, đơn hàng sẽ được lưu trên Firebase Firestore và bạn sẽ được chuyển hướng đến nhóm Zalo của Hải Triều AI.
                </p>
              </form>

            </div>

          </div>
        </div>

      </div>

      {/* Payment Success & Zalo Redirect Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#14161d] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-center space-y-5">
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury font-black text-2xl text-white">
                XÁC NHẬN THÀNH CÔNG!
              </h3>
              <p className="text-zinc-300 text-sm">
                Cảm ơn bạn <strong className="text-amber-400">{customerName || 'bạn'}</strong> đã mua Skill{' '}
                <strong className="text-white">{currentProduct.name}</strong>! Đơn hàng đã được lưu trên hệ thống.
              </p>
            </div>

            <div className="bg-black/60 p-4 rounded-xl border border-zinc-800 text-left text-xs space-y-2 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-400">Mã đơn hàng:</span>
                <span className="font-mono font-bold text-amber-400">{orderCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Số tiền:</span>
                <span className="font-bold text-emerald-400">{formatVND(currentProduct.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Chủ tài khoản:</span>
                <span className="text-amber-300 font-bold">{BANK_INFO.accountOwner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Ngân hàng:</span>
                <span className="text-white">SHB (STK: 0913179424)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Số điện thoại:</span>
                <span className="text-white">{customerPhone || 'Chưa cung cấp'}</span>
              </div>
              {customerEmail && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Email:</span>
                  <span className="text-blue-300">{customerEmail}</span>
                </div>
              )}
            </div>

            {/* Email send status message */}
            {emailStatus && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                emailStatus.sent ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}>
                {emailStatus.sent ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                <span>{emailStatus.message}</span>
              </div>
            )}

            {/* Gmail delivery button if customer provided email */}
            {customerEmail && !emailStatus?.sent && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span>Nhận tài liệu qua Gmail</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Gửi thư xác nhận và file Prompt tới {customerEmail}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsConfirmingEmailSend(true)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi Mail</span>
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <a
                href={BANK_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>VÀO NHÓM ZALO NHẬN SKILL NGAY</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-2.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Đóng cửa sổ này
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MANDATORY USER CONFIRMATION MODAL BEFORE SENDING EMAIL VIA GMAIL */}
      {isConfirmingEmailSend && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#151821] border-2 border-blue-500/50 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">
                  Xác Nhận Gửi Email Qua Gmail
                </h4>
                <p className="text-xs text-zinc-400">
                  Hệ thống sẽ gửi email xác nhận và tài liệu Skill
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-xs space-y-2 text-zinc-300">
              <div>
                <span className="text-zinc-500">Người nhận:</span>{' '}
                <strong className="text-white">{customerName || 'Khách hàng'}</strong> ({customerEmail})
              </div>
              <div>
                <span className="text-zinc-500">Mã đơn hàng:</span>{' '}
                <strong className="text-amber-400 font-mono">{orderCode}</strong>
              </div>
              <div>
                <span className="text-zinc-500">Gói Skill:</span>{' '}
                <span className="text-white">{currentProduct.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmingEmailSend(false)}
                disabled={isSendingEmail}
                className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                onClick={handleExecuteSendEmail}
                disabled={isSendingEmail}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                {isSendingEmail ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Xác Nhận Gửi</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
