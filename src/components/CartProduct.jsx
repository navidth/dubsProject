import {React,useContext} from 'react';
import '../assest/css/cartProduct.css';
import { CartContex} from '../context/CartContex'
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu';
import { MdDelete } from "react-icons/md";
const CartProduct = (props) => {
  const cart = useContext(CartContex)
  const productData = cart.getProductData(props.title)
  return (
     <ul className='cart-product list-group list-group-horizontal border border-2 rounded-3'>
        <li className="img-cart list-group-item d-flex align-items-center border-0 rounded-0">
          <img src={productData.image} alt={productData.name} />
        </li>
        <li className='list-group-item rounded-0'>
            <div className="d-flex justify-content-center align-items-baseline mt-2">
                <button className='' onClick={()=>{cart.addItemCart(props.title)}}><LuPlusCircle size={'20px'}></LuPlusCircle></button>
                <p className='mx-2 fs-4 fw-700 text-decoration-underline'>{props.quantity}</p>
                <button className='' onClick={()=>{cart.removeItemCart(props.title)}}><LuMinusCircle size={'20px'}></LuMinusCircle></button>
            </div>
        </li>
        <li className='list-group-item rounded-0'>
          <p className='mt-3 '>{cart.numberWithCommas(props.quantity * productData.price)} تومان</p>
        </li>
        <li className='list-group-item rounded-0'>
          <button className='mt-3' onClick={()=> cart.deleteItemCart(props.title)}>
            <MdDelete size={'24px'}></MdDelete>
          </button>
        </li>      
      </ul> 
  );
}

export default CartProduct;
