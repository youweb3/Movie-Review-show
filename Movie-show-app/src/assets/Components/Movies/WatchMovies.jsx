import React from 'react'
import './WatchMovies.css'
import rating from '../../../assets/Image/rating.png'

const WatchMovies = () => {
    return (
        <a href='' className='movie-show'>
            <img src='https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8818865_p_v8_as.jpg'
                className='movie-img' alt='Movie image'
            />
            <div className="movie-details">
                <h3 className='movie-details-h3'>Project</h3>
                <div className="center-ele movie-date">
                    <p>
                        06-09-2025
                    </p>
                    <p>8.0{''} <img className='emoji-class' alt='rating icon' src={rating} /></p>
                </div>
                <p className='movie-desceripton'>Details of Movies</p>
            </div>
        </a>

    );
};

export default WatchMovies;