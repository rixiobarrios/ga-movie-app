import React from 'react';
function Movie(props) {
    return (
        <div className="movie">
            <img src={props.poster} alt={props.title} />
        </div>
    );
}
export default Movie;
