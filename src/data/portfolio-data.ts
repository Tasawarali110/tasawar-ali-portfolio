// Portfolio data for Tasawar Ali

export const personalInfo = {
  name: "Tasawar Ali",
  title: "Data Science Graduate",
  subtitle: "AI & Machine Learning Specialist",
  email: "alitasawar605@gmail.com",
  phone: "+60 112 145 0810",
  location: "Alor Setar, Kedah, Malaysia",
  linkedin: "https://www.linkedin.com/in/tasawar-ali-878497218",
  github: "https://github.com/Tasawarali110",
  nationality: "Pakistani",
  languages: [
    { name: "Urdu", level: "Native" },
    { name: "Sindhi", level: "Native" },
    { name: "English", level: "Proficient (C1/C2)" },
    { name: "Hindi", level: "Proficient (C1/C2)" },
    { name: "Punjabi", level: "Proficient (C1/C2)" }
  ]
};

export const projects = [
  {
    id: "harborhelper",
    title: "HarborHelper AI Chatbot",
    description: "AI-powered chatbot for training and assisting operators in seaport container inspection",
    challenge: "Seaport operators needed an intelligent training system that could provide context-aware guidance for container inspection procedures, reducing training time and improving operational efficiency.",
    solution: "Developed an NLP-based chatbot using intent classification and context-aware response generation. Implemented transformer models (GPT-3/GPT-4) for natural language understanding. Designed and debugged complex JSON datasets for seamless integration with inspection workflows.",
    outcome: "Successfully created an intelligent training assistant that understands operator queries and provides accurate, context-specific guidance. Thesis project demonstrating end-to-end AI system development.",
    techStack: ["Python", "NLP", "GPT-3", "GPT-4", "Intent Classification", "JSON", "TensorFlow"],
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "crypto-rl",
    title: "Cryptocurrency Market Prediction using Reinforcement Learning",
    description: "Predictive model for Bitcoin trading using advanced Reinforcement Learning algorithms",
    challenge: "Cryptocurrency markets are highly volatile and unpredictable. Traditional forecasting methods struggle with the complex, non-linear patterns in high-frequency trading data.",
    solution: "Developed a Proximal Policy Optimization (PPO) algorithm to predict Bitcoin price movements. Processed high-frequency data from Yahoo Finance, trained the model on over 1 million timesteps, and engineered features including RSI, MACD, and market sentiment indicators.",
    outcome: "Created a robust RL model capable of learning optimal trading strategies from market data. Demonstrated proficiency in advanced machine learning techniques and financial data analysis.",
    techStack: ["Python", "Reinforcement Learning", "PPO", "PyTorch", "Pandas", "NumPy", "Yahoo Finance API"],
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "digit-recognition",
    title: "Handwritten Digit Recognition",
    description: "Deep Neural Network for classifying handwritten digits with high accuracy",
    challenge: "Build an accurate image classification system that can recognize handwritten digits from the MNIST dataset, handling variations in writing styles and image quality.",
    solution: "Implemented a Deep Neural Network (DNN) using Keras and TensorFlow. Applied image preprocessing techniques with OpenCV including normalization, noise reduction, and data augmentation to improve model robustness.",
    outcome: "Achieved high classification accuracy on the MNIST dataset. Gained hands-on experience with computer vision, deep learning architectures, and image preprocessing pipelines.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning", "MNIST", "NumPy"],
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis of Emotional States",
    description: "Machine learning system for classifying emotions from text data",
    challenge: "Develop a system capable of understanding and classifying complex emotional states from textual data, going beyond simple positive/negative sentiment.",
    solution: "Built a multi-class emotion classification system using Logistic Regression and Random Forest algorithms. Implemented comprehensive data preprocessing, feature engineering with TF-IDF, and created visualizations including WordClouds to understand emotional patterns.",
    outcome: "Successfully classified multiple emotional states with strong accuracy. Demonstrated expertise in NLP, feature engineering, and model evaluation techniques.",
    techStack: ["Python", "Scikit-learn", "NLP", "Logistic Regression", "Random Forest", "TF-IDF", "Matplotlib", "WordCloud"],
    githubUrl: null,
    liveUrl: null,
    featured: true
  }
];

