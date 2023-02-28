import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <p className=" text-xl font-medium text-center text-secondary"></p>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;