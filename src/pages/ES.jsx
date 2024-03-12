import React from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience } from '../components';

export const ES = () => {
    
    return (
    <>
      <NavBar lang={'es'} /> 
      <Home/>
      <Gallery/>
      <Restaurant/>
      <Experience/>
      <Contact/>
    </>
    )
}