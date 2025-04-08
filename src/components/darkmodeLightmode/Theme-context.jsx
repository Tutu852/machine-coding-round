//this context use for state management

import { createContext,useContext, useEffect, useState } from "react";

const ThemeConext = createContext();

//custom hook i am creating
//what ever ThemContext i am creating here it is accessable with all the site or project just by importing this useTheme custom hool
export const useTheme = () =>{
    return useContext(ThemeConext);

}

// i can wrap all the content in this themeprovider
export const ThemeProvider = ({children}) =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () =>{
        //this mean what ever the previous state is there move to oposite here setIsDarkMode is true so it is false after the prevStae => !prevstate
        setIsDarkMode((prevState)=> !prevState);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[isDarkMode])

    return (
        //i need to wrap whole 
        <ThemeConext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeConext.Provider>
    )
}