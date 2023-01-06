import React, { useState, useEffect } from "react";
import style from "./BasketPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";
import BasketCards from "../../components/BasketCards/BasketCards";
import Paginate from "../../components/Paginate/Paginate";


interface IBasketPageProps {
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  totalPrice1: number 
  counter1: number
}

const BasketPage: React.FC<IBasketPageProps> = ({ totalPrice1, counter1, onChanck, onChanck2 }) => {
  const [itemsArr, setItemsArr] = useState<BasketPagePullArr[]>(
    JSON.parse(localStorage.getItem("Basket"))
  );
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("Count"))
  );
  const [totalPrice, setTotalPrice] = useState(
    JSON.parse(localStorage.getItem("Summary"))
  );

  useEffect(() => {
    onChanck(counter);
    onChanck2(totalPrice);
    localStorage.setItem("Count", JSON.stringify(counter1));
    localStorage.setItem("Summary", JSON.stringify(totalPrice1));
    setCounter(JSON.parse(localStorage.getItem("Count")))
    setTotalPrice(JSON.parse(localStorage.getItem("Summary")))
  },[totalPrice1, counter1]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("Basket"))
      ? setItemsArr(JSON.parse(localStorage.getItem("Basket")))
      : setItemsArr(null);
  }, []);

  // const items = itemsArr.map((item, i) => <BasketCards key={i} item={item} />);


  return (
    <div className={style.basket__page_container}>
      <div className={style.products__cards}>
        <div className={classNames(style.header__products_container, style.font)}>Products In Cart</div>
        <Paginate data={itemsArr} onChanck={onChanck} onChanck2={onChanck2} counter1={counter1} totalPrice1={totalPrice1}/>
      </div>
      <div className={style.summary__container}>
          <div className={style.summary__container_header}>
            <span className={style.font}>Summary</span>
          </div>
          <div className={style.summary__content}>
            <div className={style.spaces}>
              <div className={style.item__span}>
                Proucts:
                <span className={style.font2}> {counter}</span> 
              </div>
              <div className={style.item__span}>
                Total: <span className={style.font2}> €{totalPrice}.00</span>
              </div>
            </div>
            <div>
              <input type="text" className={style.item__input} placeholder="Enter promo code"/>
              <span className={style.font7}>Promo for test: 'RS', 'EPM'</span>
            </div>
            <button className={style.button}>Buy now</button>
          </div>
        </div>
    </div>
  );
};

export default BasketPage;