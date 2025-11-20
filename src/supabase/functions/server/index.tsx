import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors());
app.use('*', logger(console.log));

// Initialize data on first run
async function initializeData() {
  const existing = await kv.get('portfolio_initialized');
  if (existing) return;

  // Initialize Skills
  const skills = {
    'Data Analysis & Visualization': [
      { name: 'Python (Pandas, NumPy)', level: 90 },
      { name: 'Matplotlib & Seaborn', level: 85 },
      { name: 'R', level: 75 },
      { name: 'Tableau', level: 80 },
      { name: 'Plotly', level: 85 }
    ],
    'Machine Learning': [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Model Deployment', level: 85 }
    ],
    'Databases': [
      { name: 'SQL (PostgreSQL, MySQL)', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 }
    ],
    'Backend & Tools': [
      { name: 'Node.js', level: 85 },
      { name: 'Flask/FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 75 },
      { name: 'Jupyter', level: 90 }
    ]
  };

  // Initialize Projects
  const projects = [
    {
      id: 'sentiment-analysis',
      title: 'Real-Time Sentiment Analysis Dashboard',
      description: 'An end-to-end NLP pipeline analyzing Twitter sentiment in real-time with interactive visualizations.',
      challenge: 'Social media generates massive amounts of unstructured text data. Companies need to understand public sentiment about their brand, products, or industry trends quickly and accurately.',
      solution: 'Built a complete pipeline using Python (NLTK, spaCy) for text preprocessing, fine-tuned a BERT model for sentiment classification, and deployed it with Flask. Created an interactive dashboard using Plotly Dash for real-time visualization of sentiment trends, word clouds, and topic modeling.',
      techStack: ['Python', 'BERT', 'Flask', 'Plotly Dash', 'PostgreSQL', 'Docker'],
      outcome: 'Achieved 91% accuracy on sentiment classification. Dashboard processes 1000+ tweets per minute with sub-second latency.',
      visualizationData: {
        type: 'sentiment',
        sentiments: [
          { time: '00:00', positive: 45, neutral: 30, negative: 25 },
          { time: '04:00', positive: 52, neutral: 28, negative: 20 },
          { time: '08:00', positive: 60, neutral: 25, negative: 15 },
          { time: '12:00', positive: 58, neutral: 27, negative: 15 },
          { time: '16:00', positive: 55, neutral: 30, negative: 15 },
          { time: '20:00', positive: 50, neutral: 32, negative: 18 }
        ]
      },
      githubUrl: 'https://github.com/yourusername/sentiment-dashboard',
      liveUrl: 'https://sentiment-demo.vercel.app',
      views: 0
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance ML System',
      description: 'Machine learning system predicting equipment failure 48 hours in advance using IoT sensor data.',
      challenge: 'Manufacturing equipment failures cause costly downtime. Traditional reactive maintenance is inefficient, while preventive maintenance wastes resources on unnecessary checks.',
      solution: 'Developed a Random Forest classifier trained on 2 years of sensor data (temperature, vibration, pressure). Implemented feature engineering to extract rolling statistics and frequency domain features. Used SHAP values for model explainability to help maintenance teams understand failure predictions.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'SHAP', 'FastAPI', 'TimescaleDB'],
      outcome: '94% precision in predicting failures 48 hours ahead. Reduced unplanned downtime by 35% in pilot deployment.',
      visualizationData: {
        type: 'prediction',
        predictions: [
          { equipment: 'Pump A', health: 92, prediction: 'Healthy', confidence: 95 },
          { equipment: 'Motor B', health: 45, prediction: 'Warning', confidence: 87 },
          { equipment: 'Conveyor C', health: 15, prediction: 'Critical', confidence: 92 },
          { equipment: 'Press D', health: 78, prediction: 'Healthy', confidence: 89 },
          { equipment: 'Robot E', health: 55, prediction: 'Warning', confidence: 82 }
        ]
      },
      githubUrl: 'https://github.com/yourusername/predictive-maintenance',
      liveUrl: null,
      views: 0
    },
    {
      id: 'customer-segmentation',
      title: 'Customer Segmentation & Recommendation Engine',
      description: 'K-means clustering and collaborative filtering system for personalized product recommendations.',
      challenge: 'E-commerce platforms struggle with generic recommendations that don\'t account for diverse customer behaviors and preferences, leading to low conversion rates.',
      solution: 'Applied K-means clustering on customer transaction data to identify 5 distinct segments. Built a hybrid recommendation system combining collaborative filtering (SVD) and content-based filtering. A/B tested different recommendation strategies.',
      techStack: ['Python', 'Scikit-learn', 'Surprise', 'MongoDB', 'React', 'D3.js'],
      outcome: 'Increased click-through rate by 28% and average order value by 15%. Segmentation revealed valuable insights for marketing campaigns.',
      visualizationData: {
        type: 'segmentation',
        segments: [
          { name: 'High Value', value: 15, color: '#10b981' },
          { name: 'Frequent Buyers', value: 25, color: '#3b82f6' },
          { name: 'Occasional', value: 30, color: '#f59e0b' },
          { name: 'Discount Seekers', value: 20, color: '#8b5cf6' },
          { name: 'New Customers', value: 10, color: '#ef4444' }
        ]
      },
      githubUrl: 'https://github.com/yourusername/customer-segmentation',
      liveUrl: 'https://customer-demo.vercel.app',
      views: 0
    },
    {
      id: 'image-classification',
      title: 'Medical Image Classification with CNNs',
      description: 'Deep learning model for detecting pneumonia from chest X-rays with 96% accuracy.',
      challenge: 'Rapid, accurate diagnosis of pneumonia from X-rays is critical but time-consuming for radiologists. Needed a reliable AI assistant to help with initial screening.',
      solution: 'Fine-tuned a ResNet-50 CNN on 5,800 chest X-ray images. Implemented data augmentation to handle class imbalance. Used Grad-CAM for visualization to show which regions the model focuses on, ensuring clinical interpretability.',
      techStack: ['PyTorch', 'Python', 'OpenCV', 'FastAPI', 'React', 'TensorBoard'],
      outcome: '96% accuracy, 98% sensitivity. Grad-CAM visualizations validated that the model focuses on clinically relevant lung regions.',
      visualizationData: {
        type: 'performance',
        metrics: [
          { metric: 'Accuracy', value: 96 },
          { metric: 'Precision', value: 95 },
          { metric: 'Recall', value: 98 },
          { metric: 'F1-Score', value: 96.5 }
        ]
      },
      githubUrl: 'https://github.com/yourusername/medical-image-classification',
      liveUrl: null,
      views: 0
    }
  ];

  // Initialize Blog Posts
  const blogPosts = [
    {
      id: 'understanding-transformers',
      title: 'Understanding Transformers: From Attention to BERT',
      excerpt: 'A deep dive into the transformer architecture that revolutionized NLP, exploring self-attention mechanisms and why they work so well.',
      content: 'Full blog content here...',
      date: '2024-10-15',
      tags: ['NLP', 'Deep Learning', 'Transformers'],
      views: 0
    },
    {
      id: 'feature-engineering-tips',
      title: '10 Feature Engineering Techniques That Actually Work',
      excerpt: 'Practical feature engineering methods I\'ve used in production ML systems, with code examples and real-world results.',
      content: 'Full blog content here...',
      date: '2024-09-22',
      tags: ['Machine Learning', 'Feature Engineering', 'Tutorial'],
      views: 0
    },
    {
      id: 'deploying-ml-models',
      title: 'Deploying ML Models to Production: A Practical Guide',
      excerpt: 'Lessons learned from deploying multiple ML models to production, covering containerization, monitoring, and CI/CD.',
      content: 'Full blog content here...',
      date: '2024-08-10',
      tags: ['MLOps', 'Deployment', 'Best Practices'],
      views: 0
    },
    {
      id: 'time-series-forecasting',
      title: 'Time Series Forecasting: Beyond ARIMA',
      excerpt: 'Exploring modern approaches to time series forecasting including Prophet, LSTM networks, and ensemble methods.',
      content: 'Full blog content here...',
      date: '2024-07-05',
      tags: ['Time Series', 'Forecasting', 'Tutorial'],
      views: 0
    }
  ];

  // Store data
  await kv.set('skills', JSON.stringify(skills));
  for (const project of projects) {
    await kv.set(`project:${project.id}`, JSON.stringify(project));
  }
  await kv.set('project_ids', JSON.stringify(projects.map(p => p.id)));
  
  for (const post of blogPosts) {
    await kv.set(`blog:${post.id}`, JSON.stringify(post));
  }
  await kv.set('blog_ids', JSON.stringify(blogPosts.map(p => p.id)));
  
  await kv.set('portfolio_initialized', 'true');
  console.log('Portfolio data initialized');
}

// Initialize data on startup
initializeData().catch(console.error);

// Routes
app.get('/make-server-d2736b77/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Get all skills
app.get('/make-server-d2736b77/skills', async (c) => {
  try {
    const skills = await kv.get('skills');
    return c.json(skills ? JSON.parse(skills) : {});
  } catch (error) {
    console.log('Error fetching skills:', error);
    return c.json({ error: 'Failed to fetch skills' }, 500);
  }
});

// Get all projects
app.get('/make-server-d2736b77/projects', async (c) => {
  try {
    const projectIds = await kv.get('project_ids');
    if (!projectIds) return c.json([]);
    
    const ids = JSON.parse(projectIds);
    const projects = await kv.mget(ids.map(id => `project:${id}`));
    
    return c.json(projects.map(p => JSON.parse(p)));
  } catch (error) {
    console.log('Error fetching projects:', error);
    return c.json({ error: 'Failed to fetch projects' }, 500);
  }
});

// Get single project
app.get('/make-server-d2736b77/projects/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const project = await kv.get(`project:${id}`);
    
    if (!project) {
      return c.json({ error: 'Project not found' }, 404);
    }
    
    // Increment view count
    const projectData = JSON.parse(project);
    projectData.views = (projectData.views || 0) + 1;
    await kv.set(`project:${id}`, JSON.stringify(projectData));
    
    return c.json(projectData);
  } catch (error) {
    console.log('Error fetching project:', error);
    return c.json({ error: 'Failed to fetch project' }, 500);
  }
});

