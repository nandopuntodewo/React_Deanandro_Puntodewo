import { createContext, useContext, useState } from "react";

// Membuat konteks 'ProductContext'
const ProductContext = createContext();

// Membuat fungsi khusus untuk menggunakan konteks 'ProductContext'
export function useProductContext() {
  return useContext(ProductContext);
}

// Membuat provider untuk konteks 'ProductContext'
export function ProductProvider({ children }) {
  // State untuk menyimpan data produk
  const [products, setProducts] = useState([]);

  // Fungsi untuk menambahkan produk baru
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Nilai yang akan disediakan oleh konteks
  const contextValue = {
    products,
    addProduct,
  };

  return (
    // Memberikan nilai konteks kepada komponen-komponen yang berada di dalamnya
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
