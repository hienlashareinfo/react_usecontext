'use client'
import { ThemeContext } from '@/provide/ThemeProvide'
import React, { useContext } from 'react'

const PostPage = () => {
    const { theme, toggletheme } = useContext(ThemeContext);
    return (
        <div>
            {theme}
        </div>
    )
}

export default PostPage
