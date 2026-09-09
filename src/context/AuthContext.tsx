import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
    isAuthenticated: boolean;

    accessToken: string | null;

    refreshToken: string | null;

    login: (
        accessToken: string,
        refreshToken: string
    ) => void;

    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Why <AuthContextType | undefined>?

// means: This context will eventually contain an AuthContextType.

// But initially...
// Application Starts
//      ↓
// Context Created
//      ↓
// Provider hasn't started yet
//      ↓
// No Value Exists
// So the value is undefined

// Why not write:
// createContext<AuthContextType>(...)
// Because React forces us to provide an initial value.
// We don't have one yet.
// The Provider hasn't run.
// So we temporarily use
// undefined

// AuthContext is not the authentication data.
// It's not the logged-in user.
// It's not Local Storage.
// It's simply a shared container that React components can use to exchange data.
// The data comes later, from the Provider.

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {


const token = localStorage.getItem("accessToken");

   const [accessToken, setAccessToken] = useState<string | null>(token);

    const [refreshToken, setRefreshToken] = useState<string | null>(
        localStorage.getItem("refreshToken")
    );

    const isAuthenticated = accessToken !== null;
    // Because isAuthenticated is derived data. If accessToken == null then isAuthenticated = false If accessToken = "eyJ..." then isAuthenticated = true

        const login = (
            accessToken: string,
            refreshToken: string
        ) => {

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
            };

        const logout = () => {

                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                setAccessToken(null);
                setRefreshToken(null);
            };

            return (
    <AuthContext.Provider
        value={{
            isAuthenticated,
            accessToken,
            refreshToken,
            login,
            logout
        }}
    >
        {children}
    </AuthContext.Provider>
);

}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}

/*
===============================================================================
                            AUTH CONTEXT SUMMARY
===============================================================================

Purpose:
--------
AuthContext is the central authentication manager of the React application.
Instead of every component reading Local Storage or passing authentication
information through props, the entire application shares one authentication state.

Flow:
-----
React App
    ↓
AuthProvider
    ↓
AuthContext
    ↓
Dashboard / Employee / Profile / Navbar / Any Component

What AuthContext Stores:
------------------------
• isAuthenticated   → Indicates whether the user is logged in.
• accessToken       → JWT Access Token.
• refreshToken      → Refresh Token.
• login()           → Saves tokens and updates React state.
• logout()          → Clears tokens and updates React state.

Why Context API?
----------------
Without Context:
Every component would execute:

    localStorage.getItem("accessToken")

Problems:
• Duplicate code
• Hard to maintain
• Prop Drilling
• Every component knows about Local Storage

With Context:
Components simply use:

    const auth = useAuth();

React automatically provides authentication data.

Authentication Flow:
--------------------
User Login
    ↓
Backend returns JWT + Refresh Token
    ↓
AuthContext.login()
    ↓
1. Save tokens to Local Storage
2. Update React State
    ↓
Entire application knows user is logged in

Logout Flow:
------------
Logout
    ↓
AuthContext.logout()
    ↓
1. Remove Local Storage
2. Clear React State
    ↓
Entire application knows user is logged out

Why Read Local Storage in useState()?
-------------------------------------
If the user refreshes the browser (F5),
React is recreated.

Instead of:

    useState(null)

we use:

    useState(localStorage.getItem("accessToken"))

This restores authentication from Local Storage and keeps the user logged in.

Why isAuthenticated is NOT useState?
------------------------------------
isAuthenticated is derived from accessToken.

accessToken == null
        ↓
isAuthenticated = false

accessToken != null
        ↓
isAuthenticated = true

Keeping only one source of truth avoids inconsistent state.

Major Parts of This File:
-------------------------
1. Imports
   Import React hooks and ReactNode.

2. AuthContextType
   Defines what authentication data and functions are shared.

3. createContext()
   Creates the shared authentication container.

4. AuthProvider
   Holds authentication state and wraps the entire application.

5. login()
   Saves tokens to Local Storage and updates React state.

6. logout()
   Removes tokens from Local Storage and clears React state.

7. Provider
   Shares authentication state with every child component.

8. useAuth()
   Custom hook that allows components to access AuthContext easily.

Usage:
------
Wrap App:

    <AuthProvider>
        <App />
    </AuthProvider>

Access Anywhere:

    const auth = useAuth();

Examples:

    auth.isAuthenticated
    auth.accessToken
    auth.login(...)
    auth.logout()

===============================================================================
*/

