import React from "react";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import style from "./findSection.module.css";

function FindSection({
  products,
  sortType,
  onClickSortType,
  searchValue,
  setSearchValue,
}) {
  return (
    <div className={style.search_header}>
      <Sort sortType={sortType} onClickSortType={onClickSortType} />
      <div>Found: {products.length}</div>
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
