
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';

const MovieCard = ({movie : {title, vote_average, poster_path, release_date, original_language, overview}, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState(0);
    useEffect(() => {
    const handleResize = () => {
        const isLarge = window.matchMedia('(min-width: 1024px)').matches;
        const isMedium = window.matchMedia('(min-width: 768px)').matches;
        const isSmall = window.matchMedia('(min-width: 480px)').matches;

        if (isLarge) {
            setX(index % 4 === 0 ? -0.1 : index % 4 === 1 || index % 4 === 2 ? 0.5 : 1.1);
        } else if (isMedium) {
            setX(index % 3 === 0 ? -0.1 : index % 3 === 2 ? 1.1 : 0.5);
        } else if (isSmall) {
            setX(index % 2 === 0 ? -0.1 : 1.1);
        }
        else{
            setX(0.2);
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [index]);  

    return (
        <motion.div className="movie-card" onClick ={ () => setIsOpen(!isOpen)}>
                        <img src={poster_path && poster_path !== "null" ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://res.cloudinary.com/dhge5bwvy/image/upload/v1747663082/no-movie_ujhqzi.png"} alt="Movie"/>
                <h3>{title}</h3>
                <div className="content">
                        <div className="rating">
                            <img src="https://res.cloudinary.com/dhge5bwvy/image/upload/v1748438588/star_gpcedu.svg" alt=""/>
                            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                            <p className='ml-2 font-dm-sans font-light'>• {original_language} • {release_date ? release_date.split('-')[0] : 'N/A'}</p>
                        </div>      
                    </div>
           
        {isOpen && (
            <motion.div 
            initial={{
                opacity: 0,
                scale: 1,
            }}
            animate= {{
                opacity: 1,
                scale: 2,
                originX: x,
                originY: 1,
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut',
            }}
            className="h-auto w-38 bg-[#0F0D23] rounded-lg flex justify-center flex-wrap p-3 shadow-[-11px_-7px_8px_0px_rgba(255,_255,_255,_0.05)] md:w-auto lg:w-auto">
                 <h5>{title}</h5>

                 <p className='text-amber-50 text-[0.65rem] font-sans'>About: <br /> {overview}</p>
            </motion.div>
        )}
        
    </motion.div>

    )
}

export default MovieCard;