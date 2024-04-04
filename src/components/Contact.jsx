import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Contact = () => {
    const {language} = useContext(LanguageContext);


    return (
        <>
        <div className="contact-container">
        <div id="contact-container" className="separador"></div>
            <div className="contact-form-container">
            {
                language ?
                <>
                <h1 className="contact-h1">• Keep in Touch •</h1>
                <div className="underline"></div>
                <div className="icon-wrap"></div>
                <form action="" className="contact-form">
                    <div className="name">
                        <label htmlFor="name" className="contact-label">My name is</label>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="email">
                    <label htmlFor="email" className="contact-label">My email is</label>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="stay">
                    <label htmlFor="stay" className="contact-label">Im staying from / to </label>
                     <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className="contact-input" />
                    </div>
                    <div className="comment">
                    <label htmlFor="comment" className="contact-label">Extra comments</label>
                        <textarea name="" id="" cols="30" rows="5" className="contact-textarea"></textarea>
                    </div>
                    <div className="submit">
                    <input type="submit" value="Send Message" id="form-btn" className="form-btn" />
                    </div>
                </form>
                </>
                :
                <>
                <h1 className="contact-h1">• Contactanos •</h1>
                <div className="underline"></div>
                <div className="icon-wrap"></div>
                <form action="" className="contact-form">
                    <div className="name">
                        <label htmlFor="name" className="contact-label">Mi nombre es</label>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="email">
                    <label htmlFor="email" className="contact-label">Mi email es</label>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="stays">
                    <div className="stay-1">
                    <label htmlFor="stay" className="contact-label">Me quedo desde </label>
                        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className="contact-input" />
                    </div>
                    <div className="stay-2">
                    <label htmlFor="stay" className="contact-label">Me quedo hasta </label>
                        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className="contact-input" />
                    </div>
                    </div>

                    <div className="comment">
                    <label htmlFor="comment" className="contact-label">Comentarios extra</label>
                        <textarea name="" id="" cols="30" rows="5" className="contact-textarea"></textarea>
                    </div>
                    <div className="submit">
                    <input type="submit" value="Enviar mensaje" id="form-btn" className="form-btn" />
                    </div>
                </form>
                </>
            }
            </div>
        </div>
        </>
    )
}