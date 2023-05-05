import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage/HomePage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import SearchPage from "./Pages/SearchPage/SearchPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:category/:id" element={<ProductsPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
