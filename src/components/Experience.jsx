import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Experience = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="experiences-container">
        <div id="experiences-container" className="separador"></div>
        {
            language ?
            <>
            <h1>• Check our best Suites •</h1>
            <div className="underline"></div>
            <div className="suites-container">
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/SPMzcxM/hotel10.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Super suite</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/b3SxjPP/hotel5.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Suit Corner</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/MS6c9RM/hotel6.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Best suit</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
            </div>
            </>
            :
            <>
            <h1>• Vea nuestras mejores suites •</h1>
            <div className="underline"></div>
            <div className="suites-container">
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/SPMzcxM/hotel10.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Super suite</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/b3SxjPP/hotel5.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Suit Corner</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-container">
                        <img src="https://i.ibb.co/MS6c9RM/hotel6.jpg" alt="" className="card-img" />
                    </div>
                    <div className="card-btm">
                        <h1 className="card-title">Best suit</h1>
                        <div className="underline"></div>
                        <p className="card-txt">Decoradas con un distinguido estilo inglés, tanto la suite Senator de 160 metros cuadrados como la suite Governor de 173 metros cuadrados, ofrecen extraordinarias vistas de Buenos Aires desde sus terrazas privadas.</p>
                    </div>
                </div>
            </div>
            </>
        }
        </div>
        </>
    )
}