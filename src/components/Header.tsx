import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '40px 175px',
  minHeight: 'auto',
  [theme.breakpoints.down('xl')]: {
    padding: '30px 100px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '20px 50px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '15px 20px',
    flexDirection: 'column',
    gap: '15px',
  },
}))

const NavButton = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  textTransform: 'none',
  fontWeight: 'normal',
  lineHeight: 1.2,
  minWidth: 'auto',
  padding: '0 20px',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '17px',
    padding: '0 15px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    padding: '0 10px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    padding: '5px 10px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}))

const BookSessionButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',
  lineHeight: 1.2,
  border: '2px solid white',
  borderRadius: '50px',
  padding: '12px 24px',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '15px',
    padding: '10px 20px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    padding: '8px 16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '13px',
    padding: '6px 12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    padding: '5px 10px',
  },
}))

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography 
          variant="h2" 
          component={Link}
          to="/"
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px', lg: '26px', xl: '28px' },
            fontFamily: 'Montserrat',
            color: 'white',
            fontWeight: 'normal',
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.8,
            }
          }}
        >
          Home
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link to="/tap-method" style={{ textDecoration: 'none' }}>
            <NavButton>
              TAP Method
            </NavButton>
          </Link>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <NavButton>
              About Us
            </NavButton>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <NavButton>
              Services
            </NavButton>
          </Link>
          <Link to="/insights" style={{ textDecoration: 'none' }}>
            <NavButton>
              Insights
            </NavButton>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <NavButton>
              Contact
            </NavButton>
          </Link>
          <Link to="/book-session" style={{ textDecoration: 'none' }}>
            <BookSessionButton>
              Book Discovery Session
            </BookSessionButton>
          </Link>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Header