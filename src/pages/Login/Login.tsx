import { useState } from "react";
import type { LoginRequest } from "../../interfaces/LoginRequest";
import "./Login.css";

export default function Login() {

const [login, setLogin] = useState<LoginRequest>({
    username: "",
    password: ""
});

const [loading, setLoading] = useState(false);

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
) => {

    const { name, value } = e.target;

    setLogin({

        ...login,

        [name]: value

    });

};

const handleSubmit = async () => {

    setLoading(true);

    console.log(login);

    await new Promise(resolve => setTimeout(resolve, 3000));  // Professional applications never allow multiple clicks.

    setLoading(false);

};

    return (

    <div>

        <h2>Employee Login</h2>

        <label>Username</label>

        <br />

        <input type="text" name="username" value={login.username} onChange={handleChange}/>

        <br />

        <label>Password</label>

        <br />

        <input type="password" name="password" value={login.password} onChange={handleChange}/>

        <pre>
            {JSON.stringify(login,null,2)}
        </pre>
        
        <button onClick={handleSubmit} disabled={loading}> {loading ? "Logging in..." : "Login"} </button>   
         {/* disabled={loading} On Page load loading is set as false hence loding is false so Login is show but when we click on login 
         button loading is set as true hence Logging in... is show and button is disabled  Loading state to prevent duplicate submissions. */}
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