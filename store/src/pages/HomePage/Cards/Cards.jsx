import React from "react";
import Card from '../../../components/Card/Card';
import style from './cards.module.css';
import FindSection from "../../../components/FindSection/FindSection";
function Cards({products}) {
  return (
    <div className={style.cards__container}>
      <FindSection/>
      <div className={style.cards__content}>
      {products.map(item => {
        return <Card key={item.id} item={item} />;
      })}
      </div>
    </div>

  )
}

export default Cards