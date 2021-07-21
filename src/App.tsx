import * as React from 'react';
import * as ReactDOM from 'react-dom';


function render() {
    ReactDOM.render(
        <>
            <header>
                <ul style={{"display": "flex"}}>
                    <li> hello</li>
                    <li>hi</li>
                </ul>
            </header>
        </>
        , document.getElementById('root'));
}

render();