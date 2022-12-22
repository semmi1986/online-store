import React from "react";
import style from "./cadr.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { CoverageMap } from "istanbul-lib-coverage";

function Card({item}) {
  return (
    <Link to={`/ProductDetails/${item.id}`}>
      <div style={{background:`url(${item.thumbnail})`,backgroundSize: `100% 100%`}} className={style.cadr__cards}>
        <div className ={classNames(style.card_name, style.border__bottom__card, style.font)}>{item.title}</div>
        <div className ={style.card_two_rows}>
          <div className ={classNames(style.card_add, style.border__bottom__card, style.font)}>Add</div>
          <div className ={classNames(style.card_details, style.border__bottom__card, style.font)}>Details</div>
        </div>
        </div>
    </Link>
  )
}

export default Card;
