import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Experience = () => {
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