import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


interface ProtectedRouteProps {
    children: ReactNode;
}  

const useAuth = () => {
    const user = localStorage.getItem('jwtToken');
    return user != null;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    } 

    return <>{children}</>;
};

export default ProtectedRoute;
