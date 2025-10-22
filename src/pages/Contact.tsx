import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1, minHeight: { xs: '20vh', md: '40vh' } }} />
      <Footer />
    </Box>
  )
}

export default Contact