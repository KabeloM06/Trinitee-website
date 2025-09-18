import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  StyledAppBar,
  StyledToolbar,
  LogoText,
  NavButton,
  BookSessionButton,
  NavigationContainer
} from './styled/HeaderStyles'
import { 
  navigationItems, 
  bookingButton, 
  logoText,
  handleLogoClick,
  handleNavItemClick,
  handleBookingClick
} from '../data/headerData'

interface HeaderProps {
  activeSection?: string
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const location = useLocation()
  const isScrollPage = location.pathname === '/scroll'

  const handleNavigation = (item: any) => {
    if (isScrollPage) {
      // Smooth scroll to section
      const element = document.getElementById(item.path.replace('/', ''))
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Regular routing
      handleNavItemClick(item.path)
    }
  }

  const handleLogoNavigation = () => {
    if (isScrollPage) {
      // Scroll to home section
      const element = document.getElementById('home')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      handleLogoClick()
    }
  }

  const handleBookingNavigation = () => {
    if (isScrollPage) {
      // Scroll to booking section
      const element = document.getElementById('book-session')
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      handleBookingClick()
    }
  }

  return (
    <StyledAppBar>
      <StyledToolbar>
        {isScrollPage ? (
          <LogoText
            onClick={handleLogoNavigation}
            style={{ cursor: 'pointer' }}
          >
            {logoText}
          </LogoText>
        ) : (
          <Link 
            to="/" 
            style={{ textDecoration: 'none' }}
            onClick={handleLogoClick}
          >
            <LogoText>
              {logoText}
            </LogoText>
          </Link>
        )}
        
        <NavigationContainer>
          {navigationItems.map((item) => (
            isScrollPage ? (
              <NavButton
                key={item.id}
                onClick={() => handleNavigation(item)}
                style={{ 
                  cursor: 'pointer',
                  opacity: activeSection === item.path.replace('/', '') ? 1 : 0.7
                }}
              >
                {item.label}
              </NavButton>
            ) : (
              <Link 
                key={item.id}
                to={item.path} 
                style={{ textDecoration: 'none' }}
                onClick={() => handleNavItemClick(item.path)}
              >
                <NavButton>
                  {item.label}
                </NavButton>
              </Link>
            )
          ))}
          
          {isScrollPage ? (
            <BookSessionButton
              onClick={handleBookingNavigation}
              style={{ cursor: 'pointer' }}
            >
              {bookingButton.label}
            </BookSessionButton>
          ) : (
            <Link 
              to={bookingButton.path} 
              style={{ textDecoration: 'none' }}
              onClick={handleBookingClick}
            >
              <BookSessionButton>
                {bookingButton.label}
              </BookSessionButton>
            </Link>
          )}
        </NavigationContainer>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Header