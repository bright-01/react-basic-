import {createContext, useState} from "react";


export const DarkModeContext2 = createContext();

export function DarkModeProvider2 ({children}){

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);


    return (
        <DarkModeContext2.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext2.Provider>
    )
}