import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Pages/CreateProduct";
import NotFound from "./Components/notFound";
import ProductDetail from './Pages/ProductDetail';
import List from './Pages/ListProduct'; 
import LoginPage from "./Pages/LoginPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        {/* <Route path="/CreateProduct" element={<Create />} /> */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ListProduct" element={<List />} />
        <Route path="/CreateProduct/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
