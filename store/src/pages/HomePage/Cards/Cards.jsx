import React from "react";
import Card from '../../../components/Card/Card';
import style from './cards.module.css';

function Cards({products}) {
  console.log(products);
  return (
    <div className={style.cards__content}>
      {
        products.map(item => {
          return <Card key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default Cards