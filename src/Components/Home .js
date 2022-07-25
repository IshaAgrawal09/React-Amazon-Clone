import React from "react";
import products from "./Data";
import Header from "./Header";
import "./Home.css";
import Nav from "./Nav";
import CartContext from "./Context";
import { useContext } from "react";

const Home = () => {
  const productArr = products["product"];
  const { productList, setProductList, setNumber } = useContext(CartContext);

  // ADDTOCART FUNCTION
  const addToCart = (event) => {
    let count = 0;
    productList.map((item) => {
      if (item.id == event.target.className) {
        count = count + 1;
      }
    });
    if (count == 0) {
      setProductList([...productList, productArr[event.target.id]]);
    }
  };
  // CART NUMBER
  setNumber(productList.length);

  return (
    <>
      <Header />
      <Nav />
      <div className="home">
        <div className="caraousal">
          <img src="carousal.jpg" alt="" />
        </div>
      </div>
      <div className="products">
        {productArr.map((item, index) => {
          return (
            <>
              <div className="singleProduct" key={item.id}>
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
                <p id="price">${item.Price}.00</p>
                <p id="delievery">2-Day Delievery</p>
                <button id={index} className={item.id} onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
