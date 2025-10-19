import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Tap from './pages/Tap'
import Services from './pages/Services'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import BookSession from './pages/BookSession'
import ScrollPage from './components/ScrollPage'

const App: React.FC = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh',
      /* Hide scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      <Routes>
        {/* Main home page */}
        <Route path="/" element={<Home />} />
        
        {/* Fallback individual page routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/tap-method" element={
          <Box>
            <Header />
            <Tap />
          </Box>
        } />
        <Route path="/about-us" element={
          <Box>
            <Header />
            <AboutUs />
          </Box>
        } />
        <Route path="/services" element={
          <Box>
            <Header />
            <Services />
          </Box>
        } />
        <Route path="/insights" element={
          <Box>
            <Header />
            <Insights />
          </Box>
        } />
        <Route path="/contact" element={
          <Box>
            <Header />
            <Contact />
          </Box>
        } />
        <Route path="/book-session" element={
          <Box>
            <Header />
            <BookSession />
          </Box>
        } />
        
        {/* Scroll page (optional) */}
        <Route path="/scroll" element={<ScrollPage />} />
      </Routes>
    </Box>
  )
}

export default App