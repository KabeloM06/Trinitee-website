import { Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

// ✅ Reusable styled components (can be moved to a separate file)
export const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  paddingTop: '120px',
  paddingBottom: '60px',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px',
    paddingBottom: '40px',
  },
}))

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.133,
  textAlign: 'center',
  marginBottom: '4rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    marginBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    marginBottom: '2rem',
  },
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: '1rem',
  },
}))

export const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'left',
  marginBottom: '2rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}))

export const ContentSection = styled(Box)(({ theme }) => ({
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '3rem',
  },
}))

export const CardBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  padding: '2rem',
  margin: '2rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
    margin: '1.5rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    margin: '1rem 0',
  },
}))

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
}))

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}))

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '24px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}))

export const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '16px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}))