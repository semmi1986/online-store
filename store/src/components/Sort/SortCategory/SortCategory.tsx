import React from 'react'
import style from './sortCategory.module.css';

// setSearchValue: (i:string) => void

interface CategoryProps {
  firstPick: string[]
  activeIndexCategory: number
  onClickCategoryName: (i: string) => void
  onChangIndexCategory: (i: number) => void
  setCategoryURL: (i: string) => void
}


const SortCategory: React.FC<CategoryProps> = ({setCategoryURL, firstPick, activeIndexCategory, onClickCategoryName, onChangIndexCategory}) => {


  function handelClick(value: string, index: number) {
    onClickCategoryName(value);
    onChangIndexCategory(index)
    setCategoryURL(value)
  }

  return(
    <>
    {firstPick.map((item, i) =>(
      <div key={i} className={style.category_check}>
        <ul>
          <li  className={activeIndexCategory == i ? style.active : ''} onClick = {() => handelClick(item, i)}>{item[0].toUpperCase()+item.slice(1)}</li>
        </ul>
      </div>
    ))}
    </>
  )
}

export default SortCategory