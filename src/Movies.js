import React from 'react';
import Movie from './Movie.js';
function Movies(props) {
    return (
        <>
            <h2>Now Playing</h2>
            <section>
                {props.movies.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                    />
                ))}
            </section>
        </>
    );
}
export default Movies;
