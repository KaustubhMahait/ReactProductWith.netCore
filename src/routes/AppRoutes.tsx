import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Employee from "../pages/Employee/Employee";
import Department from "../pages/Department/Department";

import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Login */}

                <Route
                    path="/"
                    element={<Login />}
                />

                {/* Layout */}

                <Route element={<MainLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/employee"
                        element={<Employee />}
                    />

                    <Route
                        path="/department"
                        element={<Department />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}