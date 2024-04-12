import React, { useContext } from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience, Information } from '../components';
import { LoadingContext } from "../context/LoadingContext";

export const Default = () => {
  const {loading} = useContext(LoadingContext);

  return (
    <>
      {loading &&
      <div className="loading-container">
        <div className="loader"></div>
      </div>}
      <NavBar/> 
      <Home/>
      <Information />
      <Experience/>
      <Restaurant/>
      <Gallery/>
      <Contact/>
    </>
  )
}