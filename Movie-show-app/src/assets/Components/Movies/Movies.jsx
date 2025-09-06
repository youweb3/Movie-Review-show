import React, { useEffect } from 'react'
import './Movies.css'
import WatchMovies from './WatchMovies'

const Movies = () => {
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
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=2e329f464285ec2d95e238087927516d');
        const data = await response.json();
        console.log(data);
    }



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
                <WatchMovies />
            </div>
        </section>
    )
};

export default Movies;