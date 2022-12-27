import React, { useState } from "react";
import style from "./cadr.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";


function Card({ item, AddCard, RemoveCard }) {

  const [AddOrDelete, setAddOrDelete] = useState('Add');
  function checker(){
    if(AddOrDelete === 'Add'){
      setAddOrDelete('Delete');
      AddCard(item);
    } else {
      setAddOrDelete('Add');
      RemoveCard(item);
    }
  };

  return (
      <div
        style={{
          background: `url(${item.thumbnail})`,
          backgroundSize: `100% 100%`,
        }}
        className={style.cadr__cards}
      >
        <div
          className={classNames(
            style.card_name,
            style.border__bottom__card,
            style.font
          )}
        >
          {item.title}
        </div>
        <Link to={`/ProductDetails/${item.id}`}><div className={style.container}> </div></Link>
        <div className={style.card_two_rows}>
          <div
            className={
              classNames(
              style.card_add,
              style.border__bottom__card,
              style.font)}
            onClick={() => checker()}
          >
          {AddOrDelete}
          </div>
          <div
            className={classNames(
              style.card_details,
              style.border__bottom__card,
              style.font
            )}
          >
            Details
          </div>
        </div>
      </div>
  );
}

export default Card;
