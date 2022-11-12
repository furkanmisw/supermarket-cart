import React, { createContext, useEffect, useState } from "react";
import Header from "./components/header";
import Product from "./components/product";

export const MainContext = createContext();

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const _tap = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCartItems([{ ...product, count: 1, selected: true }, ...cartItems]);
    }
  };

  return (
    <div className="home">
      <MainContext.Provider value={{ cartItems, setCartItems }}>
        <Header count={cartItems.length} />
      </MainContext.Provider>

      <ul className="items">
        {products.map((p) => (
          <Product product={p} cartItems={cartItems} _tap={_tap} />
        ))}
      </ul>
    </div>
  );
};

export default App;

const products = [
  {
    id: 1,
    title: "Red Globe Seeded Grapes",
    price: 548,
  },
  {
    id: 2,
    title: "Envy Apples, Each",
    price: 137,
  },
  {
    id: 3,
    title: "Bananas, each",
    price: 27,
  },
  {
    id: 4,
    title: "Strawberries, 1 lb",
    price: 398,
  },
  {
    id: 5,
    title: "Cantaloupe, each",
    price: 338,
  },
  {
    id: 6,
    title: "Hass Avocados, each",
    price: 68,
  },
  {
    id: 7,
    title: "Clementines, 5lb bag",
    price: 668,
  },
  {
    id: 8,
    title: "Pomegranate, each",
    price: 248,
  },
  {
    id: 9,
    title: "Bulk Kiwi",
    price: 56,
  },
  {
    id: 10,
    title: "Lemons, each",
    price: 54,
  },
  {
    id: 11,
    title: "Pineapple",
    price: 218,
  },
  {
    id: 12,
    title: "Personal Watermelon, each",
    price: 398,
  },
  {
    id: 13,
    title: "Bartlett Pears, Each",
    price: 122,
  },
  {
    id: 14,
    title: "Red Grapefruit, each",
    price: 118,
  },
];
