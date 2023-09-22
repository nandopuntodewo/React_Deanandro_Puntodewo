import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./Pages/LandingPage";
import Create from "./Pages/CreateProduct";
import NotFound from "./Components/notFound";
import ProductDetail from './Pages/ProductDetail'; 

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/CreateProduct" element={<Create />} />
        <Route path="/product/:Id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
