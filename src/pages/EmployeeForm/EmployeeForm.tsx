// import { useEffect, useState } from "react";
// import type { EmployeeForm } from "../../interfaces/EmployeeForm";


// export default function EmployeeForm(){

//     const[loading,SetLoading]=useState(true);
//     const[chboxVal,SetCheckBoxVal]=useState(false);

//      // const[empform,SetEmpForm]=useState<EmployeeForm[]>([]);  // The EmployeeForm[] means: "This state will contain an array of EmployeeForm objects." 
//                                                              // This is the initial value. useState<EmployeeForm[]>([]) You're saying: Initially, empform is an empty array.

//         const [empform, SetEmpForm] = useState<EmployeeForm>({
//             ename: "",
//             eemail: "",
//             edept: "",
//             egender: "",
//             eskillchks: [],
//             eexp: "",
//             ejoindate: "",
//             etype: ""
//         });

//         const fetchData = async ()=>{

//             try
//             {
//                     SetLoading(true);
//                     await new Promise(resolve => setTimeout(resolve, 1000));
//             }
//             finally
//             {
//                     SetLoading(false);
//             }

//         };


//     useEffect(()=>{

//         fetchData();
          
//     },[]);

    
//     const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

//                 const { name, value, type } = e.target;

//                 if (type === "checkbox") {

//                         const checked = (e.target as HTMLInputElement).checked;

//                         if (name === "eskillchks") {

//                             SetEmpForm(prev => ({
//                                     ...prev,
//                                     eskillchks: checked ? [...prev.eskillchks, value] : prev.eskillchks.filter(skill => skill !== value)
//                             }));

//                             //     checked?
//                             //      /      \
//                             //    YES       NO
//                             //     │         │
//                             //     ▼         ▼
//                             //    ADD       REMOVE
//                             //     │         │
//                             //     ▼         ▼
//                             //  spread +     filter()
//                             //   value

//                         }

//                 } else {

//                         SetEmpForm(prev => ({
//                             ...prev,
//                             [name]: value
//                         }));

//                 }
//     };

//     const ChngCheckBoxFun = (e: React.ChangeEvent<HTMLInputElement>) => {

//         SetCheckBoxVal(e.target.checked);

//     };


//     if(loading == true)
//     {
//           return <h3>Loading Data...</h3>
//     }
//     else
//     {
//             return (

//                 <div>

//                         <h3>Employee Details</h3>

//                         <div>

//                                 <div>
//                                         <label>Employee Name</label> <br/>
//                                         <input type="text" name="ename" onChange={handleChange}></input>
//                                 </div>
//                                 <div>
//                                         <label>Employee Email</label><br/>
//                                         <input type="email" name="eemail" onChange={handleChange}></input>
//                                 </div>
//                                 <div>
//                                         <label>Select Department</label><br/>
//                                         <select name="edept"  onChange={handleChange}>
//                                                 <option value="1">IT</option>
//                                                 <option value="2">HR</option>
//                                                 <option value="3">INFRA</option>
//                                         </select>
//                                 </div>
//                                 <div>
//                                         <label>Gender</label><br/>
//                                         <input type="radio" name="egender" value="1" onChange={handleChange}/>Male
//                                         <input type="radio" name="egender" value="2" onChange={handleChange}/>Female
//                                 </div>
//                                 <div>
//                                         <label>Skills</label><br/>
//                                         <label><input type="checkbox" name="eskillchks" value="1" onChange={handleChange}/>C#</label>
//                                         <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Java</label>
//                                         <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>JS</label>
//                                         <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Angular</label>
//                                         <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>React</label>
//                                         <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Database</label>
//                                 </div>
//                                 <div>
//                                         <label>Experience</label><br/>
//                                         <input type="text" name="eexp"  onChange={handleChange}></input>
//                                 </div>
//                                 <div>
//                                         <label>Joining Date</label><br/>
//                                         <input type="date" name="ejoindate" onChange={handleChange}></input>
//                                 </div>
//                                 <div>
//                                         <label>Employment Type</label><br/>
//                                         <input type="radio" name="etype" value="1" onChange={handleChange}/>Permanent
//                                         <input type="radio" name="etype" value="2" onChange={handleChange}/>Contract
//                                 </div>
//                                 <div>
//                                         <label><input type="checkbox" value="1" onChange={ChngCheckBoxFun}/>I confirm the information is correct </label>
//                                 </div>
//                                {/* { chboxVal &&  */}
//                                             <div>
//                                                 <button disabled={!chboxVal}>Submit</button>
//                                                 <button disabled={!chboxVal}>Clear</button>
//                                             </div>
//                                 {/* } */}
//                         </div>

