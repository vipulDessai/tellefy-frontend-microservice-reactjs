import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { history } from '@/_helpers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '@/_actions';

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
        if (user.firstName && user.lastName && user.userName && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tellefy | Register</title>
            </Helmet>
            <div className="col-lg-8 offset-lg-2">
                <h2>Register</h2>
                <form name="registerForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                        {   submitted && !user.firstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                        {   submitted && !user.lastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={user.userName} onChange={handleChange} className={'form-control' + (submitted && !user.userName ? ' is-invalid' : '')} />
                        {   submitted && !user.userName &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                        {   submitted && !user.password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {
                                registering && <span className="spinner-border spinner-border-sm mr-1"></span>
                            }
                            Register
                        </button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export { RegisterPage };