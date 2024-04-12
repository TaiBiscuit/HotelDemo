import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { PiNavigationArrowFill } from 'react-icons/pi';
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

export const NavBar = (props) => {
    const { language, setLanguage } = useContext(LanguageContext);
    const {loading} = useContext(LoadingContext);
    const [mobileView, setMobileView] = useState(false);
    const navigate = useNavigate();

    function handleLanguage(e){
        const goTo = e.target.outerText;
        if(goTo == 'ES'){
            navigate('/es');
        } else{
            navigate('/');
        }
    }

    function phoneViewHandler(e){
        e.preventDefault();
        if(mobileView == false){
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    }

    function retreatNav(e){
        e.preventDefault();
        setMobileView(true);
    }

    useEffect(()=>{
        if(props.lang == 'es'){
            setLanguage(false);
        } else {
            setLanguage(true);
        }
    },[]);


    return language ? (
        <>
        <Link/>
            <div className="NavbarUl" id="navBar" style={{ display: loading ? 'none' : 'flex' }}>
                <button className="nav-activate-btn" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill color='white'/></button>
                <div className="links" id="links">
                <a href="#home-container" className="NavbarLi">Information</a>
                <a href="#experiences-container" className="NavbarLi">Experiences</a>
                <a href="#restaurant-container" className="NavbarLi">Restaurant</a>
                <a href="#gallery-container" className="NavbarLi">Gallery</a>
                <a href="#contact-container" className="NavbarLi">Contact</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button>:<button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
                <div className="moblink" id="links" style={{ display: mobileView ? 'flex' : 'none' }}>
                    <a href="#home-container" className="NavbarLi" onClick={setMobileView}>Information</a>
                    <a href="#experiences-container" className="NavbarLi" onClick={(e) => retreatNav(e)}>Experiences</a>
                    <a href="#restaurant-container" className="NavbarLi" onClick={(e) => retreatNav(e)}>Restaurant</a>
                    <a href="#gallery-container" className="NavbarLi" onClick={(e) => retreatNav(e)}>Gallery</a>
                    <a href="#contact-container" className="NavbarLi" onClick={(e) => retreatNav(e)}>Contact</a>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="NavbarUl" id="navBar" style={{ display: loading ? 'none' : 'flex' }}>
                <button className="nav-activate-btn" id="nav-activate-btn" onClick={(e) => phoneViewHandler(e)}><PiNavigationArrowFill color='white'/></button>
                <div className="links" id="links">
                <a href="#home-container" className="NavbarLi">Información</a>
                <a href="#experiences-container" className="NavbarLi">Experiencias</a>
                <a href="#restaurant-container" className="NavbarLi">Restaurante</a>
                <a href="#gallery-container" className="NavbarLi">Galería</a>
                <a href="#contact-container" className="NavbarLi">Contacto</a>
                </div>
                <div className="btns">
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button>:<button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
                <div className="moblink" id="links" style={{ display: mobileView ? 'flex' : 'none' }}>
                    <a href="#home-container" className="NavbarLi">Información</a>
                    <a href="#experiences-container" className="NavbarLi">Experiencias</a>
                    <a href="#restaurant-container" className="NavbarLi">Restaurante</a>
                    <a href="#gallery-container" className="NavbarLi">Galería</a>
                    <a href="#contact-container" className="NavbarLi">Contacto</a>
                </div>
            </div>
        </>
    )
};