import React from "react";
import SortCategory from "../../components/SortCategory/SortCategory";
import SortBrands from "../../components/SortBrands/SortBrands";
import SortThird from "../../components/SortThird/SortThird";
import SortFourth from "../../components/SortFourth/SortFourth";
import BottomCover from "../../components/BottomCover/bottomCover";
import style from "./sortPage.module.css";
import classNames from "classnames";



const secondCheck =[]
function SortPage({ products, onClickCategoryName, onClickCategoryBrands}) {

  function getBrandList(products) {
    return Array.from(new Set(products.map((el) => el.brand)));
  }

  const category = ["all", "smartphones", "laptops", "fragrances", "skincare", "groceries","home-decoration", "furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"];
  const brands = getBrandList(products);

  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters}>Reset filters</button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Category</span></div>
      <div className={style.sort__scroll}>
      <SortCategory firstPick={category} onClickCategoryName={onClickCategoryName}/>
      </div>
      <BottomCover/>
     </div>
     <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Brand</span></div>
      <div className={style.sort__scroll}>
        <SortBrands brands={brands} onClickCategoryBrands={onClickCategoryBrands}/>
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
