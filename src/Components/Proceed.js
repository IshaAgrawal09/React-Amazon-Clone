import React from "react";
import "./Proceed.css";
import Header from "./Header";
import Nav from "./Nav";


const Proceed = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="proceed">
        <h1>Order Placed Successfully!</h1>
      </div>
    </>
  );
};

export default Proceed;
