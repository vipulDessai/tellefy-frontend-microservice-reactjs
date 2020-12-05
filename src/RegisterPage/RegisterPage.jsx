import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { history } from '../_helpers';
import { useState } from 'react';

import { userActions } from '../_actions';

function RegisterPage() {
    // if logged in redirect to home page
    if(localStorage.getItem('user')) {
        history.push({pathname: '/'});
    }

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
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