import React from 'react'
import { Box, Typography } from '@mui/material'
import PageBackground from '../components/PageBackground'

const Services: React.FC = () => {
  return (
    <PageBackground>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: { xs: '32px', md: '48px' },
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '16px', md: '18px' },
            fontFamily: 'Montserrat',
            maxWidth: '600px',
            lineHeight: 1.6,
          }}
        >
          Coming Soon - Our comprehensive service offerings designed to help you achieve your goals through our proven TAP methodology.
        </Typography>
      </Box>
    </PageBackground>
  )
}

export default Services