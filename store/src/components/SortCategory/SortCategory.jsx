import React, { useState } from 'react'
import style from './sortCategory.module.css';


function SortCategory({firstPick, activeIndexCategory, onClickCategoryName, onChangIndexCategory}) {

 

  function handelClick(value, index) {
    onClickCategoryName(value);
    onChangIndexCategory(index)
  }

  return(
    <>
    {firstPick.map((item, i) =>(
      <div key={i} className={style.category_check}>
        <ul>
          <li  className={activeIndexCategory == i ? style.active : ''} onClick= {() => handelClick(item, i)}>{item[0].toUpperCase()+item.slice(1)}</li>
        </ul>
      </div>
    ))}
    </>
  )
}

export default SortCategory