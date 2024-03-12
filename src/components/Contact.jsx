import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Contact = () => {
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