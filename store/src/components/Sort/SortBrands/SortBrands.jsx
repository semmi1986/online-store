import React, { useState } from 'react'
import style from './sortBrands.module.css';


function SortBrands({brands, onClickCategoryBrands, onChangIndexBrand, activeIndexBrand}) {
  

  function handelClick(value, index) {

    onClickCategoryBrands(value);
    onChangIndexBrand(index)
  }


  return(
    <>
    {brands.map((item, i) =>(
      <div key={i} className={style.category_check}>
        <ul>
          <li  className={activeIndexBrand == i ? style.active : ''} onClick= {() => handelClick(item, i)}>{item}</li>
        </ul>
      </div>
    ))}
    </>
  )
}

export default SortBrands