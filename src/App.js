import React, { useEffect, useState } from 'react';
import logo from './assest/images/logo/remove bg.png';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Bodyhome from './components/BodyHome';
import Buy from './pages/login and buy/Buy';
import Login from './pages/login and buy/Login';
import Blades from './pages/Blades/Blades';
import BladesButt from './pages/Blades/BladesButterfly';
import BladesGewo from './pages/Blades/BladesGewo';
import BladesDonic from './pages/Blades/BladesDonic';
import OtherBlades from './pages/Blades/OtherBlades';
import Rubbers from './pages/Rubbers/Rubbers';
import RubbersButterfly from './pages/Rubbers/RubbersButterfly';
import RubbersGewo from './pages/Rubbers/RubbersGewo';
import RubbersDonic from './pages/Rubbers/RubbersDonic';
import OtherRubbers from './pages/Rubbers/OtherRubbers';
import BallTable from './pages/ball & table/Ball_Table';
import Table from './pages/ball & table/Table';
import Net from './pages/ball & table/Net';
import Balls from './pages/ball & table/Balls';
import ClothingsShoes from './pages/clothings & shoes/ClothingsShoes';
import Clothings from './pages/clothings & shoes/Clothings';
import Shoes from './pages/clothings & shoes/Shoes';
import TonicWomen from './pages/clothings & shoes/TonicWomen';
import OthersClothings from './pages/clothings & shoes/OthersClothings';
import Accessory from './pages/Accessory';
import DetailPro from './pages/DetailPro';

function App () {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  })
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
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Bodyhome/>}></Route>

          <Route path='/Buy' element={<Buy/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>

          <Route path='/blades' element={<Blades/>}></Route>
          <Route path='/blades/butterfly' element={<BladesButt/>}></Route>
          <Route path='/blades/gewo' element={<BladesGewo/>}></Route>
          <Route path='/blades/donic' element={<BladesDonic/>}></Route>
          <Route path='/blades/others' element={<OtherBlades/>}></Route>

          <Route path='/rubbers' element={<Rubbers/>}></Route>
          <Route path='/rubbers/butterfly' element={<RubbersButterfly/>}></Route>
          <Route path='/rubbers/gewo' element={<RubbersGewo/>}></Route>
          <Route path='/rubbers/donic' element={<RubbersDonic/>}></Route>
          <Route path='/rubbers/others' element={<OtherRubbers/>}></Route>

          <Route path='/table-ball' element={<BallTable/>}></Route>
          <Route path='/table-ball/table' element={<Table/>}></Route>
          <Route path='/table-ball/net' element={<Net/>}></Route>
          <Route path='/table-ball/pro-ball' element={<Balls/>}></Route>

          <Route path='/clothing' element={<ClothingsShoes/>}></Route>
          <Route path='/clothing/tshirt-shorts' element={<Clothings/>}></Route>
          <Route path='/clothing/shoes' element={<Shoes/>}></Route>
          <Route path='/clothing/tonic' element={<TonicWomen/>}></Route>
          <Route path='/clothing/oth-clothings' element={<OthersClothings/>}></Route>

          <Route path='/accessories' element={<Accessory/>}></Route>
          
          <Route path='/test' element = {<DetailPro/>}></Route>
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;