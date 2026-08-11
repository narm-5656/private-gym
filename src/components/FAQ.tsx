"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "キャンセル・予約変更はできますか？",
    a: "ご利用開始時間の2時間前まで、システム上でキャンセル・日時変更が可能です。",
  },
  {
    q: "初心者でも利用できますか？",
    a: "可能です。無人・完全個室のため、他人の目を気にせず自分のペースでトレーニングいただけます。マシンの基本的な使い方は、店舗内の案内表示をご確認ください。",
  },
  {
    q: "更衣室やシャワーはありますか？",
    a: "更衣室・シャワーはございません。お着替えの際は、店舗内のトイレをご使用ください。",
  },
  {
    q: "タオルやウェアの貸し出しはありますか？",
    a: "ウェア・タオルの貸し出しはございません。室内用シューズの貸し出しはございます。",
  },
  {
    q: "駐車場・駐輪場はありますか？",
    a: "店舗前に自転車3台・原付2台まで駐輪可能です。お車でお越しの場合は、近隣のコインパーキングをご利用ください。",
  },
  {
    q: "年齢制限はありますか？",
    a: "15歳未満の方は保護者同伴でのみご利用いただけます。",
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
