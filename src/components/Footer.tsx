import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl tracking-[0.22em] text-white">
            BASE
          </p>
          <p className="mt-4 text-base leading-7 text-neutral-200">
            無人レンタルジム / 完全個室貸切 24時間
          </p>
        </div>

        <div>
          <p className="section-label">施設情報</p>
          <ul className="mt-4 space-y-2 text-base leading-7 text-neutral-200">
            <li>BASE 宮原</li>
            <li>埼玉県さいたま市北区宮原町</li>
            <li>
              <a href="#access" className="transition-colors hover:text-white">
                アクセスを見る
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="section-label">リンク</p>
          <ul className="mt-4 space-y-2 text-base text-neutral-200">
            <li>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                利用規約
              </Link>
            </li>
            <li>
              <Link
                href="/legal"
                className="transition-colors hover:text-white"
              >
                特定商取引法に基づく表記
              </Link>
            </li>
            <li>
              <a href="#pricing" className="transition-colors hover:text-white">
                予約する
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-6">
        <p className="font-display text-xs tracking-[0.18em] text-neutral-400">
          © {new Date().getFullYear()} BASE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
