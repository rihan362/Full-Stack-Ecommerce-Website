
import React, {  useContext } from "react";
  import { ShopContext } from "../Context/ShopContext";
  import { useParams } from 'react-router-dom';
  import Breadcrum from '../Components/BreadCrums/Breadcrum.jsx';
  import Productdisplay from "../Components/Productdisplay/Productdisplay.jsx";
  import Descriptionbox from "../Components/Descriptionbox/Descriptionbox.jsx";
  import Relatedproducts from "../Components/Relatedproducts/Relatedproducts.jsx"



  
  const Product = () =>{
     const {all_product}= useContext(ShopContext);
    console.log(all_product)

     const {productId}=useParams();
     
     const product=all_product.find((e)=>e.id===Number(productId)); 
     console.log(product)
 
     
     
     return (

     <div>
        <Breadcrum product={product} />
        <Productdisplay product={product} />
        <Descriptionbox/>
        <Relatedproducts/>
     </div>


  )
  }

 export default Product
