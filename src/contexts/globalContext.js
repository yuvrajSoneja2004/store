import React, { useState } from "react";

// global context
const GlobalContext = React.createContext();


// global provider
export const GlobalProvider = ({ children }) => {

    // global theme
    const [bgTheme, setBgTheme] = useState({
        backgroundColor: '#ffffff',

    });
    const [fontTheme, setFontTheme] = useState({
        color: '#222222',

    });

    return <GlobalContext.Provider

        value={{ bgTheme, fontTheme }}

    >{children}</GlobalContext.Provider>
};


// custom hook to provide data among the whole app
export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}

