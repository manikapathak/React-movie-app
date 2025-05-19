import react from 'react';

const TrendingMoviesComponent = ({trendingMovies}) => {
    return(
        <div>
            {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className='pl-5'>Trending Movies</h2>

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
        </div>
    );
}

export default TrendingMoviesComponent;