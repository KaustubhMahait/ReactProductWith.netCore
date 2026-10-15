import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Employee from "../pages/Employee/Employee";
import Department from "../pages/Department/Department";
import EmployeeForm from "../pages/EmployeeForm/EmployeeForm";
import PreQuestions from "../pages/PreQuestions/PreQuestions";
import CMDashboard from "../pages/PanchayatEnviroment/Dashboard/Dashboard";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import PanchayatLoginPage from "../pages/PanchayatEnviroment/PanchayatLoginPage";
import CMPreForms from "../pages/PanchayatEnviroment/PreForms/PreForms";

import CMProtectedRoute from "./CMProtectedRoute";
import CMLayout from "../layouts/CMLayout";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Login */}

                <Route path="/" element={<Login />}/>

                {/* Panchayat Enviroment */}

                <Route path="/panchayat-login" element={<PanchayatLoginPage />} />

                {/* CM Pages */}
                <Route element={<CMProtectedRoute />}>
                        <Route element={<CMLayout />}>
                        
                        <Route path="/cmdashboard" element={<CMDashboard />} />
                        <Route path="/cmpreforms" element={<CMPreForms />} />
                            
                        </Route>
                </Route>

                {/* Layout */}

                <Route element={<ProtectedRoute />}>

                    <Route element={<MainLayout />}>

                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/employee" element={<Employee />} />

                        <Route path="/department" element={<Department />} />

                        <Route path="/employeeform" element={<EmployeeForm />} />

                        <Route path="/prequestions" element={<PreQuestions />} />

                    </Route>

                </Route>

                

            </Routes>

        </BrowserRouter>

    );

}