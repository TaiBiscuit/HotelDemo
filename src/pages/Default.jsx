import React from 'react';
import { Contact, Home, NavBar, Gallery, Restaurant, Experience, Information } from '../components';

export const Default = () => {

    return (
    <>
      <NavBar /> 
      <Home/>
      <Information />
      <Experience/>
      <Restaurant/>
      <Gallery/>
      <Contact/>
    </>
    )
}