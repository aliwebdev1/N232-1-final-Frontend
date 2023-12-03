import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div class="container">
                <h1 className='four-zero-four'>404</h1>
                <p>Not Found</p>
                <p>Sorry, the page you are looking for might be in another castle.</p>
                <p><Link to="/">Go back home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;