import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Information = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="separador"></div>
        <div className="info-container">
        {
            language ?
            <>
            <div className="info-wrap">
                <div className="info-txt">
                    <h1>Hotel Title</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora explicabo voluptas quam? Tempore eum sunt temporibus provident, fugiat voluptas blanditiis aspernatur beatae laudantium rem. Nemo accusamus optio qui cumque!
                    Optio quae laborum voluptatibus nisi ipsum corrupti! Repudiandae vitae itaque quasi cumque possimus aspernatur, provident inventore unde ad labore hic vel quia 
                    </p>
                    <a href="contact-container"><button className="form-btn-2">Reserve now</button></a>
                </div>
                <img src="https://i.postimg.cc/c4FWZ6sc/hotel16-re.jpg" alt="" className="info-img animate__animated animate__fadeInLeft" />
            </div>
            </>
            :
            <>
            <div className="info-wrap">
                <div className="info-txt">
                    <h1>Titulo del Hotel</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora explicabo voluptas quam? Tempore eum sunt temporibus provident, fugiat voluptas blanditiis aspernatur beatae laudantium rem. Nemo accusamus optio qui cumque!
                    Optio quae laborum voluptatibus nisi ipsum corrupti! Repudiandae vitae itaque quasi cumque possimus aspernatur, provident inventore unde ad labore hic vel quia 
                    </p>
                    <a href="#contact-container"><button className="form-btn-2">Reserve ahora</button></a>
                </div>
                <img src="https://i.ibb.co/bJdrcT7/hotel16.jpg" alt="" className="info-img animate__animated animate__fadeInLeft" />
            </div>  
            </>
        }
        </div>
        </>
    )
}