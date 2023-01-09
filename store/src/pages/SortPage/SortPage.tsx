import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SortCategory from "../../components/Sort/SortCategory/SortCategory";
import SortBrands from "../../components/Sort/SortBrands/SortBrands";
import BottomCover from "../../components/Preloader/BottomCover/bottomCover";
import SortPrice from "../../components/Sort/SortPrice/SortPrice";
import SortStock from "../../components/Sort/SortStock/SortStock";
import classNames from "classnames";
import style from "./sortPage.module.css";
import { BasketPagePullArr, Sorts, URLSearchParams } from "../../types/types";

interface SortPageProps{
  products: BasketPagePullArr[]
  onClickCategoryName: (i:string) => void
  onClickCategoryBrands: (i: string) => void
  filterPrice: number[]
  onChangPrice: (i: number[]) => void
  filterStock: number[]
  onChangStock: (i: number[]) => void
  activeIndexBrand: number
  onChangIndexBrand: (i: number) => void
  searchValue: string;
  sortType: Sorts,
  onClickSortType:(i: Sorts)=> void;
  setSearchValue: (i:string) => void
}



const SortPage: React.FC<SortPageProps> = ({
  products,
  onClickCategoryName,
  onClickCategoryBrands,
  filterPrice,
  onChangPrice,
  filterStock,
  onChangStock,
  activeIndexBrand,
  setSearchValue,
  onChangIndexBrand,
  sortType,
  searchValue,
  onClickSortType,
}) => {
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
  const [buttonCopy, setButtonCopy] = useState('Copy Link')
  const [activeIndexCategory, setActiveIndexCategory] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryURL, setCategoryURL] = useState("");
  const [brandURL, setBrandURL] = useState("");
  const [sortURL, setSortURL] = useState("");
  const [searchURL, setSearchURL] = useState("");
  const [filterURL, setFilterURL] = useState([]);
  const [stockURL, setStockURL] = useState([]);
  const handelRefresh = () => {
    onClickCategoryName("all");
    setActiveIndexCategory(0);
    onClickCategoryBrands("");
    onChangPrice([10, 1800]);
    onChangStock([2, 150]);
    onClickSortType({
      name: "Sort by price DEC",
      sortProperty: "price",
    });
    setSearchValue('');
  };
  const handerButton = () =>{
    setButtonCopy('Copied!')
    setTimeout(() => {
      setButtonCopy('Copy Link')
    }, 500)
  }

  useEffect(() => {
    setSortURL(sortType.name);
    setSearchURL(searchValue);
    setFilterURL(filterPrice);
    setStockURL(filterStock);

    const params: URLSearchParams  = {};
    const categ = categoryURL;
    const brandStr = brandURL;
    const sortStr = sortURL;
    const searchStr = searchURL;
    const filterArr = filterURL;
    const stockArr = stockURL;

    if (categ.length) params.category = categ;
    if (brandStr.length) params.brand = brandStr;
    if (sortStr.length) params.sort = sortStr;
    if (searchStr.length) params.search = searchStr;
    if (filterArr.length) params.price = `${filterArr[0]}↕${filterArr[1]}`;
    if (stockArr.length) params.stock = `${stockArr[0]}↕${stockArr[1]}`;

    setSearchParams({...params });
 



  }, [
    categoryURL,
    brandURL,
    sortURL,
    sortType,
    filterPrice,
    filterStock,
    searchValue,
    searchURL,
  ]);

  useEffect(()=>{
    setSortURL("");
  },[])

  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters} onClick={handelRefresh}>
          Reset filters
        </button>
        <button className={style.copy__link} onClick={handerButton}>{buttonCopy}</button>
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
            setCategoryURL={setCategoryURL}
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
           setBrandURL={setBrandURL}
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
