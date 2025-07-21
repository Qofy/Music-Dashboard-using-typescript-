# 🎵 AfricanMusic Dashboard

A modern, responsive music streaming dashboard built with React, TypeScript, and SCSS that celebrates African music culture.

![AfricanMusic Dashboard](./public/african-music-logo.webp)

## ✨ Features

### 🎯 Core Features
- **Responsive Design**: Fully responsive across all devices (320px to 4K)
- **Music Player**: Fixed bottom player with playback controls
- **Interactive Slider**: Auto-playing hero slider with trending content
- **Search Functionality**: Global search with intuitive UI
- **Navigation**: Seamless routing with React Router
- **Mobile-First**: Progressive enhancement with mobile menu

### 🎨 Design & UX
- **Dark Theme**: Modern dark UI optimized for music consumption
- **Typography**: Custom font loading with Open Sans
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images and lazy loading

### 📱 Responsive Breakpoints
- **Mobile Small**: 320px and below
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop Small**: 1024px and below
- **Desktop**: 1200px and above
- **Desktop Large**: 1440px and above
- **Desktop XL**: 1920px and above

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Qofy/Music-Dashboard-using-typescript-

# Navigate to project directory
cd Music-Dashboard-using-typescript-

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: SCSS with CSS modules
- **Build Tool**: Vite
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Linting**: ESLint 9

## 📁 Project Structure

```
src/
├── component/          # Reusable UI components
│   ├── Footer.tsx     # Music player footer
│   ├── Logo.tsx       # Brand logo component
│   ├── Slider.tsx     # Hero image slider
│   └── MobileMenuToggle.tsx
├── context/           # React context providers
├── data/             # Static data and constants
├── images/           # Image assets
├── pages/            # Route components
│   ├── Home.tsx      # Main layout
│   ├── Browse.tsx    # Browse music
│   ├── Favorite.tsx  # User favorites
│   └── Library.tsx   # Music library
├── scss/             # Stylesheets
│   ├── abstract/     # Variables, mixins, functions
│   ├── component/    # Component styles
│   ├── context/      # Context styles
│   └── pages/        # Page styles
├── types/            # TypeScript type definitions
└── App.tsx           # Root component
```

## 🎨 Styling Architecture

### SCSS Organization
- **Abstract**: Variables, mixins, and breakpoints
- **Components**: Scoped component styles
- **Pages**: Page-specific styles
- **Responsive**: Mobile-first approach with progressive enhancement

### Key Features
- CSS Grid and Flexbox layouts
- Custom breakpoint system
- Smooth animations and transitions
- Dark theme with semantic color variables

## 📱 Responsive Design

The dashboard is built with a mobile-first approach:

### Mobile Features
- Collapsible navigation menu
- Touch-friendly controls
- Optimized image sizes
- Simplified layouts

### Tablet Features  
- Hybrid navigation
- Adjusted spacing
- Optimized typography

### Desktop Features
- Full sidebar navigation
- Multi-column layouts
- Enhanced hover states
- Keyboard shortcuts

## ♿ Accessibility

- **ARIA Labels**: Comprehensive labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper HTML5 semantics
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Clear focus indicators

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Music-specific schema markup
- **Performance**: Optimized Core Web Vitals

## 🚧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- SCSS for maintainable styles
- Component-based architecture

## 🎵 Music Features

### Player Controls
- Play/Pause functionality
- Skip forward/backward
- Volume control
- Progress bar with seeking
- Repeat and shuffle modes

### Library Management
- Browse by artists, albums, songs
- Favorite tracks
- Playlist creation
- Search functionality

## 🌟 Performance

- **Bundle Size**: Optimized with Vite
- **Images**: WebP format with fallbacks
- **Lazy Loading**: Progressive image loading
- **Code Splitting**: Route-based splitting
- **Caching**: Service worker ready

## 🔧 Customization

### Theme Colors
Modify colors in `src/scss/abstract/variables.scss`:

```scss
$primary-color1: rgb(233, 63, 91);
$secondary-color: rgb(255, 196, 0);
$background-color: #000;
```

### Breakpoints
Adjust responsive breakpoints in `src/scss/abstract/breakpoints.scss`

### Layout
Customize layouts in component-specific SCSS files

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue or contact the development team.

---

Built with ❤️ for African music lovers worldwide 🌍
