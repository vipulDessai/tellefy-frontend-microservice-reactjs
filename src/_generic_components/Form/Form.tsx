import React from 'react';
import { Link } from 'react-router-dom';

import './Form.scss';

export function Forms({ loggingIn, handleSubmit, children }: { loggingIn: boolean, handleSubmit: any, children: any }) {
    return (
        <form name="form" className="form" onSubmit={handleSubmit}>
            { children }
            <div className="form-group">
                <button className="btn btn-primary">
                    {
                        loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>
                    }
                    Login
                </button>
                <Link to="/register" className="btn btn-link">Register</Link>
            </div>
        </form>
    );
}