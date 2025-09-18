import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

interface PageBackgroundProps {
  children: React.ReactNode
  className?: string
}

const BackgroundContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  overflow: 'visible',
  background: `
    radial-gradient(ellipse 50% 50% at 20% 30%, rgba(138, 43, 226, 0.8) 0%, transparent 50%),
    radial-gradient(ellipse 40% 40% at 80% 70%, rgba(30, 144, 255, 0.6) 0%, transparent 50%),
    linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)
  `,
  backgroundColor: '#070707',
}))

const PageBackground: React.FC<PageBackgroundProps> = ({ children, className }) => {
  return (
    <BackgroundContainer className={className}>
      {children}
    </BackgroundContainer>
  )
}

export default PageBackground