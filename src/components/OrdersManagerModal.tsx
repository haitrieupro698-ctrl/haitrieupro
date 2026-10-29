import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingBag, 
  Mail, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  RefreshCw,
  Search,
  Check,
  Send,
  AlertTriangle,
  UserCheck
} from 'lucide-react';
import { FirestoreOrder, subscribeToOrders, updateOrderStatusInFirestore } from '../firebase';
import { 
  getAccessToken, 
  sendEmailViaGmail, 
  generateSkillDeliveryEmail 
} from '../services/gmailService';
import { BANK_INFO } from '../data/skillsData';

interface OrdersManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserEmail?: string | null;
  onOpenGmailLogin: () => void;
}

export const OrdersManagerModal: React.FC<OrdersManagerModalProps> = ({
  isOpen,
  onClose,
  currentUserEmail,
  onOpenGmailLogin,
}) => {
  const [orders, setOrders] = useState<FirestoreOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmSendOrder, setConfirmSendOrder] = useState<FirestoreOrder | null>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSuccessMsg, setEmailSuccessMsg] = useState<string | null>(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    const unsubscribe = subscribeToOrders((newOrders) => {
      setOrders(newOrders);
      setLoading(false);
    }, currentUserEmail);

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [isOpen, currentUserEmail]);

  if (!isOpen) return null;

  const filteredOrders = orders.filter((o) => {
    const q = searchQuery.toLowerCase();
    return (
      o.orderCode.toLowerCase().includes(q) ||
      o.customerName.toLowerCase().includes(q) ||
      o.customerPhone.includes(q) ||
      (o.customerEmail && o.customerEmail.toLowerCase().includes(q)) ||
      o.productName.toLowerCase().includes(q)
    );
  });

  const handleStatusChange = async (orderId: string, newStatus: 'pending' | 'confirmed' | 'delivered') => {
    try {
      await updateOrderStatusInFirestore(orderId, newStatus);
    } catch (err) {
      console.error('Update status error:', err);
    }
  };

  // Execute email sending with MANDATORY user confirmation dialog
  const handleExecuteSendEmail = async () => {
    if (!confirmSendOrder || !confirmSendOrder.customerEmail) return;

    const token = await getAccessToken();
    if (!token) {
      setEmailErrorMsg('Bạn chưa kết nối Gmail. Vui lòng bấm Đăng nhập Google/Gmail trước.');
      setConfirmSendOrder(null);
      return;
    }

    setIsSendingEmail(true);
    setEmailErrorMsg(null);
    setEmailSuccessMsg(null);

    try {
      const emailContent = generateSkillDeliveryEmail(
        confirmSendOrder.customerName,
        confirmSendOrder.orderCode,
        confirmSendOrder.productName,
        confirmSendOrder.amount,
        BANK_INFO.zaloGroupUrl
      );

      await sendEmailViaGmail({
        to: confirmSendOrder.customerEmail,
        subject: emailContent.subject,
        htmlBody: emailContent.html,
      });

      if (confirmSendOrder.id) {
        await updateOrderStatusInFirestore(confirmSendOrder.id, 'delivered', true);
      }

      setEmailSuccessMsg(`Đã gửi email tài liệu thành công tới ${confirmSendOrder.customerEmail}!`);
      setConfirmSendOrder(null);
    } catch (err: any) {
      console.error('Send email error:', err);
      setEmailErrorMsg(err.message || 'Gửi email thất bại');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border-2 border-amber-500/40 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-[#151821]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury font-black text-lg sm:text-xl text-white">
                QUẢN LÝ ĐƠN HÀNG SKILL (FIREBASE FIRESTORE)
              </h3>
              <p className="text-xs text-zinc-400">
                Lưu trữ thời gian thực và đồng bộ gửi email tài liệu qua Gmail
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!currentUserEmail && (
              <button
                onClick={onOpenGmailLogin}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Kết nối Gmail</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Notifications if any */}
        {emailSuccessMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{emailSuccessMsg}</span>
            </div>
            <button onClick={() => setEmailSuccessMsg(null)} className="text-zinc-400 hover:text-white">✕</button>
          </div>
        )}

        {emailErrorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{emailErrorMsg}</span>
            </div>
            <button onClick={() => setEmailErrorMsg(null)} className="text-zinc-400 hover:text-white">✕</button>
          </div>
        )}

        {/* Search & Stats Bar */}
        <div className="p-4 sm:p-6 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo Mã đơn, Tên, Số điện thoại, Email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-zinc-700 rounded-xl pl-9 pr-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>Tổng cộng: <strong className="text-amber-400">{filteredOrders.length}</strong> đơn hàng</span>
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-2">
          {loading ? (
            <div className="py-16 text-center text-zinc-400 space-y-2">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-amber-400" />
              <p className="text-sm">Đang tải dữ liệu từ Firestore...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-16 text-center text-zinc-400 space-y-3 bg-black/30 rounded-2xl border border-zinc-800">
              <ShoppingBag className="w-10 h-10 mx-auto text-zinc-600" />
              <p className="text-sm font-medium">Chưa có đơn hàng nào được ghi nhận.</p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Khi khách hàng đặt mua Skill và điền thông tin chuyển khoản VietQR, đơn hàng sẽ hiển thị tự động tại đây.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-black/40">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#151821] text-zinc-400 text-[11px] font-mono uppercase border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Mã Đơn</th>
                    <th className="py-3 px-4">Khách Hàng</th>
                    <th className="py-3 px-4">Gói Skill</th>
                    <th className="py-3 px-4">Số Tiền</th>
                    <th className="py-3 px-4">Trạng Thái</th>
                    <th className="py-3 px-4 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {filteredOrders.map((order) => (
                    <tr key={order.id || order.orderCode} className="hover:bg-zinc-800/30 transition-colors">
                      
                      {/* Code & Time */}
                      <td className="py-3.5 px-4">
                        <div className="font-mono font-bold text-amber-400">
                          {order.orderCode}
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          {new Date(order.createdAt).toLocaleString('vi-VN')}
                        </div>
                      </td>

                      {/* Customer info */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white">
                          {order.customerName}
                        </div>
                        <div className="text-xs text-zinc-300 font-mono">
                          {order.customerPhone}
                        </div>
                        {order.customerEmail && (
                          <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                            <Mail className="w-3 h-3 text-zinc-500" />
                            <span>{order.customerEmail}</span>
                          </div>
                        )}
                      </td>

                      {/* Product */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-zinc-200">
                          {order.productName}
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">
                        {formatVND(order.amount)}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4">
                        <select
                          value={order.status}
                          onChange={(e) => order.id && handleStatusChange(order.id, e.target.value as any)}
                          className={`text-xs font-semibold py-1 px-2.5 rounded-lg border focus:outline-none cursor-pointer ${
                            order.status === 'delivered'
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                              : order.status === 'confirmed'
                              ? 'bg-blue-500/15 border-blue-500/40 text-blue-400'
                              : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                          }`}
                        >
                          <option value="pending" className="bg-zinc-900 text-amber-300">Chờ chuyển khoản</option>
                          <option value="confirmed" className="bg-zinc-900 text-blue-400">Đã thanh toán</option>
                          <option value="delivered" className="bg-zinc-900 text-emerald-400">Đã giao Skill</option>
                        </select>

                        {order.emailSent && (
                          <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                            <Check className="w-3 h-3" /> Đã gửi Gmail
                          </div>
                        )}
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        {order.customerEmail ? (
                          <button
                            onClick={() => setConfirmSendOrder(order)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-medium border border-blue-500/40 transition-colors cursor-pointer"
                            title="Gửi email xác nhận và tài liệu qua Gmail"
                          >
                            <Send className="w-3.5 h-3.5 text-blue-400" />
                            <span>Gửi Gmail</span>
                          </button>
                        ) : (
                          <span className="text-[11px] text-zinc-500">Chưa có email</span>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-[#151821] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            Tài khoản ngân hàng nhận tiền: <strong className="text-white">SHB</strong> • STK: <strong className="text-amber-400 font-mono">0913179424</strong> ({BANK_INFO.accountOwner})
          </div>
          <a
            href={BANK_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Nhóm Zalo hỗ trợ khách: zalo.me/g/bd8u0pauixb47416hzxo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* MANDATORY USER CONFIRMATION MODAL BEFORE SENDING EMAIL VIA GMAIL */}
      {confirmSendOrder && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
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
                  Thao tác sẽ gửi thư từ tài khoản Gmail của bạn
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-xs space-y-2 text-zinc-300">
              <div>
                <span className="text-zinc-500">Người nhận:</span>{' '}
                <strong className="text-white">{confirmSendOrder.customerName}</strong> ({confirmSendOrder.customerEmail})
              </div>
              <div>
                <span className="text-zinc-500">Mã đơn hàng:</span>{' '}
                <strong className="text-amber-400 font-mono">{confirmSendOrder.orderCode}</strong>
              </div>
              <div>
                <span className="text-zinc-500">Nội dung thư:</span>{' '}
                <span className="text-zinc-300">Xác nhận thanh toán, link tải {confirmSendOrder.productName} & lời mời vào nhóm Zalo.</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setConfirmSendOrder(null)}
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
                    <span>Xác Nhận Gửi Ngay</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
