import React, {useState} from "react";

import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
const [shownCart, setShownCart] = useState(false); 

const showCartHandler = () =>{
  setShownCart(true);
}

const hideCartHandler = () =>{
  setShownCart(false);
}

  return (
    <CartProvider>
      {shownCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
      </CartProvider>
  );
}

export default App;
