import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
} from '@mui/material'
import {
  Lightbulb,
  Shield,
  EmojiEvents,
} from '@mui/icons-material'
import Header from '../components/Header'

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      initials: 'PM',
      name: 'Pako Moloto',
      title: 'Managing Partner / Founder',
      description:
        'Visionary leader driving organizational transformation through innovative business solutions and strategic thinking.',
      color: '#4a5d7a',
    },
    {
      initials: 'NM',
      name: 'Nadi M',
      title: 'Strategic Managing Partner / Co-Founder',
      description:
        'Combines business acumen, emotional intelligence, and conscious leadership to drive human-centric digital transformation.',
      color: '#4a5d7a',
    },
  ]

  const coreValues = [
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: '#22d3ee' }} />,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge AI solutions',
    },
    {
      icon: <Shield sx={{ fontSize: 40, color: '#22d3ee' }} />,
      title: 'Integrity',
      description: 'Building trust through transparent, ethical business practices',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: '#22d3ee' }} />,
      title: 'Excellence',
      description: 'Delivering exceptional results through data-driven strategies',
    },
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      {/* Header */}
      <Header transparentOnTop={false} />

      {/* Spacer for fixed nav */}
      <Box sx={{ height: 80 }} />

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#2d3748',
                mb: 2,
              }}
            >
              Meet the Trinitee Group Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                maxWidth: 900,
                mx: 'auto',
              }}
            >
              Visionary leaders driving organizational transformation through innovative business solutions
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    border: '2px solid #e2e8f0',
                    bgcolor: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      border: '2px solid #22d3ee',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: member.color,
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      mb: 3,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    }}
                  >
                    {member.initials}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#1e293b',
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#22d3ee',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 3,
                    }}
                  >
                    {member.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#475569',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                    }}
                  >
                    {member.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#2d3748',
                mb: 2,
              }}
            >
              Our Core Values
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    border: '2px solid #e2e8f0',
                    bgcolor: 'white',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)',
                      border: '2px solid #22d3ee',
                      '& .value-icon': {
                        transform: 'scale(1.2)',
                      },
                    },
                  }}
                >
                  <Box
                    className="value-icon"
                    sx={{
                      mb: 3,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#1e293b',
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#475569',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                    }}
                  >
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutUs
