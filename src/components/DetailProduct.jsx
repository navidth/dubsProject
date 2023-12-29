import React, { useState } from 'react';
import pro from '../assest/images/image2.jpg';
import { BsBookmark,BsBookmarkFill,BsShare,BsTelegram} from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import ModalImage from "react-modal-image";

const DetailProduct = () => {
    const [bookMarks,setBookmarks] = useState(false);
    const [showAlert,setShowAlert] = useState(false);
    const[showMassege,setShowMassege] = useState(false);
    const handleDashbordShare = ()=>{
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false);

        },1000)
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const handleDashbordFavorite = ()=>{
        setBookmarks(!bookMarks);
        setShowMassege(true)
        setTimeout(()=>{
         setShowMassege(false)
        },2000)
    }
    const[readMe,setReadMe] = useState (false);
    const readMeBtn = () => {
        setReadMe(!readMe)
    }
    const[changeItems,setChangeItems] = useState(true);
    const changeItemsFunctions = () =>{
        setChangeItems(!changeItems)
    }
    return (
        <div className="">
            <div className='detailed-items my-5'>
            <div className="information-product bg-white rounded-4">
                {/* modal img */}
                <div className="img-products mt-lg-4">
                    <img src={pro} alt="product" className='me-3'/>
                    <div className="modal-img my-4 me-3">
                    <ModalImage 
                    smallSrcSet={pro}
                    large={pro}
                    hideDownload={true}
                    hideZoom={true}
                    showRotate={true}
                    autoFocus={true}
                    />
                    <ModalImage
                    smallSrcSet={pro}
                    large={pro}
                    hideDownload={true}
                    hideZoom={true}
                    showRotate={true}
                    />
                    <ModalImage
                    smallSrcSet={pro}
                    large={pro}
                    hideDownload={true}
                    hideZoom={true}
                    showRotate={true}
                    />
                    </div>
                </div>
                {/* body information product */}
                <div className="body-product mt-3">
                    <section> 
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className='fw-700'>چوب راکت ویسکاریا</h4>
                            <div className=" d-flex justify-content-center align-items-center">
                                <BsShare id='dashbord-svg' 
                                 onClick={handleDashbordShare}
                                 size={'24px'} 
                                 className='ms-3'
                                 data-tooltip-id="my-tooltip"
                                 data-tooltip-content="کپی لینک محصول"
                                 data-tooltip-place="top"
                                 style={{cursor: 'pointer'}}
                                 />
                                 
                                <BsBookmark id='dashbord-svg'
                                 size={'24px'} 
                                 onClick={handleDashbordFavorite}  
                                 className= {`ms-5 ${bookMarks ? 'd-none': 'd-block'}`}
                                 data-tooltip-id="my-tooltip"
                                 data-tooltip-content="افزودن به علاقه مندی ها"
                                 data-tooltip-place="top"
                                 style={{cursor: 'pointer'}}
                                 />
                                 <BsBookmarkFill size={'24px'} onClick={handleDashbordFavorite} className= {`ms-5 ${bookMarks ? 'd-block': 'd-none'}`} data-tooltip-id="my-tooltip"
                                 data-tooltip-content="حذف از علاقه مندی ها"
                                 data-tooltip-place="top"
                                 style={{cursor: 'pointer'}}
                                 />
                                 {/* ......................................Modal Massage............................... */}
                                 <div className={`alert alert-danger ${showAlert ? 'd-block':'d-none'}`} 
                                  style={{ 
                                    position: "absolute",
                                    right: "50%",
                                    top: "50%",
                                    width: "25%",
                                    textAlign: "center",
                                    opacity:'0.8',
                                    color:'black'
                                   }}>
                                    <p>با موفقیت  کپی شد</p>
                                 </div>
                                 <div className={`alert alert-danger ${showMassege ? 'd-block':'d-none'}`} 
                                  style={{ 
                                    position: "absolute",
                                    right: "50%",
                                    top: "50%",
                                    width: "25%",
                                    textAlign: "center",
                                    opacity:'0.8',
                                    color:'black'
                                   }}>
                                    <p>با موفقیت  انجام شد</p>
                                 </div>
                            </div>
                            </div>
                        <div className="brand">
                        <label htmlFor="brand" className='fw-bold mt-2 ms-2'>برند : </label>
                        <span id="brand" className=' letter-spacing text-muted'>باترفلای</span>
                        </div>
                    </section>
                    <section>
                       <ul className='mt-2 p-0 mx-3'>
                        <li className="py-1">
                            <div className="inform">
                                <span className='fw-bold letter-spacing'>کشور : </span>
                                <span className='text-muted px-4'>ژاپن</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing'>سرعت : </span>
                               <span className='text-muted px-4'>7.8</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing'>کنترل : </span>
                                <span className='text-muted px-4'>8.5</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing'>کلاس : </span>
                                <span className='text-muted px-4'>OFF</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing'>لایه ها : </span>
                                <span className='text-muted px-4'>5+2</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing '>نوع کربن : </span>
                                <span className='text-muted px-4'>آرلایت</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="inform">
                               <span className='fw-bold letter-spacing'>وزن : </span>
                                <span className='text-muted px-4'>90 </span>
                            </div>
                        </li>
                        </ul> 
                    </section>
                    <section className='pb-4'>
                        <div className="prices d-flex align-items-baseline text-danger mb-4 mt-2">
                            <h1 className='px-2 letter-spacing ms-2'>{numberWithCommas(9180000)}</h1> <h6 className='letter-spacing'>تومان </h6>
                        </div>
                        <div className="button-price">
                            <div className="btn1">
                            <button type="button" className='btn btn-danger rounded-5 py-3 px-3 d-flex align-items-center'>
                               <MdAddShoppingCart size={'24px'}></MdAddShoppingCart > <span className='mx-3'>افزودن به سبد خرید</span> 
                            </button>
                            </div>
                            <div className="btn2 ">
                            <a target="_blank" rel="noopener noreferrer"  href="https://t.me/Navid_th?fbclid=PAAaYPv4EGttqdRmuE9EGoSA6yAUZ8VJkwX0OniF10f5Q0b2iqhQ768Mooc_k" className='btn btn-danger rounded-5 py-3 px-5 d-flex align-items-center'>
                               <BsTelegram size={'24px'}></BsTelegram > <span className='me-3'>مشاوره خرید </span> 
                            </a>
                            </div>
                        </div>
                    </section>
                    <section className='my-1 border-0'>
                        <div className="stock">
                            <label htmlFor="stock" className='fw-bold fs-small'>موجودی : </label>
                            <span className='text-danger'> موجود</span>
                        </div>
                    </section>
                </div>
            </div>
            {/* description  and similar  product */}
        <div className="description-similar bg-white rounded-4 my-5">
            <section>
                <div className="d-flex justify-content-around">
                <a href='#one' onClick={changeItemsFunctions} className='px-3 py-2 w-50 fs-4' style={{ background: changeItems ? '#dc3545' : '' , color:changeItems ? '#f8f9fa ' : ''}}>توضیحات</a>
                <a  href="#two" onClick={changeItemsFunctions} className='px-3 py-2 w-50 fs-4' style={{ background: changeItems ? '' : '#dc3545' , color:changeItems ? ' ' : '#f8f9fa'}}>محصولات مشابه</a >
                </div>
            </section>
            {/* // desceriptions...........................  */}
            <div id='one' className="desceriptions">
           <section className="header-desceription px-3 py-2 mt-3">
               <h2> معرفی چوب راکت ویسکاریا (Viscaria) </h2>
            </section>
            <section>
                <h4 className='px-4 mx-3 fw-700 letter-spacing'> معرفی کوتاه</h4>
                {readMe && 
                <div>
                   <p id='text' className='p-desceriptions'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </p>
                </div>
                }
                <button type='button' onClick={readMeBtn} className='fs-4 btn btn-readMe btn-danger text-white w-100 mx-auto d-block'>
                 {readMe ? "مخفی کردن" : "نمایش کامل"}
                </button>
            </section>
           </div> 
          {/* //    similar product............................... */}
           <div id='two' className="similar-products">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora, molestiae excepturi sint nobis exercitationem magnam deleniti nemo consectetur aut architecto cum? Velit inventore atque, itaque, consectetur maxime fugit facilis vitae ipsa pariatur sequi laudantium voluptatum cupiditate laboriosam enim aspernatur?</p>
           </div>
        </div>
     </div>

            <Tooltip
        id="my-tooltip"
        className="custom-tooltip"
        style={{
          opacity: "0.3",
          backgroundColor: "var(--bs-danger)",
          color: "var(--bs-light)",
          border: "1px solid #ddd",
          direction: "ltr",
          borderRadius: "14px",
          padding: "8px",
          fontSize: "12px",
        }}>
            </Tooltip>
        </div>
    );
}

export default DetailProduct;
