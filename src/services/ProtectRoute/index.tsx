import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectRouteProps {
    children: ReactElement;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
    const isAuthenticated: boolean = true;
    if (isAuthenticated) {
        return children;
    }
    return <Navigate to="/" replace />;
}

export default ProtectRoute;