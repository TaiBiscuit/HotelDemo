import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(true);

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
        {children}
        </LanguageContext.Provider>
    );
};