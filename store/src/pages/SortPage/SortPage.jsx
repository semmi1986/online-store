import { type } from "@testing-library/user-event/dist/type";
import SortFirst from "../../components/SortFirst/SortFirst";
import SortSecond from "../../components/SortSecond/SortSecond";
import style from "./sortPage.module.css";
import classNames from "classnames";

const firstCheck = ['Smartphones', 'Laptops', 'Fragrances', 'Skincare', 'Smartphones', 'Laptops', 'Fragrances', 'Skincare', 'Smartphones', 'Laptops', 'Fragrances', 'Skincare']

function Sort() {
  return (
    <div className={style.sort__page}>
      <div className={style.sort__buttons}>
        <button className={style.reset__filters}>Reset filters</button>
        <button className={style.copy__link}>Copy link</button>
      </div>
      <div className={style.first_check}>
      <div className={classNames(style.sort__category, style.border__bottom__sort)}><span className={style.font}>Category</span></div>
      <div className={style.sort__scroll}>
      {firstCheck.map((item, i) =>(
        <SortFirst key={i} title={item}/>
      ))}
      </div>
    </div>
    <SortSecond/>
    
    </div>
  );
}

export default Sort;
