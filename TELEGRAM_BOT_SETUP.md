# 🤖 Telegram Bot Setup Guide

## ✅ Your Current Configuration

Good news! You've already set up your Telegram bot with these credentials:
- **Bot Token**: `7725625733:AAEz8VfwZ3oedq-uD6uhFV-i93pDdqSsDTQ`
- **Chat ID**: `834607224`

Your contact form should now be sending messages directly to your Telegram!

---

## 📱 Complete Setup Guide (For Reference)

### Step 1: Create a Telegram Bot

#### 1.1 Chat with BotFather
1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather
3. Send `/start` to begin

#### 1.2 Create your bot
1. Send `/newbot` to BotFather
2. Choose a name for your bot (e.g., "Art Vandeth Contact Bot")
3. Choose a username for your bot (e.g., "artvandeth_contact_bot")
4. **Copy the Bot Token** that looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

### Step 2: Get Your Chat ID

#### Option A: Using IDBot (Recommended)
1. Search for `@myidbot` in Telegram
2. Start a chat and send `/getid`
3. **Copy your Chat ID** (a number like: `123456789`)

#### Option B: Using userinfobot
1. Search for `@userinfobot` in Telegram
2. Start the bot and it will show your user ID
3. Copy the ID number

#### Option C: Manual method
1. Start a chat with your newly created bot
2. Send any message to your bot (like "Hello")
3. Open this URL in your browser (replace YOUR_BOT_TOKEN with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response and copy that ID

### Step 3: Test Your Bot

You can test if your bot is working by sending a test message:

1. **Test via Browser** (Optional):
   Open this URL in your browser (replace with your actual values):
   ```
   https://api.telegram.org/bot7725625733:AAEz8VfwZ3oedq-uD6uhFV-i93pDdqSsDTQ/sendMessage?chat_id=834607224&text=Test%20message%20from%20bot
   ```

2. **Test via Contact Form**:
   - Start your development server: `npm run dev`
   - Go to your contact form
   - Fill out all fields and submit
   - Check your Telegram for the message!

---

## 🔧 Troubleshooting

### Common Issues and Solutions:

#### ❌ "401 Unauthorized"
- **Problem**: Invalid bot token
- **Solution**: Double-check your bot token from BotFather

#### ❌ "400 Bad Request" 
- **Problem**: Invalid chat ID or the bot hasn't been started
- **Solution**: 
  1. Make sure you've sent at least one message to your bot first
  2. Verify your chat ID is correct

#### ❌ "Message not received"
- **Problem**: Bot not started by user
- **Solution**: Go to your bot in Telegram and click "START" or send any message

#### ❌ "Network Error"
- **Problem**: Internet connection or Telegram API issues
- **Solution**: Check your internet connection and try again

### Verification Steps:

1. **Check if bot exists**: Search for your bot username in Telegram
2. **Check if bot is started**: Send a message to your bot manually
3. **Verify credentials**: Make sure your token and chat ID are correct in `.env.local`
4. **Restart server**: After updating `.env.local`, restart your dev server

---

## 📋 Environment Variables Reference

Your `.env.local` should contain:

```bash
# Telegram Bot Configuration
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

**Your current values** (already configured):
```bash
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=7725625733:AAEz8VfwZ3oedq-uD6uhFV-i93pDdqSsDTQ
NEXT_PUBLIC_TELEGRAM_CHAT_ID=834607224
```

---

## 📱 Message Format

When someone submits your contact form, you'll receive a formatted message like:

```
🔥 New Contact Form Message

👤 From: John Doe
📧 Email: john@example.com
📝 Subject: Project Inquiry

💬 Message:
Hi Art, I'd like to discuss a web development project with you. I'm looking for someone to build a modern e-commerce website...

---
📅 Sent: 5/30/2025, 10:45:23 AM
🌐 From: artvandeth.dev
```

---

## 🚀 Next Steps

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Test the contact form**:
   - Navigate to your portfolio contact section
   - Fill out all required fields
   - Click "Send Message"
   - Check your Telegram for the instant notification!

3. **Deploy to production**:
   - Make sure to add the same environment variables to your production deployment
   - Test the live contact form

---

## 🔒 Security Notes

- ✅ **Bot tokens are safe** to use in client-side code for sending messages
- ✅ **Only you receive messages** using your specific Chat ID
- ✅ **Free and unlimited** messages through Telegram Bot API
- ✅ **No sensitive data exposure** - only sends form data to your Telegram

## 🎯 Benefits

- **⚡ Instant notifications** on your phone/desktop
- **🚫 No spam folder** issues like with email
- **🎨 Rich formatting** with emojis and structure
- **💬 Easy to respond** directly from Telegram
- **📱 Mobile-friendly** - perfect for quick responses
- **🆓 Completely free** - no API limits for basic usage