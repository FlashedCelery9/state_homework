import {createContext} from "react";

export interface Student {
    name: string;
    password: string;
}

interface AuthContextType {
    student: Student | null;
    isAuthenticated: boolean;
    login: (student: Student) => void;
    logout: () => void;
}
export const AuthContext = createContext<AuthContextType | null>(null)