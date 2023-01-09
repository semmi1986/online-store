import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "../../components/Cards/Cards";
import style from "./homePage.module.css";
import { BasketPagePullArr } from "../../types/types";
// import api from '../../assets/api.json'


interface HomePageProps {
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  onStore: (i: BasketPagePullArr[]) => void;
}

const HomePage: React.FC<HomePageProps> = ({onChanck, onChanck2, onStore }) => {
  const [products, setProducts] = useState<BasketPagePullArr[]>([]);
  const [products1, setProducts1] = useState<BasketPagePullArr[]>([]);
  const [categoryName, setCategoryName] = useState("all");
  const [categoryBrand, setCategoryBrand] = useState("");
  const [isLoading, setIsLoading] = useState(true); // для скелетона или прелоудера
  const [filterPrice, setFilterPrice] = useState([10, 1800]); // начальные значения слайдера фильтра по цене
  const [filterStock, setFilterStock] = useState([2, 150]); // начальные значения слайдера фильтра по акциям
  const [activeIndexBrand, setActiveIndexBrand] = useState<number>();
  const [sortType, setSortType] = useState({
    name: "Sort by price DEC",
    sortProperty: "price",
  });
  const [searchValue, setSearchValue] = useState("");
  

  useEffect(() => {
    setIsLoading(true);

    const category = categoryName !== "all" ? `category=${categoryName}` : "";

    fetch(`https://63a042fa24d74f9fe832fb1e.mockapi.io/items?${category}`)
      .then((res) => {
        return res.json();
      })
      .then((data: BasketPagePullArr[]) => {
        setProducts(data);
        setProducts1(data);
        setIsLoading(false);
      });
  }, [categoryName]);

  useEffect(() => {
    setProducts1(products.filter((item) => item.brand === categoryBrand));
  }, [categoryBrand]);

  useEffect(() => {
    setProducts1(products);
    setCategoryBrand("");
    setActiveIndexBrand(null)
  }, [categoryName]);


  return (
    <main>
      <div className={style.main__page}>
        <SortPage
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          sortType={sortType}
          activeIndexBrand={activeIndexBrand}
          products={products}
          onClickCategoryName={(item) => setCategoryName(item)}
          onClickCategoryBrands={(i) => setCategoryBrand(i)}
          onChangPrice={(i) => setFilterPrice(i)}
          onChangStock={(i) => setFilterStock(i)}
          onChangIndexBrand={(i) => setActiveIndexBrand(i)}
          filterPrice={filterPrice}
          filterStock={filterStock}
          onClickSortType={(i) => setSortType(i)}
        />
        <Cards
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          sortType={sortType}
          onStore={onStore}
          filterPrice={filterPrice}
          products={products1}
          filterStock={filterStock}
          isLoading={isLoading}
          onChanck={onChanck}
          onChanck2={onChanck2}
          onClickSortType={(i) => setSortType(i)}
        />
      </div>
    </main>
  );
};

export default HomePage;
