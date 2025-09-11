import React from 'react'
import { Typography, Box, Button, Container, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}))

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Trinitee
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your journey starts here
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, backgroundColor: 'white', color: 'primary.main' }}
          >
            Get Started
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Features
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Feature One
              </Typography>
              <Typography variant="body1">
                Description of your first amazing feature that will benefit your users.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Feature Two
              </Typography>
              <Typography variant="body1">
                Description of your second amazing feature that will benefit your users.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Feature Three
              </Typography>
              <Typography variant="body1">
                Description of your third amazing feature that will benefit your users.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home