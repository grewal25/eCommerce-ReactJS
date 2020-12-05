import React,{useState} from 'react';

import {Link} from 'react-router-dom';

export default function Product({addToCart}) {

    // const [cart, setCart]= useState([]);
    const [products]=useState([
        {
            name: 'iPhone',
            cost : '$899.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6BMWrPXA9KyTtxa6o600mjeUNJ7zSXgaNt--FDCR6YjQ4XWS5G1J3dSF5ChurfQEGxorkxYs&usqp=CAc',
          },
          {
            name: 'Samsung',
            cost : '$599.99',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGMCcF3_XBIKH5Dja-9iCkRP4CSA-CYaylQ&usqp=CAU'
          }
    ])

    

    return(
        <div className="main-page">
        <h1>Product Page </h1>
        <div className="products" >
         {products.map((product,  idx)=>(
           <div key={idx}>
             <h3>{product.name}</h3>
             <h4>{product.cost}</h4>
             <img src={product.image} alt = {product.name} />
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