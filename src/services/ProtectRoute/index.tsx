import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../Api/auth';

interface ProtectRouteProps {
    children: ReactElement;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
    const isAuthenticated: boolean = getToken() !== null;

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to="/" replace />;
}

export default ProtectRoute;