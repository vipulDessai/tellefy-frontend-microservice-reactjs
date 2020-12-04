import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import { history } from '../_helpers';

function LoginPage() {
    // if logged in redirect to home page
    if(localStorage.getItem('user')) {
        history.push({pathname: '/'});
    }

    const [inputs, setInputs] = useState({
        userName: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { userName, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);

    const dispatch = useDispatch();
    const location = useLocation();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if(userName && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: '/' } };
            dispatch(userActions.login(userName, password, from));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {
                        submitted && !userName && <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {
                        submitted && !password && <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {
                            loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>
                        }
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    )
}

export { LoginPage };