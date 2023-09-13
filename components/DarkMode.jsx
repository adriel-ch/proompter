'use client'

import { useEffect, useState } from "react";

const DarkMode = () => {
    // function useDarkMode() {
    //     const [theme, setTheme] = useState(
    //         typeof window !== "undefined" ? localStorage.theme : "dark"
    //     );
    //     const colorTheme = theme === "dark" ? "light" : "dark";
    //     console.log("theme is", theme)
    //     console.log("colorTheme is",colorTheme)
      
    //     useEffect(() => {
    //         const root = window.document.documentElement;
      
    //         root.classList.remove(colorTheme);
    //         root.classList.add(theme);
      
    //         if (typeof window !== "undefined") {
    //             localStorage.setItem("theme", theme);
    //         }
            
    //     }, [theme]);
    //     return [colorTheme, setTheme];
    // }

    // const [colorTheme, setTheme] = useDarkMode()
    
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.theme : "dark"
    );
    const prevColorTheme = theme === "dark" ? "light" : "dark";
    
    useEffect(() => {
        const root = window.document.documentElement;
    
        root.classList.remove(prevColorTheme);
        root.classList.add(theme);
    
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
        
        return
    }, [theme]);

    return (
        <div className=''>
            {
              prevColorTheme === 'light' ? (
                <svg
                  onClick={() => setTheme("light")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 rounded-full border border-gray-300 text-gray-300 cursor-pointer hover:fill-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="lightmode"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setTheme("dark")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 rounded border border-black text-black cursor-pointer hover:fill-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="darkmode"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )
            }
        </div>
    )
}

export default DarkMode