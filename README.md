# Adlane Soltani - Portfolio Website

A modern, production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Mobile-first approach, works on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Contact Form**: Functional contact form with server-side validation
- **Performance**: Optimized images, code splitting, and fast loading times
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **TypeScript**: Type-safe code for better development experience

## 📋 Sections

- **Hero**: Introduction with name, title, and profile photo
- **About**: Personal summary and background
- **Experience**: Work history with detailed descriptions
- **Education**: Academic background
- **Skills**: Technical and soft skills organized by category
- **Projects**: Portfolio of work with live demos
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd adlane-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Email Configuration (for contact form)
RECIPIENT_EMAIL=adlanesoltani@gmail.com
SENDGRID_API_KEY=your_sendgrid_api_key

# WhatsApp Integration (optional)
WHATSAPP_NUMBER=2130658545042

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://adlanesoltani.com
\`\`\`

### Customization

1. **Profile Photo**: Replace the placeholder in `components/hero.tsx` with your actual photo
2. **Resume PDF**: Add your resume PDF to the `public` folder as `resume.pdf`
3. **Content**: Update the content in each component to match your information
4. **Colors**: Modify the color scheme in `app/globals.css` under the `@theme` section
5. **Contact Form**: Implement email sending in `app/api/contact/route.ts`

## 📧 Contact Form Setup

The contact form requires email service integration. Options include:

### Option 1: SendGrid
\`\`\`typescript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
\`\`\`

### Option 2: Resend
\`\`\`typescript
// Install: npm install resend
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
\`\`\`

### Option 3: WhatsApp Redirect
Uncomment the WhatsApp URL generation in `app/api/contact/route.ts`

## 🧪 Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

Run tests in watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Social Links

Update social media links in:
- `components/hero.tsx`
- `components/footer.tsx`

Current links:
- GitHub: https://github.com/adlene1
- LinkedIn: https://www.linkedin.com/in/adlane-soltani/
- Email: adlanesoltani@gmail.com

## 🎨 Design System

### Colors
- **Primary**: Teal (#2DD4BF) - Used for accents and CTAs
- **Background**: Dark Navy (#1A1F2E) - Main background
- **Foreground**: Light Gray (#F8FAFC) - Text color
- **Muted**: Slate Gray - Secondary text

### Typography
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

## 📄 License

© 2025 Adlane Soltani. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📞 Support

For questions or issues, contact: adlanesoltani@gmail.com
