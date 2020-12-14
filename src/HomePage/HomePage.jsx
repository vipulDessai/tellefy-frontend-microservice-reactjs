import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    function logout(e) {
        dispatch(userActions.logout());
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.userName}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <p>
                <Link to='/login' onClick={logout}>Logout</Link>
            </p>
        </div>
    )
}

export { HomePage };