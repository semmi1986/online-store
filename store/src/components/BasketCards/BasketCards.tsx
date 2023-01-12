import React, { useState, useEffect } from "react";
import style from "./BasketCards.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";

interface IBasketCardsProps {
  item: BasketPagePullArr;
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  setNewData:(i:BasketPagePullArr[]) => void;
  totalPrice1: number;
  counter1: number;
  index: number;
  localStore:BasketPagePullArr[]
  newData:BasketPagePullArr[]
}

const BasketCards: React.FC<IBasketCardsProps> = ({
  item,
  totalPrice1,
  counter1,
  onChanck,
  onChanck2,
  index,
  newData,
  setNewData,
  localStore,
}) => {
  const [summary, setSummary] = useState(1);




  const getUnique = (localStore: BasketPagePullArr[]) => {
    return localStore.filter((el: BasketPagePullArr, ind:number) => ind === localStore.indexOf(el));
  };



  const addOne = (e: React.MouseEvent) => {
    if(summary < item.stock ){      
      localStore.push(item);
      setNewData(getUnique(newData));
      localStorage.setItem ("Count", JSON.stringify(counter1 + 1));
      localStorage.setItem ("Summary", JSON.stringify(totalPrice1 + item.price));
      localStorage.setItem("Basket", JSON.stringify(localStore));
      localStorage.setItem("uniqeBasket", JSON.stringify(getUnique(newData)));
      onChanck(counter1 + 1);
      onChanck2(totalPrice1 + item.price);
      setSummary(((JSON.parse(localStorage.getItem("Basket"))).map((el:BasketPagePullArr) => el.id === item.id)).filter((element: boolean)=> element === true).length)
    } else {alert('Предмета на сладе больше нет!')}

  };

  const removeOne = (e: React.MouseEvent) => {
    if(summary === 1){
        newData.splice(
        newData.findIndex((el) => el.id === item.id),
        1
        );
        setNewData(getUnique(newData));
        localStore.splice(
          localStore.findIndex((el) => el.id === item.id),
          1
          );
        localStorage.setItem ("Count", JSON.stringify(counter1 - 1));
        localStorage.setItem ("Summary", JSON.stringify(totalPrice1 - item.price));
        localStorage.setItem("Basket", JSON.stringify(localStore));
        localStorage.setItem("uniqeBasket", JSON.stringify(getUnique(newData)));
        onChanck(counter1 - 1);
        onChanck2(totalPrice1 - item.price);
        setSummary(((JSON.parse(localStorage.getItem("Basket"))).map((el:BasketPagePullArr) => el.id === item.id)).filter((element: boolean)=> element === true).length)
    } else {
      localStore.splice(
        localStore.findIndex((el) => el.id === item.id),
        1
        );
        setNewData(getUnique(newData));
        localStorage.setItem ("Count", JSON.stringify(counter1 - 1));
        localStorage.setItem ("Summary", JSON.stringify(totalPrice1 - item.price));
        localStorage.setItem("Basket", JSON.stringify(localStore));
        localStorage.setItem("uniqeBasket", JSON.stringify(getUnique(newData)));
        onChanck(counter1 - 1);
        onChanck2(totalPrice1 - item.price);
        setSummary(((JSON.parse(localStorage.getItem("Basket"))).map((el:BasketPagePullArr) => el.id === item.id)).filter((element: boolean)=> element === true).length)
    }
   
  }



useEffect(()=>{
  setSummary(((JSON.parse(localStorage.getItem("Basket"))).map((el:BasketPagePullArr) => el.id === item.id)).filter((element: boolean)=> element === true).length)
},[summary])

  return (
    <div className={style.items__container}>
      <div className={classNames(style.font3, style.round)}>{newData.indexOf(item) + 1}</div>
      <img src={item.thumbnail} className={style.image} alt={item.title} />
      <div className={classNames(style.font3, style.title)}>
        <div style={{ textAlign: "center" }}>
          <span className={style.font6}>{item.title}</span>
        </div>
        <div className={style.description__container}>
          <span className={classNames(style.font4, style.bottom__line)}>
            {item.description}
          </span>
        </div>
        <div className={style.two_rows}>
          <div className={style.font5}>Ratting: {item.rating}</div>
          <div className={style.font5}>
            Discount: {item.discountPercentage}%
          </div>
        </div>
      </div>
      <div className={style.counter__skeleton}>
        <div className={style.font8}>Stock: {item.stock} </div>
        <div className={style.counter__container}>
          <div
            className={classNames(style.font3, style.round)}
            onClick={(e) => addOne(e)}
          >
            +
          </div>
          <div className={style.font3}>{summary}</div>
          <div
            className={classNames(style.font3, style.round)}
            onClick={(e) => removeOne(e)}
          >
            -
          </div>
        </div>
        <div className={style.font8}>€{item.price} </div>
      </div>
    </div>
  );
};

export default BasketCards;