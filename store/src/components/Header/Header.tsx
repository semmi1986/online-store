import style from './header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div className={style.header__logo}>
          LOGO
        </div>
        <div className={style.header__baskets}>
          BASKETS
        </div>
      </div>
    </header>
  )
}

export default Header