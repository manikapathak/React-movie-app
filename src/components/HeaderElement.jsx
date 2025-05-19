import react from 'react'

const HeaderElement = ({trendingMovies}) => {
    
  

    return (
        <div className= 'container flex justify-center pt-15'>
          <img src={trendingMovies[1].poster_url} alt="" className='w-[140px] sm:w-[180px] md:w-[220px] rounded-2xl transform -rotate-6 shadow-xl transition-transform hover:scale-105'/>
          <img src={trendingMovies[0].poster_url} alt="" className='class="w-[140px] sm:w-[180px] md:w-[220px] rounded-2xl transform -rotate-6 shadow-xl transition-transform hover:scale-105"'/>
          <img src={trendingMovies[2].poster_url} alt="" className='w-[140px] sm:w-[180px] md:w-[220px] rounded-2xl transform -rotate-6 shadow-xl transition-transform hover:scale-105'/>

        </div>
    )
}

export default HeaderElement;