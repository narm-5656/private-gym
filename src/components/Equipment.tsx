"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

const equipment = [
  {
    name: "EVOLGEAR 5in1 マルチラック",
    image: "https://placehold.co/800x1000/1a1a1a/AAA?text=EVOLGEAR+5in1",
    className: "md:col-span-2 md:row-span-2 min-h-[420px] md:min-h-[640px]",
  },
  {
    name: "固定式ダンベル 1〜30kg",
    image: "https://placehold.co/800x600/1f1f1f/AAA?text=Dumbbells",
    className: "md:col-span-2 min-h-[260px] md:min-h-[312px]",
  },
  {
    name: "アジャスタブルダンベル 32kg",
    image: "https://placehold.co/800x600/181818/AAA?text=Adjustable+DB",
    className: "md:col-span-2 min-h-[260px] md:min-h-[312px]",
  },
  {
    name: "Bluetooth スピーカー",
    image: "https://placehold.co/1600x700/161616/AAA?text=Bluetooth+Speaker",
    className: "md:col-span-4 min-h-[240px] md:min-h-[280px]",
  },
];

export function Equipment() {
  return (
    <section id="equipment" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">EQUIPMENT</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            設備・マシン
          </h2>
        </FadeIn>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
          {equipment.map((item, index) => (
            <FadeIn
              key={item.name}
              delay={index * 0.06}
              className={`group relative overflow-hidden bg-surface ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <p className="absolute bottom-0 left-0 p-5 text-sm tracking-wide text-white md:p-6 md:text-base">
                {item.name}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
