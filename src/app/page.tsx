import style from "./page.module.css";
import Header from "@/components/layouts/header/header";

export default function Page() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.headSentence}>
          <Header text={"3PRO 2025"} />
        </div>
        <div className={style.mainSentence}>
          <p>
            このドキュメントは3年プロジェクト2025の開発を行う際に、必要な知識やルールをまとめたものです
          </p>
          <br />
          <br />
          <p>画面左のサイドバーから知りたい情報の元へアクセスできます</p>
          <br />
          <br />
          <br />
          <p className={style.precautions}> 開発の際のお約束</p>
          <p>開発を行う際は各ページの注意事項を遵守してください</p>
        </div>
      </div>
    </>
  );
}
