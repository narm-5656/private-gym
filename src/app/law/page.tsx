import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | BASE",
  robots: {
    index: false,
    follow: false,
  },
};

type LawItem = {
  term: string;
  detail: ReactNode;
};

const items: LawItem[] = [
  {
    term: "事業者の名称（販売業者）",
    detail: "BASE -24h private gym-",
  },
  {
    term: "運営責任者",
    detail: "奈良　真澄",
  },
  {
    term: "所在地",
    detail: (
      <>
        〒331-0812
        <br />
        埼玉県さいたま市北区宮原町3-60 金子第二ビル１階
      </>
    ),
  },
  {
    term: "連絡先",
    detail: (
      <>
        電話番号：[090-4228-0106]
        <br />
        メールアドレス：[info@base-gym.com または ご自身のメールアドレス]
        <br />
        ※お問い合わせは原則メールまたはLINE公式アカウントよりお願いいたします。
      </>
    ),
  },
  {
    term: "サービスの販売価格",
    detail: "各料金プランページに記載しております。",
  },
  {
    term: "商品代金以外に必要な料金",
    detail:
      "当サイトの閲覧、ご予約時などに発生するインターネット接続料金や通信料金はお客様のご負担となります。",
  },
  {
    term: "代金の支払方法",
    detail:
      "クレジットカード決済（Visa、Mastercard、JCB、American Express等）",
  },
  {
    term: "代金の支払時期",
    detail: "予約確定時（事前決済）となります。",
  },
  {
    term: "サービスの提供時期",
    detail:
      "お客様がご予約された日時に、当施設のスペースおよび設備をご利用いただけます。",
  },
  {
    term: "キャンセル・返金・交換について",
    detail: (
      <>
        キャンセル・変更の期限：ご利用開始の【2時間前】までシステム上で可能です。
        <br />
        キャンセル料：期限を過ぎてのキャンセル、および無断キャンセルは、利用料金の100%を申し受けます。（※サービスの性質上、利用後の返金は原則いたしかねます）
        <br />
        予約停止措置：とりあえずの枠確保や過度なキャンセルなど、他のお客様のご迷惑となる行為と当施設が判断した場合、事前通告なくご予約を制限する場合がございます。
      </>
    ),
  },
  {
    term: "動作環境",
    detail:
      "各ブラウザの最新バージョン（Google Chrome、Safari、Edge等）でのご利用を推奨いたします。",
  },
];

export default function LawPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-24 md:px-8">
      <Link
        href="/"
        className="font-display text-sm tracking-[0.22em] text-neutral-200 transition-colors hover:text-white"
      >
        ← BASE
      </Link>
      <h1 className="mt-10 text-3xl font-medium text-white">
        特定商取引法に基づく表記
      </h1>
      <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {items.map(({ term, detail }) => (
          <div
            key={term}
            className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8"
          >
            <dt className="text-sm font-medium leading-7 text-neutral-300 md:text-base">
              {term}
            </dt>
            <dd className="text-sm leading-7 text-neutral-100 md:text-base md:leading-8">
              {detail}
            </dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
