import { useEffect, useState } from "react";
import type { EmployeeForm } from "../../interfaces/EmployeeForm";


export default function EmployeeForm(){

    const[loading,SetLoading]=useState(true);

     // const[empform,SetEmpForm]=useState<EmployeeForm[]>([]);  // The EmployeeForm[] means: "This state will contain an array of EmployeeForm objects." 
                                                             // This is the initial value. useState<EmployeeForm[]>([]) You're saying: Initially, empform is an empty array.

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

        const fetchData = async ()=>{

            try
            {
                    SetLoading(true);
                    await new Promise(resolve => setTimeout(resolve, 1000));
            }
            finally
            {
                    SetLoading(false);
            }

        };


    useEffect(()=>{

        fetchData();
          
    },[]);

    
    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value, type } = e.target;

    if (type === "checkbox") {

        const checked = (e.target as HTMLInputElement).checked;

        if (name === "eskillchks") {

            SetEmpForm(prev => ({
                ...prev,
                eskillchks: checked
                    ? [...prev.eskillchks, value]
                    : prev.eskillchks.filter(skill => skill !== value)
            }));

        }

    } else {

        SetEmpForm(prev => ({
            ...prev,
            [name]: value
        }));

    }
};
    

    if(loading == true)
    {
          return <h3>Loading Data...</h3>
    }
    else
    {
            return (

                <div>

                        <h3>Employee Details</h3>

                        <div>

                                <div>
                                        <label>Employee Name</label> <br/>
                                        <input type="text" name="ename" onChange={handleChange}></input>
                                </div>
                                <div>
                                        <label>Employee Email</label><br/>
                                        <input type="email" name="eemail" onChange={handleChange}></input>
                                </div>
                                <div>
                                        <label>Select Department</label><br/>
                                        <select name="edept"  onChange={handleChange}>
                                                <option value="1">IT</option>
                                                <option value="2">HR</option>
                                                <option value="3">INFRA</option>
                                        </select>
                                </div>
                                <div>
                                        <label>Gender</label><br/>
                                        <input type="radio" name="egender" value="1" onChange={handleChange}/>Male
                                        <input type="radio" name="egender" value="2" onChange={handleChange}/>Female
                                </div>
                                <div>
                                        <label>Skills</label><br/>
                                        <label><input type="checkbox" name="eskillchks" value="1" onChange={handleChange}/>C#</label>
                                        <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Java</label>
                                        <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>JS</label>
                                        <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Angular</label>
                                        <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>React</label>
                                        <label><input type="checkbox" name="eskillchks" value="2" onChange={handleChange}/>Database</label>
                                </div>
                                <div>
                                        <label>Experience</label><br/>
                                        <input type="text" name="eexp"  onChange={handleChange}></input>
                                </div>
                                <div>
                                        <label>Joining Date</label><br/>
                                        <input type="date" name="ejoindate" onChange={handleChange}></input>
                                </div>
                                <div>
                                        <label>Employment Type</label><br/>
                                        <input type="radio" name="etype" value="1" onChange={handleChange}/>Permanent
                                        <input type="radio" name="etype" value="2" onChange={handleChange}/>Contract
                                </div>
                                <div>
                                        <label><input type="checkbox" value="1"/>I confirm the information is correct </label>
                                </div>
                                <div>
                                    <button>Submit</button>
                                    <button>Clear</button>
                                </div>
                        </div>

                </div>

            );
    }
}