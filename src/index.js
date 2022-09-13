import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import './index.css';

// importing components.
import App from './app'


const root = ReactDOM.createRoot(document.getElementById('root')); // creating a root, to render all the elements.

root.render(<App />);