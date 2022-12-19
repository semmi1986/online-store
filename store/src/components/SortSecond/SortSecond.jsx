import React from 'react'
import style from './sortSecond.module.css';


function SortSecond({title}) {
  return (
    <div className={style.category_check}>
      <input type="checkbox" /><span className={style.font}>{title}</span>
    </div>
  )
}

export default SortSecond