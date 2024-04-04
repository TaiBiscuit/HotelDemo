import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Gallery = () => {
    const {language} = useContext(LanguageContext);
    const imgCar = document.querySelectorAll('.galimg');
    let slideIndex = 1;

    imgCar.forEach(img => {
        img.addEventListener('click', (e) => {
        })
    });

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    } 


    useEffect(()=>{
        showSlides(slideIndex);
    }, [])

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
            <h1>• ¿Quieres ver más? •</h1>
            </>
        }
        <div className="gallery-wrap-mobile">
            <div className="gallery-carrousel">
                <div className="slide fade"><div className="gallery-img-container galimgmob"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img-m" /></div></div>
                <div className="slide fade"><div className="gallery-img-container2 galimgmob"><img src="https://i.ibb.co/NTyR4yF/hotel7.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container3 galimgmob"><img src="https://i.ibb.co/8Yw8shC/hotel8.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container5 galimgmob"><img src="https://i.ibb.co/frXv7hk/hotel12.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container6 galimgmob"><img src="https://i.ibb.co/0sVhTLP/hotel13.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container7 galimgmob"><img src="https://i.ibb.co/N1cwVcR/hotel15.jpg" alt="" className="gallery-img-m" /></div></div>
                <div className="slide fade"><div className="gallery-img-container8 galimgmob"><img src="https://i.ibb.co/tQ0v8kr/hotel1.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container9 galimgmob"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img-m"/></div></div>
                <a class="prev" onClick={(e) => plusSlides(-1)}>&#10094;</a>
                <a class="next" onClick={(e) => plusSlides(1)}>&#10095;</a>
                </div>
        </div>
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