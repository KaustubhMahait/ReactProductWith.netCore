import { NavLink, useNavigate } from "react-router-dom";
import "./CMSidebar.css";

export default function CMSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("productionToken");
        localStorage.removeItem("productionUserName");
        localStorage.removeItem("loginType");

        navigate("/panchayat-login", { replace: true });
    };

    return (
        <aside className="cm-sidebar">
            <div className="cm-sidebar-brand">
                CM Portal
            </div>

            <nav className="cm-sidebar-nav">
                {/* <NavLink
                    to="/prequestions"
                    className={({ isActive }) =>
                        `cm-menu-link ${isActive ? "active" : ""}`
                    }
                >
                    Pre-Questions
                </NavLink> */}

                        <NavLink
                    to="/cmdashboard"
                    className={({ isActive }) =>
                        `cm-menu-link ${isActive ? "active" : ""}`
                    }
                >
                    Dashboard
                </NavLink>


                {/* Add more CM menu items here */}
            </nav>

            <button
                type="button"
                className="cm-logout-button"
                onClick={handleLogout}
            >
                Logout
            </button>
        </aside>
    );
}