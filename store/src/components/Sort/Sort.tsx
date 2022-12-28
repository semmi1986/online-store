import React, {useState} from 'react';
import style from './sort.module.css';
import classNames from "classnames";

interface Sort{
  name: string, 
  sortProperty: string
}

interface SortProps {
  sortType: Sort;
  onClickSortType: (i: Sort) => void
}

const Sort: React.FC<SortProps> = ({sortType, onClickSortType}) => {

  const[isVisible, setIsVisibel] = useState(false);
  const sortList: Sort[] = [
                    {name: "Sort by price DESC", sortProperty: "price"}, 
                    {name: "Sort by price ASC", sortProperty: "-price"}, 
                    {name: "Sort by rating DESC", sortProperty: "rating"}, 
                    {name: "Sort by rating ASC", sortProperty: "-rating"}, 
                    {name: "Sort by discount DESC", sortProperty: "discountPercentage"}, 
                    {name: "Sort by discount ASC", sortProperty: "-discountPercentage"},
                    {name: "Sort by discount ASC", sortProperty: "-discountPercentage"}
                  ];

  const onClickSelectItem = (i: Sort) => {
    onClickSortType(i);
    setIsVisibel(false)
  }

  return (
    <div className={style.sort}>
    <div className={style.sort__label}>
      
      <b>Sort ortion:</b>
      <span onClick={() => setIsVisibel(!isVisible)} className={style.item}>{sortType.name}</span>
    </div>
    {
      isVisible && (
        <div className={style.sort__popup}>
          <ul>
            {sortList.map((item, i) => (
                <li 
                   key={i}
                   onClick = {() => onClickSelectItem(item)}
                   className={classNames(style.popup__item, sortType.sortProperty === item.sortProperty ? style.active : '')}>
                   {item.name}
                </li>
            ))}
          </ul>
        </div>
      )}
      
  </div>
  )
}

export default Sort