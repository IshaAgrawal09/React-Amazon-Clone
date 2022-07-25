import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CartContext from "./Context";
import { useContext } from "react";
const Header = () => {
  const { number, userName, loggedin } = useContext(CartContext);

  return (
    <div className="header">
      <div className="logo">
        <img src="amazonLogo.png" alt="" />
      </div>

      <div className="search">
        <input type="text" id="search" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="login">
        {loggedin ? <p>{userName}</p> : <Link to="/login">login</Link>}
      </div>

      <div className="cartIcon">
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{number}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
