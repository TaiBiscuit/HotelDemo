import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Gallery = () => {
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