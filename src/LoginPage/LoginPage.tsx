import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import './LoginPage.scss';
import { userActions } from '@/_actions';
import { history } from '@/_helpers';
import { RootState } from '@/_reducers';
import { LogoPanel } from '@/_generic_components/LogoPanel';
import { Forms } from '@/_generic_components/Forms';

interface LocationState {
    from?: Object;
}

function LoginPage() {
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
            <h2>Login</h2>
            <Forms {...{submitted, loggingIn, userName, password, handleSubmit, handleChange}}></Forms>
        </>
    );
}

export { LoginPage };