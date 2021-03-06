import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({component: Component, exact, ...rest}: {component: any, exact: boolean, path: string, rest?: any}) {
    return (
        <Route {...rest} 
            render={
                props => {
                    if(!localStorage.getItem('user')) {
                        // not logged in so redirect to login page with the return url
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
                    }

                    // logged in so return component
                    return <Component {...props} />;
                }
            }
        />
    );
}

export { PrivateRoute };