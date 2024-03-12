import React from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience } from '../components';

export const Default = () => {
    
    return (
    <>
      <NavBar /> 
      <Home/>
      <Gallery/>
      <Restaurant/>
      <Experience/>
      <Contact/>
    </>
    )
}