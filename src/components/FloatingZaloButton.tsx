import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BANK_INFO } from '../data/skillsData';

export const FloatingZaloButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block bg-[#16181f] text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-xl border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Tham gia nhóm Zalo Hải Triều AI 👋
      </div>

      <a
        href={BANK_INFO.zaloGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tham gia nhóm Zalo Hải Triều AI"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0068ff] text-white shadow-xl shadow-blue-600/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#0068ff] opacity-40 animate-ping pointer-events-none" />

        {/* Zalo Icon with custom badge */}
        <MessageCircle className="w-7 h-7 relative z-10" />

        <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0d0f12] shadow-sm">
          1
        </span>
      </a>
    </div>
  );
};
