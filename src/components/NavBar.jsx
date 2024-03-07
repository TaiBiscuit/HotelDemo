import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "../../context/LanguageContext";

export const NavBar = () => {

    function handleLanguage(e){
        const goTo = e.target.outerText
        if(goTo == 'ES'){
            navigate('/es')
        } else{
            navigate('/')
        }
    }

    return language ? (
        <>
        <Link/>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn hide" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill/></button>
                <div className="links" id="links">
                <a href="#home" className="NavbarLi">Information</a>
                <a href="#galery" className="NavbarLi">Galery</a>
                <a href="#restaurant" className="NavbarLi">Restaurant</a>
                <a href="#experiences" className="NavbarLi">Experiences</a>
                <a href="#contact" className="NavbarLi">Contact</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn hide" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill/></button>
                <div className="links" id="links">
                <a href="#home" className="NavbarLi">Información</a>
                <a href="#galery" className="NavbarLi">Galería</a>
                <a href="#restaurant" className="NavbarLi">Restaurante</a>
                <a href="#experiences" className="NavbarLi">Experiencias</a>
                <a href="#contact" className="NavbarLi">Contacto</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
            </div>
        </>
    )
};