//                 </div>

//             );
//     }
// }


import { useEffect, useState } from "react";
import type { EmployeeForm } from "../../interfaces/EmployeeForm";
import "./EmployeeForm.css";


export default function EmployeeForm() {

    const [loading, SetLoading] = useState(true);

    const [chboxVal, SetCheckBoxVal] = useState(false);


    const [empform, SetEmpForm] = useState<EmployeeForm>({
        ename: "",
        eemail: "",
        edept: "",
        egender: "",
        eskillchks: [],
        eexp: "",
        ejoindate: "",
        etype: ""
    });


    const fetchData = async () => {

        try {

            SetLoading(true);

            await new Promise(resolve =>
                setTimeout(resolve, 1000)
            );

        }
        finally {

            SetLoading(false);

        }

    };


    useEffect(() => {

        fetchData();

    }, []);


    /*
     * =====================================================
     * HANDLE FORM CHANGE
     * =====================================================
     */

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {

        const {
            name,
            value,
            type
        } = e.target;


        /*
         * CHECKBOX
         */

        if (type === "checkbox") {

            const checked =
                (e.target as HTMLInputElement).checked;


            if (name === "eskillchks") {

                SetEmpForm(prev => ({

                    ...prev,

                    eskillchks: checked
                        ? [
                            ...prev.eskillchks,
                            value
                        ]
                        : prev.eskillchks.filter(
                            skill => skill !== value
                        )

                }));

            }

        }


        /*
         * TEXT / SELECT / RADIO
         */

        else {

            SetEmpForm(prev => ({

                ...prev,

                [name]: value

            }));

        }

    };


    /*
     * =====================================================
     * CONFIRMATION CHECKBOX
     * =====================================================
     */

    const ChngCheckBoxFun = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        SetCheckBoxVal(
            e.target.checked
        );

    };


    /*
     * =====================================================
     * LOADING
     * =====================================================
     */

    if (loading) {

        return (

            <div className="employee-loading">

                <div className="employee-spinner"></div>

                <span>
                    Loading Employee Form...
                </span>

            </div>

        );

    }


    /*
     * =====================================================
     * FORM
     * =====================================================
     */

    return (

        <div className="employee-page">


            {/* ==========================================
                PAGE HEADER
            ========================================== */}

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

                        <div className="section-number">
                            1
                        </div>

                        <div>

                            <h3>
                                Personal Information
                            </h3>

                            <span>
                                Basic employee details
                            </span>

                        </div>

                    </div>


                    <div className="form-grid">


                        {/* Employee Name */}

                        <div className="form-field">

                            <label>
                                Employee Name
                                <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                name="ename"
                                value={empform.ename}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                            />

                        </div>


                        {/* Employee Email */}

                        <div className="form-field">

                            <label>
                                Employee Email
                                <span className="required">*</span>
                            </label>

                            <input
                                type="email"
                                name="eemail"
                                value={empform.eemail}
                                onChange={handleChange}
                                placeholder="Enter email address"
                            />

                        </div>


                        {/* Department */}

                        <div className="form-field">

                            <label>
                                Department
                                <span className="required">*</span>
                            </label>

                            <select
                                name="edept"
                                value={empform.edept}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Department
                                </option>

                                <option value="1">
                                    IT
                                </option>

                                <option value="2">
                                    HR
                                </option>

                                <option value="3">
                                    INFRA
                                </option>

                            </select>

                        </div>


                        {/* Joining Date */}

                        <div className="form-field">

                            <label>
                                Joining Date
                                <span className="required">*</span>
                            </label>

                            <input
                                type="date"
                                name="ejoindate"
                                value={empform.ejoindate}
                                onChange={handleChange}
                            />

                        </div>


                        {/* Gender */}

                        <div className="form-field full-width">

                            <label>
                                Gender
                            </label>

                            <div className="radio-group">

                                <label className="radio-option">

                                    <input
                                        type="radio"
                                        name="egender"
                                        value="1"
                                        checked={
                                            empform.egender === "1"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Male
                                    </span>

                                </label>


                                <label className="radio-option">

                                    <input
                                        type="radio"
                                        name="egender"
                                        value="2"
                                        checked={
                                            empform.egender === "2"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Female
                                    </span>

                                </label>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ======================================
                    PROFESSIONAL INFORMATION
                ====================================== */}

                <div className="form-section">

                    <div className="section-header">

                        <div className="section-number">
                            2
                        </div>

                        <div>

                            <h3>
                                Professional Information
                            </h3>

                            <span>
                                Skills and employment details
                            </span>

                        </div>

                    </div>


                    <div className="form-grid">


                        {/* Skills */}

                        <div className="form-field full-width">

                            <label>
                                Skills
                            </label>

                            <div className="skills-container">


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="1"
                                        checked={
                                            empform.eskillchks.includes("1")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        C#
                                    </span>

                                </label>


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="2"
                                        checked={
                                            empform.eskillchks.includes("2")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Java
                                    </span>

                                </label>


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="3"
                                        checked={
                                            empform.eskillchks.includes("3")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        JavaScript
                                    </span>

                                </label>


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="4"
                                        checked={
                                            empform.eskillchks.includes("4")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Angular
                                    </span>

                                </label>


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="5"
                                        checked={
                                            empform.eskillchks.includes("5")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        React
                                    </span>

                                </label>


                                <label className="skill-option">

                                    <input
                                        type="checkbox"
                                        name="eskillchks"
                                        value="6"
                                        checked={
                                            empform.eskillchks.includes("6")
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Database
                                    </span>

                                </label>

                            </div>

                        </div>


                        {/* Experience */}

                        <div className="form-field">

                            <label>
                                Experience
                            </label>

                            <input
                                type="text"
                                name="eexp"
                                value={empform.eexp}
                                onChange={handleChange}
                                placeholder="e.g. 3 Years"
                            />

                        </div>


                        {/* Employment Type */}

                        <div className="form-field">

                            <label>
                                Employment Type
                            </label>

                            <div className="radio-group">

                                <label className="radio-option">

                                    <input
                                        type="radio"
                                        name="etype"
                                        value="1"
                                        checked={
                                            empform.etype === "1"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Permanent
                                    </span>

                                </label>


                                <label className="radio-option">

                                    <input
                                        type="radio"
                                        name="etype"
                                        value="2"
                                        checked={
                                            empform.etype === "2"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        Contract
                                    </span>

                                </label>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ======================================
                    CONFIRMATION
                ====================================== */}

                <div className="confirmation-section">

                    <label className="confirmation-option">

                        <input
                            type="checkbox"
                            checked={chboxVal}
                            onChange={ChngCheckBoxFun}
                        />

                        <span>
                            I confirm that the information
                            provided above is correct.
                        </span>

                    </label>

                </div>


                {/* ======================================
                    ACTION BUTTONS
                ====================================== */}

                <div className="form-actions">

                    <button
                        type="button"
                        className="btn btn-secondary"
                        disabled={!chboxVal}
                    >
                        Clear
                    </button>


                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={!chboxVal}
                    >
                        Submit
                    </button>

                </div>


            </div>

        </div>

    );

}