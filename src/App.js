import './App.css';

import React,{useState} from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Cart from './components/Cart';
import {Link} from 'react-router-dom';
import Product from './components/Product';

function App() {
  const [cart, setCart]= useState([]);

  const addToCart=(product)=>{
    console.log("addToCart button clicked",product)
    setCart([...cart, {...product}])
}

  return (
 
    <Router>
       
      <Route path="/home/" 
      render ={()=> < Product addToCart={addToCart}/>}
       />
      <Route path="/cart/" 
      render ={()=> < Cart cart={cart} />}
      
       />
    <div className="App">
    
   
    </div>

   
    </Router>

  );
}

export default App;
