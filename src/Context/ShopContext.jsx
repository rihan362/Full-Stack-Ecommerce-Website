import React ,{ createContext } from "react";
import  all_product from "../Components/Assets/all_product"
import { useState } from 'react';

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length;index++)
    {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState(getDefaultCart());

  
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const getTotalCartAmount=()=>{
        let totalamount=0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let iteminfo=all_product.find((product)=>product.id===Number(item));
                totalamount+=iteminfo.new_price*cartItems[item];
            }
        }
        return totalamount;
        console.log(totalamount);     
    }

    const getTotalItems=()=>{
        let totalitems=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
            totalitems+=cartItems[item];
            }
        }
        return totalitems;

    }
    const contextvalue={getTotalItems,getTotalCartAmount,all_product,cartItems,addToCart,removefromCart};


    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider