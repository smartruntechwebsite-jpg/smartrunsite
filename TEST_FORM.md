# Contact Form Testing Guide

## Quick Debugging Steps

### 1. Open Browser Developer Console
- Press `F12` or right-click → Inspect
- Go to **Console** tab
- Look for these log messages:

```
✅ EmailJS is available
DOMContentLoaded event fired
Form found: true
Contact form event listener attached successfully
🚀 sendMail function called
Sending email with EmailJS...
```

### 2. Check Console for Errors
Red error messages indicate issues with:
- Form elements not found
- EmailJS not loading
- Invalid configuration

### 3. Test Form Submission

**Fill all fields:**
- Full Name: Test User
- Your Email: your-email@gmail.com
- Your Phone: 1234567890
- Subject: Test Subject
- Comment: Test message

**Click "Send a Message" button**

**Expected behavior:**
1. Button shows "Sending..."
2. Loader spinner appears
3. Console shows: "🚀 sendMail function called"
4. Console shows: "Sending email with EmailJS..."
5. Success message appears
6. Form is reset

### 4. If Nothing Happens

**Check:**
1. Open console to see errors
2. Verify network tab - should see request to emailjs API
3. Check that EmailJS library loaded: `typeof emailjs !== 'undefined'`

### 5. Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Button doesn't respond | Clear browser cache and reload |
| Console shows "emailjs undefined" | EmailJS CDN didn't load - check internet |
| "Form elements not found" | Page didn't load properly - refresh |
| Network error from EmailJS | Check service/template IDs in code |

## EmailJS Configuration

- **Public Key:** zTJWI5CvtaW6ah9Hc
- **Service ID:** service_z6yokh1
- **Template ID:** template_vaoet4s

## Local Testing

```bash
# Start server
python -m http.server 8000

# Access at
http://localhost:8000/contact-us
```

## After Fix - Redeploy Steps

1. Commit changes to git
2. Push to Vercel (auto-deploys)
3. Open Vercel app URL
4. Open browser console (F12)
5. Test form submission
6. Check console for success messages
