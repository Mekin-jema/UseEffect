import React from "react";
import ReactDOM from "react-dom/client";

import Counter from "./warmup/Counter.jsx";
import Interval from "./ex1/Interval.jsx";
import Home from "./ex2/Home.jsx";
import Products from "./ex3/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* <Counter/> */}
  {/* <Interval/> */}
  {/* <Home/> */}
  <Products/>
  </React.StrictMode>
);
