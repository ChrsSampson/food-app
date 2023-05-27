import { createContext, useState } from "react";

// $primary: #bfbfbf;
// $secondary: #1c191f;
// $primary-button: #317280;
// $secondary-button: #44f7b0;
// $accent: #40536c;


export const ThemeContext = createContext();

export function ThemeProvider ({ children }) {

    const themeConfig = {
        light: {
            'background': '#bfbfbf',
            'text': '#1c191f',
            'primaryButton': '#317280',
            'secondaryButton': '#44f7b0',
            'accent': '#40536c'
        },
        dark: {
            'text': '#bfbfbf',
            'background': '#1c191f',
            'primaryButton': '#317280',
            'secondaryButton': '#44f7b0',
            'accent': '#40536c'
        }
    }


    const [theme, setTheme] = useState('light');
    const [isDark, setIsDark] = useState(false);
   
    const currentTheme = themeConfig[theme];

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIsDark(!isDark);
    }
    
    return (
        <ThemeContext.Provider value={{ 'theme': currentTheme, staticTheme: themeConfig['light'], toggleTheme, isDark }}>
        {children}
        </ThemeContext.Provider>
    )
};