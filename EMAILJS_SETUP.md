# EmailJS Setup Instructions

Follow these steps to configure EmailJS to receive contact form messages:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Choose "Gmail" 
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail account (artvandeth@gmail.com)
5. Note down your **Service ID** (something like "service_xxxxxxx")

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hello Art,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

4. Save the template and note down your **Template ID** (something like "template_xxxxxxx")

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (something like "xxxxxxxxxx")

## 5. Update Environment Variables
Replace the placeholder values in `.env.local` with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your email (artvandeth@gmail.com) for the message

## Security Notes
- EmailJS free plan allows 200 emails/month
- Your public key is safe to expose in client-side code
- Consider upgrading to a paid plan for production use

## Troubleshooting
- Check browser console for any errors
- Verify all environment variables are set correctly
- Make sure your EmailJS service is connected and active
- Check spam folder for test emails
