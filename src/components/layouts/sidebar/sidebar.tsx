import React from "react";
import style from "./sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarItem}>
        <Link href={"/"} className={style.sidebarTitle}>
          Home
        </Link>
        <div>
          <Link href={"/directly"} className={style.mainLink}>
            ディレクトリ
          </Link>
          <br />
          <div>
            <Link href={"/directly/src"} className={style.link}>
              src
            </Link>
            <br />
            <Link href={"/directly/app"} className={style.link}>
              app
            </Link>
            <br />
            <Link href={"/directly/components"} className={style.link}>
              components
            </Link>
            <br />
            <Link href={"/directly/constants"} className={style.link}>
              constants
            </Link>
            <br />
            <Link href={"/directly/features"} className={style.link}>
              features
            </Link>
            <br />
            <Link href={"/directly/lib"} className={style.link}>
              lib
            </Link>
            <br />
            <Link href={"/directly/types"} className={style.link}>
              types
            </Link>
            <br />
          </div>
        </div>
        <div>
          <Link href={"/namingConvention"} className={style.mainLink}>
            命名規則
          </Link>
          <br />
          <div>
            <Link href={"/namingConvention/variable"} className={style.link}>
              変数
            </Link>
            <br />
            <Link href={"/namingConvention/function"} className={style.link}>
              関数
            </Link>
            <br />
            <Link href={"/namingConvention/component"} className={style.link}>
              コンポーネント
            </Link>
            <br />
            <Link href={"/namingConvention/file"} className={style.link}>
              ファイル
            </Link>
            <br />
          </div>
        </div>
        <div>
          <Link href={"/styleGuide"} className={style.mainLink}>
            スタイルガイド
          </Link>
          <br />
          <div>
            <Link href={"/styleGuide/css"} className={style.link}>
              CSS Modules
            </Link>
            <br />
          </div>
        </div>
        <div>
          <Link href={"/github"} className={style.mainLink}>
            Git Hub
          </Link>
          <br />
          <div>
            <Link href={"/github/clone"} className={style.link}>
              clone
            </Link>
            <br />
            <Link href={"/layout/sidebar"} className={style.link}>
              サイドバー
            </Link>
            <br />
            <Link href={"/layout/footer"} className={style.link}>
              フッター
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
