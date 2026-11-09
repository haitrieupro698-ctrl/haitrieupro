import React, { useState, useEffect } from 'react';

const COUNTDOWN_STORAGE_KEY = 'ht_visitor_countdown_5m';
const DURATION_SECONDS = 5 * 60; // 5 phút = 300 giây khi người dùng mở trang

export function getVisitorCountdownRemainingSec(): number {
  if (typeof window === 'undefined') return DURATION_SECONDS;
  try {
    const stored = sessionStorage.getItem(COUNTDOWN_STORAGE_KEY);
    const now = Math.floor(Date.now() / 1000);
    if (!stored) {
      const expireAt = now + DURATION_SECONDS;
      sessionStorage.setItem(COUNTDOWN_STORAGE_KEY, String(expireAt));
      return DURATION_SECONDS;
    }
    const expireAt = parseInt(stored, 10);
    const diff = expireAt - now;
    return diff > 0 ? diff : 0;
  } catch {
    return DURATION_SECONDS;
  }
}

function pad(n: number): string {
  return n < 10 ? '0' + n : String(n);
}

export function useFiveMinuteCountdown() {
  const [remainingSec, setRemainingSec] = useState<number>(() => getVisitorCountdownRemainingSec());

  useEffect(() => {
    const tick = () => {
      setRemainingSec(getVisitorCountdownRemainingSec());
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(Math.floor(remainingSec / 3600));
  const minutes = pad(Math.floor((remainingSec % 3600) / 60));
  const seconds = pad(remainingSec % 60);

  return {
    hours,
    minutes,
    seconds,
    isExpired: remainingSec <= 0,
    rawString: `${hours}:${minutes}:${seconds}`,
  };
}

/**
 * KHỐI ĐỒNG HỒ ĐẾM NGƯỢC 5 PHÚT KHI MỞ TRANG
 * Đếm ngược chính xác 5 phút cho mỗi lượt người dùng truy cập.
 */
export const CountdownWidget: React.FC = () => {
  const { hours, minutes, seconds, isExpired } = useFiveMinuteCountdown();

  return (
    <div className="ht-countdown-wrap mb-8">
      <div className="ht-cd-label">
        ⚡ {isExpired ? 'ĐÃ HẾT THỜI GIAN ƯU ĐÃI ĐẶC BIỆT' : 'ƯU ĐÃI ĐỒNG GIÁ 135K (VIP 199K) KẾT THÚC SAU'}
      </div>
      <div className="ht-cd-clock" id="htCountdown">
        <div className="ht-cd-box">
          <span id="htHours">{hours}</span>
          <small>GIỜ</small>
        </div>
        <div className="ht-cd-sep">:</div>
        <div className="ht-cd-box">
          <span id="htMinutes">{minutes}</span>
          <small>PHÚT</small>
        </div>
        <div className="ht-cd-sep">:</div>
        <div className="ht-cd-box">
          <span id="htSeconds">{seconds}</span>
          <small>GIÂY</small>
        </div>
      </div>
      <div className="ht-cd-note">
        {isExpired
          ? 'Ưu đãi 5 phút đã hết, vui lòng nhắn Zalo để được duyệt giữ mức giá 135k!'
          : 'Đồng hồ đếm ngược 5 phút ưu đãi độc quyền khi bạn mở trang. Hết thời gian, giá quay về giá gốc 340.000đ!'}
      </div>
    </div>
  );
};
