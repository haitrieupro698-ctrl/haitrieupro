import React, { useState, useEffect } from 'react';

// Computes remaining milliseconds until 23:59:59 VN Time (UTC+7)
export function getVietnamRemainingMs(fixedDeadline: string | null = null): number {
  if (fixedDeadline) {
    const remain = new Date(fixedDeadline).getTime() - Date.now();
    return remain > 0 ? remain : 0;
  }
  const nowMs = Date.now();
  const vnMs = nowMs + 7 * 3600 * 1000; // Shift to UTC+7 (Vietnam Time)
  const vnNow = new Date(vnMs);
  const vnNext = Date.UTC(
    vnNow.getUTCFullYear(),
    vnNow.getUTCMonth(),
    vnNow.getUTCDate() + 1,
    0, 0, 0, 0
  );
  return Math.max(0, vnNext - vnMs);
}

function pad(n: number): string {
  return n < 10 ? '0' + n : String(n);
}

export function useVietnamCountdown(fixedDeadline: string | null = null) {
  const [time, setTime] = useState(() => {
    const remain = getVietnamRemainingMs(fixedDeadline);
    const totalSec = Math.floor(remain / 1000);
    return {
      hours: pad(Math.floor(totalSec / 3600)),
      minutes: pad(Math.floor((totalSec % 3600) / 60)),
      seconds: pad(totalSec % 60),
      rawString: `${pad(Math.floor(totalSec / 3600))}:${pad(Math.floor((totalSec % 3600) / 60))}:${pad(totalSec % 60)}`
    };
  });

  useEffect(() => {
    const tick = () => {
      const remain = getVietnamRemainingMs(fixedDeadline);
      const totalSec = Math.floor(remain / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;

      setTime({
        hours: pad(h),
        minutes: pad(m),
        seconds: pad(s),
        rawString: `${pad(h)}:${pad(m)}:${pad(s)}`
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [fixedDeadline]);

  return time;
}

/**
 * KHỐI 1: ĐỒNG HỒ TRONG TRANG
 * Cài đặt: dán vào vị trí khối đếm ngược cũ.
 * Tự reset về 23:59:59 mỗi ngày (giờ Việt Nam).
 * Không dùng số suất ảo - an toàn với chính sách Facebook Ads.
 */
export const CountdownWidget: React.FC = () => {
  const { hours, minutes, seconds } = useVietnamCountdown();

  return (
    <div className="ht-countdown-wrap mb-8">
      <div className="ht-cd-label">⚡ ƯU ĐÃI ĐỒNG GIÁ 49K KẾT THÚC SAU</div>
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
      <div className="ht-cd-note">Hết ngày hôm nay, giá quay về 199.000đ</div>
    </div>
  );
};

