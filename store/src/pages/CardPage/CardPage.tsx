import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./CardPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import Page404 from "../404Page/Page404";

interface CardPageProps{
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  onShowForm: (i: boolean) => void;
  onStore: (i: BasketPagePullArr[]) => void;
  totalPrice1: number 
  counter1: number
  localStore: BasketPagePullArr[];
  setLocalStore: (i: BasketPagePullArr[]) => void;
}

const CardPage: React.FC<CardPageProps> = ({setLocalStore ,localStore, onChanck, onChanck2,onShowForm, onStore, totalPrice1,counter1}) => {
  const { id } = useParams();
  const [photo, setPhoto] = useState("");
  const [AddOrDelete, setAddOrDelete] = useState('');
  const [flag, setFlag] = useState(true);
  const [total, setTotal] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail:
      "",
    title: "",
    images: [
      "",
      "",
      "",
    ],
  });
  useEffect(()=>{
    (localStore.map((el)=> el.id).includes(total.id)) ? setAddOrDelete('Remove from Cart') : setAddOrDelete('Add to Cart');
  },[total])


  useEffect(() => {
    async function componentDidMount() {
      try {
        const result = await axios.get(
          `https://63a042fa24d74f9fe832fb1e.mockapi.io/items?id=${id}`
        );
        const totalResult = result.data[0];
        if(totalResult === undefined){
          setFlag(false);
        } else{ 
        setTotal(totalResult);
        setPhoto(totalResult.thumbnail);}
      } catch (error) {}
    }
    componentDidMount();
  }, [id]);



  function checker(){
    return (event: React.MouseEvent) =>{
    if(AddOrDelete === 'Add to Cart'){
      setAddOrDelete('Remove from Cart');
      localStore.push(total);
      onStore(localStore);
      onChanck(counter1 + 1)
      onChanck2(totalPrice1+ total.price)
      localStorage.setItem("Basket", JSON.stringify(localStore));
      localStorage.setItem("Count", JSON.stringify(counter1 + 1));
      localStorage.setItem("Summary", JSON.stringify(totalPrice1+ total.price));
      localStorage.setItem("uniqeBasket", JSON.stringify(localStore));
    } else {
      setAddOrDelete('Add to Cart');
      localStore.splice(
        localStore.findIndex((el) => el.id === total.id),
        1
      );
      onStore(localStore);
      onChanck(counter1 - 1)
      onChanck2(totalPrice1 - total.price)
      localStorage.setItem("Basket", JSON.stringify(localStore));
      localStorage.setItem("Count", JSON.stringify(counter1 - 1));
      localStorage.setItem("Summary", JSON.stringify(totalPrice1 - total.price));
      localStorage.setItem("uniqeBasket", JSON.stringify(localStore));
    }}
  };
  useEffect(()=>{
    localStorage.getItem("Basket")
      ? setLocalStore(JSON.parse(localStorage.getItem("Basket")))
      : setLocalStore([]);
    localStorage.getItem("Count")
      ? onChanck(JSON.parse(localStorage.getItem("Count")))
      : onChanck(null);
    localStorage.getItem("Summary")
      ? onChanck2(JSON.parse(localStorage.getItem("Summary")))
      : onChanck2(null);
  },[]);

  function renderHeaderPhoto(){
    return <img 
    src={photo} 
    style={{ width: "50vh", height: "50vh", borderRadius: "10px", marginTop: "20px"}}
    alt={total.title}
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
    alt={item}
    />));
  }

  const handler = (event: React.MouseEvent) =>{
    if(localStore.map((el)=> el.id).includes(total.id)){
      onShowForm(true)
    } else {    
    setAddOrDelete('Remove from Cart');
    localStore.push(total);
    onStore(localStore);
    onChanck(counter1 + 1)
    onChanck2(totalPrice1+ total.price)
    localStorage.setItem("Basket", JSON.stringify(localStore));
    localStorage.setItem("Count", JSON.stringify(counter1 + 1));
    localStorage.setItem("Summary", JSON.stringify(totalPrice1+ total.price));
    localStorage.setItem("uniqeBasket", JSON.stringify(localStore));
    onShowForm(true)}

  }
  if(flag === false){
    return <Page404 />
  } else{
   return (
    <div>
      <div className={style.breadcrumbs}>
        <div>
          <Link to="/" className={style.link}>
            <span>STORE</span>
          </Link>
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
              <button className={style.button}onClick={checker()}>{AddOrDelete}</button>
              <Link to="/basket" className={style.button} onClick={handler}>Buy now</Link>
            </div>
          </div>
        </div>
        <div className={style.footer__cover}> </div>
      </div>
    </div>
  );}
}

export default CardPage;