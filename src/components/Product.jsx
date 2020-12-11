import React,{useContext, useState} from 'react';
import {Samsung, iPhone} from '../ItemListContext'

import {ProductContext} from '../ItemListContext';

export default function Product({addToCart}) {

    const [products, setProducts] = useContext(ProductContext) 
    
    const [category,setCategory]=useState(iPhone)

    const getProductInCategory = ()=>{
        return products.filter(product=> product.category === category);
    }
    return(
        <div className="main-page">
            products
        
        <h1>Product Page </h1>
        Select a category
        <select onChange={(e)=>setCategory(e.target.value)}>
            <option  value={iPhone}>
                    {iPhone}
            </option>
            <option  value={Samsung}>
                    {Samsung}
            </option>
        </select>
        <div className="products" >

         {getProductInCategory().map((product,  idx)=>(
             <div key={idx}>
            <h3>{product.name} </h3>
           <img src= {product.image} /> cost = {product.cost} 
             <button onClick={()=>addToCart(product)}
              >Add to Cart</button>
             </div>

         ))}
         </div>
         <div>
   
         </div>
        </div>
    )
}