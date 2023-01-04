import React from "react";
import { BasketPagePullArr, SearchI, Sorts } from "../../../types/types";
import Search from "../Search/Search";
import Sort from "../Sort";
import style from "./findSection.module.css";

interface FindProps{
  sortType: Sorts
  searchValue: string
  onClickSortType: (i: Sorts) => void
  setSearchValue: (i:string) => void
  obj: BasketPagePullArr[] 
}

const FindSection: React.FC<FindProps> = ({sortType, onClickSortType, searchValue, setSearchValue, obj}) => {
  
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
    </div>
  );
}

export default FindSection;
