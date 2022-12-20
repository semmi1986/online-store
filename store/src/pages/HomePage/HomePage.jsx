import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "./Cards/Cards";
import style from './homePage.module.css'


function HomePage() {

  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = React.useState([])

  useEffect(() => {
    fetch('https://63a042fa24d74f9fe832fb1e.mockapi.io/items?category=' + categoryName)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts(data);
    })
  }, [categoryName])
  

 

  return (
    <main>
      <div className={style.main__page}>
      <SortPage categoryName={categoryName} products={products} onClickCategoryId = {(i) => setCategoryName(i)}/>
      <Cards products={products}/>
      </div>
    </main>
  )
}

export default HomePage