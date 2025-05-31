import react from 'react'

const HeaderElement = ({trendingMovies}) => {
    
  

    return (
      <>
        {trendingMovies.length > 0 && (
          <div className='container flex justify-center h-45 pt-5 md:h-85 sm:h-65 lg:h-90'>
            <div className='grid grid-cols-2 absolute z-1 gap-15 pt-5 sm:gap-25 sm:pt-10'>
              <img src={trendingMovies[1].poster_url && trendingMovies[1].poster_url !== "https://image.tmdb.org/t/p/w500/null" ? trendingMovies[1].poster_url : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="Movie" className='rotate-348 rounded-lg h-32 md:h-65 sm:h-50 w-auto'/>
              <img src={trendingMovies[2].poster_url && trendingMovies[2].poster_url !== "https://image.tmdb.org/t/p/w500/null" ? trendingMovies[2].poster_url : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="Movie" className='rotate-12 rounded-lg h-32 md:h-65 sm:h-50 w-auto '/>
            </div>
            
            <img src={trendingMovies[0].poster_url && trendingMovies[0].poster_url !== "https://image.tmdb.org/t/p/w500/null" ? trendingMovies[0].poster_url : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="Movie" className='rounded-lg h-36 md:h-72 sm:h-56 w-auto z-2'/>
          </div>
        )}
      </>
    )
}

export default HeaderElement;