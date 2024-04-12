import React, { useContext } from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience, Information } from '../components';
import { LoadingContext } from "../context/LoadingContext";

export const ES = () => {
  const {loading} = useContext(LoadingContext); 

  return (
    <>
      {loading &&
      <div className="loading-container">
        <div class="loader"></div>
      </div>}
      <NavBar lang={'es'} /> 
      <Home/>
      <Information />
      <Experience/>
      <Restaurant/>
      <Gallery/>
      <Contact/>
    </>
    )
}