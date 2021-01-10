import React from 'react';

export function InputSubmit({loggingIn}: {loggingIn: boolean}) {
    return (
        <div className="form-group">
            <button className="btn btn-primary">
                {
                    loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>
                }
                Login
            </button>
        </div>
    );
}