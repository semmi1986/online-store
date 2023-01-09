import React, { useState, useEffect } from "react";
import style from "./BasketPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";
import Paginate from "../../components/Paginate/Paginate";
import Page404 from "../404Page/Page404";


interface IBasketPageProps {
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  totalPrice1: number 
  counter1: number
  onShowForm: (i: boolean) => void
  localStore: BasketPagePullArr[]
  
}

const BasketPage: React.FC<IBasketPageProps> = ({ totalPrice1, counter1, onChanck, onChanck2, onShowForm, localStore }) => {
  

  const getUnique = (localStore: BasketPagePullArr[]) => {
    return localStore.filter((el: BasketPagePullArr, ind:number) => ind === localStore.indexOf(el));
  };



  const [newData,setNewData] = useState(getUnique(localStore));
  




  if(!(JSON.parse(localStorage.getItem("Count")))){
    return ( <div><span className={style.font}>Cart is Empty</span></div>)
  }else {return (
    <div className={style.basket__page_container}>
      <div className={style.products__cards}>
        <div className={classNames(style.header__products_container, style.font)}>Products In Cart</div>
         <Paginate newData={newData} setNewData={setNewData} localStore={localStore} onChanck={onChanck} onChanck2={onChanck2} counter1={counter1} totalPrice1={totalPrice1}/>
      </div>
      <div className={style.summary__container}>
          <div className={style.summary__container_header}>
            <span className={style.font}>Summary</span>
          </div>
          <div className={style.summary__content}>
            <div className={style.spaces}>
              <div className={style.item__span}>
                Proucts:
                <span className={style.font2}> {counter1}</span> 
              </div>
              <div className={style.item__span}>
                Total: <span className={style.font2}> €{totalPrice1}.00</span>
              </div>
            </div>
            <div>
              <input type="text" className={style.item__input} placeholder="Enter promo code"/>
              <span className={style.font7}>Promo for test: 'RS', 'EPM'</span>
            </div>
            <button onClick={() => onShowForm(true)} className={style.button}>Buy now</button>
          </div>
        </div>
    </div>
  );}
};

export default BasketPage;