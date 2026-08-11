import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | BASE",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-24 md:px-8">
      <Link
        href="/"
        className="font-display text-sm tracking-[0.22em] text-neutral-200 transition-colors hover:text-white"
      >
        ← BASE
      </Link>

      <h1 className="mt-10 text-3xl font-medium text-white">
        プライバシーポリシー
      </h1>

      <div className="mt-10 space-y-10 text-base leading-8 text-neutral-200">
        <p>
          BASE
          -24h private gym-（以下「当施設」）は、お客様の個人情報の保護について、以下の通りプライバシーポリシー（個人情報保護方針）を定めます。
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">1. 個人情報の取得</h2>
          <p>
            当施設は、サービスの提供にあたり、以下の個人情報を取得いたします。
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              氏名、電話番号、メールアドレス等、ご予約時に入力いただく情報
            </li>
            <li>
              当施設内および出入口に設置された防犯カメラの映像データ
            </li>
            <li>その他、当施設のご利用に伴いシステム上取得する情報</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            2. 個人情報の利用目的
          </h2>
          <p>取得した個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              ご予約の管理、施設利用のための入退室管理（暗証番号の発行等）
            </li>
            <li>お問い合わせへの対応、および重要なお知らせの送信</li>
            <li>
              施設内の安全管理、防犯対策、およびトラブル発生時の状況確認・対応
            </li>
            <li>サービスの品質向上およびマーケティングデータの分析</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            3. 防犯カメラの設置・録画について
          </h2>
          <p>
            当施設では、お客様の安全確保および防犯のため、施設内に防犯カメラを設置し、24時間の録画を行っております。録画データは厳重に管理し、法令に基づく開示請求やトラブル解決の目的以外には一切使用いたしません。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            4. 個人情報の第三者への提供
          </h2>
          <p>
            当施設は、以下の場合を除き、取得した個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>お客様ご本人の同意がある場合</li>
            <li>法令に基づき開示が必要な場合</li>
            <li>
              人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合（事故や事件発生時の警察・医療機関への提供等）
            </li>
            <li>
              予約システムや決済代行会社など、業務遂行に必要な範囲で委託先に提供する場合
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            5. 個人情報の開示・訂正・削除
          </h2>
          <p>
            お客様からご自身の個人情報の開示、訂正、削除のご請求があった場合は、ご本人であることを確認の上、速やかに対応いたします。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">6. お問い合わせ窓口</h2>
          <p>
            本ポリシーに関するお問い合わせ、または個人情報の取り扱いに関するご相談は、以下の窓口までお願いいたします。
          </p>
          <div className="space-y-2 border-t border-white/10 pt-5">
            <p>屋号：BASE -24h private gym-</p>
            <p>
              メールアドレス：[info@base-gym.com または
              ご自身のメールアドレス]
            </p>
            <p className="text-sm leading-7 text-neutral-300">
              ※お問い合わせは原則としてメールまたはLINE公式アカウントよりお願いいたします。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
