import emailjs from '@emailjs/browser'

// EmailJS configuration from environment variables
// Sign up at https://www.emailjs.com/ and get your credentials
// Add them to your .env file
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

export interface EmailData {
  name: string
  email: string
  phone: string
  company: string
  annualRevenue: string
  challenge: string
}

export const sendBusinessAssessmentEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Debug: Log configuration values
    console.log('EmailJS Configuration:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY ? '✓ Set' : '✗ Missing'
    })

    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY)

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      phone: data.phone,
      company: data.company,
      annual_revenue: data.annualRevenue,
      challenge: data.challenge,
    }

    console.log('Sending email with params:', templateParams)

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return response.status === 200
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
