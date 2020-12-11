import React from 'react';

export default function Cart({cart, removeFromCart, clearCart, getCartTotal, setQuantity}) {

    const getTotalSum = ()=>{
        return cart.reduce((sum,{cost, quantity})=> sum + (cost*quantity), 0)
      }

   
    return (
        <div className="cart">
            {cart.length >0 && (<button onClick={()=>clearCart()}
            >Clear Cart</button>)}
            
        <h1>cart {getCartTotal()}</h1>
         <div className="products" >
          
             {cart.map((product,  idx)=>(
            <div key={idx}>
                <h3>{product.name}</h3>
                <h4>${product.cost}</h4>
                <img src={product.image} alt = {product.name} />

             <input value={product.quantity}
             onChange={((e)=> setQuantity(product, parseInt(e.target.value)))} />
                 Quantity: {product.quantity}
                 


                <button onClick={()=>removeFromCart(product)} >
                    Remove
                </button>

                
        </div>
      ))} 

      </div> 
      <div>

      </div>
             <div>Total cost: ${getTotalSum()}</div>
        </div>
    )
}
