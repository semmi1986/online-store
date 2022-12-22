import React from 'react'
import Sort from '../Sort/Sort';
import style from './findSection.module.css';

function FindSection({products, sortType, onClickSortType}) {
    return (
    <div className={style.search_header}>
        <Sort sortType={sortType} onClickSortType ={onClickSortType}/>
        <div>
            Found: {products.length}
        </div>
        <div>
            <input type="search"/>
        </div>
    </div>
    )
  }
  
  export default FindSection;