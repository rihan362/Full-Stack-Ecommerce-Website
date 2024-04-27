import React ,{ useContext } from 'react'

import './CSS/shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Items/Items"


const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className="shop-category-banner">
      <img src={props.banner} alt='' />

      <div className="shopcategory-index_sort">
        <p><span>showing 1-12</span>out of 36 products
          </p>

          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
      </div>
      <div className="shopcategory-products">
  {all_product.map((item, i) => {
    if (props.category === item.category) {
      return (
        <div key={i} className="item-wrapper">
          <Item
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        </div>
      );
    } else {
      return null;
    }
  })}
  </div>

      </div>


      
     
  )
}

export default ShopCategory
