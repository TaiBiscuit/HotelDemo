import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { PiNavigationArrowFill } from 'react-icons/pi';
import { Link, useNavigate } from "react-router-dom";

export const NavBar = (props) => {
    const { language, setLanguage } = useContext(LanguageContext);
    const navigate = useNavigate();

    function handleLanguage(e){
        const goTo = e.target.outerText
        if(goTo == 'ES'){
            navigate('/es')
        } else{
            navigate('/')
        }
    }

    useEffect(()=>{
        if(props.lang == 'es'){
            setLanguage(true);
        } else {
            setLanguage(false);
        }
    },[]);


    return language ? (
        <>
        <Link/>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill color='white'/></button>
                <div className="links" id="links">
                <a href="#home-container" className="NavbarLi">Information</a>
                <a href="#experiences-container" className="NavbarLi">Experiences</a>
                <a href="#restaurant-container" className="NavbarLi">Restaurant</a>
                <a href="#gallery-container" className="NavbarLi">Gallery</a>
                <a href="#contact-container" className="NavbarLi">Contact</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button>}
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill color='white'/></button>
                <div className="links" id="links">
                <a href="#home-container" className="NavbarLi">Información</a>
                <a href="#experiences-container" className="NavbarLi">Experiencias</a>
                <a href="#restaurant-container" className="NavbarLi">Restaurante</a>
                <a href="#gallery-container" className="NavbarLi">Galería</a>
                <a href="#contact-container" className="NavbarLi">Contacto</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button>}
                </div>
            </div>
        </>
    )
};