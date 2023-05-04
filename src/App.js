import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage/HomePage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="product/:category/:id" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
