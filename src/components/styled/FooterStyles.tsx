import { Box, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FooterContainer = styled(Box)(({ theme }) => ({
  py: 3,
  px: 2,
  mt: 'auto',
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.grey[200]
    : theme.palette.grey[800],
}))

export const FooterContent = styled(Container)(() => ({
  maxWidth: 'lg'
}))

export const FooterText = styled(Typography)(() => ({
  variant: 'body1',
  textAlign: 'center'
}))