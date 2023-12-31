import React, { useRef, useState } from 'react';
import pro from '../assest/images/image2.jpg';
import { BsBookmark,BsBookmarkFill,BsShare,BsTelegram} from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import ModalImage from "react-modal-image";
import CardSimilar from './CardSimilar';
import ButtonScroll from './ButtonScroll';
import DesceriptionsPreduct from './DesceriptionsPreduct';

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
        <div className="description-similar my-5">
            <section style={{position:'sticky', top:'0', zIndex:'20', backgroundColor:'white'}}>
                <ButtonScroll  headline1 = "توضیحات" headline2="محصولات مشابه"></ButtonScroll>
            </section>
            {/* // desceriptions...........................  */}
            <DesceriptionsPreduct id={'one'}></DesceriptionsPreduct>
            {/* //    similar product............................... */}
            <CardSimilar id={'two'}></CardSimilar>
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
