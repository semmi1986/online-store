import React from "react";
import SortFirst from "../../components/SortFirst/SortFirst";
import SortSecond from "../../components/SortSecond/SortSecond";
import SortThird from "../../components/SortThird/SortThird";
import SortFourth from "../../components/SortFourth/SortFourth";
import BottomCover from "../../components/BottomCover/bottomCover";
import style from "./sortPage.module.css";
import classNames from "classnames";


const secondCheck =[]
function SortPage({onClickCategoryId}) {
  const firstPick = ["smartphones", "laptops", "fragrances", "skincare", "groceries","home-decoration", "furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"];


  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters}>Reset filters</button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Category</span></div>
      <div className={style.sort__scroll}>
      {firstPick.map((item, i) =>(
        <div key={i} className={style.category_check}>
          <input type="checkbox" onClick ={(e) => onClickCategoryId(item)}/><span className={style.font}>{item[0].toUpperCase() + item.slice(1)}</span>
        </div>
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

export default SortPage;
