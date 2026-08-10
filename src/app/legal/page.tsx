import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | BASE",
};

export default function LegalPage() {
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
      <dl className="mt-10 space-y-6 text-sm leading-8">
        {[
          ["販売事業者", "BASE（ダミー表記）"],
          ["所在地", "埼玉県さいたま市北区宮原町"],
          ["連絡先", "ご予約完了メールにてご案内します"],
          ["販売価格", "各プランの表示価格（税込）"],
          ["支払方法", "クレジットカード決済（予定）"],
          ["サービス提供時期", "ご予約日時に施設をご利用いただけます"],
          [
            "キャンセル・返金",
            "利用規約および予約時の案内に従います",
          ],
        ].map(([term, detail]) => (
          <div
            key={term}
            className="grid gap-1 border-b border-white/10 pb-5 md:grid-cols-[180px_1fr] md:gap-6"
          >
            <dt className="text-neutral-300">{term}</dt>
            <dd className="text-neutral-100">{detail}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
