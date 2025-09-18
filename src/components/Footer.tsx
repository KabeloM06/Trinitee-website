import React from 'react'
import {
  FooterContainer,
  FooterContent,
  FooterText
} from './styled/FooterStyles'
import { footerContent, handleFooterInteraction } from '../data/footerData'

const Footer: React.FC = () => {
  return (
    <FooterContainer 
      component="footer"
      onClick={handleFooterInteraction}
    >
      <FooterContent>
        <FooterText variant="body1" align="center">
          {footerContent.copyrightText}
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer