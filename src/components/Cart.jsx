import React from 'react'

export default function Cart({cart}) {
    return (
        <div >
           hello
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
