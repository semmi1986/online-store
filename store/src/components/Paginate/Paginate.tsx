import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import { BasketPagePullArr } from "../../types/types";
import BasketCards from "../../components/BasketCards/BasketCards";
import style from "./paginate.module.scss";

interface PaginateProps{
  data:BasketPagePullArr[]
}

const Paginate: React.FC<PaginateProps> = ({data}) => {
  
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 3
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  console.log(currentItems);
  

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems.map((item, index) => <BasketCards key={index} item={item}/>)}
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
