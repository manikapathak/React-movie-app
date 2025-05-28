import react from 'react'

const HeaderElement = ({trendingMovies}) => {
    
  

    return (
      <>
        {trendingMovies.length > 0 && (
          <div className='container flex justify-center h-45 pt-5 md:h-85 sm:h-65 lg:h-90'>
            <div className='grid grid-cols-2 absolute z-1 gap-15 pt-5 sm:gap-25 sm:pt-10'>
              <img src={trendingMovies[1].poster_url} alt="" className='rotate-348 rounded-lg h-32 md:h-65 sm:h-50 w-auto '/>
              <img src={trendingMovies[2].poster_url} alt="" className='rotate-12 rounded-lg h-32 md:h-65 sm:h-50 w-auto ' />
            </div>
            
            <img src={trendingMovies[0].poster_url} alt="" className='rounded-lg h-36 md:h-72 sm:h-56 w-auto z-2' />
          </div>
        )}
      </>
    )
}

export default HeaderElement;