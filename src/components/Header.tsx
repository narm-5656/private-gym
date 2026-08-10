"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#equipment", label: "設備" },
  { href: "#pricing", label: "料金" },
  { href: "#howto", label: "利用方法" },
  { href: "#faq", label: "FAQ" },
  { href: "#access", label: "アクセス" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-white md:gap-3"
        >
          <span className="font-display text-xl tracking-[0.22em] md:text-2xl">
            BASE
          </span>
          <span className="font-display text-base tracking-[0.12em] text-neutral-200 md:text-lg">
            -24h private gym-
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-neutral-200 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center border border-white bg-white px-5 py-2.5 text-sm tracking-wide text-black transition-colors hover:bg-transparent hover:text-white"
          >
            予約する
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-base tracking-wide text-neutral-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center border border-white bg-white px-5 py-3.5 text-sm tracking-wide text-black"
              >
                予約する
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
