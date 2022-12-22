import React from 'react'
import Sort from '../Sort/Sort';
import style from './findSection.module.css';

function FindSection({products}) {
  console.log(products.length);
    return (
    <div className={style.search_header}>
        <Sort/>
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