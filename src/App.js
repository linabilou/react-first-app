import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom' 
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Message from './components/Message'
import About from './About'
import Donate from './components/Donate'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* 404 Page d'Erreur */}
        <Route path='*' element={  <ErrorPage /> } />
        
        {/* Page d'Accueil */}
        <Route path='/' element={  <Home /> } />

        {/* Page de Message */}
        <Route path='/message' element={  <Message /> } />

        {/* Page A propos */}
        <Route path='/about' element={  <About /> } />

        {/* Page Faire Des dons */}
        <Route path='/donate' element={  <Donate /> } />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
