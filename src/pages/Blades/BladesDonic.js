import React, { useState } from 'react';
import {posts,ItemMenu,itemNamesBlades} from '../../components/Data.js';
import Moshavere from '../../components/moshavere';
import PriceRange from '../../components/PriceBox';
import Resultcat from '../../components/ResultsCategory';
import Header from '../../components/Header';
import Sortby from '../../components/Sortby.jsx';
import CardProduct from '../../components/cardProduct.jsx';
import Pagination from '../../components/pagination.jsx';
import ArticleFilter from '../../components/ArticleFilter.jsx';
import SectionAllPrudoct from '../../components/SectionAllProduct.jsx';
import SectionProduct from '../../components/SectionProduct.jsx';

function BladesDonic() {
    const[currentPage,setCurrentPage]=useState(1);
    const[PostPerPage]=useState(6);
   // get current posts...................................
   const lastIndexPost = currentPage * PostPerPage;
   const firstIndexPost = lastIndexPost - PostPerPage;
   const currentPost = posts.slice(firstIndexPost , lastIndexPost);
//   change page posts.....................................
   const paginate = (NumberPage)=>{
    setCurrentPage(NumberPage)
   }

    return(
    <main className='mt-5 d-flex container-md'>
        {/* .................Section Article............ */}
        <ArticleFilter>
        <Moshavere></Moshavere>
        <Resultcat names={itemNamesBlades} pageFather={ItemMenu[0]}></Resultcat>
        <PriceRange></PriceRange>
        </ArticleFilter>
        {/* .................Section Main Product.......... */}
        <SectionAllPrudoct>
         <Header pageName="چوب راکت دونیک" pageFather={ItemMenu[0]}></Header>
         <Sortby></Sortby>
         <SectionProduct>
            <CardProduct Item={currentPost}></CardProduct>
            <Pagination PostPerPage={PostPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
         </SectionProduct>
        </SectionAllPrudoct>
    </main>

  )
}

export default BladesDonic
