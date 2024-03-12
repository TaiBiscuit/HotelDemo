import { useState, useEffect } from 'react'
import { MainRoutes } from './routes/MainRoutes';
import { LanguageProvider } from './context/LanguageContext';
import './App.css'

function App() {


  return (
    <>
      <LanguageProvider>
        <MainRoutes />
      </LanguageProvider>
    </>
  )
}

export default App
