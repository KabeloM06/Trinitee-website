import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import {
  ArrowForward,
  Psychology,
  CheckCircle,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

const Home: React.FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const problems = [
    {
      title: "You're the Bottleneck",
      description: "Every decision, every problem, every opportunity needs you. The business can't scale because you can't clone yourself.",
      color: '#475569'
    },
    {
      title: "Budget Killing",
      description: "You hired better systems and clever financial experts, but every move complexity to your day.",
      color: '#334155'
    },
    {
      title: "Missing Opportunities",
      description: "While you're stuck in check competitors with better systems are seizing market share.",
      color: '#22d3ee'
    },
    {
      title: "Isolated Mode",
      description: "You're trying 70-hour weeks just to maintain what you built. Not find the other way around.",
      color: '#475569'
    }
  ]

  const stages = [
    {
      title: "Transitioning",
      description: "Complete business X-ray and AI agent placement. We analyze systems and build autonomous operations migration minimum.",
      points: [
        "Business diagnostic & 5-key areas",
        "AI deployment and immediate process optimization"
      ],
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)'
    },
    {
      title: "Awareness",
      description: "Systematic transformation with real-time monitoring. Your AI agents deliver intelligence-driven decision capability.",
      points: [
        "Proven AI autonomous transformation",
        "Automated decisions implementation"
      ],
      gradient: 'linear-gradient(135deg, #475569 0%, #334155 100%)'
    },
    {
      title: "Performance",
      description: "Investment-ready business with documented processes and validated reporting preparation completed.",
      points: [
        "Investment-grade reporting mechanisms prepared",
        "Scalable growth systems"
      ],
      gradient: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)'
    }
  ]

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '/services' },
    { label: 'TAP Method', href: '/tap-method' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Smooth scroll for anchor links
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to route
      navigate(href)
    }
    setMobileMenuOpen(false)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  color: scrolled ? '#1e293b' : 'white',
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
                      color: scrolled ? '#475569' : 'white',
                      textDecoration: 'none',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: '#22d3ee' },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button
                  variant="contained"
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
                {scrolled ? <MenuIcon sx={{ color: '#1e293b' }} /> : <MenuIcon sx={{ color: 'white' }} />}
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

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #0f172a 100%)',
          color: 'white',
          pt: { xs: 16, md: 20 },
          pb: { xs: 10, md: 15 },
          overflow: 'hidden',
        }}
      >
        {/* Background Effects */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <Box
            sx={{
              position: 'absolute',
              top: 80,
              left: 40,
              width: 288,
              height: 288,
              bgcolor: '#22d3ee',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 80,
              right: 40,
              width: 384,
              height: 384,
              bgcolor: '#3b82f6',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: 'fadeIn 1s ease-out' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Transform Your Business with{' '}
                  <Box component="span" sx={{ color: '#22d3ee' }}>
                    AI-Powered Solutions
                  </Box>
                </Typography>
                <Typography variant="h6" sx={{ color: '#cbd5e1', mb: 4, lineHeight: 1.6 }}>
                  Watch your SMME transform into an investment-ready powerhouse through autonomous AI agents
                  that don't just analyze—they execute.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: '#22d3ee',
                      color: '#1e293b',
                      borderRadius: 50,
                      px: 4,
                      py: 2,
                      fontSize: '1rem',
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
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      borderRadius: 50,
                      px: 4,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'white',
                        color: '#1e293b',
                        borderWidth: 2,
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    See How It Works
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 384,
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                    borderRadius: 6,
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                        borderRadius: 6,
                        filter: 'blur(40px)',
                        opacity: 0.5,
                        animation: 'pulse 2s ease-in-out infinite',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        bgcolor: 'rgba(30, 41, 59, 0.5)',
                        p: 4,
                        borderRadius: 6,
                        border: '1px solid rgba(34, 211, 238, 0.5)',
                      }}
                    >
                      <Psychology sx={{ fontSize: 128, color: '#22d3ee' }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#22d3ee',
                fontWeight: 600,
                mb: 1,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              About Trinities
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              Why 70% of South African SMMEs Fail Within 3 Years
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 768, mx: 'auto' }}>
              You started your business with big dreams, but now you're trapped in a cycle that's slowly
              killing your ambitions.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problems.map((problem, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  sx={{
                    bgcolor: problem.color,
                    color: 'white',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {problem.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      {problem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* System Section */}
      <Box
        id="services"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#22d3ee',
                fontWeight: 600,
                mb: 1,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              About Trinities
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Introducing the World's First Autonomous Business Transformation System
            </Typography>
            <Typography variant="h6" sx={{ color: '#cbd5e1', maxWidth: 900, mx: 'auto' }}>
              What if you could have a team of world-class business consultants, data analysts, and operations
              managers working on your challenges 24/7—for less than you'd pay a single junior employee?
            </Typography>
          </Box>

          <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/images/AKHA IMAGE.png"
              alt="AI Business Transformation"
              sx={{
                width: '100%',
                maxWidth: 1200,
                height: { xs: 300, md: 400 },
                objectFit: 'contain',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              {
                title: 'Autonomous Execution',
                description:
                  'While you sleep, our AI auto-orders inventory, negotiates with suppliers, restructures payments, and adjusts pricing based on market shifts—ensuring maximum profitability.',
              },
              {
                title: 'Data-Driven Intelligence',
                description:
                  'Every decision backed by analysis of 150+ similar businesses, industry benchmarks, and real-time market data. Your business becomes transformation-ready.',
              },
              {
                title: 'Complete Transformation',
                description:
                  'Unlike consultants who build one area, our system optimizes your entire business model: customer acquisition, operations, finance, and growth strategy.',
              },
              {
                title: 'Continuous Evolution',
                description:
                  'Your business adapts and improves automatically as market conditions change, ensuring you stay ahead of manually-operated competitors.',
              },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <CheckCircle sx={{ color: '#22d3ee', fontSize: 32, flexShrink: 0, mt: 0.5 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#22d3ee',
                color: '#1e293b',
                borderRadius: 50,
                px: 4,
                py: 2,
                fontSize: '1rem',
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
        </Container>
      </Box>

      {/* TAP Section */}
      <Box id="methodology" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e293b',
                mb: 2,
              }}
            >
              TAP: Your 90-Day Transformation Journey
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 768, mx: 'auto' }}>
              Our proprietary TAP methodology has successfully transformed 150+ South African businesses with a
              94% success rate.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {stages.map((stage, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    background: stage.gradient,
                    color: 'white',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                      {stage.title}
                    </Typography>
                    <Typography sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      {stage.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {stage.points.map((point, idx) => (
                        <Box key={idx} component="li" sx={{ display: 'flex', gap: 1 }}>
                          <CheckCircle sx={{ fontSize: 20, flexShrink: 0, mt: 0.25 }} />
                          <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>{point}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#22d3ee',
                color: '#1e293b',
                borderRadius: 50,
                px: 4,
                py: 2,
                fontSize: '1rem',
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
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#0f172a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
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
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Trinities
              </Typography>
            </Box>
            <Typography sx={{ color: '#94a3b8', mb: 2 }}>
              Transforming South African SMMEs with autonomous AI solutions
            </Typography>
            <Typography sx={{ color: '#64748b' }}>© 2025 Trinities. All rights reserved.</Typography>
          </Box>
        </Container>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }
        `}
      </style>
    </Box>
  )
}

export default Home