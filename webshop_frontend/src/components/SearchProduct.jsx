// Importerar nödvändiga bibliotek och komponenter.
import React, { useState, forwardRef } from 'react'; 
import ProductItemsData from './ProductItems.json';  
import ProductItem from './ProductItem';
import  '../css/SearchProduct.css';

// Definierar SearchProduct-komponenten med forwardRef för att möjliggöra ref-åtkomst från föräldrakomponenten.
const SearchProduct = forwardRef(({ value, onChange, isloading }, ref) => {
  const [searchTerm, setSearchTerm] = useState(value);
  const [items, setItems] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    setSearchInitiated(true); // Indikerar att sökning har genomförts.

    // Filtrerar produkter baserat på sökbegreppet.
    const matchedItems = ProductItemsData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(matchedItems); // Uppdatera filtrerade listan av produkter.
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    
    if (e.target.value === '') {
      setSearchInitiated(false); 
      setItems([]); // rensa produktlistan 
    }
  };

  return (
    <div>
      <form className='search-form' onSubmit={handleSearch}>
        <input
          ref={ref} 
          type="text" 
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search products here'
          className='form-control m-2' 
        />
        <button 
          type="submit" 
          className='btn btn-primary'
          disabled={!searchTerm} // inaktivera knappen om searchbar är tomt.
        >
          Search
        </button>
      </form>
      <div className='product-container'>
        {items.length > 0 ? (
          items.map(item => (
            <ProductItem key={item.id} item={item} />  // Renderar en ProductItem för varje matchad produkt.
          ))
        ) : searchInitiated && (
          <div>No products found.</div> // Visas endast om en sökning har genomförts utan resultat.
        )}
      </div>
    </div>
  );
});

export default SearchProduct;
