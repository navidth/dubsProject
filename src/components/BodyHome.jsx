import React from "react";
import slideshow from'../assest/images/slideshow/slideshow.jpg';
import slideshowgewo from '../assest/images/gewo rubbers.jpg';
import rubbers from '../assest/images/slideshow/3er_Grid_1er_Seite_V2-Ovtcharov_H_lzer.webp';
import kanoy from '../assest/images/slideshow/kanoy.png';
import balls from '../assest/images/slideshow/balls.jpg';
import soeesgewo from '../assest/images/slideshow/soessgewo.jpg';
import cleaner from '../assest/images/slideshow/cleaner.jpg';
import Table from '../assest/images/dcd479810e3d4487995d4e705dd1d6e9.jpg';
import { Link } from "react-router-dom";
const Bodyhome =() =>{
    return(
        <React.Fragment>
 {/* <!-...................- top container -..........-> */}
  <div className="top-container">
  <div className=" slide1 align-items-center d-flex">
    <div className="mx-auto container">
     <div className="d-flex text-light flex-column letter-spacing justify-content-center align-item-flex-start position-absolute text-light pt-5 xxl-my px-2">
      <h1 className="h1 text-top">
        جدیدترین محصولات باترفلای
      </h1>
      <h3 className="h3 text-top-miani"> کالکشن 2023</h3>
      <Link to="" className="btn btn-light shadoow btn-top">
        بیشتر
      </Link>
     </div> 
    </div>
  </div>
</div>
      {/* <!--................... main container --..........> */}
  <main className="container">
    <section className="my-5 px-3 px-lg-5">
      <header className="headline">
        <h2 className="fw-bold">هایلایت ها </h2>
      </header>
    </section>
    {/* <!-....................-slide ..................................--> */}
    <section className="container mt-3">
<div className=" bg-center bg-cover overflow-hidden w-full mx-auto d-flex">
  <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-flow-col gap-2 mb-5">
    <div className="position-relative mb-5 mb-lg-1 p-2">
      <picture className=".object-fit-cover h-full w-full">
<img src={slideshow} alt="" className="w-full h-full object-fit-cover rounded-2 shadoow"></img>
      </picture>
      <div className="position-absolute right-0 bottom-0 px-2 me-5 letter-spacing ">
        <h1 className=" shadoww my-1 my-sm-3 fw-700 text-head"> انواع رویه راکت ها</h1>
        <h4 className="shadoww fw-700 h4 text-head-2">حرفه ای و خوش دست </h4>
        <Link href="#" className="mb-8 btn btn-dark py-2 shadoow btn-buy "> بیشتر</Link>
      </div>
    </div>
    {/* <!........................-- slide ..............................................--> */}
    <div className="position-relative mb-5 mb-lg-3 p-3">
      <picture className="object-fit-cover h-full w-full ">
<img src={slideshowgewo} alt="" className="w-full h-full object-fit-cover rounded-2 shadoow"></img>
      </picture>
      <div className="position-absolute right-0 bottom-0  me-5 px-2 letter-spacing ">
        <h1 className="shadoww my-1 fw-700 h1 text-head"> نکسوس سبز</h1>
        <h4 className="shadoww fw-700 h4 text-head-2"> جدید ترین محصول جوو</h4>
        <Link href="#" className="mb-8 btn btn-dark py-2 btn-buy"> بیشتر</Link>
      </div>
    </div>
    {/* <!........................-- slide ..............................................--> */}
    <div className="position-relative p-2">
      <picture className="object-fit-cover  w-full">
        <img src={rubbers} className="w-full h-full object-fit-cover bg-center bg-cover h-2full rounded-2 shadoow" alt="">
        </img>
      </picture>
      <div className="position-absolute baleds-banner right-0 bottem-0 text-light mx-5 mb-4 letter-spacing ">
        <h1 className=" shadoww my-1 fw-700 h1 text-head"> انواع چوب راکت</h1>
        <h4 className= " shadoww fw-700 h4 text-head-2">تخصصی از
        انواع برند ها</h4>
        <Link href="#" className="mb-8 btn btn-dark py-2 border-2 btn-buy shadoow "> بیشتر</Link>
      </div>
    </div>
  </div>
</div>
</section>
{/* <!........................-- slide .......................--> */}
<section className="container">
<div className="bg-center bg-cover mx-auto w-full overflow-hidden d-flex mb-5">
  <div className="position-relative  p-3">
    <img src={kanoy} alt="kanoy" className='rounded-2 kanoy shadoow ' />
    <div className="position-absolute bottom-0 right-0 me-5 px-1">
      <h1 className=" shadoww my-2 h1 text-head">بگ کانوی</h1>
      <h4 className="shadoww h4 text-head-2"> محصول جدید  <h4 className=" h4 d-lg-inline d-block shadoww ">باترفلای </h4>  </h4>
      <Link to='' className="mb-8 btn btn-dark py-2 border-2 btn-buy shadoow">
        خرید
      </Link>
    </div>
  </div>
</div>
</section>
<section className="container mb-5 mt-5">
<div className="mx-auto bg-center bg-cover">
  <div className="row justify-content-center align-items-center g-4">
    {/* <!........................-- slide ..............................................--> */}
    <div className="col-lg-6 ">
      <div className="position-relative p-3 " >
        <picture className="object-fit-cover w-full  h-full ">
          <img src={balls} alt="balls" className="rounded-2 w-full h-full shadoow"></img>
        </picture>
        <div className="position-absolute bottom-0 right-0 justify-content-center me-5 text-light px-2">
          <h1 className=" shadoww my-2 h1 text-head"> انواع توپ </h1>
          <h4 className="shadoww h4 text-head-2"> حرفه ای و تمرینی </h4>
          <Link href="#" className="fw-bold shadoow border-2 btn  mb-8 btn-dark py-2 btn-buy">
            خرید
          </Link>
        </div>
      </div>
    </div>
    {/* <!........................-- slide ..............................................--> */}
    <div className="col-lg-6">
      <div className="position-relative p-3">
        <picture className=" object-fit-cover w-full p-1 h-full ">
          <img src={soeesgewo} className="rounded-2 w-full h-full shadoow" alt="s"/>
        </picture>
        <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 align-item-flex-start px-2">
          <h1 className="my-1 shadoww h1 text-head"> انواع کفش </h1>
          <h4 className="shadoww h4 text-head-2"> اصل و انواع برند ها</h4>
          <Link href="#" className="btn btn-dark shadoow border-2 py-2 mb-8 btn-buy">بیشتر </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* <!........................-- slide ...................--> */}
<section className="mb-5">
<div className="mx-auto w-full h-full overflow-hidden mb-8">
  <div className=" row justify-content-center align-items-center g-2">
    {/* <!........................-- slide ..............................................--> */}
    <div className="col-lg-6 position-relative p-4">
      <picture className="object-fit-cover w-full h-full">
        <img src={cleaner} alt="cleaner" className="w-full h-full rounded-2 d-block shadoow "></img>
      </picture>
      <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 mb-2 px-2 align-item-flex-start">
        <h1 className="my-2 shadoww h1 text-head">
          اسپری با ابر جوو 
             </h1>
        <h4 className="shadoww h4 text-head-2">تمیز کننده رویه راکت</h4>
        <Link href="#" className="btn btn-dark shadoow border-2 py-2 mb-8 btn-buy">خرید </Link>
      </div>
    </div>
    {/* <!........................-- slide ..............................................--> */}
    <div className="position-relative col-lg-6 p-4">
      <picture className="w-full h-full">
        <img src={Table} alt="" className="w-full h-full rounded-2 shadoow d-block"></img>
      </picture>
      <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 mb-2 px-2 align-item-flex-start">
        <h1 className=" shadoww my-1 h1 text-head">انواع میز پینگ پنگ</h1>
        <h4 className=" shadoww h4 text-head-2">تخصصی و خانگی  </h4>
        <Link href="#" className=" border-2 btn shadoow mb-8 btn-dark py-2 btn-buy">
          بیشتر
        </Link>
      </div>
    </div>
  </div>
</div>
</section>
    </main>
    </React.Fragment>
    )
}
export default Bodyhome;