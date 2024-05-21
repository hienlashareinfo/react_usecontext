'use client'
import React, { createContext, useState } from 'react'
export const ThemeContext = createContext({ theme: 'light', toggletheme: () => { } })
const ThemeProvide = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');
    const toggletheme = () => {

        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme: theme, toggletheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvide
