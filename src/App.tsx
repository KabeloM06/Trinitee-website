import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const App: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Box>
  )
}

export default App