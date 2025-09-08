import React from 'react'

const FilterMovies = ({ givingRating, onRatingButtonClick, ratings }) => {
    return (
        <ul className="center-ele movie-filter">
            {ratings.map((rate) =>
                <li key={rate} className={givingRating === rate ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => onRatingButtonClick(rate)}>{rate}</li>
            )}

            {/* instead of defining li, we use map to be dynamically added up in code */}
            {/* <li className={givingRating === 9 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => onRatingButtonClick(9)}>9+</li>
            <li className={givingRating === 8 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => onRatingButtonClick(8)}>8+</li>
            <li className={givingRating === 7 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => onRatingButtonClick(7)}>7+</li>
            <li className={givingRating === 6 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => onRatingButtonClick(6)}>6+</li> */}
        </ul>
    );
};

export default FilterMovies;