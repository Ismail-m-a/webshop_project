// Importerar React, data och dess nödvändiga hooks.
import React, { createContext, useState, useEffect } from 'react';
import ProductItemsData from './ProductItems.json';

// Skapar en ny kontext för produkter
export const ProductContext = createContext();

// Definierar en provider-komponent för ProductContext.
export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems(ProductItemsData);
    setLoading(false); 
  }, []);

  // Returnerar ProductContext.Provider med 'items' och 'loading' tillgängliga för barnkomponenter.
  return (
    <ProductContext.Provider value={{ items, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
