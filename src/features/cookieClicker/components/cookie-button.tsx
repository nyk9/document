"use client";
const CookieButton = (props: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      <div>
        <h1>Cookie Clicker</h1>
        <p>Count: {props.count}</p>
        <button onClick={() => props.setCount((count) => (count = count + 1))}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default CookieButton;
