export interface LoginRequest {
    userName: string;
    password: string;
}

export interface LoginResponse {
    isSuccess: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
    expiration: string;
    userName: string;
    role: string;
}

export interface RefreshRequest {
    refreshToken: string;
}

export interface RefreshResponse {
    isSuccess: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
    expiration: string;
}