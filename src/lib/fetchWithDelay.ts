/**
 * 
 * 重要: これは fetch のパターンを使うことで Next.js の
    ストリーミング SSR 機能を正しくトリガーする
    単なる setTimeout よりもこのパターンの方が良い
 * @param ms {number} - 遅延時間(ミリ秒)
 * @param data {string} - 表示したい文字列
 * @returns data {string} - 遅延後の文字列
 */
export async function fetchWithDelay(ms: number, data: FetchProps) {
  
  await new Promise((resolve) => setTimeout(resolve, ms));
  return data;
}

interface FetchProps {
  title?: string;
  heading?: string;
  description?: string;
}
