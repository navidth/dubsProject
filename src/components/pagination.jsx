import React, { useState } from 'react'
const Pagination = ({PostPerPage,totalPosts,paginate}) => {
    const [ActivePage,setAcitvePage] = useState(1);
    const NumberPage = [];
    for(let i = 1; i<=Math.ceil(totalPosts / PostPerPage); i++){
        NumberPage.push(i);
    }
    const handleActivePage = (page) =>{
      paginate(page);
      setAcitvePage(page);
    }
  return (
    <div className='mt-5'>
        <ul className="pagination justify-content-center">
         {NumberPage.map(page => (
            <li className='page-item' key={page}>
              <a href='#top'  onClick={()=> {handleActivePage(page);}} className={`page-link btn rounded rounded-0 ${ActivePage === page ? 'text-bg-dark': 'text-bg-light'}`}>{page.toLocaleString('fa-IR')}</a>
            </li>
         ))}
        </ul>
    </div>
  )
}
export default Pagination;