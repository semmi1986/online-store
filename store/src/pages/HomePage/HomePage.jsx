import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "./Cards/Cards";
import style from "./homePage.module.css";
import api from '../../assets/api.json'
console.log(api.products);

function HomePage() {
  const [products, setProducts] = useState(api.products);
  const [products1, setProducts1] = useState(api.products);
  const [categoryName, setCategoryName] = useState("all");
  const [categoryBrand, setCategoryBrand] = useState("");
  const [isLoading, setIsLoading] = useState(true); // для скелетона или прелоудера
  const [sortType, setSortType] = useState({
    name: "Sort by price DEC",
    sortProperty: "price",
  });
  
  useEffect(() =>{
     setIsLoading(true);
      setProducts(api.products);
      setProducts1(api.products);
      setIsLoading(false);
  },[categoryName, sortType])

  // useEffect(() => {
  //   setIsLoading(true);

  //   const sort = sortType.sortProperty.replace("-", "");
  //   const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  //   const category = categoryName !== "all" ? `category=${categoryName}` : "";

  //   fetch(
  //     `https://63a042fa24d74f9fe832fb1e.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //       setProducts1(data);
  //       setIsLoading(false);
  //     });
  // }, [categoryName, sortType]);

  useEffect(() => {
    setProducts1(products.filter((item) => item.brand === categoryBrand));
  }, [categoryBrand]);

  useEffect(() => {
    setProducts1(products);
  }, [categoryName]);

  return (
    <main>
      <div className={style.main__page}>
        <SortPage
          categoryName={categoryName}
          products={products}
          onClickCategoryName={(item) => setCategoryName(item)}
          onClickCategoryBrands={(i) => setCategoryBrand(i)}
        />
        <Cards
          products={products1}
          sortType={sortType}
          onClickSortType={(i) => setSortType(i)}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}

export default HomePage;
