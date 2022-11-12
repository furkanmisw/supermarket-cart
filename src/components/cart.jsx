import React, { useContext, useState } from "react";
import { MainContext } from "../App";

const Cart = ({ open, setOpen }) => {
  const { cartItems, setCartItems } = useContext(MainContext);
  const [hover, setHover] = useState();
  const _tap = (id, value) =>
    setCartItems((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            selected: value,
          };
        } else {
          return cartItem;
        }
      })
    );
  const increase = (id) => {
    setCartItems((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const _deleteCI = (id) =>
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));

  const decrease = (id) => {
    if (cartItems.find((x) => x.id === id).count === 1)
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    setCartItems((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            count: cartItem.count - 1,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const TOTAL =
    cartItems
      .map((cartItem) => {
        if (cartItem.selected) {
          return cartItem.price * cartItem.count;
        }
      })
      .reduce((a, b) => a + b, 0) / 100 || 0;
  const COUNT = cartItems.filter((item) => item.selected === true).length;

  return (
    <>
      {open && <div className="layer" onClick={() => setOpen(false)}></div>}
      <div className={open ? "cart open" : "cart"}>
        <div className="cart-header">
          <div className="left">
            <h1>Cart</h1>
            <img src="/cart.svg" alt="cart" />
          </div>
          <button onClick={() => setOpen(false)}>
            <img src="/close.svg" alt="close" />
          </button>
        </div>
        <ul>
          {cartItems.map((ci) => {
            const { id, title, price, count, selected } = ci;
            const _hover = hover === id;
            return (
              <li
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover()}
              >
                <div className="xd" onClick={() => _tap(id, !selected)}>
                  <input
                    type="checkbox"
                    name="x"
                    id={id}
                    checked={selected}
                    onChange={(e) => _tap(id, e.target.checked)}
                  />
                  <img src={`/${id}.webp`} alt="" />
                  <div className="text">
                    <h2 className="title">{title}</h2>
                    <h1 className="price">${(price * count) / 100}</h1>
                  </div>
                </div>
                <div className={_hover ? "hover active" : "hover"}>
                  <button onClick={() => _deleteCI(id)}>
                    <img src="/bin.svg" alt="bin" />
                  </button>
                </div>
                <div className="counter">
                  <button onClick={() => increase(id)}>
                    <img src="/add.svg" alt="add" />
                  </button>
                  <h1>{count}</h1>
                  <button onClick={() => decrease(id)}>
                    <img
                      src={count === 1 ? "/bin.svg" : "/minus.svg"}
                      alt="add"
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="total">
          <h1>Selected furit: {COUNT}</h1>
          <h1>Total: ${TOTAL}</h1>
          <button onClick={() => alert("buyed :)")}>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
