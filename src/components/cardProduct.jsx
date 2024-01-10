import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({Item}) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
return(
<section className="mx-1 g-3 align-items-center w3-animate-opacity sectionAllProduct">
    {Item.map((post) => {
      // const formattedPrice = post.price.toLocaleString("fa-IR");
      return (
        <div className="collectionProduct mt-4"
          key={post.id}>
          <Link to={'/blades/'+post.name}className="cardProductLink">
           <div className="productcard rounded-3 w3-white">
            <div className="img-card">
              <img src={post.Image} className="card-img" alt={post.name} />
            </div>
            <div className="my-5 description-pro">
              <div className="headPRO">
                <p className="nameProduct h4 w3-opacity-min" >{post.name}</p>
              </div>
              <div className="PricePRO">
                <span className="fw-bolder fs-5 ms-2 letter-spacing ">{numberWithCommas(post.price)}</span>{"  "}
                <span className="opacity-75">تومان</span>
              </div>
            </div>
           </div>
          </Link>
        </div>
      );
  })}
</section>
)}
export default CardProduct;

        