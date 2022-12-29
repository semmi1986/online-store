import React from "react";
import Search from "../Search/Search";
import Sort from "../Sort";
import style from "./findSection.module.css";

function FindSection({
  products,
  sortType,
  onClickSortType,
  searchValue,
  setSearchValue,
  obj
}) {
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
