import Sort from "../../components/Sort/Sort";
import Cards from "../../components/Cards/Cards";
import style from './homePage.module.css'


function HomePage() {
  return (
    <main>
      <h1>HOME PAGE</h1>
      <div className={style.main__page}>
      <Sort/>
      <Cards/>
      </div>
    </main>
  )
}

export default HomePage