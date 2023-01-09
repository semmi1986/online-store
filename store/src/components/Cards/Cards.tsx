import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import FindSection from "../Sort/FindSection/FindSection";
import Preloader from "../Preloader/Preloader";
import style from "./cards.module.css";

import { BasketPagePullArr, Sorts } from "../../types/types";


interface CardsProps{
  searchValue:string
  sortType: Sorts
  products: BasketPagePullArr[]
  isLoading: boolean
  filterPrice: number[]
  filterStock: number[]
  onChanck: (i: number) => void
  onChanck2: (i: number) => void
  onStore: (i: BasketPagePullArr[]) => void
  onClickSortType: (i: Sorts) => void
  setSearchValue: (i:string) => void
}

const Cards: React.FC<CardsProps> = ({ sortType, products, isLoading, filterPrice, filterStock, onChanck, onChanck2, onStore, onClickSortType, searchValue, setSearchValue}) => {
  const [ArrItems, setArrItems] = useState<BasketPagePullArr[]>([]);
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    onChanck(counter)
    onChanck2(totalPrice)
    onStore(ArrItems)
  })
  

  useEffect(() => {
    localStorage.getItem("Basket")
      ? setArrItems(JSON.parse(localStorage.getItem("Basket")))
      : setArrItems([]);
    localStorage.getItem("Count")
      ? setCounter(JSON.parse(localStorage.getItem("Count")))
      : setCounter(0);
    localStorage.getItem("Summary")
      ? setTotalPrice(JSON.parse(localStorage.getItem("Summary")))
      : setTotalPrice(0);
  }, []);

  const AddCard = (element:BasketPagePullArr) => {
    ArrItems.push(element);
    setArrItems(ArrItems);
    localStorage.setItem("Basket", JSON.stringify(ArrItems));
    localStorage.setItem("uniqeBasket", JSON.stringify(ArrItems));
  };

  const RemoveCard = (element:BasketPagePullArr) => {
    ArrItems.splice(
      ArrItems.findIndex((el) => el.id === element.id),
      1
    );
    setArrItems(ArrItems);
    localStorage.setItem("Basket", JSON.stringify(ArrItems));
    localStorage.setItem("uniqeBasket", JSON.stringify(ArrItems));
  };

  const countAddedCards = () => {
    localStorage.setItem("Count", JSON.stringify(ArrItems.length));
    setCounter(JSON.parse(localStorage.getItem("Count")));
  };
  const countPrice = () => {
    let sum = 0;
    let priceArray = ArrItems.map((el) => el.price);
    priceArray.map((item) => (sum += item));
    setTotalPrice(sum);
    localStorage.setItem("Summary", JSON.stringify(sum));
  };

  const obj = products.filter(
    (item) =>
      filterPrice[0] <= item.price &&
      filterStock[0] <= item.stock &&
      item.stock <= filterStock[1] &&
      item.price <= filterPrice[1]
  );

  // сортировка DESC и ASC
  switch (sortType.sortProperty) {
    case "price":
      obj.sort((a, b) => a.price - b.price);
      break;
    case "-price":
      obj.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      obj.sort((a, b) => a.rating - b.rating);
      break;
    case "-rating":
      obj.sort((a, b) => b.rating - a.rating);
      break;
    case "discountPercentage":
      obj.sort((a, b) => a.discountPercentage - b.discountPercentage);
      break;
    case "-discountPercentage":
      obj.sort((a, b) => b.discountPercentage - a.discountPercentage);
      break;
    default:
      break;
  }

  // сортировка по input
  const items = obj
    .filter((elem) => {
      if (elem.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => (
      <Card
        key={item.id}
        item={item}
        AddCard={AddCard}
        RemoveCard={RemoveCard}
        countAddedCards={countAddedCards}
        ArrItems={ArrItems}
        countPrice={countPrice}
      />
    ));

  return (
    <div className={style.cards__container}>
      
      <FindSection
        obj={obj}
        sortType={sortType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClickSortType={onClickSortType}
      />
      <div className={style.cards__content}>
        {isLoading ? <Preloader /> : items.length !== 0 ? items : <div>По вашему запросу ничего не найдено</div>}
      </div>
    </div>
  );
}

export default Cards;
