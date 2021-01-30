import React from 'react';
import { movies } from './data.js';
import './App.css';
import Header from './Header.js';
import Movies from './Movies.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: movies,
            showMovieList: true,
            searchString: ''
        };
    }
    showAllMovies = () => {
        this.setState({ movies: movies, searchString: '' });
    };
    filterMovies = () => {
        const filteredArray = this.state.movies.filter(
            movie => movie.audience_score >= 60
        );
        this.setState({ movies: filteredArray });
    };
    toggleMovies = () => {
        // OPTION 1:
        // if (this.state.showMovieList) {
        //   this.setState({ showMovieList: false });
        // } else {
        //   this.setState({ showMovieList: true });
        // }
        // OPTION 2:
        // const value = this.state.showMovieList ? true : false;
        // this.setState({ showMovieList: value });
        // OPTION 3:
        this.setState({ showMovieList: !this.state.showMovieList });
    };
    handleSubmit = event => {
        event.preventDefault();
        const filteredMovies = this.state.movies.filter(movie =>
            movie.title
                .toLowerCase()
                .includes(this.state.searchString.toLowerCase())
        );
        this.setState({ movies: filteredMovies });
    };
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };
    render() {
        return (
            <>
                <Header
                    filterMovies={this.filterMovies}
                    showAllMovies={this.showAllMovies}
                />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="searchString"
                        placeholder="search"
                        value={this.state.searchString}
                        onChange={this.handleChange}
                    />
                    <button type="submit">search</button>
                    <button type="reset" onClick={this.showAllMovies}>
                        clear results
                    </button>
                </form>

                <button onClick={this.toggleMovies}>Toggle Movie List</button>
                {this.state.showMovieList ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <p>Toggle the movies with the link above</p>
                )}
            </>
        );
    }
}

export default App;
