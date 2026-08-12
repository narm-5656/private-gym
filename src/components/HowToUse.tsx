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
    note: "キャンセルは利用開始の2時間前まで可能です。",
  },
  {
    icon: KeyRound,
    step: "02",
    title: "暗証番号発行",
    body: "「利用開始の2時間前」に、入室用の暗証番号が通知されます。",
    note: "直前の利用予約の場合は決済完了直後に通知されます。",
  },
  {
    icon: MapPin,
    step: "03",
    title: "予約時間に現地へ",
    body: "ご予約の日時に合わせて店舗へお越しください。",
    note: "暗証番号は予約開始時間より有効となります。ご予約時間以前の入室はできません。",
  },
  {
    icon: DoorOpen,
    step: "04",
    title: "入室",
    body: "暗証番号を入力してご入室ください。",
    note: "土足禁止となりますので、室内履きをご持参ください。レンタルシューズも完備しています。",
  },
  {
    icon: LogOut,
    step: "05",
    title: "退室",
    body: "簡易清掃の上、予約時間内にご退室ください。",
    note: "次にご利用される方のため、器具の拭き上げ、掃除機によるホコリ・髪の毛の清掃にご協力をお願いいたします。",
  },
];

const noticeGroups = [
  {
    title: "施設・設備について",
    items: [
      "土足での入室（室内用トレーニングシューズをご持参いただくか、当施設の無料レンタルシューズをご利用ください）",
      "施設内の設備・備品を故意に破損・汚損する行為、および持ち出し",
      "施設内での喫煙、火気の使用、および食事（プロテインや蓋つきの飲料による水分補給は可能です）",
      "洗面台の不適切な使用や水浴び（シャワー設備はございません）",
    ],
  },
  {
    title: "トレーニング時のマナーについて",
    items: [
      "バーベルやダンベルを床に落とす・叩きつける行為（必ずセーフティバーをご使用の上、静かに床に置いてください）",
      "大声や奇声を発する行為、スピーカーでの過度な大音量での音楽再生など、近隣の迷惑となる行為",
    ],
  },
  {
    title: "ご予約・ご利用時間について",
    items: [
      "ご予約時間を超過しての滞在（次の利用者様のご迷惑となりますので、お着替え・清掃を含め、退室時間は厳守してください）",
    ],
  },
];

const violationNotices = [
  "本規約に違反する重大な行為、および他のお客様のご迷惑となる行為が防犯カメラ等で発覚した場合、今後の当施設のご利用をお断りさせていただきます。",
  "施設・備品の破損、過度な汚損、その他当ジムの営業に支障をきたす悪質な違反が認められた場合は、原状回復にかかる実費等の損害賠償、ならびに営業補償（違約金等）を法的措置に基づき厳格に請求いたします。",
  "違反行為による処分の際、ギフトカード残額の返金は一切いたしませんので、あらかじめご了承ください。",
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
              ご利用にあたってのお願い（禁止・注意事項）
            </h3>
            <p className="mt-4 text-base leading-7 text-neutral-200">
              皆様に快適・安全にご利用いただくため、以下の行為を禁止いたします。
            </p>

            <div className="mt-8 space-y-8">
              {noticeGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-medium tracking-wide text-white md:text-base">
                    {group.title}
                  </h4>
                  <ul className="mt-3 space-y-3 text-base leading-7 text-neutral-200">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0" aria-hidden>
                          ・
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-sm font-medium tracking-wide text-white md:text-base">
                【違反時の対応について】
              </h4>
              <ul className="mt-3 space-y-3 text-base leading-7 text-neutral-200">
                {violationNotices.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0" aria-hidden>
                      ・
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
