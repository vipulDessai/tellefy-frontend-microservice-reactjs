import React from 'react';

export function InputPassword({ submitted, password, handleChange }: { submitted: boolean, password: string, handleChange: any }) {
    return (
        <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
            {
                submitted && !password && <div className="invalid-feedback">Password is required</div>
            }
        </div>
    );
}