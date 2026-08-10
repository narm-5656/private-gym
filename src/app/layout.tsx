import type { Metadata } from "next";
import { Oswald, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BASE | 宮原の完全個室ガレージジム",
  description:
    "宮原駅徒歩9分・加茂宮駅徒歩5分。24時間営業・待ち時間ゼロ・完全予約制の貸切ジム。EVOLGEARと自分だけが向き合えるストイックな空間。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${oswald.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="industrial-bg min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
