import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart, removeFromCart } from "./../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const DecrementCartItems = () => {
    dispatch(removeFromCart(id));
  };

  const IncrementCartItems = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={DecrementCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={IncrementCartItems}>
        +
      </button>
    </div>
  );
};

export default CartItem;
