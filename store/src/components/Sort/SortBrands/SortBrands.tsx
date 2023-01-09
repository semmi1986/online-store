import React, { useState } from 'react'
import style from './sortBrands.module.css';


interface BrandProps{
  brands:string[]
  onClickCategoryBrands: (i: string) => void
  onChangIndexBrand: (i: number) => void
  setBrandURL: (i: string) => void
  activeIndexBrand: number
}


const SortBrands: React.FC<BrandProps> = ({brands, onClickCategoryBrands, onChangIndexBrand, activeIndexBrand, setBrandURL}) => {
  

  function handelClick(value: string, index: number) {

    onClickCategoryBrands(value);
    onChangIndexBrand(index);
    setBrandURL(value)
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