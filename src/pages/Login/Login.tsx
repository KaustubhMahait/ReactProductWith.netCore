// import { useState } from "react";
// import type { LoginRequest } from "../../interfaces/LoginRequest";
// import "./Login.css";

// export default function Login() {

// const [login, setLogin] = useState<LoginRequest>({
//     username: "",
//     password: ""
// });

// const [loading, setLoading] = useState(false);

// const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
// ) => {

//     const { name, value } = e.target;

//     setLogin({

//         ...login,

//         [name]: value

//     });

// };

// const handleSubmit = async () => {

//     setLoading(true);

//     console.log(login);

//     await new Promise(resolve => setTimeout(resolve, 3000));  // Professional applications never allow multiple clicks.

//     setLoading(false);

// };

//     return (

//     <div>

//         <h2>Employee Login</h2>

//         <label>Username</label>

//         <br />

//         <input type="text" name="username" value={login.username} onChange={handleChange}/>

//         <br />

//         <label>Password</label>

//         <br />

//         <input type="password" name="password" value={login.password} onChange={handleChange}/>

//         <pre>
//             {JSON.stringify(login,null,2)}
//         </pre>
        
//         <button onClick={handleSubmit} disabled={loading}> {loading ? "Logging in..." : "Login"} </button>   
//          {/* disabled={loading} On Page load loading is set as false hence loding is false so Login is show but when we click on login 
//          button loading is set as true hence Logging in... is show and button is disabled  Loading state to prevent duplicate submissions. */}
//     </div>

// );

// }


import { useState } from "react";
import { login } from "../../services/authService";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const auth = useAuth();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

const handleLogin = async () => {

    try {

        const response = await login({
            userName: userName,
            password: password
        });

        auth.login(
    response.accessToken,
    response.refreshToken
)

        navigate("/dashboard");

    }
    catch (error) {

        console.error(error);

    }

};

    return (
        <div className="login-container">

            <div className="login-card">

                <h2>Employee Management</h2>

                <div className="form-group">
                    <label>Username</label>

                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button onClick={handleLogin}>
                    Login
                </button>

                <pre>
                    {JSON.stringify({
                            userName,
                            password
                    }, null, 2)}
                </pre>

            </div>

        </div>
    );
}


// Final Login Flow
// User
//  ↓
// Textbox
//  ↓
// State
//  ↓
// Button Click
//  ↓
// handleSubmit()
//  ↓
// authService.login()
//  ↓
// Axios
//  ↓
// .NET Core API

// Learning Points
// Form submission using onClick.
// Single Source of Truth – state is the master copy of your data.
// Loading state to prevent duplicate submissions.
// Async functions for API calls.
// Service layer to separate UI from networking.

// Login.tsx : UI & User Interaction


// Why localStorage?

// React variables disappear when the page refreshes.

// Example:

// Login

//   ↓

// Token in useState

//   ↓

// Press F5

//   ↓

// Gone ❌

// Login

//   ↓

// Token in localStorage

//   ↓

// Press F5

//   ↓

// Still Exists ✅
