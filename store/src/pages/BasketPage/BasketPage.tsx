import React, { useState, useEffect } from "react";
import style from "./BasketPage.module.css";
import { BasketPagePullArr } from "../../types/types";
import classNames from "classnames";
import Paginate from "../../components/Paginate/Paginate";
import Page404 from "../404Page/Page404";


interface IBasketPageProps {
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  totalPrice1: number 
  counter1: number
  onShowForm: (i: boolean) => void
  localStore: BasketPagePullArr[]
  
}

const BasketPage: React.FC<IBasketPageProps> = ({ totalPrice1, counter1, onChanck, onChanck2, onShowForm, localStore }) => {
  

  const getUnique = (localStore: BasketPagePullArr[]) => {
    return localStore.filter((el: BasketPagePullArr, ind:number) => ind === localStore.indexOf(el));
  };


  const [isRS, setIsRS] = useState(false);
  const [isEPAM, setIsEPAM] = useState(false);
  const [newData,setNewData] = useState(getUnique(localStore));
  const [inputState, setInput] = useState('');
  const [isAdd, setIsAdd] = useState(false);
  const [namePromo, setNamePromo] = useState("Promo for test: 'RS', 'EPAM'");
  const [inputPage, setInputPage] = useState('5');
  useEffect(()=>{
    if(inputState === 'RS'){
        setIsAdd(true);
        setNamePromo("Rolling Scopes School - 10%")
    } else if (inputState === 'EPAM') {
      setIsAdd(true) 
      setNamePromo("EPAM Systems - 10% ")
    } else {
      setIsAdd(false)
      setNamePromo("Promo for test: 'RS', 'EPAM'")

    };
  },[inputState]);

  const handlerPromo = (e: EventTarget) =>{
    console.log(e);
    if (inputState === 'RS'){
      onChanck2(Math.floor(totalPrice1-(totalPrice1 * 0.1)));
      setIsRS(true);
      setIsAdd(false);
    } else if (inputState === 'EPAM'){
      onChanck2(Math.floor(totalPrice1-(totalPrice1 * 0.1)));
      setIsEPAM(true);
      setIsAdd(false);
    }
  };
  const deleteRS = () =>{
    onChanck2(Math.ceil(totalPrice1+(totalPrice1 * 0.1)));
    setIsRS(false);
    setIsAdd(true);
  }
  const deleteEPAM = () =>{
    onChanck2(Math.ceil(totalPrice1+(totalPrice1 * 0.1)));
    setIsEPAM(false);
    setIsAdd(true);
  }
  
  const addBlock = () =>{
      return ( 
      <>
        <div className={style.flex}>
           <div className={style.font7}> Rolling Scopes School - 10%</div> 
           <button className={style.mini_btn} onClick={deleteRS}> Del </button>
        </div>
    </>
    )
  }
  const addBlock2 = () =>{
    return ( 
    <>
      <div className={style.flex}>
         <div className={style.font7}>EPAM Systems - 10% - </div> 
         <button className={style.mini_btn} onClick={deleteEPAM}> Del </button>
      </div>
  </>
  )
}

  if(!(JSON.parse(localStorage.getItem("Count")))){
    return ( <div><span className={style.font}>Cart is Empty</span></div>)
  }else {return (
    <div className={style.basket__page_container}>
      <div className={style.products__cards}>
        <div className={classNames(style.header__products_container, style.font)}>Products In Cart</div>
         <Paginate newData={newData} setNewData={setNewData} localStore={localStore} onChanck={onChanck} onChanck2={onChanck2} counter1={counter1} totalPrice1={totalPrice1}/>
      </div>
      <div className={style.summary__container}>
          <div className={style.summary__container_header}>
            <span className={style.font}>Summary</span>
          </div>
          <div className={style.summary__content}>
            <div className={style.spaces}>
              <div className={style.item__span}>
                Proucts:
                <span className={style.font2}> {counter1}</span> 
              </div>
              <div className={style.item__span}>
                Total: <span className={style.font2}> €{totalPrice1}</span>
              </div>
            </div>
            <div>
            {isRS || isEPAM ? <div className={style.border}>Applied codes</div> : <div></div>}
              {isRS && <div className={style.flex__two_colums}>
                            <div>
                            {addBlock()}
                            </div>
                         </div>}
              {isEPAM && <div className={style.flex__two_colums}>
                <div>
                {addBlock2()}
                </div>
              </div>}
              <input type="text" value={inputState} onChange={(e)=>(setInput((e.target as HTMLInputElement).value))} className={style.item__input} placeholder="Enter promo code"/>
             <div className={style.flex}>
                <div className={style.font7}>{namePromo}</div> 
                {isAdd && <button className={style.mini_btn} onClick={(e)=>handlerPromo(e.target)}>ADD</button>} 
             </div> 
            </div>
            <button onClick={() => onShowForm(true)} className={style.button}>Buy now</button>
          </div>
        </div>
    </div>
  );}
};

export default BasketPage;