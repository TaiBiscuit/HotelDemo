import { useState, useEffect } from 'react'
import { MainRoutes } from './routes/MainRoutes';
import { LanguageProvider } from './context/LanguageContext';
import './App.css'
import { LoadingProvider } from './context/LoadingContext';

function App() {
  
  return (
    <>
    <LoadingProvider>
      <LanguageProvider>
        <MainRoutes />
      </LanguageProvider>
    </LoadingProvider>
    </>
  )
}

export default App
