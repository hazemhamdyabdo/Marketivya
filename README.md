# Marketivya Performance Agency

A modern, responsive website for Marketivya Performance Agency built with React, TypeScript, and Vite.

## Features

- 🎨 **Modern UI/UX** - Beautiful, sleek design with smooth animations
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu navigation
- ⚡ **Fast Performance** - Built with Vite for optimal build times and HMR
- 🎭 **Smooth Animations** - Intersection Observer-based reveal animations and parallax effects
- 💬 **WhatsApp Integration** - Floating WhatsApp button for easy contact
- 🎯 **SEO Friendly** - Semantic HTML structure

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via inline classes)

## Project Structure

```
Marketivya/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation bar with mobile hamburger menu
│   ├── SplashScreen.tsx
│   └── WhatsAppFloatButton.tsx
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── HistorySection.tsx
│   ├── VisionMissionSection.tsx
│   ├── ServicesSection.tsx
│   ├── BigPlanSection.tsx
│   ├── CertificatesSection.tsx
│   ├── CategoriesSection.tsx
│   ├── ClientsSection.tsx
│   └── ContactSection.tsx
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── vite.config.ts      # Vite configuration
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Marketivya
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Key Features

### Responsive Navigation
- Desktop: Horizontal navigation bar with all links visible
- Mobile: Hamburger menu with slide-in panel, smooth animations, and auto-close functionality

### Sections
- **Hero** - Main landing section
- **About/History** - Company history and background
- **Vision & Mission** - Company values and goals
- **Services** - Services offered
- **Strategy** - Strategic planning information
- **Certificates** - Company certifications
- **Categories** - Service categories
- **Clients** - Client showcase
- **Contact** - Contact information and form

### Animations
- Scroll-triggered reveal animations
- Parallax scrolling effects
- Smooth transitions and hover effects
- Staggered menu item animations

## Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

The built files in the `dist/` directory can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Marketivya Performance Agency. Dubai • Riyadh • Cairo.
