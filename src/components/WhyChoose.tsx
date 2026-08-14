"use client";

import { FadeIn } from "./FadeIn";

export function WhyChoose() {
  return (
    <section
      id="reason"
      className="border-b border-white/10 bg-surface px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">FEATURES</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            特徴
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-neutral-200 md:text-lg md:leading-9">
            <p>当ジムでは予約時間を全てトレーニングに使えます。</p>
            <p>
              一般的なレンタルジムで60分の予約をした場合、「60分の枠内」でお着替えや清掃を行うため、実際のトレーニング時間は「45分程度」になってしまいます。
            </p>
            <p>
              当ジムでは、60分のフルトレーニング枠に加え、「お着替え・簡易清掃・退室のためのお時間（10分間）」を無料でサービスしております。
            </p>
            <p>人目も時計も気にせず、限界まで追い込んでください。</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
