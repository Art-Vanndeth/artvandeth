# Quick EmailJS Setup for Art Vandeth

## Step 1: Create EmailJS Account (5 minutes)
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create account with your email
3. Verify your email address

## Step 2: Connect Your Gmail (2 minutes)
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account"
5. Sign in with artvandeth@gmail.com
6. Allow EmailJS permissions
7. **Copy your Service ID** (looks like "service_xxxxxxx")

## Step 3: Create Email Template (3 minutes)
1. Go to "Email Templates"
2. Click "Create New Template"
3. Template Name: "Portfolio Contact Form"
4. **Subject**: `New Contact: {{subject}}`
5. **Content**:
```
Hi Art,

New message from your portfolio:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from artvandeth.dev
```
6. Click "Save"
7. **Copy your Template ID** (looks like "template_xxxxxxx")

## Step 4: Get Public Key (1 minute)
1. Go to "Account" → "General"
2. **Copy your Public Key** (looks like a random string)

## Step 5: Update Your .env.local
Replace the values in `/Users/vanndeth/Documents/Projects/artvandeth/.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## Step 6: Test
1. Save the .env.local file
2. Restart your dev server: `npm run dev`
3. Test the contact form
4. Check artvandeth@gmail.com for the email!

---
**Current Status**: Form works but emails aren't sent until you complete the setup above.
