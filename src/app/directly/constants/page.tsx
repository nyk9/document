// page.tsx
import { Suspense } from "react";
import SkeletonHeader from "@/components/ui/skeleton/skeletonHeader";
import SkeletonText from "@/components/ui/skeleton/skeletonText";
import style from "./page.module.css";

// メインページコンポーネント
export default function Page() {
  return (
    <div>
      <Suspense fallback={<SkeletonHeader />}>
        <DelayedHeader />
      </Suspense>

      <Suspense fallback={<SkeletonText />}>
        <DelayedContent />
      </Suspense>
    </div>
  );
}

// 1秒遅延するヘッダーコンポーネント
async function DelayedHeader() {
  // 重要: 実際のデータフェッチをシミュレート
  const data = await fetchWithDelay(1000, { title: "constants" });

  return (
    <div className={style.title}>
      <header>{data.title}</header>
    </div>
  );
}

// 3秒遅延するコンテンツコンポーネント
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
      {/* 残りのコンテンツ */}
    </div>
  );
}

// 意図的な遅延付きのフェッチ関数
async function fetchWithDelay(ms: number, data: FetchProps) {
  // 重要: これは fetch のパターンを使うことで Next.js の
  // ストリーミング SSR 機能を正しくトリガーする
  // 単なる setTimeout よりもこのパターンの方が良い
  await new Promise((resolve) => setTimeout(resolve, ms));
  return data;
}

interface FetchProps {
  title?: string;
  heading?: string;
  description?: string;
}
