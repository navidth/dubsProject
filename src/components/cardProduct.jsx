import React from "react";
const CardProduct = ({Item}) => {
return(
<React.Fragment>
    {Item.map((post, index) => {
    if (index % 2 === 0) {
      const formattedPrice = post.price.toLocaleString("fa-IR");
      return (
        <div
          className="collectionProduct mt-4"
          key={index}
        >
          <div className="productcard rounded-3 w3-white">
            <div className="img-card">
              <img src={post.Image} className="card-img" alt={post.name} />
            </div>
            <div className="my-5 description-pro">
              <div className="headPRO">
                <p className="nameProduct h4 w3-opacity-min ">{post.name}</p>
              </div>
              <div className="PricePRO">
                <span className="fw-bolder fs-5 ms-2">{formattedPrice}</span>{" "}
                <span className="opacity-75">تومان</span>
              </div>
            </div>
          </div>
          {Item[index + 1] && (
          <div className="productcard rounded-3 w3-white">
              <div className="img-card">
                <img
                  src={Item[index + 1].Image}
                  className="card-img"
                  alt={Item[index + 1].name}
                />
              </div>
              <div className="mt-5 mb-5 description-pro g-5">
                <div className="headPRO">
                  <p className="nameProduct h4 w3-opacity-min ">
                    {Item[index + 1].name}
                  </p>
                </div>
                <div className="PricePRO">
                  <span className="fw-bolder fs-5 ms-2">
                    {Item[index + 1].price.toLocaleString('fa-IR')}
                  </span>{" "}
                  <span className="opacity-75">تومان</span>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  })}
</React.Fragment>
)}
export default CardProduct;