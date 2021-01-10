import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import './LoginPage.scss';
import { userActions, alertActions } from '@/_actions';
import { history } from '@/_helpers';
import { RootState } from '@/_reducers';
import { LogoPanel } from '@/_generic_components/LogoPanel';
import { Forms, InputText, InputPassword, InputSubmit } from '@/_generic_components/Form';

interface LocationState {
    from?: Object;
}

function LoginPage() {
    const alert = useSelector((state: RootState) => state.alert);

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    });

    // if logged in redirect to home page
    if (localStorage.getItem('user')) {
        history.push({ pathname: '/' });
    }

    const [inputs, setInputs] = useState({
        userName: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { userName, password } = inputs;
    const loggingIn = useSelector((state: RootState) => state.authentication.loggingIn);

    const dispatch = useDispatch();
    const location = useLocation();

    function handleChange(e: any) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setSubmitted(true);
        if (userName && password) {
            // get return url from location state or default to home page
            const { from }: LocationState = location.state || { from: { pathname: '/' } };
            dispatch(userActions.login(userName, password, from));
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tellefy | Login</title>
            </Helmet>
            <LogoPanel />
            {
                alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <h2 className="login-label">Login</h2>
            <Forms {...{ loggingIn, handleSubmit }}>
                <InputText {...{submitted, userName, handleChange}}/>
                <InputPassword {...{submitted, password, handleChange}}/>
                <InputSubmit {...{loggingIn}} />
                <Link to="/register" className="btn btn-link">Register</Link>
            </Forms>
        </>
    );
}

export { LoginPage };