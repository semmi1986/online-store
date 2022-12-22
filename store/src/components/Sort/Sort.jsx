import React, {useState} from 'react';
import style from './sort.module.css';
import classNames from "classnames";

function Sort() {

  const[isVisible, setIsVisibel] = useState(false);
  const sortList = ["Sort by price DEC", "Sort by price ASC", "Sort by raiting DEC", "Sort by raiting ASC", "Sort by discount DEC", "Sort by discount ASC" ];
  const [selectItem, setSelectItem] = useState(0);

  const onClickSelectItem = (i) => {
    setSelectItem(i);
    setIsVisibel(false)
  }

  return (
    <div className={style.sort}>
    <div className={style.sort__label}>
      
      <b>Sort ortion:</b>
      <span onClick={() => setIsVisibel(!isVisible)} className={style.item}>{sortList[selectItem]}</span>
    </div>
    {
      isVisible && (
        <div className={style.sort__popup}>
          <ul>
            {sortList.map((item, i) => (
                <li 
                   key={i}
                   onClick = {() => onClickSelectItem(i)}
                   className={classNames(style.popup__item, selectItem == i ? style.active : '')}>
                   {item}
                </li>
            ))}
          </ul>
        </div>
      )}
      
  </div>
  )
}

export default Sort