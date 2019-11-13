import React from 'react';
import './App.css';

function App() {
    return(
        <div className='App'>
            <h1>Hi, I am a React App !!</h1>
        </div>
    )
    /*
    return React.createElement( 'div',
        {
            className: 'App',
            id: 'App',
            otherProperty: 'other'
        },
        React.createElement(
            'h1',
            null,
            React.createElement(
                'p',
                null,
                'Hi, I\'m a React App'
            )
        )
    );
     */

}

export default App;