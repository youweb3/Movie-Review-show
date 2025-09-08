import React, { useEffect, useState } from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'
import FilterMovies from './FilterMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);//create state for store the data/ Movies currently shown
    const [allMoviesFiltered, setAllMoviesFiltered] = useState([]); // orginal unfilterd list
    const [givingRating, setRating] = useState(0);// current rating  filter

    //.then((res) => console.log(res.json()));
    //.the((res) => res.json().then((data)=> console.log(data)));
    ///////////.then

    // useEffect(() => {
    //     fetch("https://api.themoviedb.org/3/person/popular?api_key=2e329f464285ec2d95e238087927516d").then((response) => {

    //         console.log(response);//you see a Response object
    //         return response.json();//read the body as JSON
    //     })
    //     .then(data => {
    //         console.log(data); // here is a Real Object such as {id; name;....}
    //     });

    // }, []);
    //Promise = I’ll bring the data later.
    ///Response = The server answered, here’s the envelope.
    //data (after .json()) = Here’s the actual content inside.

    /////////////////////////////////.async await: more readabale and no cunfusing
    useEffect(() => {
        fetchMovies();// run once when component loads
    }, [])
    //[] run only on mount
    //calls fetchMovies

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2e329f464285ec2d95e238087927516d');
        const data = await response.json();

        console.log(Object.keys(data.results[0]));//show keys of first movie
        console.log(data);//show full API object

        setMovies(data.results); //update state with movies
        setAllMoviesFiltered(data.results)
        //keep copy for filtering
    };

    //Fetches movies.
    // Saves them in two states: one for display (movies), one as backup (allMoviesFiltered)

    const handleFilter = (rating) => {
        if (rating === givingRating) { //clicked same rating → reset
            setRating(0);
            setMovies(allMoviesFiltered); // restore full list
        }
        else {
            setRating(rating); // update filter value
            const filteredMovies = allMoviesFiltered.filter((movie) => movie.vote_average >= rating);

            setMovies(filteredMovies); //show filtered list
        }
    };

    //If user clicks the same rating again, it resets filter.
    //Otherwise, filters allMoviesFiltered by vote_average >= rating.
    // In short:
    // movies = current displayed list.
    // allMoviesFiltered = backup of original API results.
    // givingRating = rating filter state.
    // handleFilter = filters or resets list.

    return (
        <section className="movie-list">
            <header className="movieheader">
                <h2 className='center-ele movie-h2head'>Popular</h2>
                <div className="center-ele movielistadd">

                    <FilterMovies
                        givingRating={givingRating}
                        onRatingButtonClick={handleFilter}
                        ratings={[9, 8, 7, 6]}
                    />

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
                {movies.length > 0 ? (movies.map((movie) => (
                    <WatchMovies key={movie.id} movie={movie} />)))
                    :
                    (<p>No Movies found for this rate</p>)
                }
            </div>
        </section>
    )
};

export default Movies;