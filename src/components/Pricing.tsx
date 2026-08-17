"use client";

import { BOOKING_URL, GIFT_CARD_URL } from "@/lib/booking";
import { FadeIn } from "./FadeIn";

const dropIn = [
  { duration: "60分", price: "1,900" },
  { duration: "90分", price: "2,750" },
  { duration: "120分", price: "3,600" },
];

const unitPrices = [
  { duration: "60分", price: "1,710" },
  { duration: "90分", price: "2,475" },
  { duration: "120分", price: "3,240" },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-white/10 bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">PRICING</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            料金プラン
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300 md:text-base">
            各予約時間に、簡易清掃・退室準備のための「10分間」が付きます。
          </p>
        </FadeIn>

        <div className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
            <FadeIn className="h-full">
              <div className="flex h-full flex-col border border-white bg-background p-7 md:p-9">
                <p className="font-display text-sm tracking-[0.22em] text-muted">
                  DROP-IN
                </p>
                <h3 className="mt-3 text-xl text-white">都度決済（前払い不要）</h3>
                <ul className="mt-8 space-y-0 divide-y divide-white/10">
                  {dropIn.map((plan) => (
                    <li
                      key={plan.duration}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className="text-base text-neutral-200 md:text-lg">
                        {plan.duration}
                      </span>
                      <span className="font-display text-xl tracking-wide text-white md:text-2xl">
                        ¥{plan.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn className="h-full" delay={0.1}>
              <div className="flex h-full flex-col border border-white bg-background p-7 md:p-9">
                <p className="font-display text-sm tracking-[0.22em] text-muted">
                  BEST VALUE
                </p>
                <h3 className="mt-3 max-w-xl text-xl text-white">
                  ギフトカード（前払い残高）利用で10%OFF
                </h3>
                <div className="mt-3 max-w-xl space-y-2 text-base leading-relaxed text-neutral-200">
                  <p>ギフトカードは19,000円から購入・チャージできます。</p>
                  <p>ご予約時間に応じた料金が、残高から差し引かれます。</p>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-0 border-collapse text-left">
                    <tbody className="divide-y divide-white/10 border-t border-white/20">
                      {unitPrices.map((row) => (
                        <tr key={row.duration}>
                          <td className="py-4 pr-4 text-base text-neutral-200 md:text-lg">
                            {row.duration}
                          </td>
                          <td className="py-4 text-right font-display text-xl tracking-wide text-white md:text-2xl">
                            <span className="mr-2 text-sm tracking-normal text-neutral-300 md:text-base">
                              実質
                            </span>
                            ¥{row.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-4 grid lg:grid-cols-2 lg:gap-8">
              <div className="hidden lg:block" aria-hidden />
              <div className="flex justify-end">
                <a
                  href={GIFT_CARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white bg-white px-6 py-4 font-display text-sm tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-white"
                >
                  ギフトカードメニュー
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.14}>
          <div className="mt-10 border border-white bg-background p-7 md:p-9">
            <p className="font-display text-sm tracking-[0.22em] text-muted">
              SHARE & SAVE
            </p>
            <h3 className="mt-3 text-xl text-white md:text-2xl">
              複数人での「割り勘」もお得です。
            </h3>
            <div className="mt-5 space-y-3 text-base leading-7 text-neutral-200">
              <p>
                当ジムは
                一度の予約で最大3名様まで、同時にご利用いただけます。
              </p>
              <p>
                ご友人やパートナーとの合同トレーニングなら、1人あたりの料金が安くなります。
              </p>
              <p>
                パーソナルトレーナー様の指導場所としての同伴利用も大歓迎です。
              </p>
            </div>

            <p className="mt-8 text-sm text-neutral-300">
              料金シミュレーション（基本料金 ¥1,900 / 60分 の場合）
            </p>
            <ul className="mt-4 space-y-0 divide-y divide-white/10 border-y border-white/10">
              <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-neutral-200">2名でご利用</span>
                <div className="sm:text-right">
                  <p className="font-display text-2xl tracking-wide text-white">
                    1人あたり ¥950
                    <span className="ml-2 text-sm tracking-normal text-neutral-300">
                      / 60分
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="text-neutral-200">3名でご利用</span>
                <div className="sm:text-right">
                  <p className="font-display text-2xl tracking-wide text-white">
                    1人あたり 約¥633
                    <span className="ml-2 text-sm tracking-normal text-neutral-300">
                      / 60分
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mt-10 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white bg-white px-10 py-4 font-display text-sm tracking-[0.24em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              今すぐ予約する
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
