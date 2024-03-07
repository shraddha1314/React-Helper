
 
import CardDetailsPage from './components/CardDeatails'; 
import  Card  from './components/Card';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './images/logo.png'
import menu from './images/menu.png'
import menu2 from './images/menu2.png'
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
            api_key: 'db4d7bc80d3cea9a989c506e8fd21df3' 
          }
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
            <img id='logo' src={logo} alt='' />
            </li>
            <li className='nav-item'>
            <img id='location' src={menu} alt='' />
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
               
              </form>
            </li>
            <li className='nav-item'>
            <img id='cart' src={menu2} alt='' />
            </li>
           
            <li className='nav-item dropdown'>
            <a to='/login'
                className='nav-link dropdown-toggle'
                href='sign_in.html'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Sign in <br />
               
              </a>
            </li>
            <li style={{marginLeft:20}} className='nav-item dropdown '>
              <a className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
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
          </ul>
        </div>
      </nav>



      <div id='carouselExample' className='carousel slide data-ride="carousel"'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img  src="https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-6.jpg" className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
          <img  src="https://m.media-amazon.com/images/I/51Q38NusmPL.jpg" className='d-block w-100' alt='...' />
        
          </div>
          <div className='carousel-item'>
          <img  src="https://m.media-amazon.com/images/I/51deQvLzAQL.jpg" className='d-block w-100' alt='...' />
        
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
        <Route path="/" element={ 
          <div className="col1">
            <div className='col'>
              {movies.map(movie => (
                <Card
                  key={movie.id}
                  title={movie.original_title}
                  posterPath={movie.poster_path}
                  homepage={movie.homepage}
                  rating={movie.vote_average}
                  id={movie.id}
                />
              ))}
            </div>
            
          </div>
        } />
        <Route path="/card-details-page/:id" element={<CardDetailsPage />} /> 
      </Routes>
    </div>
  );
};

export default App;
