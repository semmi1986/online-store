import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "./Cards/Cards";
import style from './homePage.module.css'


function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://63a042fa24d74f9fe832fb1e.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts(data);
    })
  }, [])
  

 

  return (
    <main>
      <div className={style.main__page}>
      <SortPage/>
      <Cards products={products}/>
      </div>
    </main>
  )
}

export default HomePage