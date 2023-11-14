import React, { useState, useEffect } from 'react';
import '../assest/css/App.css';
import logo from '../assest/images/logo/remove bg.png';
import slideshow from '../assest/images/slideshow/slideshow.jpg';
import slideshowgewo from '../assest/images/slideshow/10986_0-501x501(GEWO).jpg';
import rubbers from '../assest/images/slideshow/3er_Grid_1er_Seite_V2-Ovtcharov_H_lzer.webp';
import kanoy from '../assest/images/slideshow/kanoy.png';
import balls from '../assest/images/slideshow/balls.jpg';
import soeesgewo from '../assest/images/slideshow/soessgewo.jpg';
import cleaner from '../assest/images/slideshow/cleaner.jpg';
import tanle from '../assest/images/slideshow/table.jpg';
import Navbar from './navbar';
import Footer from './footer';
import { BsInstagram, BsTelegram } from "react-icons/bs";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader container-md" id="preloader">
        {/* ...............................prelader........................ */}
        <img src={logo} className="img-fluid" width="300px" height="350px" alt="Logo" />
        <p>به فروشگاه ما خوش آمدید</p>
        <div className="loader">
          <p>در حال بارگزاری ...</p>
          <div className="line"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="divbody" id="divbody">
        {/* .................footer....................... */}
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Preloader;