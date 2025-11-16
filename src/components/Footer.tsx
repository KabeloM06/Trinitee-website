import React, { useState } from 'react'
import { SelectChangeEvent, Alert, Snackbar } from '@mui/material'
import { sendBusinessAssessmentEmail } from '../services/emailService'
import {
  FooterContainer,
  FooterContent,
  LeftSection,
  RightSection,
  SectionTitle,
  SectionSubtitle,
  FormContainer,
  StyledTextField,
  SubmitButton,
  ContactInfo,
  ContactItem,
  ContactLabel,
  ContactDetail,
  ContactLink,
} from './styled/FooterStyles'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  annualRevenue: string
  challenge: string
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    annualRevenue: '',
    challenge: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using the email service
      const success = await sendBusinessAssessmentEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        annualRevenue: formData.annualRevenue,
        challenge: formData.challenge,
      })

      if (success) {
        setSnackbarMessage('Assessment request sent successfully! We\'ll be in touch soon.')
        setSnackbarSeverity('success')
        setSnackbarOpen(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          annualRevenue: '',
          challenge: '',
        })
      } else {
        setSnackbarMessage('Failed to send assessment request. Please try again or contact us directly.')
        setSnackbarSeverity('error')
        setSnackbarOpen(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSnackbarMessage('An error occurred. Please try again later.')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.annualRevenue.trim() !== ''
    )
  }

  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <SectionTitle>Get Your Free Business Assessment</SectionTitle>
          <SectionSubtitle>
            Join 150+ SMME owners who've already transformed their businesses into investment-ready growth machines. Your future self is waiting.
          </SectionSubtitle>

          <FormContainer onSubmit={handleSubmit}>
            <StyledTextField
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
            />

            <StyledTextField
              name="email"
              type="email"
              placeholder="Business Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
            />

            <StyledTextField
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              fullWidth
            />

            <StyledTextField
              name="company"
              placeholder="Company Name *"
              value={formData.company}
              onChange={handleInputChange}
              required
              fullWidth
            />

            <StyledTextField
              name="annualRevenue"
              placeholder="Annual Revenue *"
              value={formData.annualRevenue}
              onChange={handleInputChange}
              required
              fullWidth
            />

            <StyledTextField
              name="challenge"
              placeholder="Biggest Business Challenge *"
              value={formData.challenge}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
            />

            <SubmitButton
              type="submit"
              variant="contained"
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Assessment'}
            </SubmitButton>
          </FormContainer>
        </LeftSection>

        <RightSection>
          <SectionTitle>Stop Struggling. Start Scaling.</SectionTitle>

          <ContactInfo>
            <ContactItem>
              <ContactLabel>WhatsApp Business Chat</ContactLabel>
              <ContactLink href="https://wa.me/27790709210" target="_blank" rel="noopener noreferrer">
                +27 79 070 9210
              </ContactLink>
              <ContactDetail>- Instant responses during business hours</ContactDetail>
            </ContactItem>

            <ContactItem>
              <ContactLabel>Phone Consultation</ContactLabel>
              <ContactLink href="tel:+27790709210">
                +27 79 070 9210
              </ContactLink>
              <ContactDetail>- Mon-Fri 8:00 AM - 5:00 PM</ContactDetail>
            </ContactItem>

            <ContactItem>
              <ContactLabel>Email Us</ContactLabel>
              <ContactLink href="mailto:info@trinitee.co.za">
                info@trinitee.co.za
              </ContactLink>
              <ContactLink href="mailto:pako@trinitee.co.za">
                pako@trinitee.co.za
              </ContactLink>
              <ContactDetail>- We respond within 24 hours</ContactDetail>
            </ContactItem>

            <ContactItem>
              <ContactLabel>Visit Our Office</ContactLabel>
              <ContactDetail>72 Greenfield Road, Greenside, Johannesburg</ContactDetail>
              {/* <ContactDetail>Greenside</ContactDetail>
              <ContactDetail>Johannesburg</ContactDetail> */}
            </ContactItem>

            <ContactItem>
              <ContactLabel>Book a Strategy Session</ContactLabel>
              <ContactDetail>
                Schedule a 30-minute strategy session to discuss your business transformation goals
              </ContactDetail>
            </ContactItem>
          </ContactInfo>
        </RightSection>
      </FooterContent>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </FooterContainer>
  )
}

export default Footer