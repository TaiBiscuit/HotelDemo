import React from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience, Information } from '../components';

export const ES = () => {
    
    return (
    <>
      <NavBar lang={'es'} /> 
      <Home/>
      <Information />
      <Gallery/>
      <Restaurant/>
      <Experience/>
      <Contact/>
    </>
    )
}