import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, MessageCircle } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export type PolicyTab = 'privacy' | 'terms' | 'refund';

interface PoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: PolicyTab;
  onSelectTab: (tab: PolicyTab) => void;
}

export const PoliciesModal: React.FC<PoliciesModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full border border-purple-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury font-black text-lg sm:text-xl tracking-wide">
                ĐIỀU KHOẢN & CHÍNH SÁCH BẢO VỆ NGƯỜI DÙNG
              </h3>
              <p className="text-xs text-purple-200">
                Hải Triều AI • Minh bạch, an toàn và cam kết đồng hành
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Đóng modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Tab Switcher */}
        <div className="flex border-b border-purple-100 bg-purple-50/60 p-2 gap-1.5 shrink-0 overflow-x-auto">
          <button
            onClick={() => onSelectTab('privacy')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Chính Sách Bảo Mật</span>
          </button>

          <button
            onClick={() => onSelectTab('terms')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Điều Khoản Sử Dụng</span>
          </button>

          <button
            onClick={() => onSelectTab('refund')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Hoàn Tiền & Bàn Giao</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto text-slate-700 text-xs sm:text-sm leading-relaxed space-y-5">
          
          {/* TAB 1: CHÍNH SÁCH BẢO MẬT */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="font-bold text-base text-purple-950 uppercase border-b border-purple-100 pb-2">
                CHÍNH SÁCH BẢO MẬT THÔNG TIN
              </h4>
              
              <div className="space-y-3">
                <p>
                  <strong className="text-slate-900">1. Mục đích thu thập thông tin:</strong> Hải Triều AI thu thập họ tên, số điện thoại, email, tài khoản Zalo của khách hàng khi khách đăng ký nhận quà tặng, mua Skill hoặc để lại thông tin tư vấn, nhằm mục đích giao sản phẩm số, hướng dẫn sử dụng và hỗ trợ sau bán.
                </p>
                <p>
                  <strong className="text-slate-900">2. Phạm vi sử dụng:</strong> Thông tin chỉ dùng nội bộ để bàn giao sản phẩm, gửi thông báo cập nhật Skill mới, ưu đãi và hỗ trợ kỹ thuật. Chúng tôi không bán, không cho thuê, không trao đổi thông tin khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại.
                </p>
                <p>
                  <strong className="text-slate-900">3. Thời gian lưu trữ:</strong> Thông tin được lưu trong hệ thống cho đến khi khách hàng yêu cầu xóa hoặc chấm dứt sử dụng dịch vụ.
                </p>
                <p>
                  <strong className="text-slate-900">4. Quyền của khách hàng:</strong> Khách hàng có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào bằng cách gửi yêu cầu qua Zalo <a href={`https://zalo.me/${BANK_INFO.supportPhone}`} target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">0913 179 424</a> hoặc email <strong className="text-purple-900">{BANK_INFO.supportEmail}</strong>.
                </p>
                <p>
                  <strong className="text-slate-900">5. Bảo mật thanh toán:</strong> Mọi giao dịch được thực hiện qua cổng chuyển khoản ngân hàng (VietQR SHB). Hải Triều AI không lưu trữ số thẻ, mã CVC hay thông tin ngân hàng của khách hàng trên website.
                </p>
                <p>
                  <strong className="text-slate-900">6. Cookies:</strong> Website có thể dùng cookies để ghi nhớ phiên truy cập và đo lường hiệu quả nội dung nhằm cải thiện trải nghiệm người dùng. Khách hàng có thể tắt cookies trong trình duyệt.
                </p>
                <p>
                  <strong className="text-slate-900">7. Liên hệ xử lý dữ liệu:</strong> Hải Triều AI – Trịnh Hải Triều, Zalo/hotline: <span className="font-mono font-bold text-purple-950">0913 179 424</span>, email: <span className="font-bold text-purple-950">{BANK_INFO.supportEmail}</span>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ĐIỀU KHOẢN SỬ DỤNG */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="font-bold text-base text-purple-950 uppercase border-b border-purple-100 pb-2">
                ĐIỀU KHOẢN SỬ DỤNG DỊCH VỤ
              </h4>

              <div className="space-y-3">
                <p>
                  <strong className="text-slate-900">1. Phạm vi sản phẩm:</strong> Hải Triều AI cung cấp sản phẩm số dạng bộ Prompt/Skill, tài liệu hướng dẫn và tài nguyên số liên quan. Sản phẩm là tài liệu hướng dẫn thực hành, không phải phần mềm cài đặt và không cam kết một kết quả doanh thu cụ thể nào cho người sử dụng.
                </p>
                <p>
                  <strong className="text-slate-900">2. Giá và thanh toán:</strong> Các Skill thực chiến đang mở có giá ưu đãi từ 49.000đ – 99.000đ/Skill (các Skill đồng giá 49.000đ, riêng Skill VIP Text Overlay Triệu View là 99.000đ, quà tặng tri ân 0đ). Thanh toán bằng chuyển khoản VietQR qua ngân hàng SHB, nội dung chuyển khoản ghi đúng mã đơn được hệ thống cấp.
                </p>
                <p>
                  <strong className="text-slate-900">3. Bàn giao:</strong> Sản phẩm số được bàn giao tự động hoặc gửi qua Zalo/email trong vòng tối đa 24 giờ làm việc sau khi nhận được thanh toán hợp lệ.
                </p>
                <p>
                  <strong className="text-slate-900">4. Quyền sử dụng:</strong> Khách hàng được phép sử dụng Skill cho mục đích cá nhân và cho chính công việc kinh doanh của mình, được phép chỉnh sửa nội dung. Không được phép bán lại, chia sẻ công khai, tái phát hành hoặc đóng gói lại thành sản phẩm riêng để kinh doanh.
                </p>
                <p>
                  <strong className="text-slate-900">5. Sở hữu trí tuệ:</strong> Toàn bộ nội dung, tên Skill, hình ảnh, video và tài liệu thuộc quyền sở hữu của Hải Triều AI. Nghiêm cấm sao chép toàn bộ hoặc một phần để phát hành lại.
                </p>
                <p>
                  <strong className="text-slate-900">6. Trách nhiệm người dùng:</strong> Khách hàng tự chịu trách nhiệm về nội dung mình tạo ra khi áp dụng Skill, đảm bảo không vi phạm pháp luật, không xâm phạm quyền hình ảnh, bản quyền của bên thứ ba và tuân thủ chính sách của các nền tảng Facebook, TikTok, YouTube.
                </p>
                <p>
                  <strong className="text-slate-900">7. Giới hạn trách nhiệm:</strong> Hải Triều AI không chịu trách nhiệm với các quyết định đầu tư, kinh doanh hay thiệt hại gián tiếp phát sinh từ việc áp dụng tài liệu. Kết quả thực tế phụ thuộc vào nỗ lực và cách triển khai của từng người.
                </p>
                <p>
                  <strong className="text-slate-900">8. Thay đổi điều khoản:</strong> Hải Triều AI có quyền cập nhật điều khoản này và sẽ thông báo công khai trên website. Việc tiếp tục sử dụng dịch vụ đồng nghĩa với việc chấp nhận nội dung cập nhật.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CHÍNH SÁCH HOÀN TIỀN & BÀN GIAO */}
          {activeTab === 'refund' && (
            <div className="space-y-4">
              <h4 className="font-bold text-base text-purple-950 uppercase border-b border-purple-100 pb-2">
                CHÍNH SÁCH HOÀN TIỀN & BÀN GIAO SẢN PHẨM SỐ
              </h4>

              <div className="space-y-3">
                <p>
                  <strong className="text-slate-900">1. Cam kết bàn giao:</strong> 100% đơn hàng đã thanh toán được bàn giao file. Trường hợp quá 24 giờ chưa nhận được file, vui lòng liên hệ Zalo <a href={`https://zalo.me/${BANK_INFO.supportPhone}`} target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">0913 179 424</a> kèm ảnh chụp giao dịch để được xử lý ngay trong ngày.
                </p>
                <p>
                  <strong className="text-slate-900">2. Điều kiện được hoàn tiền 100%:</strong> (a) Đã thanh toán nhưng không nhận được sản phẩm; (b) File nhận được bị lỗi, không mở được và bộ phận hỗ trợ không khắc phục được trong 48 giờ; (c) Sản phẩm bàn giao sai nội dung so với mô tả trên website.
                </p>
                <p>
                  <strong className="text-slate-900">3. Trường hợp không hoàn tiền:</strong> Sản phẩm số đã bàn giao thành công và mở được bình thường thì không hoàn tiền với lý do đã mua, không dùng, hoặc đổi ý. Lý do: sản phẩm số là hàng sao chép được, đã chuyển giao quyền sử dụng.
                </p>
                <p>
                  <strong className="text-slate-900">4. Thời hạn yêu cầu:</strong> Trong vòng 07 ngày kể từ ngày thanh toán.
                </p>
                <p>
                  <strong className="text-slate-900">5. Hình thức hoàn tiền:</strong> Chuyển khoản lại đúng tài khoản người đã thanh toán, trong vòng 03 - 05 ngày làm việc sau khi yêu cầu được xác nhận.
                </p>
                <p>
                  <strong className="text-slate-900">6. Hỗ trợ sau bán:</strong> Mọi Skill đều kèm nhóm Zalo hướng dẫn. Khách hàng được hỗ trợ giải đáp trong suốt thời gian sử dụng sản phẩm.
                </p>
                <p>
                  <strong className="text-slate-900">7. Đầu mối tiếp nhận khiếu nại:</strong> Zalo/hotline: <span className="font-mono font-bold text-purple-950">0913 179 424</span> – email: <span className="font-bold text-purple-950">{BANK_INFO.supportEmail}</span>. Thời gian phản hồi tối đa 24 giờ làm việc.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
          <span className="text-slate-500">
            Hỗ trợ 24/7 qua Zalo:{' '}
            <a href={`https://zalo.me/${BANK_INFO.supportPhone}`} target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">
              {BANK_INFO.supportPhone}
            </a>
          </span>

          <div className="flex items-center gap-2">
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Vào Nhóm Zalo Hỗ Trợ</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
