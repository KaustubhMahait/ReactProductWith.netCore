import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {

    const auth = useAuth();

    return (

        <div>

            <h2>Dashboard</h2>

            <p>
                Logged In :
                {auth.isAuthenticated ? "Yes" : "No"}
            </p>

        </div>

    );

}