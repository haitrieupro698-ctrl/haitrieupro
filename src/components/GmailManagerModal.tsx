import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  LogOut, 
  RefreshCw, 
  User, 
  ShieldCheck,
  Inbox
} from 'lucide-react';
import { 
  googleSignIn, 
  logoutGoogle, 
  getAccessToken, 
  getGmailProfile, 
  sendEmailViaGmail,
  GmailProfile 
} from '../services/gmailService';
import { auth } from '../firebase';

interface GmailManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onAuthChange: () => void;
}

export const GmailManagerModal: React.FC<GmailManagerModalProps> = ({
  isOpen,
  onClose,
  user,
  onAuthChange,
}) => {
  const [profile, setProfile] = useState<GmailProfile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [isConfirmingSend, setIsConfirmingSend] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen && user) {
      loadProfile();
    }
  }, [isOpen, user]);

  const loadProfile = async () => {
    setLoadingProfile(true);
    try {
      const p = await getGmailProfile();
      setProfile(p);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setFeedbackMsg(null);
    try {
      await googleSignIn();
      onAuthChange();
      await loadProfile();
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err.message || 'Đăng nhập Google thất bại' });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutGoogle();
    setProfile(null);
    onAuthChange();
  };

  const handleOpenConfirmSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!composeTo || !composeSubject || !composeBody) {
      setFeedbackMsg({ type: 'error', text: 'Vui lòng điền đầy đủ người nhận, tiêu đề và nội dung' });
      return;
    }
    setIsConfirmingSend(true);
  };

  const handleExecuteSend = async () => {
    setIsSending(true);
    setFeedbackMsg(null);
    try {
      await sendEmailViaGmail({
        to: composeTo,
        subject: composeSubject,
        htmlBody: `<div style="font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #1f2937;">${composeBody.replace(/\n/g, '<br>')}</div>`,
      });

      setFeedbackMsg({ type: 'success', text: `Đã gửi email thành công tới ${composeTo} qua Gmail!` });
      setComposeTo('');
      setComposeSubject('');
      setComposeBody('');
      setIsConfirmingSend(false);
    } catch (err: any) {
      console.error(err);
      setFeedbackMsg({ type: 'error', text: err.message || 'Gửi email thất bại' });
      setIsConfirmingSend(false);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border-2 border-purple-300 rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-purple-100 flex items-center justify-between bg-purple-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury font-black text-lg sm:text-xl text-slate-900 flex items-center gap-2">
                <span>KẾT NỐI & QUẢN LÝ GMAIL</span>
                {user && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
                    Đã kết nối
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-600">
                Gửi email xác nhận đơn và tài liệu Skill tự động từ tài khoản Gmail chính chủ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-purple-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {feedbackMsg && (
            <div
              className={`p-3.5 rounded-xl border text-xs flex items-center justify-between ${
                feedbackMsg.type === 'success'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-rose-50 border-rose-300 text-rose-800'
              }`}
            >
              <div className="flex items-center gap-2">
                {feedbackMsg.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                )}
                <span>{feedbackMsg.text}</span>
              </div>
              <button onClick={() => setFeedbackMsg(null)} className="text-slate-400 hover:text-slate-800">✕</button>
            </div>
          )}

          {/* User Auth Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/50 border border-purple-200">
            {user ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Avatar'}
                      className="w-12 h-12 rounded-full border-2 border-purple-300 shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      <User className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      {user.displayName || 'Tài khoản Google'}
                    </div>
                    <div className="text-xs text-purple-800 font-mono font-bold">
                      {user.email}
                    </div>
                    {profile && (
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Tổng số thư Gmail: {profile.messagesTotal.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-purple-100 text-slate-700 text-xs font-semibold border border-purple-200 flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <LogOut className="w-3.5 h-3.5 text-purple-600" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
                  Đăng nhập tài khoản Google của bạn để cấp quyền cho ứng dụng gửi email xác nhận đơn và tài liệu kịch bản Skill cho học viên qua Gmail.
                </p>

                {/* Official Google Sign-in Button style */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-purple-50 font-bold text-xs sm:text-sm shadow-md border border-purple-200 transition-transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                  </svg>
                  <span>{isSigningIn ? 'Đang kết nối...' : 'Sign in with Google (Kết nối Gmail)'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Compose Direct Email Form */}
          {user && (
            <form onSubmit={handleOpenConfirmSend} className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-purple-900 font-extrabold flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-purple-600" />
                  SOẠN VÀ GỬI EMAIL TỰ DO QUA GMAIL
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Gửi từ: {user.email}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gửi đến email học viên / khách hàng:
                </label>
                <input
                  type="email"
                  required
                  placeholder="khachhang@example.com"
                  value={composeTo}
                  onChange={(e) => setComposeTo(e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tiêu đề email:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: [Hải Triều AI] Gửi link tài nguyên Skill Text Overlay Triệu View"
                  value={composeSubject}
                  onChange={(e) => setComposeSubject(e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nội dung email:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Nhập nội dung thư, lời chào và link tài liệu gửi cho khách..."
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl purple-gradient-btn text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Email Bằng Tài Khoản Gmail Của Bạn</span>
              </button>
            </form>
          )}

        </div>

      </div>

      {/* MANDATORY USER CONFIRMATION DIALOG BEFORE SENDING EMAIL */}
      {isConfirmingSend && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border-2 border-purple-300 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Xác Nhận Gửi Email
                </h4>
                <p className="text-xs text-slate-500">
                  Gửi thư trực tiếp từ {user?.email}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs space-y-2 text-slate-700">
              <div>
                <span className="text-slate-500">Tới:</span> <strong className="text-purple-950 font-bold">{composeTo}</strong>
              </div>
              <div>
                <span className="text-slate-500">Tiêu đề:</span> <span className="text-purple-900 font-bold">{composeSubject}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmingSend(false)}
                disabled={isSending}
                className="px-4 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                onClick={handleExecuteSend}
                disabled={isSending}
                className="px-5 py-2.5 rounded-xl purple-gradient-btn text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                {isSending ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang gửi thư...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Xác Nhận & Gửi</span>
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
