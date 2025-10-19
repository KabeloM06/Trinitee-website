import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import {
  Psychology,
  Menu as MenuIcon,
  Close as CloseIcon,
  LightbulbOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material'

const Tap: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/services' },
    { label: 'TAP Method', href: '/tap-method' },
    { label: 'Results', href: '/#results' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      navigate(href)
    }
    setMobileMenuOpen(false)
  }

  const tapPhases = [
    {
      title: 'Transitioning',
      icon: <Psychology sx={{ fontSize: 60 }} />,
      color: '#22d3ee',
      bgColor: '#22d3ee',
      description: 'Complete business X-ray and AI agent deployment. We analyze your current operations and begin the transformation immediately.',
      features: [
        'Business assessment across 9 key areas',
        'AI agent deployment and integration',
        'Immediate process optimization',
      ],
    },
    {
      title: 'Awareness',
      icon: <LightbulbOutlined sx={{ fontSize: 60 }} />,
      color: '#475569',
      bgColor: '#475569',
      description: 'Systematic transformation with intelligence-driven precision. Your business operates with intelligence-led decision making.',
      features: [
        'Revenue and cost optimization',
        'Automated operations management',
        'Performance dashboard implementation',
      ],
    },
    {
      title: 'Performance',
      icon: <TrendingUpOutlined sx={{ fontSize: 60 }} />,
      color: '#64748b',
      bgColor: '#64748b',
      description: 'Investment-ready business with documented processes, growth projections, and verified performance metrics.',
      features: [
        'Investment-grade reporting',
        'Funding readiness preparation',
        'Scalable growth systems',
      ],
    },
  ]

  const timeline = [
    { week: '1-2', phase: 'Business X-Ray', icon: '📊' },
    { week: '3-4', phase: 'AI Agent Deployment', icon: '🤖' },
    { week: '5-8', phase: 'Systematic Transformation', icon: '⚙️' },
    { week: '', phase: 'Investment Preparation', icon: '📈' },
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Psychology sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#1e293b',
                  transition: 'color 0.3s ease',
                }}
              >
                Trinities
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontWeight: item.href === '/tap-method' ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      borderBottom: item.href === '/tap-method' ? `2px solid #22d3ee` : 'none',
                      '&:hover': { color: '#22d3ee' },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  onClick={() => navigate('/book-session')}
                  sx={{
                    bgcolor: '#22d3ee',
                    color: '#1e293b',
                    borderRadius: 50,
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#06b6d4',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  Transform My Business Now
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon sx={{ color: '#1e293b' }} />
              </IconButton>
            )}
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Box sx={{ width: 250, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item.href)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                onClick={() => { navigate('/book-session'); setMobileMenuOpen(false) }}
                sx={{
                  bgcolor: '#22d3ee',
                  color: '#1e293b',
                  borderRadius: 50,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Transform My Business Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed nav */}
      <Box sx={{ height: 80 }} />

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              TAP: Your 90-Day Transformation Journey
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              Our proprietary TAP methodology has transformed 150+ South African businesses with a 94% success rate.
            </Typography>
          </Box>

          {/* Three Phase Cards */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {tapPhases.map((phase, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    bgcolor: phase.bgColor,
                    color: 'white',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    minHeight: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {phase.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      textAlign: 'center',
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                    }}
                  >
                    {phase.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      mb: 3,
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      textAlign: 'center',
                      opacity: 0.95,
                    }}
                  >
                    {phase.description}
                  </Typography>

                  {/* Features */}
                  <Box component="ul" sx={{ pl: 0, listStyle: 'none', m: 0, mt: 'auto' }}>
                    {phase.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        sx={{
                          fontSize: '0.875rem',
                          mb: 1.5,
                          lineHeight: 1.6,
                          opacity: 0.9,
                        }}
                      >
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Timeline Section */}
          <Box sx={{ mb: 8 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 2 },
                position: 'relative',
              }}
            >
              {/* Timeline Line (desktop only) */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '50%',
                  left: '10%',
                  right: '10%',
                  height: 3,
                  bgcolor: '#cbd5e1',
                  zIndex: 0,
                }}
              />

              {timeline.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 1,
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  {/* Week Label */}
                  <Typography
                    sx={{
                      color: '#64748b',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '0.875rem',
                    }}
                  >
                    {item.week ? `Week ${item.week}` : ''}
                  </Typography>

                  {/* Circle */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      mb: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {item.week || item.icon}
                  </Box>

                  {/* Phase Label */}
                  <Typography
                    sx={{
                      color: '#1e293b',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      textAlign: 'center',
                      maxWidth: 120,
                    }}
                  >
                    {item.phase}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/book-session')}
              sx={{
                bgcolor: '#22d3ee',
                color: 'white',
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(34, 211, 238, 0.3)',
                '&:hover': {
                  bgcolor: '#06b6d4',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(34, 211, 238, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Transform My Business Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Tap