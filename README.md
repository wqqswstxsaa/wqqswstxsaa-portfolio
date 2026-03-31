# Alex Developer Portfolio

A modern, interactive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, neon effects, and a stunning animated gradient background.

## Features

- **Animated Gradient Background** - Beautiful shifting gradient that creates an immersive visual experience
- **Neon Effects** - Glowing neon borders and text effects for a cyberpunk aesthetic
- **Smooth Animations** - All interactions are animated using Framer Motion
- **Responsive Design** - Fully responsive layout that works on mobile, tablet, and desktop
- **Interactive Elements** - Hover effects, click animations, and scroll-triggered reveals
- **Sections**:
  - Home - Welcome message and call-to-action
  - About - Bio, skills with progress bars, location
  - Projects - Project cards with descriptions and links
  - Contact - Contact form and social links

## Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── utils/           # Utility functions
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## Customization

### Changing Personal Information

Edit the following in `src/App.tsx`:

- Name: Update "Alex Developer" in the sidebar and footer
- Title: Update "Full Stack Developer"
- Bio: Modify the text in the About section
- Skills: Adjust the `skills` array with your skills and proficiency levels
- Projects: Update the `projects` array with your projects

### Changing Colors

The color scheme uses cyan as the primary accent color. To modify:

1. Find all instances of `cyan-` in the Tailwind classes
2. Replace with your preferred color (e.g., `purple-`, `green-`, `pink-`)

### Social Links

Update the `socialLinks` array with your actual social media profiles.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Alex Developer - Full Stack Developer
