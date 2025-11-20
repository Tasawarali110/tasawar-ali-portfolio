# Tasawar Ali - Portfolio Website

A modern, responsive portfolio website showcasing your Data Science expertise, projects, and professional experience.

## 🎯 Features

- **Hero Section**: Eye-catching introduction with your name, title, and social links
- **About Section**: Professional summary highlighting your background and achievements
- **Skills Section**: Interactive visualization of your technical skills and expertise
- **Projects Section**: Showcase of your key projects including:
  - HarborHelper AI Chatbot
  - Cryptocurrency Market Prediction using RL
  - Handwritten Digit Recognition
  - Sentiment Analysis System
- **Experience Section**: Timeline of your work experience and certifications
- **Contact Section**: Contact form and information for potential employers

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📝 Customization

### Personal Information
All your personal information is centralized in `src/data/portfolio-data.ts`. You can easily update:
- Contact details
- Projects
- Work experience
- Education
- Certifications
- Skills

### Adding New Projects

Edit `src/data/portfolio-data.ts` and add a new project object to the `projects` array:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Brief description",
  challenge: "What problem did you solve?",
  solution: "How did you solve it?",
  outcome: "What were the results?",
  techStack: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  featured: true
}
```

### Updating Skills

Modify the `skills` object in `src/data/portfolio-data.ts`:

```typescript
"Category Name": [
  { name: "Skill Name", level: 90 }
]
```

### Social Links

Update your social media links in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## 🎨 Color Scheme

The portfolio uses a modern dark theme with blue and green accents:
- Primary: Blue (#3b82f6)
- Secondary: Green (#10b981)
- Background: Slate (#0f172a, #1e293b)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Radix UI

## 📦 Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Experience.tsx     # Work experience & awards
│   ├── Contact.tsx        # Contact form
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer section
│   └── ui/                # Reusable UI components
├── data/
│   └── portfolio-data.ts  # All portfolio content
├── App.tsx                # Main app component
└── main.tsx              # Entry point
```

## 🌟 Key Highlights

### Your Achievements
- Bachelor of Computer Science with Honours (Data Science)
- MIV Excellence Award 2023
- Project Leader at MilV ICT Volunteer Malaysia
- Data Science Intern at Albukhary International University
- Multilingual: Fluent in 6 languages
- Connected with people from 56+ countries

### Featured Projects
1. **HarborHelper AI Chatbot** - AI-powered training assistant for seaport operations
2. **Crypto RL Prediction** - Reinforcement Learning model for Bitcoin trading
3. **Digit Recognition** - Deep Neural Network for handwritten digit classification
4. **Sentiment Analysis** - Emotion classification from text data

## 📧 Contact Information

- **Email**: alitasawar605@gmail.com
- **Phone**: +60 112 145 0810
- **Location**: Alor Setar, Kedah, Malaysia
- **LinkedIn**: [tasawar.ali.linkedin](https://linkedin.com/in/tasawar.ali.linkedin)
- **GitHub**: [tasawarali](https://github.com/tasawarali)

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 📄 License

This portfolio is personalized for Tasawar Ali. Feel free to use the structure as inspiration for your own portfolio.

## 🤝 Support

For any questions or issues, please contact: alitasawar605@gmail.com

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
