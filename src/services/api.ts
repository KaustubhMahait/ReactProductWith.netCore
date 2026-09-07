import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7171/api",
    headers: {
        "Content-Type": "application/json",
    },
});

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

