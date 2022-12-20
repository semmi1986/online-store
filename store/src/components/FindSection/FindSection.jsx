import React from 'react'
import style from './findSection.module.css';

function FindSection() {
    return (
    <div className={style.search_header}>
        <div>
            <select>
                <option value="SortOptions">SortOptions</option>
                <option value="priceASC">price by ASC</option>
                <option value="priceDESC">price by DESC</option>
                <option value="ratingASC">rating by ASC</option>
                <option value="ratingDESC">rating by DESC</option>
                <option value="discountASC">discount by ASC</option>
                <option value="discountDESC">discount by DESC</option>
            </select>
        </div>
        <div>
            price: 10$
        </div>
        <div>
            <input type="search"/>
        </div>
    </div>
    )
  }
  
  export default FindSection;