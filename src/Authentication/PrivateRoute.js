import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase.init';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
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