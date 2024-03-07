import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './CardDetails.css'

const CardDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: 'db4d7bc80d3cea9a989c506e8fd21df3',
            },
          }
        )
        setMovieDetails(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movie details:', error)
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])

  console.log(movieDetails)
  if (loading) return <div>Loading...</div>

  return (
    <div className='container-fluid'>
      <div className='content_details'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt=''
        />
        <div className='details'>
          <h2 style={{ color: '#518dda' }}>{movieDetails.original_title}</h2>
          <h4 style={{ fontSize: 20, marginLeft: 0 }}>
            {' '}
            {movieDetails.tagline}
          </h4>

          <p style={{ fontSize: 20, marginLeft: 0 }}>
            <p>{movieDetails.overview}</p>
          </p>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ color: '#518dda' }}>IMDB rating : </h6>
          
            <img
              style={{ height: '30px', width: '30px',marginLeft:'5px' }}
              src='https://cdn-icons-png.flaticon.com/128/477/477406.png'
              alt=''
            />

            <h6 style={{ fontSize: 25, marginLeft: 13 }}>
              {' '}
              {movieDetails.vote_average} / 10
            </h6>
            <hr />
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ color: '#518dda' }}>Release Date : </h6>
            <img
              style={{ height: '30px', width: '30px',marginLeft:'5px' }}
              src='https://cdn-icons-png.flaticon.com/128/10691/10691802.png'
              alt=''
            />
            <h6 style={{ fontSize: 25, marginLeft: 13 }}>
              {' '}
              {movieDetails.release_date}
            </h6>
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ color: '#518dda' }}>Budget : </h6>
            <img
              style={{ height: '30px', width: '30px',marginLeft:'5px' }}
              src='https://cdn-icons-png.flaticon.com/128/1420/1420341.png'
              alt=''
            />
            <h6 style={{ fontSize: 25, marginLeft: 13 }}>
              {' '}
              {movieDetails.budget} cr
            </h6>
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ color: '#518dda' }}>Production Countries : </h6>
            <img
              style={{ height: '30px', width: '30px',marginLeft:'5px' }}
              src='https://cdn-icons-png.flaticon.com/128/10029/10029140.png'
              alt=''
            />
            <h6 style={{ fontSize: 25, marginLeft: 13 }}>
              {' '}
              {movieDetails.production_countries[0].name} 
            </h6>
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h6 style={{ color: '#518dda' }}>Production Companies : </h6>
            
            <h6 style={{ fontSize: 25, marginLeft: 13 }}>
              {' '}
              {movieDetails.production_companies.map((item) => {
                return (
                  
                      <p>{item.name}</p>
                   
                )
              })}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
