import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        userName: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { userName, password } = inputs;
    const logginIn = useSelector(state => state.authentication.loggingIn);

    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
        </div>
    )
}

export { LoginPage };