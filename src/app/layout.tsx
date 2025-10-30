import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winnersapt.co.kr"), // 실제 도메인으로 변경
  title: {
    default: "아파트 분양 임차인 모집 예정",
    template: "%s | 위너스 푸르지오 아파트 사전문의",
  },
  description: "위너스 푸르지오 아파트 분양 정보와 모델하우스 사전문의. 전화 1533-9896, 상담 예약 가능합니다.",
  keywords: ["위너스", "아파트", "사전문의", "분양", "모델하우스", "부동산", "푸르지오"],
  openGraph: {
    type: "website",
    url: "/",
    title: "푸르지오 아파트 문의 및 상담예약",
    description: "분양 일정·평형 정보 확인하고 상담을 예약하세요",
    siteName: "위너스 푸르지오 아파트 문의, 예약",
    images: [{ url: "/image/hero2.png", width: 1200, height: 630 }],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "푸르지오 아파트 사전문의",
    description: "푸르지오 상담·사전예약",
    images: ["/image/hero2.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
