import Cookie from "@/features/cookieClicker/components/cookie";
import { getItems } from "@/features/cookieClicker/lib/getItems";

export default async function Page() {
  const data = await getItems();
  console.log(data);
  return (
    <div>
      <Cookie data={data} />
    </div>
  );
}
