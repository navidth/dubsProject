import { createContext, useState } from "react";

export const CartContex = createContext({
    items:[],
    getProductQuantity: () =>{},
    addItemCart: () =>{},
    removeItemCart: () =>{},
    deleteItemCart: () =>{},
    getTotalAmount: () =>{},
    numberWithCommas: () =>{},
    getProductData: () =>{},

})
export function CartProvaider({children,data}){
    const[cartProduct,setCartProduct] = useState([])
    function getProductData(title){
        let productData = data.find((item)=>item.title === title)
        return productData
      }

    function getProductQuantity(title){
        const quantity = cartProduct.find((item)=>item.title === title)?.quantity
        if(quantity === undefined){
            console.log('zero')
            return 0
        }
        return quantity
    }

    function addItemCart(title){
        const quantity = getProductQuantity(title)
        if(quantity === 0){
            setCartProduct([...cartProduct, {title: title, quantity: 1}])
        }else{
        setCartProduct(
            cartProduct.map((item)=>item.title === title ? 
            {...item, quantity: item.quantity + 1}: item)
        )
    }
    return quantity
}

    function deleteItemCart(title){
        setCartProduct((cartProduct) =>
        cartProduct.filter((item)=> {
            return item.title != title
        })
        )
    }

    function removeItemCart(title){
        const quantity = getProductQuantity(title)
        if(quantity === 1){
            deleteItemCart(title)
        }else{
        setCartProduct(cartProduct.map((item)=>item.title === title ? 
            {...item, quantity: item.quantity - 1}: item))
    }
    return quantity
}
    function getTotalAmount(){
       let totalAmount = 0
       cartProduct.map((item)=>{
       const productData = getProductData(item.title)
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
    getProductData
   }

   return(
    <CartContex.Provider value = {ContexValue}>{children}</CartContex.Provider>
   ) 
}
