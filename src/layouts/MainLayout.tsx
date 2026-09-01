import "./MainLayout.css";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

    return (

        <div className="layout-container">

            <Navbar />

            <div className="content">

                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="page-content">
                    <Outlet />
                </div>

            </div>

            <Footer />

        </div>

    );

}