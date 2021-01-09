import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/_reducers';
import { userActions } from '@/_actions';
import { NavBar } from '@/_generic_components/NavBar/NavBar';

function HomePage() {
    const user = useSelector((state: RootState) => state.authentication.user);
    const dispatch = useDispatch();

    function logout(e: React.MouseEvent) {
        dispatch(userActions.logout());
    }

    return (
        <>
            <NavBar></NavBar>
            <h1>Hi {user.userName}!!</h1>
            <p>You're logged in with React Hooks!!</p>
            <p>
                <Link to='/login' onClick={logout}>Logout</Link>
            </p>
        </>
    );
}

export { HomePage };