import React, { useState } from 'react';
import { MessageCircle, Phone, Users, ExternalLink, X } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const FloatingZaloButton: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Quick popup menu when clicking the pill (optional) */}
      {isOpenMenu && (
        <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-amber-400/50 mb-1 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-xs text-amber-300 uppercase tracking-wide">
                Hỗ Trợ Zalo Trực Tiếp
              </span>
            </div>
            <button
              onClick={() => setIsOpenMenu(false)}
              className="text-slate-400 hover:text-white text-xs p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={BANK_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-950" />
                <span>Vào Nhóm Nhận 4 Skill 0đ</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://zalo.me/${BANK_INFO.supportPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span>Nhắn riêng: {BANK_INFO.supportPhone}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={`tel:${BANK_INFO.supportPhone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Gọi hotline: {BANK_INFO.supportPhone}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold">Bấm gọi</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
        {/* Direct Zalo Group Button */}
        <a
          href={BANK_INFO.zaloGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-extrabold text-xs tracking-wide shadow-xl shadow-blue-600/30 border-2 border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          title={`Vào nhóm Zalo Hải Triều AI: ${BANK_INFO.zaloGroupUrl}`}
        >
          <div className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
            <Users className="w-3.5 h-3.5" />
          </div>
          <span>Nhóm Zalo 4 Quà 0đ</span>
          <ExternalLink className="w-3 h-3 opacity-90" />
        </a>

        {/* Floating Yellow Pill: "💬 Zalo: 0913179424" */}
        <div className="flex items-center gap-1.5">
          <a
            href={`https://zalo.me/${BANK_INFO.supportPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-2xl shadow-amber-400/40 border-2 border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            title={`Bấm để nhắn Zalo trực tiếp với Hải Triều: ${BANK_INFO.supportPhone}`}
          >
            {/* Zalo circular logo */}
            <div className="w-7 h-7 rounded-full bg-[#0068ff] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>

            <div className="flex items-center gap-1 font-sans">
              <span className="font-extrabold">Zalo:</span>
              <span className="font-black tracking-wider text-slate-950">
                {BANK_INFO.supportPhone}
              </span>
            </div>

            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping ml-0.5" />
          </a>

          {/* Quick Menu Toggle Button */}
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="w-10 h-10 rounded-full bg-slate-900 border border-amber-400/80 text-amber-400 flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
            title="Xem tùy chọn Zalo"
          >
            <Users className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
