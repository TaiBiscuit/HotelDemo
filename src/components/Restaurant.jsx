import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Restaurant = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div id="restaurant-container" className="separador"></div>
        <div className="restaurant-container">
        {
            language ?
            <>
            <div className="restaurant-wrap">
                <div className="restaurant-txt">
                    <h1>Hotel Restaurant</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora explicabo voluptas quam? Tempore eum sunt temporibus provident, fugiat voluptas blanditiis aspernatur beatae laudantium rem. Nemo accusamus optio qui cumque!
                    Optio quae laborum voluptatibus nisi ipsum corrupti! Repudiandae vitae itaque quasi cumque possimus aspernatur, provident inventore unde ad labore hic vel quia 
                    </p>
                    <button className="form-btn">Check it out</button>
                </div>
                <img src="https://i.ibb.co/jV3BNZs/restaurant1.jpg" alt="" className="restaurant-img" />
            </div>
            </>
            :
            <>
            <div className="restaurant-wrap">
                <div className="restaurant-txt">
                    <h1>Restaurante del Hotel</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora explicabo voluptas quam? Tempore eum sunt temporibus provident, fugiat voluptas blanditiis aspernatur beatae laudantium rem. Nemo accusamus optio qui cumque!
                    Optio quae laborum voluptatibus nisi ipsum corrupti! Repudiandae vitae itaque quasi cumque possimus aspernatur, provident inventore unde ad labore hic vel quia 
                    </p>
                    <button className="form-btn">Visitá la página</button>
                </div>
                <img src="https://i.ibb.co/jV3BNZs/restaurant1.jpg" alt="" className="restaurant-img" />
            </div>
            </>
        }
        </div>
        </>
    )
}