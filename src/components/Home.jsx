import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Home = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="home-container" id="home-container">
            <div className="home-header">
            {
            language ?
            <>
            <h1>Welcome to X Hotel</h1>
            </>
            :
            <>
            <h1>Bienvenido al Hotel X</h1>
            </>
            }
            </div>
            <div className="home-content">
            {
            language ?
            <>
            <h1>Inmerse yourself in X</h1>
            </>
            :
            <>
            <h1>Adentrese en X</h1>
            </>
            }
            </div>
        </div>
        </>
    )
}