import React,{createContext,useState,useContext} from 'react'

//1. create context
export const ThemeContext=createContext(null)

export function ThemeProvider({children}){
    const [theme, setTheme]=useState("light")
    const toggleTheme=()=>{
        setTheme(prev=>prev==='light'?'dark':'light')
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context=useContext(ThemeContext)
    if(!context){
        throw new Error('useTheme not available')
    }
    return context
}