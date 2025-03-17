/**
 * localhost:3000/api/cookie からアイテムのリストを取得する関数
 * @returns {CookieClickerItem[]} - An array of items that can be purchased in the cookie clicker game
 */
export async function getItems() {
  const response = await fetch("http://localhost:3000/api/cookie", {
    cache: "no-store",
  });
  const items = await response.json();
  return items;
}
