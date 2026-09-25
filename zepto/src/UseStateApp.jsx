import { useState } from "react";

const UseStateApp = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [themeClr, setThemeClr] = useState("yellow");
  const handleDecrement = () => {
    setCartItemsCount(cartItemsCount - 1);
    setThemeClr("red")
  };

  const handleIncrement = () => {
    setCartItemsCount(cartItemsCount + 1);
    setThemeClr("green")
  };
  return (
    <div style={{backgroundColor:themeClr}}>
      <h2>UseStateApp</h2>

      <button onClick={handleDecrement} disabled={cartItemsCount == 0}>-</button>
      <h1>{cartItemsCount}</h1>
      <button onClick={handleIncrement} disabled={cartItemsCount == 10}>+</button>
    </div>
  );
};

export default UseStateApp;
