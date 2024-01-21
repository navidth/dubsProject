import { createContext, useState } from "react";
import { getProductData } from "../components/Data";

export const CartContex = createContext({
    items:[],
    getProductQuantity: () =>{},
    addItemCart: () =>{},
    removeItemCart: () =>{},
    deleteItemCart: () =>{},
    getTotalAmount: () =>{},
    numberWithCommas: () =>{},
})
export function CartProvaider({children}){
    const[cartProduct,setCartProduct] = useState([])

    function getProductQuantity(id){
        const quantity = cartProduct.find((item)=>item.id === id)?.quantity
        if(quantity === undefined){
            console.log('zero')
            return 0
        }
        return quantity
    }

    function addItemCart(id){
        const quantity = getProductQuantity(id)
        if(quantity === 0){
            setCartProduct([...cartProduct, {id: id, quantity: 1}])
        }else{
        setCartProduct(
            cartProduct.map((item)=>item.id === id ? 
            {...item, quantity: item.quantity + 1}: item)
        )
    }
    return quantity
}

    function deleteItemCart(id){
        setCartProduct((cartProduct) =>
        cartProduct.filter((item)=> {
            return item.id != id
        })
        )
    }

    function removeItemCart(id){
        const quantity = getProductQuantity(id)
        if(quantity === 1){
            deleteItemCart(id)
        }else{
        setCartProduct(cartProduct.map((item)=>item.id === id ? 
            {...item, quantity: item.quantity - 1}: item))
    }
    return quantity
}
    function getTotalAmount(){
       let totalAmount = 0
       cartProduct.map((item)=>{
       const productData = getProductData(item.id)
       totalAmount += productData.price * item.quantity;
       return totalAmount 
    })
    return totalAmount 
    }
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
   const ContexValue = {
    items:cartProduct,
    getProductQuantity,
    addItemCart,
    removeItemCart,
    deleteItemCart,
    getTotalAmount,
    numberWithCommas,
   }
   return(
    <CartContex.Provider value = {ContexValue}>{children}</CartContex.Provider>
   ) 
}
