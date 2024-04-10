import React, { useContext, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

export const Home = () => {
    const {loading, setLoading} = useContext(LoadingContext);

    function handleImageLoad(){
        setLoading(false)
    }
    
    return (
        <>
        <div className="home-container" id="home-container">
            <img src="https://i.postimg.cc/RhfWyKrG/hotel-front-re.jpg" alt="" className="home-img animate__animated animate__fadeIn hero-title"
                onLoad={handleImageLoad}
                style={{ display: loading ? 'none' : 'block' }}
            />
            <div className="home-header">
            </div>
        </div>
        </>
    )
}