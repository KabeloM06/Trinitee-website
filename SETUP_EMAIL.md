# 🚀 Quick Start: Setting Up Email Functionality

Your contact form is ready! You just need to configure EmailJS (a free service) to enable email sending.

## ⚡ Quick Setup (5 minutes)

### Step 1: Sign Up for EmailJS
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email

### Step 2: Connect Your Gmail
1. Click "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Click "Connect Account" and log in with your Gmail account
4. **Copy the Service ID** (e.g., "service_abc123")

### Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Set **Template Name**: "Business Assessment"
3. Set **To Email**: `suptrinitee@gmail.com`
4. Set **Subject**: `Business Assessment Request - {{company}}`
5. Set **Content** to:

```
Hi Trinitee Team,

You have received a new business assessment request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Annual Revenue: {{annual_revenue}}

Business Challenge:
{{challenge}}

---
Sent from Trinitee Website Contact Form
```

6. Click "Save"
7. **Copy the Template ID** (e.g., "template_xyz789")

### Step 4: Get Your Public Key
1. Click "Account" in the left menu
2. Scroll to "API Keys"
3. **Copy your Public Key** (e.g., "abcDEF123xyz")

### Step 5: Update Your .env File
1. Open `.env` in your project root
2. Replace the values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

### Step 6: Restart Your Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## ✅ Test It!
1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Get Assessment"
4. Check `suptrinitee@gmail.com` for the email!

## 📧 Free Plan Limits
- 200 emails per month (free)
- Perfect for small to medium traffic

## 💡 Need Help?
See `EMAIL_SETUP.md` for detailed instructions and troubleshooting.
