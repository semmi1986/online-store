import React, { useState, useEffect } from "react";
import style from "./BasketCards.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";

interface IBasketCardsProps {
  item: BasketPagePullArr;
}

const BasketCards: React.FC<IBasketCardsProps> = ({ item }) => {
  // const [itemsArr, setItemsArr] = useState<BasketPagePullArr>(
  //   JSON.parse(localStorage.getItem("Basket"))
  // );
  const [summary, setSummary] = useState(1);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("Basket"))
  //     ? setItemsArr(JSON.parse(localStorage.getItem("Basket")))
  //     : setItemsArr(null);
  // }, []);

  const addOne = () => {
    return (event: React.MouseEvent) => {
      setSummary(summary + 1);
    };
  };
  const removeOne = () => {
    return (event: React.MouseEvent) => {
      setSummary(summary - 1);
    };
  };

  return (
    <div className={style.items__container}>
      <div className={classNames(style.font3, style.round)}>1</div>
      <div
        className={style.image}
        style={{
          background: `url(${item.thumbnail})`,
          backgroundSize: `100% 100%`,
        }}
      ></div>
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
            onClick={addOne()}
          >
            +
          </div>
          <div className={style.font3}>{summary}</div>
          <div
            className={classNames(style.font3, style.round)}
            onClick={removeOne()}
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
