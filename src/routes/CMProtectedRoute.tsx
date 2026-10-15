import { Navigate, Outlet } from "react-router-dom";

export default function CMProtectedRoute() {
    const token = localStorage.getItem("productionToken");

    if (!token) {
        console.log("CM Authenticated: false");
        return <Navigate to="/panchayat-login" replace />;
    }

    console.log("CM Authenticated: true");

    return <Outlet />;
}