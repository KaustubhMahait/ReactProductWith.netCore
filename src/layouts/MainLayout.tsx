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
                    {/* Outlet is a placeholder. Think of it as an empty box. React did NOT reload the entire page. Only the component inside <Outlet /> changed. This is one of the reasons React applications feel fast.*/}
                </div>

            </div>

            <Footer />

        </div>

    );

}