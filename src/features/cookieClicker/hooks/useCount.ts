import { useState } from "react";

export function useCookieClickerCount() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
