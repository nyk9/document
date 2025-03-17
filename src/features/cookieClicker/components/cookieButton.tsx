"use client";

import { useCookieClickerCount } from "../hooks/useCount";

const CookieButton = () => {
  const { count, setCount } = useCookieClickerCount();
  return (
    <div>
      <div>
        <h1>Cookie Clicker</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => (count = count + 1))}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default CookieButton;