// Get all blog posts
app.get('/make-server-d2736b77/blog', async (c) => {
  try {
    const blogIds = await kv.get('blog_ids');
    if (!blogIds) return c.json([]);
    
    const ids = JSON.parse(blogIds);
    const posts = await kv.mget(ids.map(id => `blog:${id}`));
    
    const parsedPosts = posts.map(p => JSON.parse(p));
    // Sort by date descending
    parsedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return c.json(parsedPosts);
  } catch (error) {
    console.log('Error fetching blog posts:', error);
    return c.json({ error: 'Failed to fetch blog posts' }, 500);
  }
});

// Get single blog post
app.get('/make-server-d2736b77/blog/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const post = await kv.get(`blog:${id}`);
    
    if (!post) {
      return c.json({ error: 'Blog post not found' }, 404);
    }
    
    // Increment view count
    const postData = JSON.parse(post);
    postData.views = (postData.views || 0) + 1;
    await kv.set(`blog:${id}`, JSON.stringify(postData));
    
    return c.json(postData);
  } catch (error) {
    console.log('Error fetching blog post:', error);
    return c.json({ error: 'Failed to fetch blog post' }, 500);
  }
});

// Submit contact form
app.post('/make-server-d2736b77/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    // Store submission
    const submissionId = `contact:${Date.now()}`;
    const submission = {
      id: submissionId,
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };
    
    await kv.set(submissionId, JSON.stringify(submission));
    
    console.log('Contact form submission:', submission);
    
    return c.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });
  } catch (error) {
    console.log('Error submitting contact form:', error);
    return c.json({ error: 'Failed to submit contact form' }, 500);
  }
});

// Get GitHub stats (mock for now, you can integrate real GitHub API)
app.get('/make-server-d2736b77/github-stats', async (c) => {
  try {
    // In production, you would fetch from GitHub API
    // For now, returning mock data
    const stats = {
      repositories: [
        { name: 'sentiment-analysis-dashboard', stars: 45, language: 'Python' },
        { name: 'predictive-maintenance-ml', stars: 32, language: 'Python' },
        { name: 'customer-segmentation', stars: 28, language: 'Python' },
        { name: 'medical-image-classifier', stars: 51, language: 'PyTorch' }
      ],
      totalStars: 156,
      totalRepos: 24
    };
    
    return c.json(stats);
  } catch (error) {
    console.log('Error fetching GitHub stats:', error);
    return c.json({ error: 'Failed to fetch GitHub stats' }, 500);
  }
});

Deno.serve(app.fetch);
