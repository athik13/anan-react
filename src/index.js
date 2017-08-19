import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import './css/normalize.css';
import './css/skeleton.css';

ReactDOM.render((
    <BrowserRouter>    
        <App />
    </BrowserRouter>        
    ), document.getElementById('root'));
registerServiceWorker();
