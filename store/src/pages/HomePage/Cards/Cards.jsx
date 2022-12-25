import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import FindSection from "../../../components/FindSection/FindSection";
import Preloader from "../../../components/Preloader/Preloader";
import style from "./cards.module.css";

function Cards({
  products,
  sortType,
  isLoading,
  onClickSortType
}) {
  const [searchValue, setSearchValue] = useState("");
  const obj = products.map(item => item);
  const items = obj.filter(elem => {
    if (elem.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((item) => <Card key={item.id} item={item}/>)

  return (
    <div className={style.cards__container}>
      <FindSection
        products={products}
        sortType={sortType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClickSortType={onClickSortType}
      />
      <div className={style.cards__content}>
        {isLoading
          ? <Preloader/>
          : items}
      </div>
    </div>
  );
}

export default Cards;
