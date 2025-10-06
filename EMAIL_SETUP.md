# Email Setup Instructions

To receive contact form messages in your email (adlanesoltani@gmail.com), follow these steps:

## 1. Sign up for Resend

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. The free tier includes 3,000 emails/month and 100 emails/day

## 2. Get Your API Key

1. After signing up, go to the [API Keys page](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (it starts with `re_`)

## 3. Add Environment Variable

### For Local Development:
Create a `.env.local` file in your project root and add:
\`\`\`
RESEND_API_KEY=re_your_api_key_here
\`\`\`

### For Vercel Deployment:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
4. Click "Save"

## 4. Verify Your Domain (Optional but Recommended)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Go to [Domains](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain name
4. Add the DNS records provided by Resend to your domain provider
5. Once verified, update the `from` field in `app/api/contact/route.ts`:
   \`\`\`typescript
   from: "Portfolio Contact <contact@yourdomain.com>"
   \`\`\`

## 5. Test the Contact Form

1. Deploy your changes to Vercel
2. Visit your portfolio website
3. Fill out the contact form
4. Check your email at adlanesoltani@gmail.com

## Troubleshooting

- **Not receiving emails?** Check your spam folder
- **API errors?** Verify your API key is correct in environment variables
- **Still not working?** Check the Vercel logs for error messages

## Alternative: Using Gmail SMTP (Not Recommended)

If you prefer to use Gmail directly, you'll need to:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use a library like Nodemailer

However, Resend is recommended because it's more reliable and easier to set up.
