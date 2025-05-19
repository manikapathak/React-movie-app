import './App.css'
import Search from './components/search';
import {useState, useEffect} from 'react';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingMovies } from './appwrite.js';



function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState (null);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);


  useDebounce (() => setDebouncedSearchTerm(searchTerm) , 500, [searchTerm])


  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTION = {
    method: 'GET',
    headers : {
      'accept' : 'application/json',
      'Authorization': 'Bearer ' + API_KEY,
    }
  }


  const fetchMovies = async (query = '') => {
    setLoading(true);
    setError(null);


    try{

      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      


      const response = await fetch(endpoint , API_OPTION);


      if(!response.ok){
        throw new Error('Error fetching movies:' )
      }


    const data = await response.json();

      if(data.Response === 'False') {
        setError(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);


       if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    
    }

    catch (error){
      console.error('Error fetching movies:', error);
      setError('Error fetching movie. Please try again.');
    
    
    }
    finally{
      setLoading(false);
    }
  }

  
  
  const loadTrendingMovies = async () => {
      try{
          const movies = await getTrendingMovies()
          console.log('Trending Movies:', movies)
          setTrendingMovies(movies || []);
          
        
        }
      catch (error){
        console.log('Error fetching trending movies:', error)
      }
    }



  useEffect( () => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);


  useEffect( () => {
    loadTrendingMovies();
  }, [])


  return (
    <>
      <div className="pattern ">

        <div className="wrapper">
          <header>
            <div className="bg-[url('/public/hero-bg.png')] bg-cover max-full  flex flex-wrap justify-center">
                <img src="/public/hero.png" alt="" className= 'h-75 w-auto pt-5'/>
                {/* <HeaderElement trendingMovies = {trendingMovies}/> */}
                <h1>Find <span className='text-gradient'>Movies</span> You Will Enjoy Without The Hassel</h1> 
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
          </header>


         {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}



          <section className='all-movies pt-5'>
             <h2 className='pl-8 pb-3'>All Movies</h2>
            <div className="flex justify-center flex-wrap">
                  {loading ? <Spinner/> : error ? (<p className='text-red-500'>{error}</p>) : 
              (
                  <ul>
                    {movieList.map((movie) => (
                      <MovieCard movie =  {movie}/>
                    ))}
                  </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
