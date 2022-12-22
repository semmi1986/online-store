import React from "react";
import Card from '../../../components/Card/Card';
import style from './cards.module.css';
import FindSection from "../../../components/FindSection/FindSection";
function Cards({products, isLoading}) {
  return (
    <div className={style.cards__container}>
      <FindSection products={products}/>
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