import SortPage from "../SortPage/SortPage";
import Cards from "../../components/Cards/Cards";
import style from './homePage.module.css'


function HomePage() {
  return (
    <main>
      <div className={style.main__page}>
      <SortPage/>
      <Cards/>
      </div>
    </main>
  )
}

export default HomePage