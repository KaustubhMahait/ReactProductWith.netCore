import { useNavigate,NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../services/authService";

export default function Sidebar() {

const auth = useAuth();

const navigate = useNavigate();

const handleLogout = async () => {

    try {

        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {

            await logout({
                refreshToken
            });

        }

    }
    catch (error) {

        console.log(error);

    }

    auth.logout();

    navigate("/");

};

    return (

        <>
            <p>
            <NavLink to="/dashboard">Dashboard</NavLink>
            </p>

            <p>
             <NavLink to="/employee">Add/Update/Delete Employee</NavLink>
            </p>

            <p>
             <NavLink to="/department">Department</NavLink>
            </p>

            <p>
                <NavLink to="/employeeform">Employee Form</NavLink>
            </p>

            <p style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout
            </p>

        </>

    );

}