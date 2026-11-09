/**
 * Tracking & Measurement Service
 * Integrates Facebook Pixel (Meta Pixel) & Google Analytics 4 (GA4)
 * Supports custom events: 'Bấm Zalo' (Lead/Contact) and 'Bấm Mua' (InitiateCheckout/Purchase).
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Tracks page views across client navigation
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined') {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || document.title,
      });
    }
  }
};

/**
 * Event: Bấm Zalo (Chuyển đổi Lead/Contact qua Zalo)
 */
export const trackZaloClick = (label: string = 'Zalo Group', location?: string) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const loc = location || currentPath;

  if (typeof window !== 'undefined') {
    // Facebook Pixel Standard & Custom Event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Zalo Community',
        content_category: label,
        location: loc,
      });
      window.fbq('trackCustom', 'ClickZalo', {
        label,
        location: loc,
      });
    }

    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_zalo', {
        event_category: 'lead_engagement',
        event_label: label,
        location: loc,
      });
      window.gtag('event', 'generate_lead', {
        currency: 'VND',
        value: 0,
        lead_source: label,
      });
    }
  }
};

/**
 * Event: Bấm Mua (InitiateCheckout)
 */
export const trackBuyClick = (productId: string, productName?: string, price: number = 49000) => {
  if (typeof window !== 'undefined') {
    // Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: productName || productId,
        content_ids: [productId],
        content_type: 'product',
        value: price,
        currency: 'VND',
      });
    }

    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'begin_checkout', {
        currency: 'VND',
        value: price,
        items: [
          {
            item_id: productId,
            item_name: productName || productId,
            price: price,
            quantity: 1,
          },
        ],
      });
    }
  }
};

/**
 * Event: Hoàn tất đơn hàng (Purchase) - Kích hoạt tại trang /cam-on
 */
export const trackPurchase = (orderId: string, amount: number = 49000, items: string[] = ['skill-text-overlay']) => {
  if (typeof window !== 'undefined') {
    // Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Purchase', {
        content_ids: items,
        content_type: 'product',
        value: amount,
        currency: 'VND',
        order_id: orderId,
      });
    }

    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'purchase', {
        transaction_id: orderId,
        value: amount,
        currency: 'VND',
        items: items.map((id) => ({
          item_id: id,
          item_name: id,
          price: amount,
          quantity: 1,
        })),
      });
    }
  }
};
