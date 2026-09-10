import api from "./api";
import type { Employee } from "../interfaces/Employee";

export const getEmployees = async (): Promise<Employee[]> => {

    const response = await api.get<Employee[]>("/Employee");

    return response.data;

};

export const addEmployee = async (employee: {
    employeeName: string;
    email: string;
    department: string;
    salary: number;
    isActive: boolean;
}) => {
    const response = await api.post("/Employee", employee);

    return response.data;
};

export const updateEmployee = async (
    employeeId: number,
    employee: {
        employeeName: string;
        email: string;
        department: string;
        salary: number;
        isActive: boolean;
    }
) => {
    const response = await api.put(
        `/Employee/${employeeId}`,
        employee
    );

    return response.data;
};

export const deleteEmployee = async (
    employeeId: number
) => {
    const response = await api.delete(
        `/Employee/${employeeId}`
    );

    return response.data;
};
