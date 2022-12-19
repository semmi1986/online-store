import React from 'react'
import style from './sortFourth.module.css';

function SortFourth() {
    return (
    <div>
        <div className={style.three_rows}>
            <span className={style.font}>2</span>
            <span className={style.font}>⟷</span>
            <span className={style.font}>150</span>
        </div>
        <div className={style.input}>
            <input type="range" className={style.input_btn} />
        </div>
    </div>
    )
  }
  
  export default SortFourth;