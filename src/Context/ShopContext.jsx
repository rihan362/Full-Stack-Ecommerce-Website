import React ,{ createContext } from "react";
import  all_product from "../Components/Assets/all_product"
import { useState } from 'react';

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart=0;
    for(int index=0;i<all_product.length;i++)
    {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{

    const [cartItems,setCartItems]-useState(getDefaultCart());

    const contextvalue={all_product,cartItems};
  console.log(cartItems)

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({..prev,[itemId]:prev[itemId]+1}))
    }
    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({..prev,[itemId]:prev[itemId]-1}))
    }


    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider