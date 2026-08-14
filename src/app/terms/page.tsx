import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | BASE",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-24 md:px-8">
      <Link
        href="/"
        className="font-display text-sm tracking-[0.22em] text-neutral-200 transition-colors hover:text-white"
      >
        ← BASE
      </Link>

      <h1 className="mt-10 text-3xl font-medium text-white">利用規約</h1>

      <div className="mt-10 space-y-10 text-base leading-8 text-neutral-200">
        <p>
          この利用規約（以下「本規約」）は、BASE
          -24h private gym-（以下「当施設」）が提供するサービスの利用条件を定めるものです。当施設をご利用されるお客様（以下「利用者」）には、本規約に従ってサービスをご利用いただきます。ご予約が完了した時点で、本規約のすべての記載内容に同意したものとみなされます。
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            第1条（利用資格と定員）
          </h2>
          <ol className="list-decimal space-y-3 pl-6 marker:text-neutral-400">
            <li>
              当施設は、1回の予約につき「最大3名様」まで同額でご利用いただけます。（パーソナルトレーナー様の同伴指導も可能です）
            </li>
            <li>
              <p>以下の項目に該当する方の利用は固くお断りいたします。</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neutral-400">
                <li>本規約を遵守できない方</li>
                <li>
                  暴力団、暴力団関係企業・団体またはその関係者、その他反社会的勢力に属している方
                </li>
                <li>
                  医師等により運動を禁じられている方、または体調が優れない方
                </li>
                <li>酒気を帯びている方</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            第2条（予約とキャンセル・変更）
          </h2>
          <ol className="list-decimal space-y-3 pl-6 marker:text-neutral-400">
            <li>
              当施設は完全予約制です。WEBサイトより事前のご予約と決済をお願いいたします。
            </li>
            <li>
              ご予約のキャンセルおよび時間変更は、ご利用開始時間の【2時間前】までシステム上にて可能です。
            </li>
            <li>
              期限を過ぎてのキャンセル、および無断キャンセルの場合は、利用料金の100%をキャンセル料として申し受けます。
            </li>
            <li>
              とりあえずの枠確保や過度なキャンセルなど、他のお客様のご迷惑となる行為と当施設が判断した場合、事前の通告なくご予約の制限を行う場合がございます。
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            第3条（禁止事項・ルール）
          </h2>
          <p>
            当施設を安全かつ快適にご利用いただくため、以下の行為を固く禁じます。違反が発覚した場合、即時退室および今後の利用をお断りいたします。
          </p>
          <ol className="list-decimal space-y-3 pl-6 marker:text-neutral-400">
            <li>
              土足での入室（室内用トレーニングシューズをご持参いただくか、当施設のシューズをご利用ください）
            </li>
            <li>
              バーベルやダンベルを床に落とす・叩きつける行為（必ずセーフティバーをご使用の上、静かに床に置いてください）
            </li>
            <li>
              大声や奇声を発する行為、スピーカーでの過度な大音量での音楽再生など、近隣の迷惑となる行為
            </li>
            <li>
              施設内での喫煙、火気の使用、および食事（プロテインや蓋つきの飲料による水分補給は可能です）
            </li>
            <li>
              ご予約時間終了後10分間（簡易清掃・退室のためのお時間）を超えての滞在（次の利用者様のご迷惑となりますので、退室期限は厳守してください）
            </li>
            <li>
              施設内の設備、備品を故意に破損・汚損する行為、および持ち出し
            </li>
            <li>
              シャワー設備のない当施設内での水浴びや、洗面台の不適切な使用
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">
            第4条（防犯カメラの作動について）
          </h2>
          <p>
            当施設は無人運営のため、お客様の安全管理・防犯・トラブル防止を目的として、施設内に24時間作動の防犯カメラを設置・録画しております。利用者はこれに同意するものとします。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">第5条（損害賠償）</h2>
          <ol className="list-decimal space-y-3 pl-6 marker:text-neutral-400">
            <li>
              利用者が当施設の設備、備品、または建物を破損・汚損・紛失した場合、速やかに当施設へ報告するものとし、その修復や買い替えにかかる実費全額を賠償していただきます。
            </li>
            <li>
              利用者の過失により、次の利用者や近隣に損害（営業補償等）が生じた場合、その損害についても賠償の対象となります。
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">第6条（免責事項）</h2>
          <ol className="list-decimal space-y-3 pl-6 marker:text-neutral-400">
            <li>
              当施設内で発生した怪我、事故、トラブル（利用者同士のトラブル含む）について、当施設は一切の責任を負いません。
            </li>
            <li>
              当施設内での盗難、紛失、お忘れ物について、当施設は一切の責任を負いません。貴重品はご自身で管理をお願いいたします。
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-white">第7条（規約の改定）</h2>
          <p>
            当施設は、必要と判断した場合、利用者の事前の承諾を得ることなく本規約を変更できるものとします。変更後の規約は、当施設のWebサイト等に掲示された時点から効力を生じるものとします。
          </p>
        </section>

        <p className="border-t border-white/10 pt-8 text-sm leading-7 text-neutral-300">
          附則：本規約は、2026年9月1日より施行します。
        </p>
      </div>
    </main>
  );
}
