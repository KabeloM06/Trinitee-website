import { Box, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#3d5a7a',
  color: '#ffffff',
  padding: '60px 40px 40px',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px 30px',
  },
}))

export const FooterContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '60px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '40px',
  },
}))

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '450px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}))

export const RightSection = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '450px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}))

export const SectionTitle = styled('h2')({
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: '1.3',
  fontFamily: '"Montserrat", sans-serif',
  '@media (max-width: 600px)': {
    fontSize: '20px',
    marginBottom: '16px',
  },
})

export const SectionSubtitle = styled('p')({
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '30px',
  opacity: 0.95,
  '@media (max-width: 600px)': {
    fontSize: '14px',
    marginBottom: '20px',
  },
})

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2bbcf5',
      borderWidth: '2px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
    fontSize: '15px',
    color: '#333',
    '&::placeholder': {
      color: '#999',
      opacity: 1,
    },
  },
  '& .MuiOutlinedInput-multiline': {
    padding: 0,
  },
})

export const SubmitButton = styled(Button)({
  backgroundColor: '#2bbcf5',
  color: '#ffffff',
  padding: '14px 32px',
  fontSize: '16px',
  fontWeight: '600',
  borderRadius: '8px',
  textTransform: 'none',
  marginTop: '8px',
  alignSelf: 'flex-start',
  '&:hover': {
    backgroundColor: '#1da9db',
  },
  '&:disabled': {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
})

export const ContactInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginTop: '10px',
})

export const ContactItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const ContactLabel = styled('h3')({
  fontSize: '16px',
  fontWeight: '600',
  marginBottom: '4px',
  fontFamily: '"Montserrat", sans-serif',
})

export const ContactDetail = styled('p')({
  fontSize: '15px',
  lineHeight: '1.6',
  opacity: 0.95,
  margin: 0,
})

export const ContactLink = styled('a')({
  color: '#2bbcf5',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: '500',
  '&:hover': {
    textDecoration: 'underline',
  },
})