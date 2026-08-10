"use client";

import { CalendarCheck, KeyRound, DoorOpen } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "WEB予約",
    body: "希望の日時をオンラインで選択。混雑や待ち時間はありません。",
  },
  {
    icon: KeyRound,
    step: "02",
    title: "暗証番号発行",
    body: "予約完了後、入室用の暗証番号が発行されます。",
  },
  {
    icon: DoorOpen,
    step: "03",
    title: "手ぶらで入室",
    body: "受付なし。番号を入力して入室し、すぐにトレーニングを開始。",
  },
];

export function HowToUse() {
  return (
    <section id="howto" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">利用方法</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            ご利用の流れ
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <div className="relative">
                <p className="font-display text-5xl tracking-wider text-white/10 md:text-6xl">
                  {item.step}
                </p>
                <item.icon
                  className="mt-4 text-muted"
                  size={28}
                  strokeWidth={1.25}
                />
                <h3 className="mt-5 text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-neutral-200">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
