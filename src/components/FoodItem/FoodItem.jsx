import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  console.log("idd", { id, name, price, description, image });

  const { cartItems, addToCart, removeFromCart } = useContext(Storecontext);
  return (
    <div
      className="food-item"
      onClick={() => console.log("id", id)}
      // onClick={(id) => {
      //   console.log("id::", id);
      // }}
    >
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
