/**
 * クッキークリッカーの状態を管理するための型定義
 * id {number} アイテムのID
 * cost {number} アイテムのコスト
 * value {number} アイテムの効果の値
 * effect {"1クリックごとのクッキー数増加" | "自動的にクッキー数増加"} アイテムの効果の種類
 * name {string} アイテムの名前
 */
export interface CookieItems {
  id: number;
  cost: number;
  value: number;
  effect: "1クリックごとのクッキー数増加" | "自動的にクッキー数増加";
  name: string;
}
