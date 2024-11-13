import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthComponent';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    // console.log('PRIVATE COM', user)
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoutes;