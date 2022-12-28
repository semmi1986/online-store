import { type } from "os";
import React from "react";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import style from "./findSection.module.css";

interface Sorts{
  name: string, 
  sortProperty: string
}

type SortProps = {
  sortType: Sorts[];
  onClickSortType: any
}[]

interface Serch{
  searchValue: string;
  setSearchValue: any
}


interface Section{
  sortType: SortProps;
  onClickSortType: () => void;
  searchValue: Serch;
  setSearchValue: () => void
}

const FindSection: React.FC<Section> = ({sortType, onClickSortType, searchValue, setSearchValue, obj}) => {
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
