"use client";

import {
  CalendarCheck,
  KeyRound,
  MapPin,
  DoorOpen,
  LogOut,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "WEB予約",
    body: "希望の日時をオンラインで選択。混雑や待ち時間はありません。",
    note: "※キャンセルは利用開始の2時間前まで可能です。",
  },
  {
    icon: KeyRound,
    step: "02",
    title: "暗証番号発行",
    body: "「利用開始の2時間前」に、入室用の暗証番号が通知されます。",
    note: "※直前の利用予約の場合は決済完了直後に通知されます。",
  },
  {
    icon: MapPin,
    step: "03",
    title: "予約時間に現地へ",
    body: "ご予約の日時に合わせて店舗へお越しください。",
  },
  {
    icon: DoorOpen,
    step: "04",
    title: "入室",
    body: "暗証番号を入力してご入室ください。",
    note: "※土足禁止となりますので、室内履きをご持参ください。レンタルシューズも完備しています。",
  },
  {
    icon: LogOut,
    step: "05",
    title: "退室",
    body: "簡易清掃の上、予約時間内にご退室ください。",
  },
];

const notices = [
  "前後のお客様とのトラブルを防ぐため、「予約時間以降のご入室」および「終了時間の厳守」にご協力をお願いいたします。",
  "次の方が気持ちよく利用できるよう、ご使用後の器具の片付けおよび簡単な清掃（使用器具の拭き掃除、掃除機による床清掃）にご協力をお願いいたします。",
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

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <div className="relative">
                <p className="font-display text-5xl tracking-wider text-white/25 md:text-6xl">
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
                {"note" in item && item.note ? (
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 border-t border-white/12 pt-10">
            <h3 className="text-base font-medium tracking-wide text-white md:text-lg">
              ご利用にあたってのお願い
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-neutral-200">
              {notices.map((notice) => (
                <li key={notice} className="flex gap-2">
                  <span className="shrink-0" aria-hidden>
                    ・
                  </span>
                  <span>{notice}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
