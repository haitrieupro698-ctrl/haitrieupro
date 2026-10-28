import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  User, 
  signOut 
} from 'firebase/auth';
import { auth } from '../firebase';

// Gmail and Workspace Scopes
export const GMAIL_SCOPES = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.labels',
];

const provider = new GoogleAuthProvider();
GMAIL_SCOPES.forEach((scope) => {
  provider.addScope(scope);
});
// Prompt user to select account if needed
provider.setCustomParameters({
  prompt: 'select_account',
});

// MANDATORY: In-memory caching only. NEVER store in localStorage or sessionStorage.
let cachedAccessToken: string | null = null;
let isSigningIn = false;

// Auth listener
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Sign in with Google (Popup)
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Không thể lấy OAuth Access Token từ Google');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Lỗi đăng nhập Google / Gmail:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logoutGoogle = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

export interface GmailProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

// Get user profile from Gmail API
export async function getGmailProfile(): Promise<GmailProfile | null> {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      throw new Error(`Gmail API HTTP error: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Failed to get Gmail profile:', err);
    return null;
  }
}

// Encode UTF-8 string to base64url safely
function toBase64Url(str: string): string {
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  const base64 = btoa(binary);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export interface SendEmailPayload {
  to: string;
  subject: string;
  htmlBody: string;
}

// Send an email using Gmail API
export async function sendEmailViaGmail(payload: SendEmailPayload): Promise<{ id: string; threadId: string }> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Chưa đăng nhập Gmail hoặc phiên đăng nhập đã hết hạn. Vui lòng kết nối tài khoản Google.');
  }

  const currentUserEmail = auth.currentUser?.email || 'me';

  // Construct RFC 2822 email format
  const subjectEncoded = `=?utf-8?B?${btoa(unescape(encodeURIComponent(payload.subject)))}?=`;

  const emailLines = [
    `From: ${currentUserEmail}`,
    `To: ${payload.to}`,
    `Subject: ${subjectEncoded}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: 7bit',
    '',
    payload.htmlBody,
  ];

  const rawEmail = emailLines.join('\r\n');
  const encodedEmail = toBase64Url(rawEmail);

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: encodedEmail,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gửi email qua Gmail thất bại (${res.status}): ${errText}`);
  }

  return await res.json();
}

// Generate template for Skill order confirmation email
export function generateSkillDeliveryEmail(
  customerName: string,
  orderCode: string,
  productName: string,
  amount: number,
  zaloUrl: string
): { subject: string; html: string } {
  const formattedAmount = new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';

  const subject = `[HẢI TRIỀU AI] Xác nhận đơn hàng & Tài liệu ${productName} (Mã: ${orderCode})`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #0d0f12; color: #f3f4f6; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #15181f; border: 1px solid #d97706; border-radius: 16px; padding: 24px; color: #e5e7eb; }
    .header { text-align: center; border-bottom: 1px solid #374151; padding-bottom: 16px; margin-bottom: 20px; }
    .logo { color: #f59e0b; font-size: 24px; font-weight: bold; letter-spacing: 1px; }
    .subtitle { color: #9ca3af; font-size: 13px; text-transform: uppercase; }
    .h1 { color: #ffffff; font-size: 20px; font-weight: bold; margin-top: 10px; }
    .box { background: #0b0c0e; border: 1px solid #27272a; border-radius: 12px; padding: 16px; margin: 16px 0; }
    .row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
    .btn { display: inline-block; background: #0068ff; color: #ffffff !important; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 8px; margin: 10px 0; }
    .gold-btn { display: inline-block; background: linear-gradient(135deg, #fbbf24, #d97706); color: #000000 !important; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 8px; margin: 10px 0; }
    .footer { font-size: 12px; color: #6b7280; text-align: center; margin-top: 24px; border-top: 1px solid #27272a; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo">HẢI TRIỀU AI</div>
      <div class="subtitle">Skill & Kịch Bản Video Triệu View</div>
    </div>
    
    <div class="h1">Xin chào ${customerName},</div>
    <p style="font-size: 14px; line-height: 1.6; color: #d1d5db;">
      Cảm ơn bạn đã tin tưởng và đăng ký nhận tài nguyên từ <strong>Hải Triều AI</strong>! Đơn hàng của bạn đã được ghi nhận trên hệ thống.
    </p>

    <div class="box">
      <div style="font-size: 13px; color: #f59e0b; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">
        Chi Tiết Đơn Hàng
      </div>
      <div style="margin-bottom: 6px;">• Mã đơn hàng: <strong style="color: #fbbf24;">${orderCode}</strong></div>
      <div style="margin-bottom: 6px;">• Gói Skill: <strong>${productName}</strong></div>
      <div style="margin-bottom: 6px;">• Số tiền thanh toán: <strong style="color: #34d399;">${formattedAmount}</strong></div>
      <div style="margin-bottom: 6px;">• Ngân hàng thụ hưởng: <strong>SHB (STK: 0913179424 - NGUYEN HAI TRIEU)</strong></div>
    </div>

    <div style="text-align: center; margin: 24px 0;">
      <p style="font-size: 14px; font-weight: bold; color: #ffffff;">Bước tiếp theo để nhận trọn bộ File Prompt & Hỗ trợ:</p>
      <a href="${zaloUrl}" class="btn" target="_blank">
        👉 VÀO NHÓM ZALO NHẬN FILE & ĐƯỢC KÈM 1-1
      </a>
      <p style="font-size: 12px; color: #9ca3af; margin-top: 8px;">
        (Link nhóm Zalo: ${zaloUrl})
      </p>
    </div>

    <div class="box" style="border-left: 4px solid #f59e0b;">
      <div style="font-weight: bold; color: #fbbf24; margin-bottom: 4px;">Lời nhắn từ Hải Triều:</div>
      <p style="font-size: 13px; margin: 0; color: #e5e7eb; font-style: italic;">
        "Học để làm được, làm để tạo ra giá trị! Hãy gửi mã đơn hàng <strong>${orderCode}</strong> vào nhóm Zalo để mình và đội ngũ duyệt tải tài liệu ngay cho bạn nhé."
      </p>
    </div>

    <div class="footer">
      Email này được gửi tự động từ hệ thống Hải Triều AI qua Google Gmail.<br>
      Hotline / Zalo hỗ trợ: 0913.179.424 • Email: haitrieu.pro698@gmail.com
    </div>
  </div>
</body>
</html>
  `;

  return { subject, html };
}
