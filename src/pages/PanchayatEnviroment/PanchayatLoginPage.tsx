import { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import {cmlogin} from "../../services/CMapiServices";
import { useLoginType } from "../../context/LoginTypeContext";

export default function PanchayatLoginPage(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setLoginType } = useLoginType();

const handleCMLogin = async () => {

    try 
    {

        const data = await cmlogin({
            username: userName,
            userpassword: password
        });

        // Step 2: Check the API response
        if (data.responseCode === 2000 && data.items.length > 0) {
            const user = data.items[0];

            // Step 3: Store the production token and username
            localStorage.setItem(
                "productionToken",
                user.bearerToken
            );

            localStorage.setItem(
                "productionUserid",
                user.userID
            );

            localStorage.setItem(
                "productionUsername",
                user.userName
            );

            localStorage.setItem(
                "productionRoleid",
                user.roleId
            );

            localStorage.setItem(
                "productionMobilenumber",
                user.mobileNumber
            );

            localStorage.setItem(
                "productionEmailid",
                user.emailId
            );
            
            console.log("Production token and username stored successfully.");

            console.log("Token :"+user.bearerToken + "- Username :"+ user.userName);

            // navigate("/dashboard");
            setLoginType("cm");

            //navigate("/prequestions");
            navigate("/cmdashboard");

        }
        

    }
    catch (error) 
    {
        console.error(error);
    }

};

const handleGoToEmployeeManagement = () => {
        try{
            navigate("/");
        }
        catch (error) {
            console.error(error);
        }
};

    return(

        <div className="login-container">            

            <div className="login-card">

                <h2>Panchayat Login Page</h2>

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

                <button onClick={handleCMLogin}>
                    Login
                </button>

                <pre>
                    {JSON.stringify({
                            userName,
                            password
                    }, null, 2)}
                </pre>

                <button onClick={handleGoToEmployeeManagement}>Go to Employee Management</button>

            </div>

        </div>

    )

};


