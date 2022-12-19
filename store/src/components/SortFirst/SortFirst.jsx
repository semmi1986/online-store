import React from 'react'
import style from './sortFirst.module.css';




function SortFirst({title}) {
  console.log(title);
  return (
    <div className={style.category_check}>
      <input type="checkbox" /><span className={style.font}>{title}</span>
    </div>
  )
}

export default SortFirst