import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | BASE",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-24 md:px-8">
      <Link
        href="/"
        className="font-display text-sm tracking-[0.22em] text-neutral-200 transition-colors hover:text-white"
      >
        ← BASE
      </Link>
      <h1 className="mt-10 text-3xl font-medium text-white">利用規約</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-neutral-200">
        <p>
          本利用規約（以下「本規約」）は、BASE（以下「当施設」）が提供する無人レンタルジムサービスの利用条件を定めるものです。ご利用の際は本規約に同意したものとみなします。
        </p>
        <section>
          <h2 className="text-base text-white">1. 利用資格</h2>
          <p className="mt-2">
            当施設は原則として16歳以上の方がご利用いただけます。未成年の方は保護者の同意を得たうえでご利用ください。
          </p>
        </section>
        <section>
          <h2 className="text-base text-white">2. 予約・キャンセル</h2>
          <p className="mt-2">
            ご利用には事前のWEB予約が必要です。キャンセル条件の詳細は予約画面および当施設の案内に従うものとします。
          </p>
        </section>
        <section>
          <h2 className="text-base text-white">3. 禁止事項</h2>
          <p className="mt-2">
            施設・機器の破損行為、第三者への暗証番号の共有、定員を超える入室、危険行為その他当施設が不適切と判断する行為を禁止します。
          </p>
        </section>
        <section>
          <h2 className="text-base text-white">4. 免責</h2>
          <p className="mt-2">
            利用者の自己責任においてトレーニングを行ってください。当施設は、利用者の怪我・紛失・機器トラブル等について、当施設に故意または重過失がある場合を除き責任を負いません。
          </p>
        </section>
      </div>
    </main>
  );
}
