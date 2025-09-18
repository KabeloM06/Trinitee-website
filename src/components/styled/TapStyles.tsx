import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

// Main container with proper flow layout
export const TapContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
}))

export const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '150px 20px 80px',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    padding: '120px 20px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '100px 15px 40px',
  },
}))

export const HeroDescription = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'center',
  maxWidth: '600px',
  margin: '24px auto 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    maxWidth: '500px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    maxWidth: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    maxWidth: '300px',
  },
}))

// Video Section
export const VideoSection = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  height: '50vh',
  minHeight: '400px',
  maxHeight: '600px',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  marginBottom: '60px',
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  zIndex: 5,
}))

export const VideoPlayer = styled('video')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

export const VideoPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'white',
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}))

export const MethodologySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '80px 20px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    padding: '60px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px',
  },
}))

export const PillarsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '40px',
  marginBottom: '40px',
  [theme.breakpoints.down('lg')]: {
    gap: '30px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
  },
}))

export const PillarCard = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  padding: '20px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '400px',
  },
}))

export const PillarTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '16px',
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

export const PillarDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}))

export const CallToActionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '80px 20px',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    padding: '60px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px',
  },
}))

export const CTADescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto 24px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    maxWidth: '500px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    maxWidth: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    maxWidth: '300px',
  },
}))

export const CTAButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
}))

export const CTAButton = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  padding: '12px 24px',
  border: '2px solid white',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    padding: '10px 20px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    padding: '8px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '8px 16px',
    minWidth: '200px',
  },
}))

// Additional elements from original design
export const MethodologyIntroSection = styled(Box)(({ theme }) => ({
  padding: '60px 20px',
  textAlign: 'center',
  marginBottom: '60px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  maxWidth: '1200px',
  margin: '60px auto',
  [theme.breakpoints.down('md')]: {
    padding: '40px 15px',
    marginBottom: '40px',
    margin: '40px auto',
  },
}))

export const MethodologyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '20px',
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

export const MethodologyDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    maxWidth: '600px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    maxWidth: '400px',
  },
}))

// Geometric decorative elements
export const GeometricContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '60px 0',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
}))

export const Triangle1 = styled(Box)(() => ({
  width: '0',
  height: '0',
  borderLeft: '96px solid transparent',
  borderRight: '96px solid transparent',
  borderBottom: '142px solid white',
  position: 'relative',
}))

export const Triangle2 = styled(Box)(({ theme }) => ({
  width: '91.88px',
  height: '109.88px',
  border: '9.56px solid white',
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  backgroundColor: 'transparent',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.down('md')]: {
    width: '70px',
    height: '85px',
    border: '7px solid white',
  },
}))

export const BlackRectangle = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '204px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  width: '90%',
  maxWidth: '1200px',
  height: '150px',
  position: 'relative',
  margin: '60px auto',
  [theme.breakpoints.down('lg')]: {
    height: '120px',
    borderRadius: '150px',
  },
  [theme.breakpoints.down('md')]: {
    height: '80px',
    borderRadius: '100px',
  },
}))

// Enhanced pillar cards with detailed content - curved square boxes
export const DetailedPillarCard = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  padding: '40px 30px',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: '40px',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '400px',
    minHeight: '450px',
    padding: '35px 25px',
    borderRadius: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '400px',
    padding: '30px 20px',
    borderRadius: '20px',
  },
}))

// Title above each box
export const PillarTopTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}))

export const PillarShortTitle = styled(Typography)(({ theme }) => ({
  fontSize: '72px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1,
  textAlign: 'center',
  marginBottom: '20px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '60px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
  },
}))

export const DetailedDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.455,
  textAlign: 'center',
  marginTop: '15px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '13px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '11px',
  },
}))