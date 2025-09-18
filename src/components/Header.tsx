import React from 'react'
import { Link } from 'react-router-dom'
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

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Link 
          to="/" 
          style={{ textDecoration: 'none' }}
          onClick={handleLogoClick}
        >
          <LogoText>
            {logoText}
          </LogoText>
        </Link>
        
        <NavigationContainer>
          {navigationItems.map((item) => (
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
          ))}
          
          <Link 
            to={bookingButton.path} 
            style={{ textDecoration: 'none' }}
            onClick={handleBookingClick}
          >
            <BookSessionButton>
              {bookingButton.label}
            </BookSessionButton>
          </Link>
        </NavigationContainer>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Header