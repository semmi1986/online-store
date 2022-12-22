import React, { useState, useEffect } from "react";
import SortPage from "../SortPage/SortPage";
import Cards from "./Cards/Cards";
import style from './homePage.module.css'
// import api from '../../assets/api.json'
// console.log(api.products);

function HomePage() {

  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryBrand, setCategoryBrand] = useState('');
  const [isLoading, setIsLoading] = useState(true) // для скелетона или прелоудера
 
  useEffect(() => {
    fetch(`https://63a042fa24d74f9fe832fb1e.mockapi.io/items?${categoryName !== "oll" ? `category=${categoryName}` : ''}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts(data);
      setProducts1(data);
      setIsLoading(false)
    })
  }, [categoryName])

  useEffect(() => {
    setProducts1(products.filter(item => item.brand === categoryBrand ))
  }, [categoryBrand])

  useEffect(() => {
    setProducts1(products)
  }, [categoryName])

  return (
    <main>
      <div className={style.main__page}>
      <SortPage categoryName={categoryName} 
                products={products} 
                onClickCategoryName = {(item) => setCategoryName(item)} 
                onClickCategoryBrands ={(i) => setCategoryBrand(i)}
                />
      <Cards products={products1} isLoading={isLoading}/>
      </div>
    </main>
  )
}

export default HomePage