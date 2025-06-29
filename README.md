# China Highlights Clone

A pixel-perfect clone of the China Highlights travel website, showcasing modern web development practices and responsive design. This project demonstrates the recreation of a complex travel website with authentic styling and functionality.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components
- **Complete Homepage**: Faithful recreation of the China Highlights homepage including:
  - Navigation header with search functionality
  - Hero section with promotional content
  - Featured tours and packages
  - Customer reviews and testimonials
  - Popular destinations showcase
  - Footer with comprehensive links and information
- **Static Export**: Configured for static site generation for optimal performance
- **Performance Optimized**: Fast loading times with optimized images and code splitting

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Development**: Bun package manager
- **Linting**: ESLint + Biome
- **Deployment**: Netlify (configured)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zlc000212/china-highlights-clone.git
cd china-highlights-clone
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
china-highlights-clone/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ClientBody.tsx
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   └── lib/
│       └── utils.ts
├── public/                  # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linting
- `bun export` - Generate static export

## 🌐 Deployment

This project is configured for static export and can be deployed on:

- **Netlify**: Already configured with `netlify.toml`
- **Vercel**: Compatible with Vercel deployment
- **GitHub Pages**: Can be deployed as static site
- **Any static hosting**: Works with any static file hosting service

## 📱 Responsive Design

The clone features a fully responsive design that adapts to:
- **Desktop**: Full-width layout with sidebar navigation
- **Tablet**: Optimized layout for tablet viewing
- **Mobile**: Mobile-first design with hamburger menu

## 🎨 Design Features

- Authentic color scheme matching China Highlights branding
- High-quality imagery and visual elements
- Smooth animations and transitions
- Accessible navigation and user interface
- Professional typography and spacing

## 🛠️ Development Notes

- Uses TypeScript for type safety
- Implements modern React patterns with hooks
- Follows Next.js 15 best practices
- Optimized for performance and SEO
- Configured with proper linting and formatting

## 📄 License

This project is created for educational and demonstration purposes. All design elements are inspired by the original China Highlights website.

## 🤝 Contributing

This is a clone project for educational purposes. Feel free to fork and experiment with your own modifications!

---

**Note**: This is a clone project created for educational purposes to demonstrate web development skills. It is not affiliated with the original China Highlights website.
