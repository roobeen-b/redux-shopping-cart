import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.itemList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <div className="App">{!isLoggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
