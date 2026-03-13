import { createContext, useState } from "react"

const ThemeContext =  createContext(null)

const ThemeProvider =({children}) =>{
    const [theme, setTheme]= useState ('light')
    const toggle = () =>  theme === 'light' ? setTheme('dark') : setTheme('light')
    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}


export {ThemeContext, ThemeProvider}