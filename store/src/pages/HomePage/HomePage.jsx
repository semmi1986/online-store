import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "./Cards/Cards";
import style from './homePage.module.css'
// import api from '../../assets/api.json'
// console.log(api.products);

function HomePage() {

  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('oll');
  const [categoryBrand, setCategoryBrand] = useState('');

 
  useEffect(() => {
    fetch(`https://63a042fa24d74f9fe832fb1e.mockapi.io/items?${categoryName != "oll" ? `category=${categoryName}` : ''}&brand=${categoryBrand}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts(data);
    })
  }, [categoryName, categoryBrand])
 

  return (
    <main>
      <div className={style.main__page}>
      <SortPage categoryName={categoryName} products={products} onClickCategoryName = {(item) => setCategoryName(item)} onClickCategoryBrands ={(i) => setCategoryBrand(i)}/>
      <Cards products={products}/>
      </div>
    </main>
  )
}

export default HomePage