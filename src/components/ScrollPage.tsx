import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Tap from '../pages/Tap'

interface ScrollPageProps {
  children?: React.ReactNode
}

const ScrollPage: React.FC<ScrollPageProps> = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tap-method', 'about-us', 'services', 'insights', 'contact', 'book-session']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box sx={{ 
      position: 'relative',
      /* Hide scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      <Header activeSection={activeSection} />
      
      {/* Home Section */}
      <Box 
        id="home" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start'
        }}
      >
        <Home />
      </Box>

      {/* TAP Method Section */}
      <Box 
        id="tap-method" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start'
        }}
      >
        <Tap />
      </Box>

      {/* About Us Section */}
      <Box 
        id="about-us" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start'
        }}
      >
        <AboutUs />
      </Box>

      {/* Placeholder sections for other navigation items */}
      <Box 
        id="services" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)',
          color: 'white',
          fontSize: '48px',
          fontFamily: 'Montserrat',
          fontWeight: 'bold'
        }}
      >
        Services Coming Soon
      </Box>

      <Box 
        id="insights" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)',
          color: 'white',
          fontSize: '48px',
          fontFamily: 'Montserrat',
          fontWeight: 'bold'
        }}
      >
        Insights Coming Soon
      </Box>

      <Box 
        id="contact" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)',
          color: 'white',
          fontSize: '48px',
          fontFamily: 'Montserrat',
          fontWeight: 'bold'
        }}
      >
        Contact Coming Soon
      </Box>

      <Box 
        id="book-session" 
        component="section"
        sx={{ 
          minHeight: '100vh',
          position: 'relative',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)',
          color: 'white',
          fontSize: '48px',
          fontFamily: 'Montserrat',
          fontWeight: 'bold'
        }}
      >
        Book Discovery Session
      </Box>
    </Box>
  )
}

export default ScrollPage