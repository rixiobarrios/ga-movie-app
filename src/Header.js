import React from 'react';
import Welcome from './Welcome.js';
// Welcome({ name: 'Joe' })
function Header(props) {
    return (
        <header>
            <h1>Reelz: The Movie App</h1>
            <Welcome name={'Jen'} newUser={false} />
            <div>
                <ul>
                    <li onClick={props.showAllMovies}>Now Playing</li>
                    <li onClick={props.filterMovies}>Must See Movies</li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
