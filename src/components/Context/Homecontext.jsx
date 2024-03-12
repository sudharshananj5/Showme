import React,{ createContext } from 'react';
import all_product from "../Datas/all_product"
import { useState } from 'react';

export const homecontext = createContext(null)

const  getdefaultcart =()=>{
    let cart ={};
    for (let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const Homecontextprovider =(props)=>{
    const [cartItems,setCartItems]=useState(getdefaultcart())
    // const contextvalue = all_product;
    
    const addtocart=(itemId)=>{
        setCartItems(()=>({...cartItems,[itemId]:cartItems[itemId]+1}))
        console.log(cartItems)
    }

    const removefromcart=(itemId)=>{
        setCartItems(()=>({...cartItems,[itemId]:cartItems[itemId]-1}))
    }

    const getTotalAmount = ()=> {
        let totalAmount =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalAmount +=iteminfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems =()=>{
        let totalcount =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalcount+= cartItems[item];
            }
        }
        return totalcount;
    }


    return(
        <homecontext.Provider value={{getTotalCartItems,getTotalAmount,all_product,cartItems,addtocart,removefromcart}}>
            {props.children}
        </homecontext.Provider>
    )
}

export default Homecontextprovider



