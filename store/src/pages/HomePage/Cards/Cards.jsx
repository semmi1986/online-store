import React from "react";
import Card from '../../../components/Card/Card';
import FindSection from "../../../components/FindSection/FindSection";
import style from './cards.module.css';


function Cards({products, sortType, isLoading, onClickSortType}) {
  return (
    <div className={style.cards__container}>
      <FindSection products={products} sortType={sortType} onClickSortType={onClickSortType}/>
      <div className={style.cards__content}>
        {
          isLoading 
          ? "...LOADING" 
          : products.map((item) => <Card key={item.id} item={item} />
          )
        }
      </div>
    </div>

  )
}

export default Cards