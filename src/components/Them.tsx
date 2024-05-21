'use client'
import { ThemeContext } from '@/provide/ThemeProvide'
import React, { useContext } from 'react'

const Theme = () => {
    const { theme, toggletheme } = useContext(ThemeContext);
    return (
        <>
            <button
                onClick={toggletheme}
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Change theme
            </button>
            <h3>Theme đang dùng {theme}</h3>
        </>
    )
}

export default Theme
