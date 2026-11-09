import {type ReactNode, useCallback, useMemo, useState} from "react";
import {type Theme, ThemeContext} from "./ThemeContext.ts";

interface Props{
    children: ReactNode;
}

export function ThemeProvider({ children }: Props){
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = useCallback(() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }, [])

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}