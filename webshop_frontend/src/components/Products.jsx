// Importerar nödvändiga React-hooks och komponenter.
import React, { useContext, useState, useRef, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductContext from './ProductContext'; 
import '../css/ProductItem.css';
import SearchProduct from './SearchProduct';

function Products() {
   // Använder useContext-hook för att få tillgång till produktinformation från ProductContext.
  const { items } = useContext(ProductContext);
 
  // useState-hook för att hantera söktermen.
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);  // useRef-hook för att referera till sökfältets input-element.

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // useEffect-hook för att sätta fokus på sökfältet när komponenten laddas.
  useEffect(() => {
    if (searchInputRef.current){
      searchInputRef.current.focus();
    }
  }, []);

  if (!items || items.length === 0) {
    return <div>Loading products...</div>;
  }

  // Renderar produktsidan inklusive sökfält och en lista av filtrerade produktkomponenter.
  return (
    <div className='product-container'>
      <h3>Our Products</h3>
      <div className='pro-text'>
        <p>Discover the essence of Nordic elegance with our diverse collection of products. <br />
        Use the search bar to effortlessly find exactly what you're looking for, <br /> 
        from luxurious home decor to sophisticated fashion pieces. <br />
        Begin your journey towards minimalist beauty today.</p>
      </div>
      <SearchProduct
       ref={searchInputRef} 
        value={searchTerm} 
        isLoading={false} 
        handleInputChange={(e) => e.preventDefault()} 
        onChange={handleSearchChange}
      />
      <div className="d-flex flex-wrap justify-content-center">
        {filteredItems.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
