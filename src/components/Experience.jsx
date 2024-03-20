import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useInView } from "framer-motion"

export const Experience = () => {
    const {language} = useContext(LanguageContext);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    useEffect(() => {
    }, [isInView])
    return (
        <>
        <div className="experiences-container">
        <div id="experiences-container" className="separador"></div>
        {
            language ?
            <>
            <h1>• Check our Suites •</h1>
            <div className="underline"></div>
            <div className="suites-container" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
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
            <h1>• Vea las Suites •</h1>
            <div className="underline"></div>
            <div className="suites-container" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
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