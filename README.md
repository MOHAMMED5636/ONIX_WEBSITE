# Onix Engineering Consultancy Website

A modern, professional website for Onix Engineering Consultancy built with Next.js 14, TypeScript, and Tailwind CSS. This website features a responsive design, SEO optimization, and a clean corporate aesthetic.

## Features

- **Modern Design**: Clean, professional layout with corporate styling
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 14 for excellent SEO performance
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Contact Form**: Interactive contact form with validation
- **Hero Section**: Eye-catching hero section with background image overlay
- **Services Section**: Detailed showcase of engineering services
- **Projects Portfolio**: Featured projects with image galleries
- **About Section**: Company information and statistics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onix-engineering-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx             # About section
│   ├── Services.tsx          # Services section
│   ├── Projects.tsx          # Projects portfolio
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **Next/Image**: Optimized image loading
- **Next/Link**: Client-side navigation

## SEO Features

- Comprehensive metadata configuration
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data for search engines
- Optimized images and performance
- Semantic HTML structure

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  }
}
```

### Content
- Update company information in components
- Replace placeholder images with actual project photos
- Modify contact information in the Contact component
- Update social media links in the Footer

### Styling
- Modify `app/globals.css` for global styles
- Update component styles using Tailwind classes
- Add custom CSS for specific design requirements

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Performance

- Optimized images with Next.js Image component
- CSS optimization with Tailwind
- Fast loading with Next.js optimizations
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.