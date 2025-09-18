import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeroContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '56%',
  top: '30%',
  transform: 'translateX(-20%)',
  zIndex: 10,
  [theme.breakpoints.down('lg')]: {
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    left: '50%',
    top: '25%',
    transform: 'translateX(-50%)',
  },
  [theme.breakpoints.down('sm')]: {
    left: '50%',
    top: '20%',
    transform: 'translateX(-50%)',
  },
}))

export const HomeMainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.133,
  textAlign: 'left',
  marginBottom: '24px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    marginBottom: '16px',
  },
}))

export const HomeBodyText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'left',
  maxWidth: '600px',
  marginTop: '16px',
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '400px',
    textAlign: 'center',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
    fontSize: '14px',
  },
}))

export const MethodologySection = styled(Box)(() => ({
  position: 'absolute',
  left: '50%',
  top: '57%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  zIndex: 10,
}))

export const DiscoverTitle = styled(Typography)(({ theme }) => ({
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
    marginBottom: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: '10px',
  },
}))

export const DeepDiveTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.2,
  textAlign: 'center',
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

export const FooterSection = styled(Box)(() => ({
  position: 'absolute',
  bottom: '12%',
  left: 0,
  right: 0,
  zIndex: 10,
}))

export const TitleCopy = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontFamily: 'Montserrat',
  color: 'white',
  lineHeight: 1.2,
  textAlign: 'center',
  display: 'inline-block',
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

export const WhiteLine = styled(Box)(() => ({
  position: 'absolute',
  left: '5%',
  top: '78%',
  width: '91%',
  height: '1px',
  backgroundColor: 'white',
  zIndex: 15,
}))

export const FooterContainer = styled(Box)(() => ({
  display: 'flex', 
  justifyContent: 'space-around', 
  alignItems: 'center',
  padding: '0 10%'
}))