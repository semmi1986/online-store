import React from "react";
import { BasketPagePullArr, Sorts } from "../../../types/types";
import Search from "../Search/Search";
import Sort from "../Sort";
import style from "./findSection.module.css";
import kvadrats from "../../../assets/img/kvardrats.png"
import kvard from "../../../assets/img/kvard.png"

interface FindProps{
  sortType: Sorts
  searchValue: string
  onClickSortType: (i: Sorts) => void
  setSearchValue: (i:string) => void
  obj: BasketPagePullArr[] 
  setStyleCard: (i:string) => void
}
const FindSection: React.FC<FindProps> = ({setStyleCard,sortType, onClickSortType, searchValue, setSearchValue, obj}) => {
  
  return (
    <div className={style.search_header}>
      <Sort sortType={sortType} onClickSortType={onClickSortType} />
      <div>Found: {obj.length}</div>
      <div>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className={style.buttons_style_container} >
        <div onClick={()=>setStyleCard('cards_flex_column_button_click')}><img src={kvard} className={style.image} alt ='squares'/></div>     
        <div onClick={()=>setStyleCard('cards_flex_button_click')}><img src={kvadrats} className={style.image1} alt ='square'/></div>
      </div>
    </div>
  );
}

export default FindSection;
