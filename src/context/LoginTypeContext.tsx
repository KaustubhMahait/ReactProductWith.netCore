
import { createContext, useContext, useState, type ReactNode } from "react";

export type LoginType = "employee" | "cm" | null;

interface LoginTypeContextType {
    loginType: LoginType;
    setLoginType: (type: LoginType) => void;
}

const LoginTypeContext = createContext<LoginTypeContextType | undefined>(
    undefined
);

export function LoginTypeProvider({ children }: { children: ReactNode }) {
    const [loginType, setLoginTypeState] = useState<LoginType>(() => {
        const savedType = localStorage.getItem("loginType");

        return savedType === "employee" || savedType === "cm"
            ? savedType
            : null;
    });

    const setLoginType = (type: LoginType) => {
        setLoginTypeState(type);

        if (type === null) {
            localStorage.removeItem("loginType");
        } else {
            localStorage.setItem("loginType", type);
        }
    };

    return (
        <LoginTypeContext.Provider value={{ loginType, setLoginType }}>
            {children}
        </LoginTypeContext.Provider>
    );
}

export function useLoginType() {
    const context = useContext(LoginTypeContext);

    if (!context) {
        throw new Error("useLoginType must be used inside LoginTypeProvider");
    }

    return context;
}
