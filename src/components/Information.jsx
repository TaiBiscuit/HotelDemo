import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Information = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        {
            language ?
            <>
            </>
            :
            <>
            </>
        }
        </>
    )
}