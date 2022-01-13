import { useState, createContext } from "react";
import Content from "./content";
import '../App.css'
export const ThemeContext = createContext();
function UseContext() {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Content />
                <button onClick={toggleTheme}>Toggel Theme</button>
            </ThemeContext.Provider>
        </>
    )
}
export default UseContext;