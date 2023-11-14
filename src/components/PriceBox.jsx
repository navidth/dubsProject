import React, { useState } from 'react';
import Slider from 'react-slider';

function PriceRange() {
  const [minprice, setMinprice] = useState(0);
  const[maxprice, setMaxprice]= useState(25800000);

  const handlePriceChange = (value) => {
    setMinprice(value);
  };
  const handleIncreaseChange = (value)=>{
    setMaxprice(value);
  }

  return (
    <div  className="card bg-light mt-4">
       <div className="header border-bottom">
       <h6 className="text-end mt-3 me-3 fw-bol card-header-tab">محدوده قیمتی </h6>
       </div>
        <div className="d-flex flex-column mx-3 mt-4"> 
        <div className="col-6">
        <div className="price-box">
            <label className='text-secondary'> از</label><br />
            <span id='min-price' className='ms-2'>{minprice.toLocaleString("fa-IR")}</span><br />
            <span className='toman'>تومان</span>
        </div>
        </div>
        <Slider className='slider bg-secondary-subtle'
            value={minprice}
            min={0}
            max={25800000}
            onChange={handlePriceChange}
            />
            <div className="col-6">
                <div className="price-box">
                    <label className='text-text-secondary'>تا </label><br />
                    <span id='max-price' className='ms-2'>{maxprice.toLocaleString("fa-IR")}</span><br />
                    <span className='toman'>تومان</span>
                </div>
            </div>
            <Slider 
            className='slider bg-bg-secondary-subtle mb-4' 
            onChange={handleIncreaseChange}
            value={maxprice}
            max={25800000}
            min={0}
            />
        </div>
    </div>
  );
}

export default PriceRange;