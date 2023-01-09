import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { BasketPagePullArr } from "../../types/types";
import BasketCards from "../../components/BasketCards/BasketCards";
import style from "./paginate.module.scss";

interface PaginateProps{
  localStore:BasketPagePullArr[]
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  counter1:number
  totalPrice1: number
  newData:BasketPagePullArr[]
  setNewData:(i:BasketPagePullArr[]) => void;
}

const Paginate: React.FC<PaginateProps> = ({ setNewData, newData, localStore, totalPrice1, onChanck, onChanck2, counter1}) => {



  const [itemOffset, setItemOffset] = useState(0);

  const getUnique = (localStore: BasketPagePullArr[]) => {
    return localStore.filter((el: BasketPagePullArr, ind:number) => ind === localStore.indexOf(el));
  };

  useEffect(()=>{
    localStorage.getItem("uniqeBasket")
    ? setNewData(getUnique(JSON.parse(localStorage.getItem("uniqeBasket"))))
    : setNewData(localStore);
  },[])

  useEffect(()=>{
    getUnique(localStore);
  },[newData])

  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = newData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newData.length / itemsPerPage);
  interface EventList{
    selected: number;
  }
  const handlePageClick = (event: EventList) => {
    const newOffset = (event.selected * itemsPerPage) % newData.length;
    setItemOffset(newOffset);
  };


  
  return (
    <>
      {currentItems.map((item, index) => <BasketCards setNewData={setNewData} localStore={localStore} newData={newData} key={index} item={item} counter1={counter1} onChanck={onChanck} onChanck2={onChanck2} totalPrice1={totalPrice1} index ={index}/>)}
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel={">"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={"<"}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;