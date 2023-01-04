import React from "react";
import style from "./sortPrice.module.css";
import {Slider} from '@mui/material'


interface PriceProps{
  filterPrice: number[]
  onChangPrice: (i: number[]) => void
}

const SortPrice: React.FC<PriceProps> = ({onChangPrice, filterPrice}) => {  

  const updateValue = (e: Event, newValue: number | number[]) => {
    onChangPrice(newValue as number[])
  }

  return (
    <div className={style.sort__wrapper}>
      <div className={style.price}>
        <div className={style.font}>€ {filterPrice[0]}</div>
        <div className={style.font}>⟷</div>
        <div className={style.font}>€{filterPrice[1]}</div>
      </div>
      {/* <div className={style.slider}>
        <div className={style.progress}></div>
      </div>
      <div className={style.range__input}>
        <input className={style.range__min} type="range" minValue={0} maxValue={20000} value={range[0]} onChange={e => handelChang(e)} />
        <input className={style.range__max} type="range" min="0" max="20000" value={range[1]} onChange={e => handelChang(e)}/>
      </div> */}
      <Slider step={1} value={filterPrice} max={1800} onChange={updateValue}/>
    </div>
  );
}

export default SortPrice;
