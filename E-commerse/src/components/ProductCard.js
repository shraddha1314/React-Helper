
import card1 from '../images/card1.png'

import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
  };

  return (
    
    <div className='container-fluid pos'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col cards'>
              <h4>Up to 60% off | Styles for men</h4>
              <h3>{product.name}</h3>
              <img src={product.img} alt='' />
              <p>${product.price}</p>
      <button className='btn btn-warning' onClick={handleAddToCart} disabled={addedToCart}>
        {addedToCart ? "Product Added" : "Add to Cart"}
      </button>
            </div>
      </div>
      </div>
      </div>
      
    
  );
};

export default ProductCard;

