import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Tap from './pages/Tap'
import Services from './pages/Services'
import Insights from './pages/Insights'
import Results from './pages/Results'
import Contact from './pages/Contact'
import BookSession from './pages/BookSession'
import BusinessAssessment from './pages/BusinessAssessment'
import ScrollPage from './components/ScrollPage'

const AppContent: React.FC = () => {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'

  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      /* Hide scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      <Box sx={{ flex: 1 }}>
        <Routes>
          {/* Main home page */}
          <Route path="/" element={<Home />} />
          
          {/* Fallback individual page routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/tap-method" element={<Tap />} />
          <Route path="/about-us" element={
            <Box>
              <Header />
              <AboutUs />
            </Box>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/insights" element={
            <Box>
              <Header />
              <Insights />
            </Box>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-session" element={
            <Box>
              <Header />
              <BookSession />
            </Box>
          } />
          <Route path="/business-assessment" element={
            <Box>
              <Header />
              <BusinessAssessment />
            </Box>
          } />
          
          {/* Scroll page (optional) */}
          <Route path="/scroll" element={<ScrollPage />} />
        </Routes>
      </Box>
      
      {/* Footer appears on all pages except Contact (Contact has its own footer) */}
      {!isContactPage && <Footer />}
    </Box>
  )
}

const App: React.FC = () => {
  return <AppContent />
}

export default App