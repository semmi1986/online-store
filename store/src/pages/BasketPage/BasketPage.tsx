import { Link } from "react-router-dom";
import style from "./BasketPage.module.css";
import classNames from "classnames";

function BasketPage() {
  return (
    <div className={style.basket__page_container}>
      <div className={style.basket__page_two_rows}>
        <div className={style.products__container}>

        </div>
        <div className={style.summary__container}>
          <div className={style.summary__container_header}>
            <span className={style.font}>Summary</span>
          </div>
          <div className={style.summary__content}>
          <div>
            <span className={style.font}>
              Proucts : 
              <span className={style.font2}> 0</span>
            </span>
          </div>
          <div>
            <span className={style.font}>
              Total € : 
              <span className={style.font2}> 0</span>
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage
