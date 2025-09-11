import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}

export default App