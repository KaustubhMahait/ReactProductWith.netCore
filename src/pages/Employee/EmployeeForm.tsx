import { useState } from "react";
import { addEmployee,updateEmployee } from "../../services/employeeService";
import type { Employee } from "../../interfaces/Employee";

type EmployeeFormProps = {
    employeeToEdit: Employee | null;  // employeeToEdit can either contain an Employee object OR be null Because your form is used for two purposes: Add or Edit
    onClose: () => void;  // onClose must be a function that takes no parameters and returns nothing. 
    onSaved: () => void;
}; 
// What is EmployeeFormProps? This is simply a TypeScript definition describing what EmployeeForm expects from its parent. 
// "If somebody wants to use <EmployeeForm />, they must provide these 3 things."

export default function EmployeeForm({ employeeToEdit, onClose, onSaved }: EmployeeFormProps) {

    
            const [employee, setEmployee] = useState({
                        employeeId: employeeToEdit?.employeeId ?? 0,
                        employeeName: employeeToEdit?.employeeName ?? "",
                        email: employeeToEdit?.email ?? "",
                        department: employeeToEdit?.department ?? "",
                        salary: employeeToEdit?.salary ?? 0,
                        isActive: employeeToEdit?.isActive ?? true
            });

            const [errors, setErrors] = useState({
                        employeeName: "",
                        email: "",
                        department: "",
                        salary: ""
            });

            const validateForm = () => {

                            const newErrors = {
                                        employeeName: "",
                                        email: "",
                                        department: "",
                                        salary: ""
                            };

                            let isValid = true;

                        if (!employee.employeeName.trim()) {
                                newErrors.employeeName = "Employee Name is required";
                                isValid = false;
                        }

                        if (!employee.email.trim()) {
                                newErrors.email = "Email is required";
                                isValid = false;
                        } 

                        if (!employee.department.trim()) {
                                newErrors.department = "Department is required";
                                isValid = false;
                        }

                        if (employee.salary <= 0) {
                                newErrors.salary = "Salary must be greater than 0";
                                isValid = false;
                        }

                        setErrors(newErrors);

                        return isValid;
            };


            const handleSubmit = async () => {

                            const isValid = validateForm();

                            if (!isValid) {
                                return;
                            }

        try {

                        const employeeData = {
                        employeeName: employee.employeeName,
                        email: employee.email,
                        department: employee.department,
                        salary: Number(employee.salary),
                        isActive: employee.isActive
                    };

                    let data;

                if (employeeToEdit) {

                                // UPDATE
                                data = await updateEmployee(
                                employee.employeeId,
                                employeeData
                                );

                                alert("Employee updated successfully");

                } else {

                                // ADD
                                data = await addEmployee(employeeData);

                                alert("Employee added successfully");
                }

                    console.log(data);

                    onSaved();
                    onClose();

        } catch (error) {

                console.log(error);

                alert( employeeToEdit ? "Failed to update employee" : "Failed to add employee" );
        }
    };

            const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;

                setEmployee({
                            ...employee,
                        [name]: value
                });
            };

    return (

        <div style={{ border: "1px solid gray", padding: "20px", marginBottom: "20px" }}     >

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                {/* <h3>Add Employee</h3> */}
                <h3> {employeeToEdit ? "Edit Employee" : "Add Employee"} </h3>

                <button type="button" onClick={onClose} style={{ cursor: "pointer", padding: "5px 10px"}}                >
                    ✖
                </button>
            </div>

            <hr />

            {/* Employee Name */}
            <div style={{ marginBottom: "15px" }}>
                
                 <label>Employee Name</label>
                <br />

                <input type="text" name="employeeName" value={employee.employeeName} onChange={handleChange} />
                <br />

                {errors.employeeName && (<span style={{ color: "red" }}>{errors.employeeName}</span>)}
            </div>


            {/* Email */}
            <div style={{ marginBottom: "15px" }}>
                <label>Email</label>
                <br />

                <input type="email" name="email" value={employee.email} onChange={handleChange} />
                <br/>
                {errors.email && (<span style={{ color: "red" }}> {errors.email}</span>
)}
            </div>

            {/* Department */}
            <div style={{ marginBottom: "15px" }}>
                <label>Department</label>
                <br />

                <input type="text" name="department" value={employee.department} onChange={handleChange}/>
                <br/>
                {errors.department && (<span style={{ color: "red" }}>{errors.department}</span>)}
            </div>

            {/* Salary */}
            <div style={{ marginBottom: "15px" }}>
                <label>Salary</label>
                <br />

                <input type="number" name="salary" value={employee.salary} onChange={handleChange} />
                <br/>
                {errors.salary && (<span style={{ color: "red" }}>{errors.salary}</span>)}
            </div>

            {/* Active */}
            <div style={{ marginBottom: "15px" }}>
                <label>
                    <input type="checkbox" name="isActive" checked={employee.isActive}
                           onChange={(e) =>
                            setEmployee({
                                ...employee,
                                isActive: e.target.checked
                            })
                        }
                    />

                    {" "}Active
                </label>
            </div>

            {/* Buttons */}
            <button type="button" onClick={handleSubmit} >  Save  </button>

            {" "}

            <button type="button" onClick={onClose} > Cancel </button>

            {/* Temporary debugging */}
            <hr />

            <pre>
                {JSON.stringify(employee, null, 2)}
            </pre>

        </div>
    );
}

