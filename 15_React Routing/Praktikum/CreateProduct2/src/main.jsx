import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './App.jsx'
import { ProductProvider } from "./Components/ProductContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <AppRouter />
    </ProductProvider>
  </React.StrictMode>,
)
