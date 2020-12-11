import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import React,{useState} from 'react';

import Cart from './components/Cart';
import Nav from './components/Nav';
import Product from './components/Product';
import {ProductProvider} from './ItemListContext';

function App() {
  const [cart, setCart]= useState([]);

const getCartTotal = () =>{
  return cart.reduce(
    (sum,{quantity})=> sum + quantity,0
  );
};

  const addToCart=(product)=>{
    let newCart = [...cart];
    let itemInCart = newCart.find(
    
    (item) => product.name === item.name 
    );
    if (itemInCart){
      itemInCart.quantity++;
    } else{
      itemInCart={
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart)   
}

const removeFromCart = (productToRemove)=>{
  setCart(
    cart.filter((product)=> product !== productToRemove))
    console.log('remove cart clicked',productToRemove )
}
  

const clearCart = () =>{
  console.log('here')
  setCart([])
}

const setQuantity = (product,amount)=>{
    const newCart = [...cart];
    newCart.find(item=>item.name === product.name).quantity=amount ;
    setCart(newCart);
}

  return (

        <div className="App">
    <ProductProvider>
    <Nav  getCartTotal={getCartTotal}/>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact>
              
              <Product addToCart={addToCart} />
            </Route>
            <Route path="/cart/" exact>
              <Cart 
              cart={cart} 
              setQuantity={setQuantity}
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
              getCartTotal={getCartTotal}
              
              />
            </Route>
          </Switch>
        </Router>
      </ProductProvider>
      </div>


  


   




  );
}

export default App;
