import React from "react";
import SortFirst from "../../components/SortFirst/SortFirst";
import SortSecond from "../../components/SortSecond/SortSecond";
import SortThird from "../../components/SortThird/SortThird";
import SortFourth from "../../components/SortFourth/SortFourth";
import BottomCover from "../../components/BottomCover/bottomCover";
import style from "./sortPage.module.css";
import classNames from "classnames";

const firstCheck = ['Smartphones', 'Laptops', 'Fragrances', 'Skincare', 'Smartphones', 'Laptops', 'Fragrances', 'Skincare', 'Smartphones', 'Laptops', 'Fragrances', 'Skincare'];
const secondCheck = ['Apple', 'Samsung', 'Xiaomi', 'Nokia', 'Lenovo', 'ZTE', 'Vivo', 'Lenovo', 'Nokia', 'Xiaomi', 'Samsung', 'Nokia'];

function Sort() {
  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters}>Reset filters</button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Category</span></div>
      <div className={style.sort__scroll}>
      {firstCheck.map((item, i) =>(
        <SortFirst key={i} title={item}/>
      ))}
      </div>
      <BottomCover/>
     </div>
     <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Brand</span></div>
      <div className={style.sort__scroll}>
      {secondCheck.map((item, i) =>(
        <SortSecond key={i} title={item}/>
      ))}
      </div>
      <BottomCover/>
     </div>
     <div className={style.input_check}>
     <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Price</span></div>
      <SortThird/>
      <BottomCover/>
      </div>
      <div className={style.input_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Stock</span></div>
      <SortFourth/>
      <BottomCover/>
     </div>
     </div>
  );
}

export default Sort;
