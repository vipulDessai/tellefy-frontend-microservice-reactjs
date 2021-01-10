import React from 'react';

export function InputText({submitted, userName, handleChange}: {submitted: boolean, userName: string, handleChange: any}) {
    return (
        <div className="form-group">
            <label>Username</label>
            <input type="text" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
            {
                submitted && !userName && <div className="invalid-feedback">Username is required</div>
            }
        </div>
    );
}