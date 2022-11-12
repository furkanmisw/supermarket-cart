import React from "react";

const Product = ({ product, cartItems, _tap }) => {
  const { id, price, title } = product;
  const isadded = cartItems.find((item) => item.id === id);

  return (
    <li>
      <div className={isadded ? "content added" : "content"}>
        <img src={`/${id}.webp`} alt="" />
        <div className="text">
          <h2>{title}</h2>
          <h1>${price / 100}</h1>
          <button onClick={() => _tap(product)}>
            {isadded ? "Remove" : "Add"} Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
