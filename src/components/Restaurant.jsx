import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Restaurant = () => {
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