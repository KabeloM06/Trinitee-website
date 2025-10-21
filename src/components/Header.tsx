import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
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
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

interface HeaderProps {
  transparentOnTop?: boolean
}

const Header: React.FC<HeaderProps> = ({ transparentOnTop = false }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
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
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'TAP Method', href: '/tap-method' },
    { label: 'Results', href: '/results' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href === '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('/#')) {
      const section = href.substring(2)
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const element = document.querySelector(`#${section}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home and scroll to section
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(`#${section}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    } else {
      navigate(href)
    }
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isTransparent = transparentOnTop && !scrolled
  const textColor = isTransparent ? 'white' : '#1e293b'
  const hoverColor = '#22d3ee'

  // Helper function to check if a nav item is active
  const isActiveItem = (href: string) => {
    // For home page
    if (href === '/' && location.pathname === '/') {
      return true
    }
    // For direct routes (not anchor links)
    if (!href.startsWith('/#') && href === location.pathname) {
      return true
    }
    // Don't mark anchor links as active
    return false
  }

  return (
    <>
      {/* Navigation */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          bgcolor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          boxShadow: isTransparent
            ? 'none'
            : scrolled
            ? '0 2px 20px rgba(0,0,0,0.1)'
            : '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80 }}>
            {/* Logo and Brand */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
                transition: 'opacity 0.2s ease',
              }}
              onClick={handleLogoClick}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="Trinitee Logo"
                sx={{
                  height: 50,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: textColor,
                  transition: 'color 0.3s ease',
                }}
              >
                Trinitee
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {navItems.map((item) => {
                  const isActive = isActiveItem(item.href)
                  return (
                    <Typography
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: isTransparent ? 'white' : '#475569',
                        textDecoration: 'none',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'color 0.2s ease',
                        borderBottom: isActive ? `2px solid ${hoverColor}` : 'none',
                        '&:hover': { color: hoverColor },
                      }}
                    >
                      {item.label}
                    </Typography>
                  )
                })}
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
                <MenuIcon sx={{ color: textColor }} />
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
                onClick={() => {
                  navigate('/book-session')
                  setMobileMenuOpen(false)
                }}
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
    </>
  )
}

export default Header