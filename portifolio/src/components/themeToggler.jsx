import '../App.css';
import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function ThemeToggler() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }


    return (
        <button
            className="toggle-theme flex flex-row gap-4 w-10px-3 py-1 px-3 border border-zinc-700 rounded-md transition-colors language-btn absolute top-6 h-10 left-8 z-50  cursor-pointer items-center justify-center"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? 'dark' : 'light'}
            <i className={`bi bi-${theme === 'dark' ? 'moon-stars' : 'brightness-high'}-fill`}></i>
        </button>
    )
}
