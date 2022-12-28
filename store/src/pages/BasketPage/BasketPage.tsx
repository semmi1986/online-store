import style from "./BasketPage.module.css";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { BasketPagePullArr } from "../../types/types";
import { Map } from "typescript";

function BasketPage() {

  const [itemsArr, setItemsArr]=useState<BasketPagePullArr | null>()

  useEffect(()=>{
    (JSON.parse(localStorage.getItem('Basket') || '{}')) ? setItemsArr((JSON.parse(localStorage.getItem('Basket') || '{}'))) : setItemsArr(null);
  },[])

  const pullItems = () =>{
    console.log(itemsArr)
    return (
      <div></div>
    );
  }


  return (
    <div className={style.basket__page_container}>
      <div className={style.basket__page_two_rows}>
        <div className={style.products__container}>

        </div>
        <div className={style.summary__container} onClick={()=> pullItems()}>
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
