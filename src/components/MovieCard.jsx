import react from 'react';

const MovieCard = ({movie : {title, vote_average, poster_path, release_date, original_language }}) => {
    return (
        <div className="movie-card">
           <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="" />
           <h3>{title}</h3>
           <div className="content">
                <div className="rating">
                    <img src="/public/star.svg" alt=""/>
                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    <p className='ml-2 font-dm-sans font-light'>• {original_language} • {release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>      
            </div>
        </div>
    )
}

export default MovieCard;