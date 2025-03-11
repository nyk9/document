// page.tsx
import { Suspense } from "react";
import SkeletonHeader from "@/components/ui/skeleton/skeletonHeader";
import SkeletonText from "@/components/ui/skeleton/skeletonText";
import style from "./page.module.css";
import Image from "next/image";
import Tooltip from "@/components/ui/tooltip/tooltip";
import Header from "@/components/layouts/header/header";
import { fetchWithDelay } from "@/lib/fetchWithDelay";

// メインページコンポーネント
export default function Page() {
  return (
    <div className={style.container}>
      <Suspense fallback={<SkeletonHeader />}>
        <Header text="constants" />
      </Suspense>

      <Suspense fallback={<SkeletonText />}>
        <DelayedContent />
      </Suspense>
    </div>
  );
}

async function DelayedContent() {
  // 重要: 実際のデータフェッチをシミュレート
  const content = await fetchWithDelay(3000, {
    heading: "constantsってなんぞや？",
    description: "constantsはsrc内で使用する定数を格納する場所",
  });

  return (
    <div className={style.main}>
      <p className={style.head}>{content.heading}</p>
      <p>{content.description}</p>
      <p>定数を使用する際はここからインポートする必要がある</p>
      <div className={style.content}>
        <p>① 例えば、以下のように定数ファイルを作成します：</p>
        <div>
          <Image
            src="/const1.png"
            alt="constants定義例"
            width={1000}
            height={150}
            quality={100}
          />
        </div>
        <p>② ①で定義した定数を、以下のようにインポートして使用します：</p>
        <div>
          <Image
            src="/const2.png"
            alt="constants使用例"
            width={1000}
            height={300}
            quality={100}
          />
        </div>
        <p className={style.precautions}>
          ③ 注意点：定数は<Tooltip text="※大文字とアンダースコア">スネークケース</Tooltip>で命名するのが一般的です。<br />
          例: API_URL, SITE_TITLE, ITEMS_PER_PAGE
        </p>
        <p>
          ④ プロジェクト全体で使用する定数を一元管理することで、変更が必要な場合に
          一箇所だけを修正すれば良くなり、メンテナンス性が向上します。
        </p>
      </div>
    </div>
  );
}