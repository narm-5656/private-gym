"use client";

import Image from "next/image";
import { MapPin, Train, Clock } from "lucide-react";
import { FadeIn } from "./FadeIn";

const info = [
  {
    icon: MapPin,
    label: "所在地",
    lines: [
      "〒331-0812 埼玉県さいたま市北区宮原町３丁目６０ 金子第二ビル １階",
      "駐輪スペースあり（自転車3台・原付可）",
    ],
  },
  {
    icon: Train,
    label: "アクセス",
    lines: [
      "宮原駅（JR高崎線）徒歩９分",
      "加茂宮駅（ニューシャトル）徒歩５分",
      "日進駅（JR川越線）自転車５分",
      "土呂駅（JR宇都宮線）自転車10分",
    ],
  },
  {
    icon: Clock,
    label: "営業時間",
    lines: ["24時間営業（完全予約制・無人）"],
  },
];

export function Access() {
  return (
    <section id="access" className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">ACCESS</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            場所・営業時間
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {info.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <div>
                <item.icon
                  className="text-muted"
                  size={26}
                  strokeWidth={1.25}
                />
                <p className="mt-5 text-sm text-neutral-300">{item.label}</p>
                <div className="mt-2 space-y-1 text-base leading-7 text-white md:text-lg">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="relative mt-14 min-h-[240px] overflow-hidden bg-surface md:min-h-[320px]">
            <Image
              src="https://placehold.co/1600x640/1a1a1a/AAA?text=Access+Map"
              alt="BASEへのアクセス地図"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
