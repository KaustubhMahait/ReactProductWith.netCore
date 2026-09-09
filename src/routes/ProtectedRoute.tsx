import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {

    const auth = useAuth();

    console.log("Authenticated:", auth.isAuthenticated);

    if (!auth.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}