export const userService = {
    login,
    logout,
    register,
}

function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password})
    }

    return fetch(`${process.env.REACT_APP_API_URL}/account/authenticate`, requestOptions)
        .then(handleResponse)
        .then(
            user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        )
}

function logout() {   
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const reqOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return fetch(`${process.env.REACT_APP_API_URL}/account/register`, reqOptions)
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text()
        .then(
            text => {
                const data = text && JSON.parse(text);
                if(!response.ok) {
                    if(response.status === 401) {
                        // auto logout if 401 response returned from api
                        logout();
                        // location.reload(true);
                    }

                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                return data;
            }
        )
}