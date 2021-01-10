import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/_reducers';
import { NavBar } from '@/_generic_components/NavBar/NavBar';

function HomePage() {
    const user = useSelector((state: RootState) => state.authentication.user);

    return (
        <>
            <NavBar></NavBar>
            <h1>Hi {user.userName}!!</h1>
            <p>You're logged in with React Hooks!!</p>
        </>
    );
}

export { HomePage };