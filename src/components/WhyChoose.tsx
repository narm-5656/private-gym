"use client";

import { FadeIn } from "./FadeIn";

const features = [
  {
    step: "01",
    title: "完全個室・貸切だから誰にも気を遣わない",
    body: [
      "当ジムは、お客様お一人（またはグループ）でご利用いただく完全貸切制。",
      "マシンの順番待ちや周囲の視線も気にせず、ご自身のペースでトレーニングに集中できます。",
    ],
  },
  {
    step: "02",
    title: "業務用グレードの本格設備を独り占め",
    body: [
      "一般的なジムにも採用されている業務用グレードのマルチラックを完備。",
      "フリーウェイトから多彩なトレーニングまで、充実した設備を貸切でご利用いただけます。",
    ],
  },
  {
    step: "03",
    title: "予約時間はトレーニングのためだけに",
    body: [
      "予約制の個室ジムでは、着替えや片付けの時間も予約枠に含まれることが少なくありません。",
      "当ジムでは、予約時間とは別に「10分間」をご用意しているので、予約いただいた時間をまるごとトレーニングに使っていただけます。",
    ],
  },
];

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
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {features.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <p className="font-display text-5xl tracking-wider text-white/25 md:text-6xl">
                {item.step}
              </p>
              <h3 className="mt-5 text-lg font-medium tracking-wide text-white md:text-xl">
                {item.title}
              </h3>
              <div className="mt-4 space-y-3 text-base leading-7 text-neutral-200">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
