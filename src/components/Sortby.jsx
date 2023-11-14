import { BiSortDown } from "react-icons/bi";
import { AiFillFilter} from "react-icons/ai";
import React, { useState } from 'react';
import Resultcat from "./Results category";
import PriceRange from "./PriceBox";
import { sort } from "./Data";
const Sortby = () =>{
    const [useComponent, setuseComponent]=useState(false)
    function handleFilter(){
         setuseComponent(!useComponent)
    }
    const [ClickSort, setClickSort] = useState(0);
    function OnClickSortby(index){
        setClickSort(index);
    }
    const setSortDesktop = sort.map((itemSort,index)=>(
        <button type="button" className={`btn-sort-by rounded-2 mx-3 ${ClickSort === index ? "text-bg-dark fw-bold" : ''} `} onClick={() => OnClickSortby(index)} key={index}>{itemSort}</button>
))
    const setSortMobile = sort.map((itemSort,index)=>(
        <button type="button" className="btn dropdown-item drop-sort my-2 border border-bottom border-0" key={index}> {itemSort}</button>
    ))
    return(
        <div className="filter">
            {/* desktop---------filter */}
        <div className="mt-4 bg-light rounded p-2 align-items-center container-md d-md-flex d-none desktop-filter flex-wrap">
        <label className="font-size-small me-2 mb-1"> مرتب سازی بر اساس : </label>
        <div className="d-flex">
            {setSortDesktop}
        </div>
    </div>
    {/* mobile ---------------filter----- */}
    <div className=" mobile-fliter mt-4 bg-light rounded p-2  align-items-center d-md-none d-flex">
        <div className="sort dropdown">
        <button className="btn button-sort"  type="button" data-bs-toggle="dropdown" data-bs-target="#item-sort" aria-expanded='false'>
        <label htmlFor="button-sort" className="item-sort">مرتب سازی</label>
        <BiSortDown size={'25px'}></BiSortDown></button>
        <div className="bg-light border-top-0 border rounded-0 dropdown-menu text-end me-5" id="item-sort">
            {setSortMobile}
        </div>
        </div>
        <div className="category-resualt d-md-none d-block">
        <button className="btn button-filter" onClick={handleFilter}> <label htmlFor="button-filter">دسته بندی </label><AiFillFilter size={"25px"}></AiFillFilter></button>
        </div>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center ms-2">
   {useComponent && <PriceRange></PriceRange>}{ useComponent && <Resultcat/>}
    
    </div>
        </div>
    )
}
export default Sortby;