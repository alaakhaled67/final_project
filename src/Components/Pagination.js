import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { SetPage } from "../Store/Actions";
import { useEffect, useState } from "react";
import { PaginationItem } from "reactstrap";

function MyPagination() {
  let noofitem=useSelector((state) => state.noOfItem)
  let noofpage=useSelector((state) => state.noOfPage)
  const dispatch = useDispatch();
  const paginationNumbers = [];
  const chengePage = (page) => {
    dispatch(SetPage(page));
  };
    if(noofitem%10!==0)
    noofitem+=10
    for (let i = 1; i <=noofitem/10; i++) {
      paginationNumbers.push(i);
    }

  let active =noofpage;
   console.log(paginationNumbers)
   console.log("from pagination",noofitem)
  return (
    <>
      <div>
        <Pagination size="lg">    
        {paginationNumbers.map((pageNumber) => (
        <Pagination.Item key={pageNumber} onClick={()=>{chengePage(pageNumber);}} active={pageNumber === active}>{pageNumber}</Pagination.Item>
      ))}
      </Pagination>
      </div>
    </>
  );
}

export default MyPagination;
