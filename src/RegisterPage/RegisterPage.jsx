import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { history } from '../_helpers';

function RegisterPage() {
    // if logged in redirect to home page
    if(localStorage.getItem('user')) {
        history.push({pathname: '/'});
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tellefy | Register</title>
            </Helmet>
            <div>foo</div>
            <Link to="/login">Login</Link>
        </div>
    )
}

export { RegisterPage };