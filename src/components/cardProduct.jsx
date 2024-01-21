import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import LoadingProduct from "./Loading/LoadingProduct";

const CardProduct = ({Item}) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const [isLoading, setIsLoading]=useState(true)
const [products, setProduct] = useState([]);

useEffect(() => {
  setTimeout(() => {
    axios.get('https://fakestoreapi.com/products').then((respone)=>{
      setIsLoading(false)
      setProduct(respone.data)
    })
  }, 5000000);
}, []);
return(
<section className="mx-1 g-3 align-items-center w3-animate-opacity sectionAllProduct">
  {
    isLoading ? (<LoadingProduct/>):
    (
      products.map((product)=>{
        return (
          <div className="collectionProduct mt-4"
            key={product.id}>
            <Link to={'/blades/'+product.title}className="cardProductLink">
             <div className="productcard rounded-3 w3-white">
              <div className="img-card">
                <img src={product.image} className="card-img" alt={product.title} />
              </div>
              <div className="my-5 description-pro">
                <div className="headPRO">
                  <p className="nameProduct h4 w3-opacity-min" >
                    {product.title}
                  </p>
                </div>
                <div className="PricePRO">
                  <span className="fw-bolder fs-5 ms-2 letter-spacing ">
                    {numberWithCommas(product.price)}
                  </span>
                  <span className="opacity-75">تومان</span>
                </div>
              </div>
             </div>
            </Link>
          </div>
        );
      }
    )
    )
  }
</section>
)}
export default CardProduct;

        