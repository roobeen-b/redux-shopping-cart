import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../store/cart-slice";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleShowCart = () => {
    dispatch(showCart());
  };
  return (
    <div className="cartIcon" onClick={toggleShowCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
