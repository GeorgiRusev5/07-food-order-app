import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
const [checkout, setCheckout] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} $`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const orderHandler = () =>{
    setCheckout(true);
  }

  const submitOrderHandler = async(userData) =>{
    setIsSubmitting(true);
     await fetch('https://react-http-food-order-ap-73e1a-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  
const closeButton = <div className={classes.actions}><button className={classes.button} onClick={props.onHideCart}>Close</button> </div>

  const modalActions = <div className={classes.actions}>
  <button className={classes["button--alt"]} onClick={props.onHideCart}>
    Close
  </button>
  {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>;


 const cartModalContent = <React.Fragment>{cartItems}
 <div className={classes.total}>
   <span>Total amount: </span>
   <span>{totalAmount}</span>
 </div>
 {checkout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onHideCart}/>}
 {!checkout && modalActions}</React.Fragment>;

 const isSubmitingModalContent = <p>Sending order data...</p>

 const didSubmitModalContent = <React.Fragment>
  <p>Successfully submitted the order!</p>
  {closeButton}
  </React.Fragment>

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmitingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
