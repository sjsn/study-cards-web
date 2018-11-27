import ReactDOM from 'react-dom';
import React from 'react';
import { injectGlobal } from 'emotion';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

injectGlobal`
    html {
    font-family: "lato", sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);