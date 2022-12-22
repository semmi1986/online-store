import React from "react";
import SortCategory from "../../components/SortCategory/SortCategory";
import SortBrands from "../../components/SortBrands/SortBrands";
import SortThird from "../../components/SortThird/SortThird";
import SortFourth from "../../components/SortFourth/SortFourth";
import BottomCover from "../../components/BottomCover/bottomCover";
import style from "./sortPage.module.css";
import classNames from "classnames";



const secondCheck =[]
function SortPage({ products, onClickCategoryName, onClickCategoryBrands}) {
  const category = ["oll", "smartphones", "laptops", "fragrances", "skincare", "groceries","home-decoration", "furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"];
  const brands = [ "Apple", "Samsung", "OPPO","Lord - Al-Rehab","L'Oreal Paris","Hemani Tea","Dermive","ROREC White Rice","Fair & Clear", "Saaf & Khaas","Bake Parlor Big","Baking Food Items","fauji","Dry Rose", "Boho Decor","Flying Wooden","LED Lights","luxury palace","Golden","Furniture Bed Set","Ratttan Outdoor","Kitchen Shelf","Multi Purpose","AmnaMart","Professional Wear","Soft Cotton","Top Sweater","RED MICKY MOUSE..","Digital Printed","Ghazi Fabric","IELGY","IELGY fashion","Synthetic Leather","Sandals Flip Flops","Maasai Sandals","Vintage Apparel","FREE FIRE","The Warehouse","Sneakers","Rubber","Naviforce","SKMEI 9117","Strap Skeleton","Stainless","Eastern Watches","Luxury Digital","Watch Pearls","Bracelet","LouisWill","Copenhagen Luxe","Steal Frame","Darojay","Fashion Jewellery","Cuff Butterfly","Designer Sun Glasses", "mastar watch","Car Aux","W1209 DC12V","TC Reusable","Neon LED Light","METRO 70cc Motorcycle - MR70","BRAVE BULL","shock absorber", "JIEPOLLY","Xiangle","lightingbrilliance","Ifei Home","DADAWU","YIOSI"]

  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters}>Reset filters</button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Category</span></div>
      <div className={style.sort__scroll}>
      <SortCategory firstPick={category} onClickCategoryName={onClickCategoryName}/>
      </div>
      <BottomCover/>
      <BottomCover/>
     </div>
     <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Brand</span></div>
      <div className={style.sort__scroll}>
        <SortBrands brands={brands} onClickCategoryBrands={onClickCategoryBrands}/>
      </div>
      <BottomCover/>
     </div>
     <div className={style.input_check}>
     <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Price</span></div>
      <SortThird/>
      <BottomCover/>
      </div>
      <div className={style.input_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Stock</span></div>
      <SortFourth/>
      <BottomCover/>
     </div>
     </div>
  );
}

export default SortPage;
