import type { LoginRequest } from "../interfaces/LoginRequest";

export const authService = {

    login: async (request: LoginRequest) => {

        console.log("Calling API");

        console.log(request);

    }

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