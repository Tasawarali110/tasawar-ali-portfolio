# Dynamic Full-Stack Portfolio - Data Science Graduate

A modern, interactive portfolio website showcasing data science projects, technical skills, and blog posts with real-time data visualization and full-stack functionality.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Supabase
- **Interactive Visualizations**: Real-time data charts using Recharts
- **Smooth Animations**: Framer Motion for engaging transitions and scroll effects
- **Dynamic Content**: Projects, blog posts, and skills loaded from backend
- **Full-Stack Architecture**: Supabase Edge Functions with Hono web server
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Contact Form**: Functional form with backend integration
- **View Tracking**: Real-time view counters for projects and blog posts
- **Professional UI**: Dark theme with modern gradient accents

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Me**: Personal story with stats and achievements
3. **Skills & Technologies**: Interactive radar chart and categorized skill lists
4. **Featured Projects**: Detailed case studies with live data visualizations
5. **Technical Blog**: Filterable blog posts with tags
6. **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

### Frontend
- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **Lucide React** for icons
- **Shadcn UI** components

### Backend
- **Supabase** (PostgreSQL database)
- **Deno** runtime for edge functions
- **Hono** web framework
- **Key-Value Store** for data persistence

## 📦 Installation

This portfolio is deployed on Figma Make and is ready to use. The backend is automatically configured and running.

### Environment Variables

The following environment variables are automatically configured in the Figma Make environment:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Public anonymous key for client-side access
- `SUPABASE_SERVICE_ROLE_KEY`: Service role key for server-side operations

## 🎨 Customization Guide

### 1. Personal Information

Update the following in the components:

**Hero.tsx**:
- Replace `Your Name` with your actual name
- Update the tagline and elevator pitch
- Change social links (GitHub, LinkedIn, Email)

**About.tsx**:
- Update the about text with your story
- Replace `Your University` with your university name
- Update the profile image
- Modify stats to reflect your achievements

**Contact.tsx**:
- Update all contact information (email, LinkedIn, GitHub)
- Change location information
- Customize availability status

**Footer.tsx**:
- Update the name and social links

### 2. Projects

Projects are stored in the backend and can be modified in `/supabase/functions/server/index.tsx`:

```typescript
const projects = [
  {
    id: 'your-project-id',
    title: 'Your Project Title',
    description: 'Brief description',
    challenge: 'Problem statement',
    solution: 'Your technical approach',
    techStack: ['Python', 'TensorFlow', 'Docker'],
    outcome: 'Results and impact',
    visualizationData: { /* Chart data */ },
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    views: 0
  }
];
```

### 3. Skills

Update skills in the backend initialization:

```typescript
const skills = {
  'Category Name': [
    { name: 'Skill Name', level: 90 },
    // Add more skills
  ]
};
```

### 4. Blog Posts

Add or modify blog posts in the backend:

```typescript
const blogPosts = [
  {
    id: 'post-slug',
    title: 'Post Title',
    excerpt: 'Brief summary',
    content: 'Full content...',
    date: '2024-11-18',
    tags: ['Tag1', 'Tag2'],
    views: 0
  }
];
```

### 5. Styling

The portfolio uses a dark theme with blue and green accent colors. To customize:

- **Primary Color**: Blue (#3b82f6) - Update in components
- **Accent Color**: Green (#10b981) - Update in gradients
- **Background**: Slate-950/900 - Tailwind classes

### 6. Images

Replace placeholder images:
- Profile image in About.tsx
- Update Unsplash queries for different backgrounds
- Add project screenshots in visualizations

## 📊 Data Visualization Types

The portfolio includes multiple visualization types:

1. **Sentiment Analysis**: Stacked area chart showing positive/neutral/negative trends
2. **Predictive Maintenance**: Bar chart with equipment health scores
3. **Customer Segmentation**: Pie chart with segment distribution
4. **Performance Metrics**: Horizontal bar chart with model metrics

Add custom visualizations in `ProjectVisualization.tsx`.

## 🔧 Backend API Endpoints

The backend provides the following endpoints:

- `GET /make-server-d2736b77/health` - Health check
- `GET /make-server-d2736b77/skills` - Fetch all skills
- `GET /make-server-d2736b77/projects` - Fetch all projects
- `GET /make-server-d2736b77/projects/:id` - Fetch single project (increments views)
- `GET /make-server-d2736b77/blog` - Fetch all blog posts
- `GET /make-server-d2736b77/blog/:id` - Fetch single blog post (increments views)
- `POST /make-server-d2736b77/contact` - Submit contact form
- `GET /make-server-d2736b77/github-stats` - Fetch GitHub statistics

## 🚀 Deployment Tips

For production deployment beyond Figma Make:

1. **Vercel** (Recommended):
   - Perfect for Next.js/React apps
   - Automatic CI/CD with GitHub
   - Edge functions support

2. **Netlify**:
   - Easy continuous deployment
   - Form handling built-in
   - CDN acceleration

3. **Custom Domain**:
   - Purchase a domain (e.g., yourname.dev)
   - Configure DNS settings
   - Add SSL certificate (automatic on Vercel/Netlify)

4. **Environment Variables**:
   - Set up Supabase project at supabase.com
   - Configure environment variables in deployment platform
   - Never commit sensitive keys to Git

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Performance Optimizations

- Lazy loading for images
- Code splitting for components
- Optimized animations with Framer Motion
- Efficient data fetching
- Minimal re-renders with React best practices

## 🎯 SEO Considerations

For better SEO when deploying:
- Add meta tags in HTML head
- Include Open Graph tags for social sharing
- Create a sitemap.xml
- Add structured data (JSON-LD)
- Optimize images with alt texts
- Use semantic HTML

## 📝 Content Management

The portfolio uses a simple backend storage system. For easier content management:

1. **Current Setup**: Edit data in `/supabase/functions/server/index.tsx`
2. **Future Enhancement**: Integrate Decap CMS for Git-based content management
3. **Alternative**: Build a custom admin panel with authentication

## 🐛 Troubleshooting

### Contact form not working
- Check browser console for error messages
- Verify backend endpoint is accessible
- Ensure all required fields are filled

### Visualizations not displaying
- Check if data format matches expected structure
- Verify Recharts is properly imported
- Check browser console for errors

### Slow loading
- Optimize images (use WebP format)
- Reduce animation complexity
- Check network tab for slow requests

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome!

## 📞 Support

For questions or issues:
- Check the code comments for guidance
- Review the component structure
- Refer to official documentation for libraries used

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Supabase**

*Last Updated: November 2024*
