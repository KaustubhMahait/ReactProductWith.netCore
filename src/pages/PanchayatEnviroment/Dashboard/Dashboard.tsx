import {useState,useEffect} from "react";




export default function Dashboard(){


    const FetchData =  async ()=>{

        console.log("Fetching Data for Dashboard");

    }

    useEffect(()=>{

            FetchData();

    },[]);

    return(        

        <div className="employee-page">          

            <div className="employee-page-header">

                <div>

                    <h2>
                        Employee Details
                    </h2>

                    <p>
                        Enter employee information below
                    </p>

                </div>

            </div>


            {/* ==========================================
                FORM CARD
            ========================================== */}

            <div className="employee-card">


                {/* ======================================
                    PERSONAL INFORMATION
                ====================================== */}

                <div className="form-section">

                    <div className="section-header">

                        

                        <div>

                            <h3>
                                Session Information
                            </h3>                            

                        </div>

                    </div>


                    <div className="form-grid">


                        {/* Employee Name */}

                        <div className="form-field">

                            <label>
                                Username
                                <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                name="ename"
                                value={localStorage.getItem("productionUsername") || ""}                               
                                readOnly={true}
                            />

                            <label>
                                Roleid
                                <span className="required">*</span>
                            </label>                          

                            <input
                                type="text"
                                name="ename"
                                // value={localStorage.getItem("productionRoleid") || ""}                               
                                readOnly={true}
                                value= { localStorage.getItem("productionRoleid") == "1" ? "Panchayat User" : 
                                         localStorage.getItem("productionRoleid") == "2" ? "Sadmin User" : 
                                         localStorage.getItem("productionRoleid") == "3" ? "BDO User" :
                                         localStorage.getItem("productionRoleid") == "4" ? "CEO User" :
                                         localStorage.getItem("productionRoleid") == "6" ? "Divisional Desk User" :                                         
                                         localStorage.getItem("productionRoleid") == "7" ? "CEO Readonly User" :
                                         localStorage.getItem("productionRoleid") == "8" ? "State User" : "Unknown" }
                                         
                            />

                            <label>
                                Mobilenumber
                                <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                name="ename"
                                value={localStorage.getItem("productionMobilenumber") || ""}                               
                                readOnly={true}
                            />

                            <label>
                                Emailid
                                <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                name="ename"
                                value={localStorage.getItem("productionEmailid") || ""}                               
                                readOnly={true}
                            />

                            <label>
                                Userid
                                <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                name="ename"
                                value={localStorage.getItem("productionUserid") || ""}                               
                                readOnly={true}
                            />

                        </div>
                        </div>
                        </div>
                        </div>
                        </div>


    )
};
