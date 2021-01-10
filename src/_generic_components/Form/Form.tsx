import React from 'react';

import './Form.scss';

export function Forms({ loggingIn, handleSubmit, children }: { loggingIn: boolean, handleSubmit: any, children: any }) {
    return (
        <form name="form" className="form" onSubmit={handleSubmit}>
            { children }
        </form>
    );
}