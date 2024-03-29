import React, { useState, useEffect } from 'react';
import { ItemMenu,itemNamesBlades } from '../../components/Data.js';
import Moshavere from '../../components/moshavere';
import PriceRange from '../../components/PriceBox';
import Resultcat from '../../components/ResultsCategory';
import Header from '../../components/Header';
import Sortby from '../../components/Sortby.jsx';
import CardProduct from '../../components/cardProduct.jsx';
import Pagination from '../../components/pagination.jsx';
import ArticleFilter from '../../components/ArticleFilter.jsx';


const Blades =({data})=>{
    
    const[currentPage,setCurrentPage] = useState(1);
    const[PostPerPage] = useState(6);
   // get current posts...................................
   const lastIndexPost = currentPage * PostPerPage;
   const firstIndexPost = lastIndexPost - PostPerPage;
   const currentPost = data.slice(firstIndexPost , lastIndexPost);
   
//   change page posts.....................................
   const paginate = (NumberPage)=>{
    setCurrentPage(NumberPage)
   }
   return(
    <main className='mt-5 d-flex container-lg'>
        {/* .................Section Article............ */}
        <ArticleFilter>
        <Moshavere></Moshavere>
        <Resultcat names={itemNamesBlades} pageFather={ItemMenu[0]}></Resultcat>
        <PriceRange></PriceRange>
        </ArticleFilter>
        {/* .................Section Main Product.......... */}
        <section className='card-prudoct me-5 rounded mb-5'>
         <Header pageName="همه چوب راکت ها" pageNameTwo='همه چوب راکت ها' pageFather={ItemMenu[0]}></Header>
         <Sortby></Sortby>
            <CardProduct Item={currentPost}></CardProduct>
            <Pagination currentPage={currentPage} totalPosts={data.length} PostPerPage={PostPerPage} paginate={paginate} />

        </section>
    </main>

    )
}
export default Blades;