// Importerar nödvändiga beroenden.
import React from 'react'
import { useCart } from 'react-use-cart'
import ProductItems from './ProductItems.json';
import '../css/AddToCart.css';

// Hämtar och dekonstruerar nödvändiga funktioner och variabler från useCart-kroken.
const AddToCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    console.log("Items in cart:", items);
    console.log("Total cart price:", cartTotal);
    
      
    
      if (isEmpty) return <h3 className='text-center'>Your cart is empty</h3>;

    // Hanterar betalningsprocessen.
      const handlePayNow = async () => {
        try {
             // Skapar en POST-förfrågan för att skicka kundvagnsdata till en server.
            const response = await fetch('http://localhost:3001/users/cart-items', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }), 
            });
    
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
    
            // Handle response data here
            console.log("Payment successful:", await response.json());
    
            emptyCart(); 
        } catch (error) {
            console.error("Payment failed:", error);
        }
    };
    
    // Renderar cart.
  return (
    <section className=' cart-card py-4 container' car>
        <div className="row justify-content-center">
            <div className='col-12'>
                <h5> Items in Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item, index) => {
                            return (
    
                                <tr key={index}>
                                    <td>
                                        <img src={item.imageUrl} style={{height: '6rem'}} alt={item.name} className='cart-img img-fluid' />
                                        <td>{item.name},</td>
                                        <td style={{ padding: '0 10px' }}>Price: {item.price}/item</td>
                                        <td style={{ padding: '0 10px' }}>Quantity ({item.quantity})</td>

                                    </td>
                                    <td>
                                        
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity +1)}>
                                            +
                                        </button>
                                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity -1)}>
                                            -
                                        </button>
                                        <button className='btn btn-danger ms-2 my-custom-btn' onClick={() => removeItem(item.id)}>
                                            Remove
                                        </button>
                                    </td>

                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                {/* <h2>Total: {totalItems}</h2> */}
                <h3>Total Price: $ {cartTotal}</h3>
                
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Empty Cart</button>
                <button className='btn btn-primary' onClick={handlePayNow}>Pay Now</button>

            </div>
    

            
        </div>

    </section>

  );
};

export default AddToCart;