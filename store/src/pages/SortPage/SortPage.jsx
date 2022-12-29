import React, { useState } from "react";
import SortCategory from "../../components/Sort/SortCategory/SortCategory";
import SortBrands from "../../components/Sort/SortBrands/SortBrands";
// import SortFourth from "../../components/SortFourth/SortFourth";
import BottomCover from "../../components/Preloader/BottomCover/bottomCover";
import SortPrice from "../../components/Sort/SortPrice/SortPrice";
import classNames from "classnames";
import style from "./sortPage.module.css";
import SortStock from "../../components/Sort/SortStock/SortStock";

function SortPage({
  products,
  onClickCategoryName,
  onClickCategoryBrands,
  filterPrice,
  onChangPrice,
  filterStock,
  onChangStock,
  activeIndexBrand,
  onChangIndexBrand,
}) {
  const category = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const brands = [...new Set(products.map((el) => el.brand))];

  const [activeIndexCategory, setActiveIndexCategory] = useState(0);

  const handelRefresh = () => {
    onClickCategoryName("all");
    setActiveIndexCategory(0);
    onClickCategoryBrands("");
    onChangPrice([10, 1800]);
    onChangStock([2, 150]);
  };

  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters} onClick={handelRefresh}>
          Reset filters
        </button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
        <div
          className={classNames(
            style.sort__category,
            style.border__bottom__sort
          )}
        >
          <span className={style.font}>Category</span>
        </div>
        <div className={style.sort__scroll}>
          <SortCategory
            activeIndexCategory={activeIndexCategory}
            firstPick={category}
            onClickCategoryName={onClickCategoryName}
            onChangIndexCategory={(i) => setActiveIndexCategory(i)}
          />
        </div>
        <BottomCover />
      </div>
      <div className={style.first_check}>
        <div
          className={classNames(
            style.sort__category,
            style.border__bottom__sort
          )}
        >
          <span className={style.font}>Brand</span>
        </div>
        <div className={style.sort__scroll}>
          <SortBrands
            activeIndexBrand={activeIndexBrand}
            brands={brands}
            onChangIndexBrand={onChangIndexBrand}
            onClickCategoryBrands={onClickCategoryBrands}
          />
        </div>
        <BottomCover />
      </div>
      <div className={style.input_check}>
        <div
          className={classNames(
            style.sort__category,
            style.border__bottom__sort
          )}
        >
          <span className={style.font}>Price</span>
        </div>
        <SortPrice filterPrice={filterPrice} onChangPrice={onChangPrice} />
        <BottomCover />
      </div>
      <div className={style.input_check}>
        <div
          className={classNames(
            style.sort__category,
            style.border__bottom__sort
          )}
        >
          <span className={style.font}>Stock</span>
        </div>
        <SortStock filterStock={filterStock} onChangStock={onChangStock} />
        <BottomCover />
      </div>
    </div>
  );
}

export default SortPage;
