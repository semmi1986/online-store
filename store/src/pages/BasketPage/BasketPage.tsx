import React, { useState, useEffect } from "react";
import style from "./BasketPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";
import BasketCards from "../../components/BasketCards/BasketCards";

interface IBasketPageProps{
  onChanck: (i: number) => void
  onChanck2: (i: number) => void

}

const BasketPage: React.FC<IBasketPageProps> = ({onChanck, onChanck2 }) => {
  const [itemsArr, setItemsArr]=useState<BasketPagePullArr[]>(JSON.parse(localStorage.getItem('Basket')))
  const [counter, setCounter] =useState(JSON.parse(localStorage.getItem('Count')));
  const [totalPrice, setTotalPrice] =useState(JSON.parse(localStorage.getItem('Summary')));
  const [summary, setSummary] =useState(1);

  useEffect(()=>{
    onChanck(counter)
    onChanck2(totalPrice)
  })

  useEffect(()=>{
    (JSON.parse(localStorage.getItem('Basket'))) ? setItemsArr((JSON.parse(localStorage.getItem('Basket')))) : setItemsArr(null);
  },[])

  const items = itemsArr.map((item) => (
  <BasketCards 
   key={item.id}
   item={item}
  />));

  return (
    <div className={style.basket__page_container}>
      <div className={style.basket__page_two_rows}>
        <div className={style.products__container}>
            <div className={classNames(style.header__products_container,style.font)}>Products In Cart</div>
        {pullItems()}
        </div>
        <div className={style.summary__container}>
          <div className={style.summary__container_header}>
            <span className={style.font} onClick={()=> pullItems()} >Summary</span>
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
  );
}

export default BasketPage