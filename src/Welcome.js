import React from 'react';
// props = {
//   name: 'Jen',
//   newUser: true
// }
function Welcome(props) {
    const message = props.newUser ? 'Welcome aboard' : 'Welcome back';
    return (
        <p>
            {message}, {props.name}
        </p>
    );
}
export default Welcome;
