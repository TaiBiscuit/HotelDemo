import { useState, useEffect } from 'react'
import { MainRoutes } from './routes/MainRoutes';
import { LanguageProvider } from './context/LanguageContext';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[setLoading == true])

  return (
    <>
    {
      loading ? 
      <>
      <div className="loading-container">
        <div class="loader"></div>
      </div>
      </>
      :
      <>
      <LanguageProvider>
        <MainRoutes />
      </LanguageProvider>
      </>
    }
    </>
  )
}

export default App
