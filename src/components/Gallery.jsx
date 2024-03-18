import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Gallery = () => {
    const {language} = useContext(LanguageContext);
    const imgCar = document.querySelectorAll('.galimg');

    imgCar.forEach(img => {
        img.addEventListener('click', (e) => {
            console.log(e)
        })
    });

    return (
        <>
        <div className="gallery-container">
        <div id="gallery-container" className="separador"></div>
        {
            language ?
            <>
            <h1>• Want to see more? •</h1>
            </>
            :
            <>
            <h1>• Queres ver mas? •</h1>
            </>
        }
            <div className="gallery-wrap">
                <div className="gallery-img-container galimg"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img" /></div>
                <div className="gallery-img-container2 galimg"><img src="https://i.ibb.co/NTyR4yF/hotel7.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container3 galimg"><img src="https://i.ibb.co/8Yw8shC/hotel8.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container4 galimg"><img src="https://i.ibb.co/c82Q6S3/hotel9.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container5 galimg"><img src="https://i.ibb.co/frXv7hk/hotel12.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container6 galimg"><img src="https://i.ibb.co/0sVhTLP/hotel13.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container7 galimg"><img src="https://i.ibb.co/N1cwVcR/hotel15.jpg" alt="" className="gallery-img" /></div>
                <div className="gallery-img-container8 galimg"><img src="https://i.ibb.co/tQ0v8kr/hotel1.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container9 galimg"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img"/></div>
            </div>
        </div>
        </>
    )
}