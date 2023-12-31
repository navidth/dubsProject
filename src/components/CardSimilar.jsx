import React from 'react';
import ImgSimilar from '../assest/images/card Image/viscaria.webp'
import { Link } from 'react-router-dom';

const CardSimilar =(props) => {
    return (
        <div className="similar-products rounded-4 mb-3 mt-5">
        <section className='header-similar px-3 py-2'>
            <h2 id={props.id}>محصولات مشابه </h2>
        </section>
        <div className='px-5 py-4'>
            <ul className='list-similar-product'>
                <li className='list-group-item border-0'>
                    <Link to={'/test'}>
                    <div className="product-similar card p-3">
                        <div className="img-similar border-0 border-bottom">
                            <img src={ImgSimilar} className='card-img-top' alt="imgSimilar"/>
                        </div>
                        <div className="body-similar card-body">
                            <h5 className='card-title fw-700'>چوب راکت ویسکاریا</h5>
                            <div className="card-text">
                                <span className='mx-2 fs-5 fw-bold my-2'>215000</span>
                                <span>تومان</span>
                            </div>
                            <Link to={'/test'} class="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className='list-group-item border-0'>
                <Link to={'/test'}>
                    <div className="product-similar card p-3">
                        <div className="img-similar border-0 border-bottom">
                            <img src={ImgSimilar} className='card-img-top' alt="imgSimilar"/>
                        </div>
                        <div className="body-similar card-body">
                            <h5 className='card-title fw-700'>چوب راکت ویسکاریا</h5>
                            <div className="card-text">
                                <span className='mx-2 fs-5 fw-bold my-2'>215000</span>
                                <span>تومان</span>
                            </div>
                            <Link to={'/test'} class="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className='list-group-item border-0'>
                <Link to={'/test'}>
                    <div className="product-similar card p-3">
                        <div className="img-similar border-0 border-bottom">
                            <img src={ImgSimilar} className='card-img-top' alt="imgSimilar"/>
                        </div>
                        <div className="body-similar card-body">
                            <h5 className='card-title fw-700'>چوب راکت ویسکاریا</h5>
                            <div className="card-text">
                                <span className='mx-2 fs-5 fw-bold my-2'>215000</span>
                                <span>تومان</span>
                            </div>
                            <Link to={'/test'} class="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className='list-group-item border-0'>
                <Link to={'/test'}>
                    <div className="product-similar card p-3">
                        <div className="img-similar border-0 border-bottom">
                            <img src={ImgSimilar} className='card-img-top' alt="imgSimilar"/>
                        </div>
                        <div className="body-similar card-body">
                            <h5 className='card-title fw-700'>چوب راکت ویسکاریا</h5>
                            <div className="card-text">
                                <span className='mx-2 fs-5 fw-bold my-2'>215000</span>
                                <span>تومان</span>
                            </div>
                            <Link to={'/test'} class="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className='list-group-item border-0'>
                <Link to={'/test'}>
                    <div className="product-similar card p-3">
                        <div className="img-similar border-0 border-bottom">
                            <img src={ImgSimilar} className='card-img-top' alt="imgSimilar"/>
                        </div>
                        <div className="body-similar card-body">
                            <h5 className='card-title fw-700'>چوب راکت ویسکاریا</h5>
                            <div className="card-text">
                                <span className='mx-2 fs-5 fw-bold my-2'>215000</span>
                                <span>تومان</span>
                            </div>
                            <Link to={'/test'} class="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                        </div>
                    </div>
                    </Link>
                </li>
                
            </ul>
        </div>
        <section>
        </section>
      </div>

    );
}

export default CardSimilar;
