# Resume Analyzer Frontend 🚀

The modern React-based frontend for the Resume Analyzer application, providing an intuitive interface for resume analysis, job matching, and section improvement.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-teal)

## ✨ Features

- **Modern React 19 Architecture**: Leveraging the latest React features including hooks and concurrent rendering
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile
- **Component-Based Structure**: Modular components for better code organization and reusability
- **Client-Side Routing**: Seamless navigation with React Router 7
- **Interactive UI**: Engaging user experience with Framer Motion animations
- **Consistent Design System**: Clean, professional look using Tailwind CSS

## 📊 Key Pages

- **Home Page**: Introduction to the tool with features overview
- **Resume Analytics**: Comprehensive resume quality analysis dashboard
- **Resume-Job Analysis**: Compare resume against job descriptions
- **Section Improvement**: AI-powered tools to enhance specific resume sections

## 🛠️ Technologies

- **React 19.1.0**: For building the user interface
- **Vite 7.0.4**: Fast development server and optimized builds
- **React Router DOM 7.7.1**: For handling routing within the application
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **Framer Motion 12.23.12**: For smooth animations and transitions
- **Lucide React 0.528.0**: Beautiful SVG icons

## 📁 Project Structure

```
frontend/
├── public/                # Static files
│   └── favicon.ico        # Site favicon
├── src/                   # Source code
│   ├── assets/            # Images, fonts, and other static assets
│   ├── components/        # Reusable UI components
│   │   ├── FileUpload.jsx # File upload component
│   │   ├── Header.jsx     # Navigation header component
│   │   ├── HeroSection.jsx# Hero section component
│   │   ├── Layout.jsx     # Layout wrapper component
│   │   ├── Results.jsx    # Analysis results component
│   │   └── ScrollToTop.jsx# Utility for scrolling to top
│   ├── pages/             # Application pages
│   │   ├── HomePage.jsx   # Landing page
│   │   ├── ResumeAnalytics.jsx # Resume analytics page
│   │   ├── ResumeJobAnalysisPage.jsx # Resume-job matching page
│   │   └── SectionImprovementPage.jsx # Section improvement page
│   ├── App.css            # Global styles
│   ├── App.jsx            # Main component
│   ├── index.css          # Base styles
│   └── main.jsx           # Application entry point
├── .eslintrc.json         # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/resume-analyzer.git
   cd resume-analyzer/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## 🔗 API Integration

The frontend communicates with the Flask backend through the following endpoints:

### Resume Analysis
```javascript
// Example of uploading a resume for analysis
const formData = new FormData();
formData.append('resume', resumeFile);
formData.append('job_description', jobDescriptionText);

const response = await fetch('http://localhost:5000/analyze', {
  method: 'POST',
  body: formData
});

const analysisData = await response.json();
```

### Section Improvement
```javascript
// Example of requesting section improvement
const response = await fetch('http://localhost:5000/improve-section', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    section_type: 'summary',
    original_text: currentSectionText
  })
});

const improvedSections = await response.json();
```

## 📋 Component Usage

### File Upload
```jsx
import FileUpload from './components/FileUpload';

function MyComponent() {
  const handleFileUploaded = (file) => {
    console.log('File uploaded:', file);
  };

  return <FileUpload onFileUploaded={handleFileUploaded} />;
}
```

### Results Display
```jsx
import Results from './components/Results';

function AnalysisPage() {
  return <Results analysisData={analysisData} />;
}
```

## 🎨 UI/UX Design

The application follows these design principles:

- **Clean and Professional**: Appropriate for a career tool
- **Intuitive Navigation**: Clear paths through the application
- **Visual Hierarchy**: Important information stands out
- **Consistent Feedback**: Users always know what's happening
- **Performance**: Fast loading and responsive interactions

## 🧪 Testing

To run tests:

```bash
npm test
```

## 🔧 Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Responsive Design

The application is designed to work on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 📈 Future Enhancements

- Dark mode support
- Additional language support
- User accounts and saved analyses
- Dashboard for tracking improvements over time
- Resume template library
- Integration with job boards

---

**Made with ❤️ for job seekers worldwide**
