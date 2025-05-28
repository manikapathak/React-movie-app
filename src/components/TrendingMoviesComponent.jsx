import react from 'react';

const TrendingMoviesComponent = ({trendingMovies}) => {
  if(trendingMovies.length > 0) {
    console.log(trendingMovies);
  }
  

    return(
        <div>
            {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className='pl-5'>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                   <img src={movie.poster_url && movie.poster_url !== "https://image.tmdb.org/t/p/w500/null" ? movie.poster_url : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="Movie"/>
                </li>
              ))}
            </ul>
          </section>
        )}
        </div>
    );
}

export default TrendingMoviesComponent;