import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { LogoPanel } from '@/_generic_components/LogoPanel';
import { userActions } from '@/_actions';

import './NavBar.scss';

export function NavBar() {
    const dispatch = useDispatch();

    function logout(e: React.MouseEvent) {
        dispatch(userActions.logout());
    }

    return (
        <nav>
            <LogoPanel></LogoPanel>
            <ul className="menu">
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/records'>Records</Link></li>
                <li><Link to='/login' onClick={logout}>Logout</Link></li>
            </ul>
        </nav>
    );
}