import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebaseinit';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-primary mt-5 pt-5'>Loading...</h1>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;