import React from "react";
import {BsInstagram, BsTelegram,BsPhone,BsEnvelopeAt,BsGeoAlt} from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import{Link} from 'react-router-dom';

const Footer =()=>{
return(
    <footer class="footer px-4 bg-dark text-light shadownavbar w3-animate-opacity">
      <div class="w-full d-flex align-item-flex-start flex-column flex-md-row py-3 justify-content-around a-line">
     {/* ......................راه های ارتباطی ............... */}
      <div class="d-flex flex-column mx-4 mx-md-0">
          <div class="container-md mb-3">
            <a target="_blank" rel="noopener noreferrer"  href="https://instagram.com/pingpong_damghan?igshid=MzRlODBiNWFlZA==" class="tt btn insta" data-tooltip-content='اینستاگرام' data-tooltip-id='my-tooltip'> 
              <BsInstagram size={'26px'} color="var(--bs-light)"></BsInstagram>
              </a>
            <a target="_blank" rel="noopener noreferrer"  href="https://t.me/Navid_th?fbclid=PAAaYPv4EGttqdRmuE9EGoSA6yAUZ8VJkwX0OniF10f5Q0b2iqhQ768Mooc_k" class="btn tt"data-tooltip-content='تلگرام پشتیبان' data-tooltip-id='my-tooltip'>
             <BsTelegram size={'26px'} color="var(--bs-light)"></BsTelegram>
            </a>
          </div>
          <div class="ms-5">
            <p class="fw-700 letter-spacing"> 
            <BsPhone class="ms-1 mb-3 bi tt" size={'26px'} data-tooltip-content='شماره تلفن مشاور خرید' data-tooltip-id='my-tooltip'></BsPhone>
             09104873278 (آقای طاهری)
            </p>
            <p class="fw-700 letter-spacing">
            <BsPhone class=" ms-1 mb-3 bi tt" size={'26px'}  data-tooltip-content='شماره تلفن فروشنده' data-tooltip-id='my-tooltip'></BsPhone>
            09120978206  (آقای صداقتی)
          </p>
          </div>
          <div class="ms-5">
            <p class="fw-700 letter-spacing"><BsEnvelopeAt class="ms-1 bi" size={'26px'}></BsEnvelopeAt>  navidtaheri32@gmail.com</p>
          </div>
          <div class="ms-5">
           <p class="fw-700"><BsGeoAlt class="ms-1 bi" size={'26px'}></BsGeoAlt>
            سمنان، دامغان، میدان شهدا  ،خیابان پاسداران، کنار اداره ورزش و جوانان <strong class="text-danger fw-bolder">فروش فقط اینترنتی  </strong>
          </p>
          </div>
  
        </div>
        {/* .........................خدمات.................. */}
        <div class="d-flex flex-column align-item-flex-start my-md-0 my-5 mx-4">
          <h1 class="mb-3">خدمات</h1>
          <Link to='/blades'  class="a-footer">چوب راکت</Link>
          <Link to="/rubbers" class="a-footer">رویه راکت</Link>
          <Link to="/table-ball" class="a-footer">میز و توپ پینگ پنگ</Link>
          <Link to="/clothing" class="a-footer">پوشاک و کفش</Link>
          <Link to="/accessories" class="a-footer">لوازم جانبی</Link>       
          </div>
          {/* .....................بلاگ ها ...................*/}
          <div class="d-flex flex-column align-item-flex-start mx-4 mb-5">
            <h1 class="mb-3">بلاگ ها</h1>
            <Link to="" class="a-footer">
دانستنی های پینگ پنگ
            </Link>
            <Link to="" class="a-footer">
              بهترین چوب راکت ها
            </Link>
            <Link to="" class="a-footer">
انواع پیچ و تشخیص آن
            </Link>
            <Link to="" class="a-footer">
بهترین برند ها 
            </Link>
            <Link to="" class="a-footer">
تاثیر راکت حرفه ای
            </Link>
          </div>
          {/* ...................درباره ما...................... */}
          <div class="d-flex flex-column align-item-flex-start mx-4  mb-5">
            <h1 class="mb-3">درباره ما</h1>
            <Link to="" class="a-footer">
درباره ما  
            </Link>
            <Link to="" class="a-footer">
              سوالات متد اول
            </Link>
            <Link to="" class="a-footer">
              تماس با ما
            </Link>
            <Link to="" class="a-footer">
              قوانین و مقررات
            </Link>
          </div>
        </div>
        <hr />
        {/*........................ طراح...................... */}
        <div class="text-center mt-5 py-2">
  <p class="w3-text-blue-grey mb-5"> طراح و توسعه از : <Link class="w3-text-light-gray creator" href="">نوید طاهری
  </Link>
  </p>
</div>
        <Tooltip id='my-tooltip' className="custom-tooltip" style={{ backgroundColor: 'var(--bs-danger)', color: 'var(--bs-light)', border: '1px solid #ddd',direction:'ltr', borderRadius: '14px', padding: '8px', fontSize: '12px' }}></Tooltip>
        </footer>
)
}
export default Footer;