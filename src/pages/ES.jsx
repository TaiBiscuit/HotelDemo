import React from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience, Information } from '../components';

export const ES = () => {
    
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