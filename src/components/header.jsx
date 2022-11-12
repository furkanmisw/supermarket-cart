import React, { useState } from "react";
import Cart from "./cart";

const Header = ({ count }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="content">
        <h1>Furits</h1>
        <button onClick={() => setOpen(true)} className="cart-iconx">
          <img src="/cart.svg" alt="cart" />
          {count > 0 && <p>{count}</p>}
        </button>
        <Cart open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
