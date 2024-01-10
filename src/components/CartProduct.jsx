import {React,useContext} from 'react';
import '../assest/css/cartProduct.css';
import {getProductData} from './Data'
import { CartContex} from '../context/CartContex'
const CartProduct = (props) => {
  const cart = useContext(CartContex)
  const productData = getProductData(props.id)
  return (
     <div>
      <p>{productData.name}</p>
      <p>{props.quantity}</p>
      <p>{cart.numberWithCommas(props.quantity * productData.price)} تومان</p>
      <button onClick={()=> cart.deleteItemCart(props.id)}>حذف</button>
      </div> 
  );
}

export default CartProduct;
