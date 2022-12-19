import React from 'react'
import style from './sortThird.module.css';

function sortThird() {
    return (
    <div>
        <div className={style.three_rows}>
            <span className={style.font}>€10.00</span>
            <span className={style.font}>⟷</span>
            <span className={style.font}>€1749.00</span>
        </div>
        <div className={style.input}>
            <input type="range" className={style.input_btn} />
        </div>
    </div>
    )
  }
  
  export default sortThird;