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

  // Send confirmation email via Gmail with user confirmation
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
    <section id="thanhtoan" className="py-16 sm:py-24 bg-[#f8f9fe] text-slate-900 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-200/40 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-200/40 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>CỔNG THANH TOÁN VIETQR SHB TỰ ĐỘNG 24/7</span>
          </div>
          <h2 className="font-serif-luxury font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            THANH TOÁN & NHẬN SKILL <span className="purple-gradient-text">DỄ DÀNG</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quét mã VietQR trên bất kỳ ứng dụng ngân hàng nào để thanh toán tự động, hoặc điền thông tin để nhận quà tặng tri ấn 0đ ngay lập tức.
          </p>
        </div>

        {/* Product Selector Bar */}
        <div className="mb-10 max-w-4xl mx-auto bg-white p-2 rounded-2xl border border-purple-200/80 shadow-md flex flex-wrap gap-2">
          {SKILL_PRODUCTS.slice(0, 10).map((prod) => (
            <button
              key={prod.id}
              onClick={() => onSelectProduct(prod.id)}
              className={`flex-1 min-w-[150px] py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                selectedProductId === prod.id
                  ? 'coral-gradient-btn text-white shadow-md'
                  : 'text-slate-700 hover:text-purple-900 hover:bg-purple-50'
              }`}
            >
              <div className="truncate font-semibold">{prod.name}</div>
              <div className="text-[11px] font-bold mt-0.5">
                {prod.price === 0 ? '🎁 Quà 0đ' : formatVND(prod.price)}
              </div>
            </button>
          ))}
        </div>


        {/* Main Payment Container - Clean Light Theme */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: VietQR Code Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="w-full max-w-sm bg-slate-50 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-200 text-center relative">
                
                {/* QR Type Switcher */}
                <div className="flex items-center justify-center gap-1 mb-3 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
                  <button
                    onClick={() => setQrType('static')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'static'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Mã VietQR Chuẩn
                  </button>
                  <button
                    onClick={() => setQrType('dynamic')}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      qrType === 'dynamic'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Mã Tự Điền Nội Dung
                  </button>
                </div>

                {/* QR Image Box - white canvas for clean QR contrast scanning */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xs">
                  <img
                    src={qrType === 'static' ? BANK_INFO.qrStaticUrl : dynamicQrUrl}
                    alt="Mã VietQR SHB TRỊNH HAI TRIEU"
                    className="w-full h-auto object-contain mx-auto max-h-[300px]"
                  />
                </div>

                {/* Bank badge under QR */}
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div className="text-left font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Napas247 | SHB</span>
                  </div>
                  <div className="text-right font-black text-rose-600 text-sm">
                    {currentProduct.price === 0 ? '0 VNĐ (Miễn Phí)' : formatVND(currentProduct.price)}
                  </div>
                </div>

                {/* QR quick tip */}
                <p className="text-[11px] text-slate-500 mt-2">
                  Dùng app <span className="font-bold text-slate-800">Vietcombank, MB, Techcombank, VPBank, SHB...</span> quét là chuyển được ngay!
                </p>
              </div>

              {/* Download QR Button */}
              <a
                href={BANK_INFO.qrStaticUrl}
                download="VietQR_Hai_Trieu_AI.png"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải ảnh mã QR về máy</span>
              </a>

              {/* Zalo group callout below QR */}
              <div className="mt-5 w-full max-w-sm p-4 rounded-2xl bg-blue-950/60 border border-blue-800/60 text-center">
                <p className="text-xs text-blue-200 font-medium">
                  Sau khi chuyển khoản, bấm nút <strong className="text-blue-300">"Vào Nhóm Zalo"</strong> để nhận file Skill và được kèm 1-1 ngay nhé!
                </p>
                <a
                  href={BANK_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-md shadow-blue-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Mở Nhóm Zalo: zalo.me/g/bd8u0pauixb47416hzxo</span>
                </a>
              </div>

            </div>

            {/* Right Column: Bank Details with 1-Click Copy & Confirmation Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product chosen summary */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-orange-600 font-bold block">
                    {currentProduct.price === 0 ? 'ĐANG NHẬN QUÀ TẶNG TRI ÂN:' : 'ĐANG THANH TOÁN GÓI:'}
                  </span>
                  <span className="font-serif-luxury font-bold text-lg sm:text-xl text-slate-900">
                    {currentProduct.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif-luxury font-black text-xl sm:text-2xl text-rose-600">
                    {currentProduct.price === 0 ? '0 VNĐ' : formatVND(currentProduct.price)}
                  </span>
                </div>
              </div>

              {/* Free gift banner notice or Bank Info */}
              {currentProduct.price === 0 ? (
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-800 flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h4 className="font-bold text-sm text-orange-900">Quà Tặng Tri Ân Độc Quyền Miễn Phí (0 VNĐ)</h4>
                    <p className="text-xs text-orange-700 mt-0.5 leading-relaxed">
                      Bạn không cần phải thanh toán chuyển khoản! Chỉ cần điền Họ Tên và Số điện thoại / Zalo bên dưới để hệ thống cấp quyền tải tài liệu và mời bạn vào Nhóm Zalo hỗ trợ ngay lập tức.
                    </p>
                  </div>
                </div>
              ) : (
                /* Bank Account Info Cards - 1-CLICK COPY BUTTONS */
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-orange-600" />
                    THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG CHÍNH CHỦ
                  </span>

                  {/* 1. Bank Name */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Ngân hàng thụ hưởng:</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-orange-600 font-black">{BANK_INFO.bankName}</span>
                        <span className="text-xs text-slate-500 font-normal">({BANK_INFO.bankFullName})</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_INFO.bankName, 'bankName')}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                    >
                      {copiedField === 'bankName' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* 2. Account Number - 0913179424 */}
                  <div className="p-3.5 rounded-2xl bg-orange-50/70 border-2 border-orange-400 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-[11px] text-orange-700 font-bold">Số tài khoản:</div>
                      <div className="text-lg sm:text-2xl font-mono font-black text-slate-900 tracking-wider">
                        {BANK_INFO.accountNumber}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_INFO.accountNumber, 'accountNumber')}
                      className="coral-gradient-btn px-4 py-2 rounded-xl text-xs font-black text-white flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
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
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Chủ tài khoản:</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                        {BANK_INFO.accountOwner}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(BANK_INFO.accountOwner, 'accountOwner')}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                    >
                      {copiedField === 'accountOwner' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* 4. Amount */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Số tiền:</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-rose-600">
                        {formatVND(currentProduct.price)}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(currentProduct.price.toString(), 'amount')}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                    >
                      {copiedField === 'amount' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* 5. Transfer Memo */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-orange-600 font-bold">Nội dung chuyển khoản (Memo):</div>
                      <div className="text-sm sm:text-base font-mono font-bold text-slate-900">
                        {orderCode}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(orderCode, 'orderCode')}
                      className="px-3 py-1.5 rounded-lg bg-orange-100 hover:bg-orange-200 text-xs font-bold text-orange-700 border border-orange-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedField === 'orderCode' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Đã chép</span>
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
              )}

              {/* Customer registration / confirmation form */}
              <form onSubmit={handleConfirmPayment} className="pt-2 space-y-3.5">
                <span className="text-xs uppercase tracking-wider text-slate-800 font-bold block">
                  {currentProduct.price === 0
                    ? 'ĐIỀN THÔNG TIN ĐỂ NHẬN QUÀ TẶNG & VÀO NHÓM ZALO:'
                    : 'ĐIỀN THÔNG TIN ĐỂ KÍCH HOẠT VÀ VÀO NHÓM ZALO:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên của bạn: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại / Zalo: <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0913179424"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email nhận tài nguyên & file Skill (tùy chọn):
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full coral-gradient-btn text-white font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  {currentProduct.price === 0 ? (
                    <>
                      <span>🎁 NHẬN QUÀ TẶNG 0Đ NGAY • VÀO NHÓM ZALO</span>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </>
                  ) : (
                    <>
                      <span>TÔI ĐÃ CHUYỂN KHOẢN • VÀO NHÓM ZALO NHẬN SKILL</span>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </>
                  )}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0f0823] border border-purple-700/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-center space-y-5">
            
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury font-black text-2xl text-white">
                XÁC NHẬN THÀNH CÔNG!
              </h3>
              <p className="text-zinc-300 text-sm">
                Cảm ơn bạn <strong className="text-purple-300">{customerName || 'bạn'}</strong> đã mua Skill{' '}
                <strong className="text-white">{currentProduct.name}</strong>! Đơn hàng đã được lưu trên hệ thống.
              </p>
            </div>

            <div className="bg-[#130a2f]/90 p-4 rounded-2xl border border-purple-800/50 text-left text-xs space-y-2 text-zinc-200">
              <div className="flex justify-between">
                <span className="text-zinc-400 font-medium">Mã đơn hàng:</span>
                <span className="font-mono font-bold text-purple-300">{orderCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-medium">Số tiền:</span>
                <span className="font-bold text-emerald-400">{formatVND(currentProduct.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-medium">Chủ tài khoản:</span>
                <span className="text-white font-bold">{BANK_INFO.accountOwner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-medium">Ngân hàng:</span>
                <span className="text-white font-semibold">SHB (STK: 0913179424)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-medium">Số điện thoại:</span>
                <span className="text-white font-semibold">{customerPhone || 'Chưa cung cấp'}</span>
              </div>
              {customerEmail && (
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-medium">Email:</span>
                  <span className="text-blue-400 font-semibold">{customerEmail}</span>
                </div>
              )}
            </div>

            {/* Email send status message */}
            {emailStatus && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                emailStatus.sent ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60' : 'bg-rose-950/80 text-rose-300 border border-rose-700/60'
              }`}>
                {emailStatus.sent ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                <span>{emailStatus.message}</span>
              </div>
            )}

            {/* Gmail delivery button if customer provided email */}
            {customerEmail && !emailStatus?.sent && (
              <div className="p-3.5 rounded-2xl bg-[#130a2f] border border-purple-800/50 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>Nhận tài liệu qua Gmail</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Gửi thư xác nhận và file Prompt tới {customerEmail}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsConfirmingEmailSend(true)}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-sm"
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
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#0f0823] border border-purple-700/60 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-purple-300 flex items-center justify-center">
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

            <div className="p-3.5 rounded-2xl bg-[#130a2f]/90 border border-purple-800/50 text-xs space-y-2 text-zinc-200">
              <div>
                <span className="text-zinc-400 font-medium">Người nhận:</span>{' '}
                <strong className="text-white">{customerName || 'Khách hàng'}</strong> ({customerEmail})
              </div>
              <div>
                <span className="text-zinc-400 font-medium">Mã đơn hàng:</span>{' '}
                <strong className="text-purple-300 font-mono">{orderCode}</strong>
              </div>
              <div>
                <span className="text-zinc-400 font-medium">Gói Skill:</span>{' '}
                <span className="text-white font-semibold">{currentProduct.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmingEmailSend(false)}
                disabled={isSendingEmail}
                className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-purple-950/60 transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                onClick={handleExecuteSendEmail}
                disabled={isSendingEmail}
                className="px-5 py-2.5 rounded-xl purple-gradient-btn text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
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
