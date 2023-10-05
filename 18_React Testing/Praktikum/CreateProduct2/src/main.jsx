import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './App.jsx'
import { ProductProvider } from "./Components/ProductContext";
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ProductProvider>
    <AppRouter />
    </ProductProvider>
    </Provider>,
);
