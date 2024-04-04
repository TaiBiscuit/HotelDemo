import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Home = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="home-container" id="home-container">
            <img src="https://i.ibb.co/6gWtQX3/hotel-front.jpg" alt="" className="home-img animate__animated animate__fadeIn hero-title"/>
            <div className="home-header">
            {
            language ?
            <>
            <h1 className="animate__animated animate__fadeIn hero-title">Welcome</h1>
            </>
            :
            <>
            <h1 className="animate__animated animate__fadeIn hero-title">Bienvenidos</h1>
            </>
            }
            </div>
        </div>
        </>
    )
}