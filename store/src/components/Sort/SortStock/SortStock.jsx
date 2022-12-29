import React from 'react';
import {Slider} from '@mui/material'
import style from './sortStock.module.css'

function SortStock({filterStock, onChangStock}) {

  const updateValue = (e, item) => {
    onChangStock(item)
  }

  return (
    <div className={style.sort__wrapper}>
      <div className={style.price}>
        <div className={style.font}>{filterStock[0]}</div>
        <div className={style.font}>⟷</div>
        <div className={style.font}>{filterStock[1]}</div>
      </div>
      <Slider step={1} value={filterStock} max={150} onChange={updateValue}/>

    </div>
  )
}

export default SortStock