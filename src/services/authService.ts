import api from "./api";
import type { LoginRequest, LoginResponse } from "../interfaces/auth";

export const login = async (
    request: LoginRequest
): Promise<LoginResponse> => {

    const response = await api.post<LoginResponse>(
        "/Auth/login",
        request
    );

    return response.data;
};

//  Why Create Services?  
//  Impossible to maintain.
//  Instead
//  Login Component
//       ↓
//  authService
//       ↓
//  Axios
//       ↓
//  API
//  Each file has one responsibility.


// What is Promise  : "This function will eventually return a LoginResponse."
// Our backend
// POST /api/Auth/login
// takes time.
// React
//   ↓
// Internet
//   ↓
// Backend
//   ↓
// SQL Server
//   ↓
// Response
// This may take
// 50ms
// 100ms
// 500ms
// React cannot wait.

// So JavaScript immediately returns a Promise.
// Think of a Promise as:
// "I don't have the result yet, but I promise I'll give it to you later."


// Why We Created authService.ts

// Imagine you have 20 components that need authentication.
// Without a service layer, each component would contain Axios calls:

// Login.tsx
// axios.post(...)

// Register.tsx
// axios.post(...)

// ForgotPassword.tsx
// axios.post(...)

// Profile.tsx
// axios.get(...)

// If the API URL changes or you need to add headers, you'd have to update every component.

// With a service layer:

// Login.tsx
//       │
//       ▼
// authService.ts
//       │
//       ▼
// api.ts
//       │
//       ▼
// Backend

// Only authService.ts and api.ts know how to communicate with the backend. Your React components focus only on the UI and user interactions.

// This separation of responsibilities is one of the key architectural patterns you'll see in professional React applications.

// authService.ts  :  Authentication API

// 

