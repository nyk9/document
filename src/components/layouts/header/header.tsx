import style from "./header.module.css";

const Header = (props: { text?: string }) => {
  return <h1 className={style.header}>{props.text}</h1>;
};

export default Header;
