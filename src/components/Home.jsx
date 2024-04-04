import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Home = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="home-container" id="home-container">
            <img src="https://i.ibb.co/6gWtQX3/hotel-front.jpg" alt="" className="home-img"/>
            <div className="home-header">
            {
            language ?
            <>
            <h1 className="animate__animated animate__fadeIn hero-title">Welcome to X Hotel</h1>
            </>
            :
            <>
            <h1 className="animate__animated animate__fadeIn hero-title">Bienvenido al Hotel X</h1>
            </>
            }
            </div>
        </div>
        </>
    )
}