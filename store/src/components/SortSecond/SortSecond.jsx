import React from 'react'
import style from './sortSecond.module.css';


function SortSecond({title}) {
  return (
    <div className={style.category_check}>
      <li className={style.font}>{title}</li>
    </div>
  )
}

export default SortSecond