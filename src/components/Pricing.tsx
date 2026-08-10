"use client";

import { FadeIn } from "./FadeIn";

const dropIn = [
  { duration: "60分", price: "1,900" },
  { duration: "90分", price: "2,850" },
  { duration: "120分", price: "3,800" },
];

const tickets = [
  { duration: "60分", price: "19,000", per: "約1,727" },
  { duration: "90分", price: "28,500", per: "約2,591" },
  { duration: "120分", price: "38,000", per: "約3,455" },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-white/10 bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">料金</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            料金プラン
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <div className="h-full border border-white/12 bg-background p-7 md:p-9">
              <p className="font-display text-sm tracking-[0.22em] text-muted">
                DROP-IN
              </p>
              <h3 className="mt-3 text-xl text-white">都度払い</h3>
              <ul className="mt-8 space-y-0 divide-y divide-white/10">
                {dropIn.map((plan) => (
                  <li
                    key={plan.duration}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="text-neutral-200">{plan.duration}</span>
                    <span className="font-display text-2xl tracking-wide text-white">
                      ¥{plan.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative h-full border border-white bg-background p-7 md:p-9">
              <p className="absolute right-5 top-5 font-display text-[10px] tracking-[0.2em] text-black md:right-7 md:top-7">
                <span className="bg-white px-2.5 py-1">BEST VALUE</span>
              </p>
              <p className="font-display text-sm tracking-[0.22em] text-muted">
                TICKET
              </p>
              <h3 className="mt-3 text-xl text-white">回数券</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-200">
                10回分の料金で
                <span className="text-white">11回使える</span>
                。1回あたり約9%お得。
              </p>
              <ul className="mt-6 space-y-0 divide-y divide-white/10">
                {tickets.map((plan) => (
                  <li
                    key={plan.duration}
                    className="flex items-end justify-between gap-4 py-5"
                  >
                    <div>
                      <p className="text-neutral-200">{plan.duration} 回数券</p>
                      <p className="mt-1 text-sm text-neutral-300">
                        1回あたり {plan.per}円
                      </p>
                    </div>
                    <span className="font-display text-2xl tracking-wide text-white">
                      ¥{plan.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-10 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center border border-white bg-white px-10 py-4 font-display text-xs tracking-[0.24em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              今すぐ予約する
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
