"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "更衣室やシャワーはありますか？",
    a: "完全個室のため、施設内に更衣室・シャワーはございません。手ぶらで来館し、トレーニングに集中できるシンプルな空間です。",
  },
  {
    q: "初心者でも利用できますか？",
    a: "はい。無人・貸切のため、他人の目を気にせず自分のペースでトレーニングできます。マシンの基本的な使い方は館内案内をご確認ください。",
  },
  {
    q: "キャンセルはできますか？",
    a: "ご予約の一定時間前まではWEBからキャンセル可能です。詳細は利用規約をご確認ください。",
  },
  {
    q: "駐車場はありますか？",
    a: "近隣のコインパーキングをご利用ください。アクセス詳細はご予約時のご案内もあわせてご確認ください。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="section-label">FAQ</p>
          <h2 className="mt-5 text-3xl font-medium tracking-wide text-white md:text-4xl">
            よくある質問
          </h2>
        </FadeIn>

        <div className="mt-12 border-t border-white/12">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.q} delay={index * 0.04}>
                <div className="border-b border-white/12">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base text-white md:text-lg">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <Minus
                        className="shrink-0 text-neutral-200"
                        size={18}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Plus
                        className="shrink-0 text-neutral-200"
                        size={18}
                        strokeWidth={1.5}
                      />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base leading-7 text-neutral-200">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
