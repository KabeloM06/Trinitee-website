import React from 'react'
import { Box, Typography } from '@mui/material'
import PageBackground from '../components/PageBackground'

const Insights: React.FC = () => {
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
          Insights & Thought Leadership
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
          Coming Soon - Latest insights, research, and thought leadership in personal and professional development through our innovative approaches.
        </Typography>
      </Box>
    </PageBackground>
  )
}

export default Insights