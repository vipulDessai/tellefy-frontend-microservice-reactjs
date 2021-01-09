import React from 'react';

import tellerLogo from '@/_images/teller-logo.png';

import './LogoPanel.scss';

function LogoPanel() {
    return (
        <React.Fragment>
            <ul>
                <li><img className="logo" src={tellerLogo} alt="logo"></img></li>
                <li><h1>Tellefy</h1></li>
            </ul>
        </React.Fragment>
    );
}

export { LogoPanel };