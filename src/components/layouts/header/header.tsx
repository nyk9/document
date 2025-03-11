import style from "./header.module.css";

const Header = (props: { props?: string }) => {
  return <h1 className={style.header}>{props.props}</h1>;
};

export default Header;
