import React, { useState, useEffect } from "react";
import style from "./BasketCards.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";

interface IBasketCardsProps {
  item: BasketPagePullArr;
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  totalPrice1: number;
  counter1: number;
}

const BasketCards: React.FC<IBasketCardsProps> = ({
  item,
  totalPrice1,
  counter1,
  onChanck,
  onChanck2,
}) => {
  const [summary, setSummary] = useState(1);

  const addOne = (e: React.MouseEvent) => {
      setSummary(summary + 1);
      console.log("i am work");
      onChanck(counter1 + 1);
      onChanck2(totalPrice1 + item.price);
      
  };
  const removeOne = (e: React.MouseEvent) => {
      setSummary(summary - 1);
      console.log("i am not work");
      onChanck(counter1 - 1);
      onChanck2(totalPrice1 - item.price);
  };

  console.log(counter1);
  console.log(totalPrice1);

  return (
    <div className={style.items__container}>
      <div className={classNames(style.font3, style.round)}>1</div>
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
