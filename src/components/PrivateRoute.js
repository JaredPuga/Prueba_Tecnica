import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({auth, children}) => {

    if(auth.value === 'false') {
        return <Navigate to={'/'}/>
    }

  return children
}


