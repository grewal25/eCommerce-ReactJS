import {Link} from 'react-router-dom';
import React from 'react'

export default function Cart(cart) {
    return (
        <div >
            <Link  to="/" >Home </Link>
            <Link  to="/cart/" >cart </Link>
           
            <div className="products" >
      {cart.map((product,  idx)=>(
        <div key={idx}>
          <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt = {product.name} />
       
        </div>
      ))}
      </div>
      <div>

      </div>
        </div>
    )
}
