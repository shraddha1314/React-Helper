 
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import View from './components/View';
import a1 from './images/a1.png'
import amazon from './images/amazon.png'
import card1 from './images/card1.jpg'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import card4 from './images/card4.png'
import card5 from './images/card5.png'
import card6 from './images/card6.png'
import card7 from './images/card7.png'
import card8 from './images/card8.png'
import cart from './images/cart.png'
import fulfill from './images/fulfill.png'
import './App.css'
import location from './images/location.png'
import logo from './images/logo.png'


const HomePage = ({ addToCart }) => {
  return (
    <div>
      
      <div className="product-container">
        <ProductCard
          product={{ name: "Home decorate item", img:card4,img1:fulfill, description: "RUCON® 3D Moon lamp Night lamp 7 Multi Colors Changing Touch Sensor for Adult and Kids with Wooden Stand Night Lamp for Bedroom Home Decorations Light -15cm", price: 610 }}
          onAddToCart={addToCart}
        />
        <ProductCard
          product={{ name: "Men's Watch",img:card1,img1:fulfill, description: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band", price: 720 }}
          onAddToCart={addToCart}
        />
        <ProductCard
          product={{ name: "Realme 5G pro",img:card2,img1:fulfill, description: "realme 11 Pro 5G (Sunrise Beige, 8GB RAM, 256GB Storage) | 120 Hz Curved Display | 100MP Prolight Camera | 7050 5G Dimensity", price: 19200 }}
          onAddToCart={addToCart}
        />
        <ProductCard
          product={{ name: "Wedding jwellary",img:card3,img1:fulfill, description: "ZENEME Rhodium Plated Silver Toned White American Diamond Studded Flower Shaped Jewellery Set For Girls", price: 1220 }}
          onAddToCart={addToCart}
        />
       </div>
       <div className="product-container1">
        <ProductCard
          product={{ name: "Laptop", img:card5,img1:fulfill,description: "Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6 (39.562cm) FHD Display/Win 11+MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Carbon/Thin & Light 1.69kg", price: 69000 }}
          onAddToCart={addToCart}
        />
         <ProductCard
          product={{ name: "Bookshelf",img:card6,img1:fulfill, description: "ABOUT SPACE Open Book Shelf DIY Book Storage Display Rack - Wooden Multipurpose Book Storage Display Organizer Rack with Solid Finish Showcase Stand (L 47 x W 21 x H 141.2 cm)", price: 6720 }}
          onAddToCart={addToCart}
        />
        <ProductCard
          product={{ name: "Towel",img:card7,img1:fulfill, description: "Amazon Brand - Solimo 100% Cotton 2 Piece Bath Towel Set, 500 GSM (Sepia Brown and Baby Pink)", price: 1000 }}
          onAddToCart={addToCart}
        />
        <ProductCard
          product={{ name: "Watch",img:card8,img1:fulfill, description: "RUCON® 3D Moon lamp Night lamp 7 Multi Colors Changing Touch Sensor for Adult and Kids with Wooden Stand Night Lamp for Bedroom Home Decorations Light -15cm", price: 3000 }}
          onAddToCart={addToCart}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

    
  };

  return (
   
      <div>
       <nav className='navbar navbar-expand-lg'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <img id='logo' src={logo} alt='' />
            </li>
            <li className='nav-item'>
              <img id='location' src={location} alt='' />
            </li>
            <li>
              <form className='d-flex'>
                <input className='form-control' id='all' value='All' />
                <input 
                  className='form-control'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button style={{background:'orange'}} className='btn btn-outline-success'></button>
              </form>
            </li>
            <li style={{color:'white',marginTop:'10px',marginLeft:'0px'}} className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                EN
              </a>

              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Hindi
                </a>
                <a className='dropdown-item' href='#'>
                  Marathi
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Telugu
                </a>
              </div>
            </li>
            <li style={{color:'white',marginLeft:'20px'}} className='nav-item dropdown'>
            <Link to='/login'
                className='nav-link dropdown-toggle'
                href='sign_in.html'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Hello Sign In <br />
                Account and list
              </Link>
            </li>
            <Link to='/'>
            <li style={{color:'white',marginTop:'10px',marginLeft:'20px'}} className='nav-item'>
              <h6 style={{color:'white',marginTop:'4'}} className='nav-link'>
                Home
              </h6>
            </li>
            </Link>
            <Link to='/cart'>
              <li className='nav-item'>
              <img id='cart' src="https://cdn-icons-png.flaticon.com/256/3737/3737151.png" alt='' />
            </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className='nav-below'>
        <ul className='col-11'>
          {/* <img src={a1} alt='' /> */}
          <li>All</li>
          <li>Fresh</li>
          <li>MiniTv</li>
          <li>Sell</li>
          <li>Seller</li>
          <li>Mobiles</li>
          <li>deal</li>
          <li>Service</li>
          <li>Electronics</li>
          <img
            style={{ marginLeft: '170px' }}
            src='images/nav-img.png'
            alt=''
          />
        </ul>
      </div>
      <div id='carouselExample' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/Citi/FDFO/22._CB582195998_.jpg" className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-herolowcat._CB582034221_.jpg" className='d-block w-100' alt='...' />
        
          </div>
          <div className='carousel-item'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-heroH1._CB582036967_.jpg" className='d-block w-100' alt='...' />
        
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
       
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<View cartItems={cartItems} />} />
        </Routes>
      </div>
    
  );
};

export default App;




