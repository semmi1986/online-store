import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./CardPage.module.css";


function CardPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState();
  const [total, setTotal] = useState({
    brand: "Apple",
    category: "smartphones",
    description: "An apple mobile which is nothing like apple",
    discountPercentage: 12.96,
    id: 1,
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/74080a1b5a15d0ffe0a4ac9ad3a8279b.jpeg",
    title: "iPhone 9",
    images: [
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
    ],
  });
  useEffect(() => {
    async function componentDidMount() {
      try {
        const result = await axios.get(
          `https://63a042fa24d74f9fe832fb1e.mockapi.io/items?id=${id}`
        );
        const totalResult = result.data[0];
        console.log(totalResult);
        setTotal(totalResult);
        setPhoto(totalResult.thumbnail);
      } catch (error) {}
    }
    componentDidMount();
  }, [id]);




  function renderHeaderPhoto(){
    return <img 
    src={photo} 
    style={{ width: "50vh", height: "50vh", borderRadius: "10px", marginTop: "20px"}}
    />
  }
 
  function renderPhotos(){
    const photos = total.images;
    return (photos.map((item, i) => 
    <img 
    key={i}
    src={item} 
    style={{ width: "15vh", height: "15vh", borderRadius: "10px", margin: "10px 10px", cursor: "pointer"}}
    onClick={()=>setPhoto(item)}
    />));
  }

  const handelClick = () => {
    console.log("go to baskets");
  }


  return (
    <div>
      <div className={style.breadcrumbs}>
        <div>
          <a href="/" className={style.link}>
            <span>STORE</span>
          </a>
        </div>
        <div className={style.color}>{">>"}</div>
        <div>{total.category}</div>
        <div className={style.color}>{">>"}</div>
        <div>{total.brand}</div>
        <div className={style.color}>{">>"}</div>
        <div>{total.title}</div>
      </div>
      <div className={style.cardpage__container}>
        <div className={style.header__font}>{total.title}</div>
        <div className={style.info__container}>
          <div className={style.photo__container}>
          <div className={style.header__photo}>
            {renderHeaderPhoto()}
          </div>
          <div className={style.photos_to_choose}>
            {renderPhotos()}
          </div>
          </div>
          <div className={style.product_info}>
            <div className={style.container__font}>
              Category: {total.category}{" "}
            </div>
            <div className={style.container__font}>Brand: {total.brand}</div>
            <div className={style.container__font}>
              Description: {total.description}
            </div>
            <div className={style.container__font}>Rating: {total.rating}</div>
            <div className={style.container__font}>Stock: {total.stock}</div>
            <div className={style.container__font}>
              Discount Percentage: {total.discountPercentage}
            </div>
          </div>
          <div className={style.buy__container}>
            <div style={{ textAlign: "center" }}>
              <span className={style.font_cost}>€{total.price}.00</span>
            </div>
            <div className={style.two__rows}>
              <button className={style.button}>Add to Cart</button>
              <button className={style.button} onClick={handelClick}>Buy now</button>
            </div>
          </div>
        </div>
        <div className={style.footer__cover}> </div>
      </div>
    </div>
  );
}

export default CardPage;
