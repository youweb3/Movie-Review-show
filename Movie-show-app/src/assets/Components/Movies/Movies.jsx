import React from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'

const Movies = () => {
    return (
        <section className="movie-list">
            <header className="movieheader">
                <h2 className='center-ele movie-h2head'>Popular</h2>
                <div className="center-ele movielistadd">
                    <ul className="center-ele movie-filter">
                        <li className="movie-filter-item">8+</li>
                        <li className="movie-filter-item">7+</li>
                        <li className="movie-filter-item">6+</li>
                    </ul>
                    <select name="" id="" className="movie-sorting">
                        <option value="">Sort By</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className="movie-sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>

            <div className='movie-shows'>
                <WatchMovies/>
            </div>
        </section>
    )
};

export default Movies;