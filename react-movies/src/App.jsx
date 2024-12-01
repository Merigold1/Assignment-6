import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './components/content/movieCards.module.css';


import Navbar from './components/navbar/navbar'
import MovieCards from './components/content/movieCards'

function App() {

  const API_KEY = '81f47e6b'
  const [searchMovie, setSearchMovie] = useState('Lord+of+the+rings')
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()


  const fetchMovies = async () => {
    try {
      const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}`
      const response = await fetch(API_URL)
      const respJSON = await response.json()

      const result = [];

      respJSON.Search.forEach((movies) => {
        result.push({
          title: movies.Title,
          poster: movies.Poster
        })
        
      });
      
      dispatch({
        type: 'INSERT_MOVIES',
        movies: result
      })
      
    } catch (err) {
      console.error(err)
    }


  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Navbar onChange={(value) => {
        setSearchMovie(value)
      }}
      onClick={() => {
        fetchMovies()
      }}/>
      <div className={`${styles.backgroundColor}`}>
        <div className="container">
          <div className="row">
            {movies.map((movie, i) => (
              <div className="col-lg-3 mb-4" key={`${movie.poster}-${i}`}>
                <MovieCards poster={movie.poster} title={movie.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
