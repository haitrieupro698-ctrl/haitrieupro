import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';
import { trackPageView, trackZaloClick } from '../services/analytics';

interface PageProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Chính Sách Bảo Mật Thông Tin | Hải Triều AI';
    trackPageView('/chinh-sach-bao-mat', 'Chính Sách Bảo Mật Thông Tin');
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-800 flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-purple-900 hover:text-purple-700 font-bold text-xs sm:text-sm cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Trang Chủ</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-700 text-white flex items-center justify-center font-black text-sm">
              HT
            </div>
            <span className="font-serif-luxury font-black text-base text-purple-950">
              HẢI TRIỀU AI
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-200/90 shadow-xl space-y-8">
          
          <div className="border-b border-purple-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>Chính Sách Pháp Lý & Bảo Vệ Khách Hàng</span>
            </div>
            <h1 className="font-serif-luxury font-black text-2xl sm:text-4xl text-purple-950 tracking-tight">
              CHÍNH SÁCH BẢO MẬT THÔNG TIN
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Cập nhật lần cuối: Tháng 11/2026 • Áp dụng chính thức trên hệ sinh thái Hải Triều AI
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-600" />
                1. Mục đích thu thập thông tin
              </h2>
              <p>
                Hải Triều AI cam kết tôn trọng và bảo vệ tuyệt đối quyền riêng tư của bạn. Khi bạn đăng ký mua Skill, nhận 4 Skill quà tặng 0đ hoặc tham gia cộng đồng Zalo, chúng tôi chỉ thu thập các thông tin tối thiểu cần thiết nhằm:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Xác thực thanh toán VietQR SHB và tự động cấp quyền truy cập file Skill.</li>
                <li>Gửi đường link tải bộ prompt, kịch bản mẫu và video hướng dẫn thực hành 1-1.</li>
                <li>Thêm thành viên vào nhóm Zalo kín để được anh Trịnh Hải Triều hỗ trợ giải đáp kỹ thuật.</li>
                <li>Hỗ trợ tra cứu lại đơn hàng hoặc bảo hành hoàn tiền khi có yêu cầu.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-600" />
                2. Phạm vi thu thập thông tin
              </h2>
              <p>Chúng tôi chỉ lưu trữ các thông tin người dùng chủ động cung cấp, bao gồm:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Họ tên hoặc biệt danh sử dụng khi tham gia học.</li>
                <li>Số điện thoại / Số Zalo dùng để đối soát cú pháp chuyển khoản và gửi link file.</li>
                <li>Địa chỉ Email (nếu khách hàng đăng nhập Google Workspace để lưu lịch sử đơn hàng).</li>
                <li>Mã giao dịch ngân hàng và ảnh chụp màn hình hóa đơn chuyển tiền (nếu cần đối soát thủ công).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                3. Cam kết bảo mật và không chia sẻ cho bên thứ ba
              </h2>
              <p>
                Toàn bộ dữ liệu của học viên và khách hàng được mã hóa an toàn trên hệ thống máy chủ cơ sở dữ liệu Firebase. Chúng tôi <strong className="text-purple-950 font-bold">TUYỆT ĐỐI KHÔNG</strong> bán, trao đổi, chia sẻ hay để lộ thông tin liên hệ của bạn cho bất kỳ đơn vị quảng cáo hay bên thứ ba nào khác.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                4. Quyền của khách hàng đối với thông tin cá nhân
              </h2>
              <p>
                Bạn có toàn quyền yêu cầu kiểm tra, cập nhật hoặc xóa vĩnh viễn thông tin liên hệ của mình khỏi hệ thống bất kỳ lúc nào bằng cách nhắn tin trực tiếp đến Zalo hỗ trợ:
              </p>
              <div className="mt-3 p-4 bg-purple-50 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-purple-950">Hotline & Zalo Hỗ Trợ 24/7:</div>
                  <div className="text-xs text-slate-600">Mr. Trịnh Hải Triều • Hỗ trợ trực tiếp</div>
                </div>
                <a
                  href={`https://zalo.me/${BANK_INFO.supportPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackZaloClick('Policy Privacy Zalo', '/chinh-sach-bao-mat')}
                  className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BANK_INFO.supportPhone}</span>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-purple-100 flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition-colors"
            >
              ← Quay Lại Kho 41 Skill
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-100 py-6 text-center text-xs text-slate-500">
        © 2026 Hải Triều AI • 41 Skill Thực Chiến Đồng Giá 135.000đ (VIP 199k) • Hotline: {BANK_INFO.supportPhone}
      </footer>
    </div>
  );
};
