import React from 'react'
import './WatchMovies.css'
import rating from '../../../assets/Image/rating.png'

const WatchMovies = ({movie}) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie-show'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className='movie-img' alt='Movie image'
            />
            <div className="movie-details">
                <h3 className='movie-details-h3'>{movie.title}</h3>
                <div className="center-ele movie-date">
                    <p>
                        {movie.release_date}
                    </p>
                    <p>{movie.vote_average} <img className='emoji-class' alt='rating icon' src={rating} /></p>
                </div>
                <p className='movie-desceripton'>{movie.overview.slice(0,100)+'.'}</p>
            </div>
        </a>

    );
};

export default WatchMovies;