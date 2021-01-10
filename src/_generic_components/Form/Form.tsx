import React from 'react';
import { Link } from 'react-router-dom';

import './Form.scss';

export function Forms({ submitted, userName, password, loggingIn, handleSubmit, handleChange }: { submitted: boolean, userName: string, password: string, loggingIn: boolean, handleSubmit: any, handleChange: any }) {
    return (
        <form name="form" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                {
                    submitted && !userName && <div className="invalid-feedback">Username is required</div>
                }
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                {
                    submitted && !password && <div className="invalid-feedback">Password is required</div>
                }
            </div>
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