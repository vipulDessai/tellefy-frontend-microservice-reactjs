import React from 'react';

// todo: Need to write custom jest path resolver to handle alias
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