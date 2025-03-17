import { CookieItems } from "../types";

const CookieItemList = (props: { data: CookieItems[] }) => {
  const items = props.data;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CookieItemList;
