import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { LoadingContext } from "../context/LoadingContext";

export const Gallery = () => {
    const {language} = useContext(LanguageContext);
    const {loading} = useContext(LoadingContext);
    const imgCar = document.querySelectorAll('.galimg');
    let slideIndex = 1;

    imgCar.forEach(img => {
        img.addEventListener('click', (e) => {
        })
    });

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
        <div className="gallery-container" style={{ display: loading ? 'none' : 'flex' }}>
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
                <div className="slide fade"><div className="gallery-img-container galimgmob"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img-m" /></div></div>
                <div className="slide fade"><div className="gallery-img-container2 galimgmob"><img src="https://i.postimg.cc/d0tsMXZL/hotel7.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container3 galimgmob"><img src="https://i.postimg.cc/5t7xf38p/hotel8.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container5 galimgmob"><img src="https://i.postimg.cc/BQ9JZt1W/hotel12.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container6 galimgmob"><img src="https://i.postimg.cc/htMn0rZg/hotel13.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container7 galimgmob"><img src="https://i.postimg.cc/JhnLYkSX/hotel15.jpg" alt="" className="gallery-img-m" /></div></div>
                <div className="slide fade"><div className="gallery-img-container8 galimgmob"><img src="https://i.postimg.cc/7PCLYpsz/hotel1.jpg" alt="" className="gallery-img-m"/></div></div>
                <div className="slide fade"><div className="gallery-img-container9 galimgmob"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img-m"/></div></div>
                <a className="prev" onClick={(e) => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={(e) => plusSlides(1)}>&#10095;</a>
                </div>
        </div>
            <div className="gallery-wrap">
                <div className="gallery-img-container galimg"><img src="https://i.ibb.co/3CY1QVB/hotel3.jpg" alt="" className="gallery-img" /></div>
                <div className="gallery-img-container2 galimg"><img src="https://i.postimg.cc/d0tsMXZL/hotel7.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container3 galimg"><img src="https://i.postimg.cc/5t7xf38p/hotel8.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container4 galimg"><img src="https://i.postimg.cc/qqn0XHSZ/hotel9.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container5 galimg"><img src="https://i.postimg.cc/BQ9JZt1W/hotel12.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container6 galimg"><img src="https://i.postimg.cc/htMn0rZg/hotel13.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container7 galimg"><img src="https://i.postimg.cc/JhnLYkSX/hotel15.jpg" alt="" className="gallery-img" /></div>
                <div className="gallery-img-container8 galimg"><img src="https://i.postimg.cc/7PCLYpsz/hotel1.jpg" alt="" className="gallery-img"/></div>
                <div className="gallery-img-container9 galimg"><img src="https://i.ibb.co/yBmzbSr/hotel2.jpg" alt="" className="gallery-img"/></div>
            </div>
        </div>
        </>
    )
}