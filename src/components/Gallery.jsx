import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Gallery = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="gallery-container">
        {
            language ?
            <>
            <h1>• Want to see more? •</h1>
            <div className="gallery-wrap">
                <div class="gallery-img-container"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img" /></div>
                <div class="gallery-img-container2"><img src="https://i.ibb.co/NTyR4yF/hotel7.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container3"><img src="https://i.ibb.co/8Yw8shC/hotel8.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container4"><img src="https://i.ibb.co/c82Q6S3/hotel9.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container5"><img src="https://i.ibb.co/frXv7hk/hotel12.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container6"><img src="https://i.ibb.co/0sVhTLP/hotel13.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container7"><img src="https://i.ibb.co/N1cwVcR/hotel15.jpg" alt="" className="gallery-img" /></div>
                <div class="gallery-img-container8"><img src="https://i.ibb.co/tQ0v8kr/hotel1.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container9"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img"/></div>
            </div>
            </>
            :
            <>
            <h1>• Want to see more? •</h1>
            <div className="gallery-wrap">
                <div class="gallery-img-container"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img" /></div>
                <div class="gallery-img-container2"><img src="https://i.ibb.co/NTyR4yF/hotel7.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container3"><img src="https://i.ibb.co/8Yw8shC/hotel8.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container4"><img src="https://i.ibb.co/c82Q6S3/hotel9.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container5"><img src="https://i.ibb.co/frXv7hk/hotel12.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container6"><img src="https://i.ibb.co/0sVhTLP/hotel13.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container7"><img src="https://i.ibb.co/N1cwVcR/hotel15.jpg" alt="" className="gallery-img" /></div>
                <div class="gallery-img-container8"><img src="https://i.ibb.co/tQ0v8kr/hotel1.jpg" alt="" className="gallery-img"/></div>
                <div class="gallery-img-container9"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img"/></div>
            </div>
            </>
        }
        </div>
        </>
    )
}