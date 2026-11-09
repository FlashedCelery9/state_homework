import {type ReactNode, useCallback, useMemo, useState} from "react";
import {AuthContext, type Student} from "./AuthContext.ts";

interface Props {
    children: ReactNode;
}
export function AuthProvider({ children }: Props) {
    const [student, setStudent] = useState<Student | null>(null);

   const login = useCallback((student: Student) => setStudent(student), []);
   const logout = useCallback(() => setStudent(null), []);
   const contextValue = useMemo(() => ({
       student,
       isAuthenticated: !!student,
       login,
       logout,
   }), [student, login, logout]);

   return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}