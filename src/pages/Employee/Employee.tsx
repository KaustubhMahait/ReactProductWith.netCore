import { useEffect, useState } from "react";
import type { Employee } from "../../interfaces/Employee";
import { getEmployees,deleteEmployee } from "../../services/employeeService";
import EmployeeForm from "./EmployeeForm";

export default function Employee() {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(""); // Add Search State
    const [showForm, setShowForm] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    

    const filteredEmployees = employees.filter(emp =>
            emp.employeeName.toLowerCase().includes(search.toLowerCase()) ||
            emp.email.toLowerCase().includes(search.toLowerCase())
    );

    // 1. Initial render You have: const [employees, setEmployees] = useState<Employee[]>([]);

    // Initially: employees = []

    // Then React renders the component.

    // This line executes: const filteredEmployees = employees.filter(emp =>

    // Since employees is empty: filteredEmployees = []  So the grid has no employees initially.

    // 2. useEffect runs After the initial render: useEffect(() => { loadEmployees(); calls: loadEmployees();

    // const data = await getEmployees(); calls your API.

    // 3. setEmployees(data) updates state Then: setEmployees(data); changes: employees = []  to: employees = [Rahul, Amit, Sneha, Priya, Rohit] 
    // This state update causes React to render the component again.

    // 4. Component renders again During this new render, this line executes again: const filteredEmployees = employees.filter(emp =>

    // Suppose: search = "";    Then effectively you're doing: "Rahul".includes("") " Amit".includes("") "Sneha".includes("") ...  
    // An empty string is considered a match for every string.

    // So when the user has not entered anything in Search, filteredEmployees contains the complete employee list.

    // useEffect tells React: "After rendering the component, execute this code when these conditions are met."
    useEffect(() => {

        loadEmployees();

    }, []);


    // We use async/await because API calls are asynchronous. We use await when we need the API response before executing the next line of code.
    // await does not mean: "Freeze the entire React application until the API responds."
    // It means: "Pause this particular async function here until the Promise finishes."
    // So while the API request is happening, the browser can continue handling other work.
    // Asynchronous = start something that may take time, and allow other work to continue while waiting.

        const loadEmployees = async () => {

                    try {

                            setLoading(true);

                            // Artificial delay (2 seconds)
                            await new Promise(resolve => setTimeout(resolve, 1000));

                            const data = await getEmployees();

                            setEmployees(data);

                        }
                        catch (error) {

                            console.log(error);

                        }
                        finally{

                                setLoading(false);

                        }

        };


        const handleEdit = (employee: Employee) => {
                    setSelectedEmployee(employee);
                    setShowForm(true);
        };


        const handleDelete = async (employee: Employee) => {

            const confirmed = window.confirm( `Are you sure you want to delete ${employee.employeeName}?` );

                    if (!confirmed) {
                         return;
                    }

            try {

                    await deleteEmployee(employee.employeeId);

                    alert("Employee deleted successfully");

                    await loadEmployees();

                    } catch (error) {

                        console.log(error);

                        alert("Failed to delete employee");
                    }
                };

                if (loading) {

                        return <h2>Loading Employees...</h2>;

                }
                  
    return (

        <div>

            <h2>Employee Management</h2>

            { showForm && <EmployeeForm 
                                        key={selectedEmployee?.employeeId ?? "new"}
                                        employeeToEdit={selectedEmployee}
                                        onClose={() => setShowForm(false)} 
                                        onSaved={loadEmployees}/>}  
                {/* // Parent → Child Communication */}

            <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center", marginBottom: "20px"}}>

                    <input
                            type="text"
                            placeholder="Search Employee..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                    width: "250px",
                                    padding: "8px"
                                    }}
                        />

                    <button
                            onClick={() => {
                            setSelectedEmployee(null);
                            setShowForm(true);
                            }}>
                        + Add Employee
                    </button>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>

                <thead>

                    <tr>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>ID</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Name</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Email</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Department</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Salary</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Status</th>

                        <th style={{ border: "1px solid #ddd", padding: "10px", background: "#f5f5f5" }}>Action</th>               
                    </tr>

                </thead>

                <tbody>

                    {
                        employees.length === 0 ?

                        (

                            <tr>

                                <td colSpan={7} style={{ textAlign: "center" }}>

                                No Employees Found

                                </td>

                            </tr>

                        )

                    :

                        (

                            filteredEmployees.map(emp => (

                                <tr key={emp.employeeId}>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>{emp.employeeId}</td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>{emp.employeeName}</td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}  >{emp.email}</td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>{emp.department}</td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>{emp.salary}</td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px" }}  >

                                    {emp.isActive ? "Active" : "Inactive"}

                                    </td>

                                    <td style={{ border: "1px solid #ddd", padding: "10px"}}>

                                        <button onClick={() => handleEdit(emp)}>Edit</button>

                                        {" "}

                                        <button onClick={() => handleDelete(emp)}>Delete</button>

                                    </td>  

                                </tr>

                            ))

                        )

                        }

                </tbody>

            </table>

        </div>

    );
                
}