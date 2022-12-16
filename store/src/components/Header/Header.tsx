import style from './header.module.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div className={style.header__logo}>
        <Link to="/">LOGO</Link>
        </div>
        <div className={style.header__baskets}>
          <Link to="basket">BASKETS</Link>
        </div>
      </div>
    </header>
  )
}

export default Header