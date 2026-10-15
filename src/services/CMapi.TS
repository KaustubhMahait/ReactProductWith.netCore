import axios from 'axios';

const CMapi = axios.create({
    baseURL: "https://CMSPRajAbhiyanAPI.mahaitgov.in/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add the production JWT to production API requests only.
CMapi.interceptors.request.use(
    (config) => {
        const isLoginRequest = config.url === "/User/Login";

        if (!isLoginRequest) {
            const token = localStorage.getItem("productionToken");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default CMapi;

