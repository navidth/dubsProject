import React, { useEffect, useState } from 'react';
import axios from "axios";
import logo from './assest/images/logo/remove bg.png';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Bodyhome from './components/BodyHome';
import Login from './pages/login and buy/Login';
import Blades from './pages/Blades/Blades';
import DetailProduct from './components/DetailProduct';
import { CartProvaider } from './context/CartContex';

function App () {
  const [isLoading,setIsLoading] = useState(true);
  const [products, setProduct] = useState([]);

  const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProduct(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
   };

  useEffect(()=>{
    fetchData();
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  },[])


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
      <CartProvaider data={products}>
      <Router>
        <Navbar/>
        <Routes>
          <Route index Component={Bodyhome}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/blades' element = {<Blades data={products} />} ></Route>
          <Route path="/blades/:title" element = {<DetailProduct data={products}/>}>
            
          </Route>
        </Routes>
        <Footer />
      </Router>
      </CartProvaider>
    );
  }
}

export default App;