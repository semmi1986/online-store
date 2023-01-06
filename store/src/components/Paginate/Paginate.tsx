import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { BasketPagePullArr } from "../../types/types";
import BasketCards from "../../components/BasketCards/BasketCards";
import style from "./paginate.module.scss";

interface PaginateProps{
  data:BasketPagePullArr[]
  onChanck: (i: number) => void;
  onChanck2: (i: number) => void;
  counter1:number
  totalPrice1: number
}

const Paginate: React.FC<PaginateProps> = ({data, totalPrice1, onChanck, onChanck2, counter1}) => {
  
  const [itemOffset, setItemOffset] = useState(0);

  console.log(data);
  


  const itemsPerPage = 3
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems.map((item, index) => <BasketCards key={index} item={item} counter1={counter1} onChanck={onChanck} onChanck2={onChanck2} totalPrice1={totalPrice1} />)}
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