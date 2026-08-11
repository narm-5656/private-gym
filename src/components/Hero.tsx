"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="https://placehold.co/1920x1080/222222/FFF?text=Hero+Image"
        alt="完全個室ガレージジムの空間"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-baseline gap-3 text-white sm:gap-4 md:gap-5"
        >
          <span className="font-display text-6xl leading-none tracking-[0.18em] sm:text-7xl md:text-8xl lg:text-9xl">
            BASE
          </span>
          <span className="font-display text-2xl tracking-[0.12em] text-neutral-200 sm:text-3xl md:text-4xl lg:text-5xl">
            -24h private gym-
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-2xl font-medium leading-relaxed tracking-wide text-white md:mt-10 md:text-3xl md:leading-snug"
        >
          完全個室トレーニングジム
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg"
        >
          宮原駅徒歩９分・加茂宮駅徒歩５分 / 入会金・契約不要 /
          <br />
          完全予約制 / 24時間営業 / 店前駐輪OK
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-display text-xs tracking-[0.24em] text-black transition-colors hover:bg-transparent hover:text-white md:px-10"
          >
            今すぐ予約する
          </a>
        </motion.div>
      </div>
    </section>
  );
}
