import React, { useState, useEffect } from 'react';
import { 
  Copy, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  MessageCircle, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
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
    <section id="thanhtoan" className="py-16 sm:py-24 bg-[#faf7ff] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-200/40 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-indigo-200/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-purple-700" />
            <span>CỔNG THANH TOÁN VIETQR SHB TỰ ĐỘNG 24/7</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            THANH TOÁN CHUYỂN KHOẢN <span className="purple-gradient-text">DỄ DÀNG</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quét mã VietQR trên bất kỳ ứng dụng ngân hàng nào để thanh toán nhanh chóng và tự động, hoặc sao chép thông tin tài khoản bên dưới.
          </p>
        </div>

        {/* Product Selector Bar */}
        <div className="mb-10 max-w-3xl mx-auto bg-purple-100/60 p-2 rounded-2xl border border-purple-200 flex flex-wrap gap-2">
          {SKILL_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => onSelectProduct(prod.id)}
              className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                selectedProductId === prod.id
                  ? 'purple-gradient-btn text-white shadow-md shadow-purple-600/30'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-white'
              }`}
            >
              <div className="truncate">{prod.name}</div>
              <div className="text-[10px] opacity-90">{formatVND(prod.price)}</div>
            </button>
          ))}
        </div>

        {/* Main Payment Container - Crisp White & Purple Border */}
        <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: VietQR Code Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="w-full max-w-sm bg-white rounded-2xl p-4 sm:p-5 shadow-lg border-3 border-purple-300 text-center relative">
                
                {/* QR Type Switcher */}
                <div className="flex items-center justify-center gap-1 mb-3 bg-purple-50 p-1 rounded-xl">
                  <button
                    onClick={() => setQrType('static')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'static'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Mã VietQR Chuẩn
                  </button>
                  <button
                    onClick={() => setQrType('dynamic')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'dynamic'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Mã Tự Điền Nội Dung
                  </button>
                </div>

                {/* QR Image */}
                <div className="relative rounded-xl overflow-hidden bg-white p-2 border border-purple-100">
                  <img
                    src={qrType === 'static' ? BANK_INFO.qrStaticUrl : dynamicQrUrl}
                    alt="Mã VietQR SHB TRỊNH HẢI TRIỀU"
                    className="w-full h-auto object-contain mx-auto max-h-[300px]"
                  />
                </div>

                {/* Bank badge under QR */}
                <div className="mt-3 pt-3 border-t border-purple-100 flex items-center justify-between text-xs text-zinc-700">
                  <div className="text-left font-bold text-black flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Napas247 | SHB</span>
                  </div>
                  <div className="text-right font-black text-purple-700 text-sm">
                    {formatVND(currentProduct.price)}
                  </div>
                </div>

                {/* QR quick tip */}
                <p className="text-[11px] text-zinc-500 mt-2">
                  Dùng app <span className="font-semibold text-purple-900">Vietcombank, MB, Techcombank, VPBank, SHB...</span> quét là chuyển được ngay!
                </p>
              </div>

              {/* Download QR Button */}
              <a
                href={BANK_INFO.qrStaticUrl}
                download="VietQR_Hai_Trieu_AI.png"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-purple-700 hover:text-purple-900 font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải ảnh mã QR về máy</span>
              </a>

              {/* Zalo group callout below QR */}
              <div className="mt-5 w-full max-w-sm p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <p className="text-xs text-blue-900 font-medium">
                  Sau khi chuyển khoản, bấm nút <strong className="text-blue-950 font-bold">"Vào Nhóm Zalo"</strong> để nhận file Skill và được kèm 1-1 ngay nhé!
                </p>
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Mở Nhóm Zalo: https://zalo.me/g/bd8u0pauixb47416hzxo</span>
                </a>
              </div>

            </div>

            {/* Right Column: Bank Details with 1-Click Copy & Confirmation Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product chosen summary */}
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-purple-700 font-extrabold block">
                    ĐANG THANH TOÁN GÓI:
                  </span>
                  <span className="font-serif-luxury font-bold text-lg sm:text-xl text-slate-900">
                    {currentProduct.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif-luxury font-black text-xl sm:text-2xl text-purple-700">
                    {formatVND(currentProduct.price)}
                  </span>
                </div>
              </div>

              {/* Bank Account Info Cards - 1-CLICK COPY BUTTONS */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-purple-900 font-extrabold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-purple-600" />
                  THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG CHÍNH CHỦ
                </span>

                {/* 1. Bank Name */}
                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-500">Ngân hàng thụ hưởng:</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-purple-700 font-black">{BANK_INFO.bankName}</span>
                      <span className="text-xs text-zinc-500">({BANK_INFO.bankFullName})</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.bankName, 'bankName')}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-purple-100 text-xs text-purple-900 font-bold border border-purple-200 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  >
                    {copiedField === 'bankName' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép</span>
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
                <div className="p-3.5 rounded-xl bg-purple-100/80 border-2 border-purple-400 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-purple-900 font-bold">Số tài khoản:</div>
                    <div className="text-lg sm:text-2xl font-mono font-black text-purple-950 tracking-wider">
                      {BANK_INFO.accountNumber}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.accountNumber, 'accountNumber')}
                    className="purple-gradient-btn px-4 py-2 rounded-xl text-xs font-black text-white flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    {copiedField === 'accountNumber' ? (
                      <>
                        <Check className="w-4 h-4 text-white stroke-[3]" />
                        <span>ĐÃ SAO CHÉP</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-white stroke-[2.5]" />
                        <span>SAO CHÉP STK</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3. Account Owner - TRỊNH HAI TRIEU */}
                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-500">Chủ tài khoản:</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                      {BANK_INFO.accountOwner}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_INFO.accountOwner, 'accountOwner')}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-purple-100 text-xs text-purple-900 font-bold border border-purple-200 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  >
                    {copiedField === 'accountOwner' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép</span>
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
                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-500">Số tiền:</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-emerald-700">
                      {formatVND(currentProduct.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentProduct.price.toString(), 'amount')}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-purple-100 text-xs text-purple-900 font-bold border border-purple-200 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  >
                    {copiedField === 'amount' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép</span>
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
                <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-purple-900 font-bold">Nội dung chuyển khoản (Memo):</div>
                    <div className="text-sm sm:text-base font-mono font-bold text-slate-900">
                      {orderCode}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(orderCode, 'orderCode')}
                    className="px-3 py-1.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-xs text-purple-900 font-bold border border-purple-300 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  >
                    {copiedField === 'orderCode' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép</span>
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
                <span className="text-xs uppercase tracking-wider text-purple-900 font-extrabold block">
                  ĐIỀN THÔNG TIN ĐỂ KÍCH HOẠT VÀ VÀO NHÓM ZALO:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại / Zalo:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0913179424"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email nhận tài nguyên & file Skill (tùy chọn):
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-white border border-purple-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                  />
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full purple-gradient-btn text-white font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span>TÔI ĐÃ CHUYỂN KHOẢN • VÀO NHÓM ZALO NHẬN SKILL</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>

                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Sau khi bấm, đơn hàng sẽ được lưu trên Firebase Firestore và bạn sẽ được chuyển hướng đến nhóm Zalo của Hải Triều AI.
                </p>
              </form>

            </div>

          </div>
        </div>

      </div>

      {/* Payment Success & Zalo Redirect Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border-2 border-purple-300 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-center space-y-5">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury font-black text-2xl text-slate-900">
                XÁC NHẬN THÀNH CÔNG!
              </h3>
              <p className="text-slate-600 text-sm">
                Cảm ơn bạn <strong className="text-purple-700">{customerName || 'bạn'}</strong> đã mua Skill{' '}
                <strong className="text-slate-900">{currentProduct.name}</strong>! Đơn hàng đã được lưu trên hệ thống.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 text-left text-xs space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-zinc-500">Mã đơn hàng:</span>
                <span className="font-mono font-bold text-purple-700">{orderCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Số tiền:</span>
                <span className="font-bold text-emerald-700">{formatVND(currentProduct.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Chủ tài khoản:</span>
                <span className="text-slate-900 font-bold">{BANK_INFO.accountOwner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Ngân hàng:</span>
                <span className="text-slate-900">SHB (STK: 0913179424)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Số điện thoại:</span>
                <span className="text-slate-900">{customerPhone || 'Chưa cung cấp'}</span>
              </div>
              {customerEmail && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Email:</span>
                  <span className="text-blue-700 font-medium">{customerEmail}</span>
                </div>
              )}
            </div>

            {/* Email send status message */}
            {emailStatus && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                emailStatus.sent ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-rose-50 text-rose-800 border border-rose-300'
              }`}>
                {emailStatus.sent ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                <span>{emailStatus.message}</span>
              </div>
            )}

            {/* Gmail delivery button if customer provided email */}
            {customerEmail && !emailStatus?.sent && (
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-purple-600" />
                      <span>Nhận tài liệu qua Gmail</span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Gửi thư xác nhận và file Prompt tới {customerEmail}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsConfirmingEmailSend(true)}
                    className="px-3 py-1.5 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
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
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>VÀO NHÓM ZALO NHẬN SKILL NGAY</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Đóng cửa sổ này
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MANDATORY USER CONFIRMATION MODAL BEFORE SENDING EMAIL VIA GMAIL */}
      {isConfirmingEmailSend && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-2 border-purple-300 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Xác Nhận Gửi Email Qua Gmail
                </h4>
                <p className="text-xs text-slate-600">
                  Hệ thống sẽ gửi email xác nhận và tài liệu Skill
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-2 text-slate-700">
              <div>
                <span className="text-zinc-500">Người nhận:</span>{' '}
                <strong className="text-slate-900">{customerName || 'Khách hàng'}</strong> ({customerEmail})
              </div>
              <div>
                <span className="text-zinc-500">Mã đơn hàng:</span>{' '}
                <strong className="text-purple-700 font-mono">{orderCode}</strong>
              </div>
              <div>
                <span className="text-zinc-500">Gói Skill:</span>{' '}
                <span className="text-slate-900 font-semibold">{currentProduct.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmingEmailSend(false)}
                disabled={isSendingEmail}
                className="px-4 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                onClick={handleExecuteSendEmail}
                disabled={isSendingEmail}
                className="px-5 py-2.5 rounded-xl purple-gradient-btn text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
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
