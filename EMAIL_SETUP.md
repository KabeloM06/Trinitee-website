# Email Service Setup Guide

This project uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (you get 200 emails/month for free)
3. Verify your email address

### 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (you'll need this)

### 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: Business Assessment Request - {{company}}

New Business Assessment Request

Name: {{from_name}}
Business Email: {{from_email}}
Phone Number: {{phone}}
Company Name: {{company}}
Annual Revenue: {{annual_revenue}}
Biggest Business Challenge: {{challenge}}

---
This email was sent from the Trinitee website contact form.
```

4. Set the **To Email** to: `suptrinitee@gmail.com`
5. Save the template and copy your **Template ID**

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

### 5. Configure Your Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Your Development Server

After updating the `.env` file, restart your dev server:

```bash
npm run dev
```

## Testing

1. Navigate to the Contact page (`/contact`)
2. Fill out the form with test data
3. Click "Get Assessment"
4. Check your email at `suptrinitee@gmail.com`

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Template not found?** Verify your Template ID is correct
- **Service not found?** Verify your Service ID is correct
- **Invalid public key?** Check that you copied the full public key

## Email Template Variables

The following variables are sent to EmailJS:

- `{{to_email}}` - Recipient email (suptrinitee@gmail.com)
- `{{from_name}}` - User's name
- `{{from_email}}` - User's business email
- `{{phone}}` - User's phone number
- `{{company}}` - Company name
- `{{annual_revenue}}` - Annual revenue
- `{{challenge}}` - Business challenge description
- `{{subject}}` - Email subject line

## Support

For EmailJS-specific issues, visit: https://www.emailjs.com/docs/
