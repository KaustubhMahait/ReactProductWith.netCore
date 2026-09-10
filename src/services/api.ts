import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7171/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor 
api.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("accessToken");

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    },

    (error) => {

        return Promise.reject(error);

    }

);

export default api;


// Without api.ts

//    Login.tsx
//         │
//         ▼
//  axios.post("https://localhost:7171/api/Auth/login")

//    Employee.tsx
//         │
//         ▼
//   axios.get("https://localhost:7171/api/Employee")

//   Department.tsx
//         │
//         ▼
//  axios.get("https://localhost:7171/api/Department")

// After creating api.ts

//   Login.tsx
//       │
//       ▼
//  api.post("/Auth/login")

//   Employee.tsx
//       │
//       ▼
//  api.get("/Employee")

//   Department.tsx
//       │
//       ▼
//  api.get("/Department")


// api.ts : Axios Configuration

// What is an Interceptor?

// Think of it as a security guard standing in front of Axios.

// Without an interceptor:

// Employee.tsx

//     ↓

// Axios

//     ↓

// API

// With an interceptor:

// Employee.tsx

//    ↓

// Axios

//    ↓

// Interceptor

//    ↓

// Read Token

//    ↓

// Attach Token

//    ↓

// API

// Every request passes through the interceptor first.

// Why is this better?

// Imagine later you have these APIs:

// GET /Employee

// GET /Department

// GET /Role

// GET /Project

// GET /Task

// POST /Employee

// PUT /Employee

// DELETE /Employee

// Without an interceptor, every service would need:

// headers: {
//     Authorization: `Bearer ${token}`
// }

// That's repetitive and easy to forget.

// With an interceptor:

// Employee API

//    ↓

// Department API

//    ↓

// Project API

//    ↓

// Task API

//    ↓ 

// Axios Interceptor

//    ↓

// Authorization Header Added Automatically

// Write it once, use it everywhere.