export const experience = [
  {
    id: "aiu-intern",
    title: "Data Science Intern",
    company: "School of Computing and Informatics, Albukhary International University",
    location: "Alor Setar, Malaysia",
    period: "Apr 2025 – Oct 2025",
    description: "Applied machine learning and statistical analysis techniques to real-world data under faculty supervision.",
    responsibilities: [
      "Gained practical, end-to-end experience in the data science lifecycle",
      "Worked on data collection, preprocessing, model development, validation, and deployment",
      "Collaborated within an academic team to solve complex problems",
      "Enhanced technical proficiency and teamwork abilities"
    ],
    current: true
  },
  {
    id: "milv-leader",
    title: "Project Leader",
    company: "MilV ICT Volunteer Malaysia",
    location: "Malaysia",
    period: "Oct 2023 – Present",
    description: "Led volunteer initiative to teach technical skills to students in rural communities.",
    responsibilities: [
      "Led a volunteer initiative teaching coding and digital literacy to primary and high school students",
      "Designed and conducted engaging workshops in rural communities",
      "Empowered students with essential IT knowledge and problem-solving capabilities",
      "Developed strong leadership, communication, and project management skills"
    ],
    current: true
  },
  {
    id: "src-member",
    title: "Member of Student Representative Council (SRC) - Exco for Sports",
    company: "Albukhary International University",
    location: "Alor Setar, Malaysia",
    period: "2023 – 2024",
    description: "Represented the student body and organized university sports events.",
    responsibilities: [
      "Organized and promoted university sports events to enhance campus spirit",
      "Represented the School of Computer Science student body",
      "Addressed academic and social concerns of students",
      "Served as liaison between students and faculty"
    ],
    current: false
  }
];

export const education = [
  {
    id: "bsc-cs",
    degree: "Bachelor of Computer Science with Honours",
    major: "Data Science",
    institution: "Albukhary International University",
    location: "Alor Setar, Malaysia",
    period: "Oct 2022 – Dec 2025",
    thesis: "HarborHelper AI chatbot for training and assisting operators in Seaport Container Inspection",
    achievements: [
      "Graduated with Honours in Data Science",
      "Completed thesis on AI-powered chatbot development",
      "Active member of Student Representative Council",
      "Participated in ICT volunteer programs"
    ]
  },
  {
    id: "hssc",
    degree: "Higher Secondary Education Certificate",
    major: "Pre-Engineering",
    institution: "IBA Public School Sukkur",
    location: "Sukkur, Pakistan",
    period: "Aug 2016 – Oct 2020",
    achievements: [
      "Qualified in Division A (top tier)",
      "Received Board Exam Qualification Award"
    ]
  }
];

export const certifications = [
  {
    id: "miv-excellence",
    title: "MIV Excellence Award 2023",
    issuer: "Malaysia ICT Volunteer",
    date: "2023",
    description: "Awarded for outstanding leadership and contribution as a project leader"
  },
  {
    id: "board-exam",
    title: "Board Exam Qualification Award",
    issuer: "IBA Public School Sukkur",
    date: "2020",
    description: "Received for qualifying higher secondary board examination in division A (top tier)"
  },
  {
    id: "social-media",
    title: "Certification of Social Media Sales and Marketing",
    issuer: "Professional Certification",
    date: "2023",
    description: "Certified in creating and optimizing social media strategies for engagement and sales growth"
  },
  {
    id: "ambassador",
    title: "Certification of Student Ambassador",
    issuer: "Albukhary International University",
    date: "2023/2024",
    description: "Recognition for dedicated service during the Week of Welcome"
  }
];

export const skills = {
  "Programming & Data Analysis": [
    { name: "Python", level: 95 },
    { name: "R", level: 85 },
    { name: "SQL", level: 90 },
    { name: "Java", level: 70 }
  ],
  "Machine Learning & Deep Learning": [
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 88 },
    { name: "Keras", level: 92 },
    { name: "Scikit-learn", level: 95 },
    { name: "OpenCV", level: 85 }
  ],
  "Data Processing & Visualization": [
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 95 },
    { name: "Matplotlib", level: 90 },
    { name: "Geoplotlib", level: 75 },
    { name: "ggplot2", level: 80 },
    { name: "Plotly", level: 85 }
  ],
  "Natural Language Processing": [
    { name: "Sentiment Analysis", level: 90 },
    { name: "Text Classification", level: 92 },
    { name: "Intent Recognition", level: 88 },
    { name: "Transformer Models", level: 85 },
    { name: "GPT-3/GPT-4", level: 82 }
  ],
  "Business Intelligence": [
    { name: "MS Power BI", level: 88 },
    { name: "Tableau", level: 75 },
    { name: "Dashboard Design", level: 85 }
  ],
  "Other Technologies": [
    { name: "HTML", level: 80 },
    { name: "Git", level: 85 },
    { name: "Microsoft Office", level: 90 },
    { name: "Reinforcement Learning (PPO)", level: 85 }
  ]
};
