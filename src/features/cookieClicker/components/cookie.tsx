"use client";
import CookieButton from "./cookie-button";
import { useCookieClickerCount } from "../hooks/useCount";
import { CookieItems } from "../types";
import CookieItemsList from "./cookie-item-list";

const Cookie = (props: { data: CookieItems[] }) => {
  const data = props.data;
  const { count, setCount } = useCookieClickerCount();
  return (
    <div>
      <CookieButton count={count} setCount={setCount} />
      <CookieItemsList data={data} />
    </div>
  );
};
export default Cookie;
