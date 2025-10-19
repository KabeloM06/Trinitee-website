import React from 'react'
import { Box } from '@mui/material'

interface PageBackgroundProps {
  children: React.ReactNode
  className?: string
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children, className }) => {
  return (
    <Box className={className}>
      {children}
    </Box>
  )
}

export default PageBackground