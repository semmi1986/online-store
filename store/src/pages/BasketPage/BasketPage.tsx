import React, { useState, useEffect } from "react";
import style from "./BasketPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";


function BasketPage() {
  const [itemsArr, setItemsArr]=useState<BasketPagePullArr[]>(JSON.parse(localStorage.getItem('Basket')))

  console.log(itemsArr);
  

  useEffect(()=>{
    (JSON.parse(localStorage.getItem('Basket'))) ? setItemsArr((JSON.parse(localStorage.getItem('Basket')))) : setItemsArr(null);
  },[])


  const pullItems = () => {
   return itemsArr.map((el, index) => 
    <div key={el.id} className={style.items__container}>
      <div className={classNames(style.font3, style.round)}>{index + 1}</div>
      <div 
      className={style.image} 
      style={{
          background: `url(${el.thumbnail})`,
          backgroundSize: `100% 100%`,
        }}>
      </div>
      <div className={classNames(style.font3, style.title)}>
        <div 
        style={{textAlign: "center"}}>
          <span className={style.font6}>{el.title}</span>
        </div>
        <div
        className={style.description__container}>
          <span className={classNames(style.font4, style.bottom__line)}>{el.description}</span>
        </div>
        <div className={style.two_rows}>
          <div className={style.font5}>Ratting: {el.rating}</div>
          <div className={style.font5}>Discount: {el.discountPercentage}%</div>
        </div>
      </div>
      <div className={style.counter__container}>
      <div className={classNames(style.font3, style.round)}>+</div>
        <div className={style.font3}>{1}</div>
        <div className={classNames(style.font3, style.round)}>-</div>
      </div>
    </div> )
  }

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
  )
}

export default BasketPage