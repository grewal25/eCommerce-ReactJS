import './App.css';

import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Cart from './components/Cart';
import Product from './components/Product';
import logo from './logo.svg';

function App() {
  return (
    
    <Router>
      <Route path="/" exact component={Product} />
      <Route path="/cart/" component={Cart} />
    <div className="App">

    </div>

   
    </Router>
  );
}

export default App;
