import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ mt: '80px' }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Contact