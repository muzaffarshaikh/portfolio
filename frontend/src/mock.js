// Mock data for Senior Backend Engineer Portfolio

export const personalInfo = {
  name: "Alex Morgan",
  title: "Senior Backend Engineer",
  tagline: "Building scalable systems with NodeJS, TypeScript & Cloud Architecture",
  location: "San Francisco, CA",
  email: "alex.morgan@example.com",
  phone: "+1 (555) 123-4567",
  bio: "Passionate Senior Backend Engineer with 8+ years of experience architecting and building high-performance, scalable systems. Specialized in NodeJS, TypeScript, AWS cloud infrastructure, and Cloudflare edge computing. Led multiple teams in delivering mission-critical applications serving millions of users.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
};

export const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexmorgan",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/alexmorgan",
    icon: "github"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexmorgan",
    icon: "twitter"
  },
  {
    platform: "Email",
    url: "mailto:alex.morgan@example.com",
    icon: "mail"
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 95, years: 8 },
    { name: "TypeScript", level: 92, years: 6 },
    { name: "Python", level: 85, years: 5 },
    { name: "Go", level: 78, years: 3 },
    { name: "Rust", level: 65, years: 2 }
  ],
  frameworks: [
    { name: "Node.js", level: 95, years: 8 },
    { name: "Express.js", level: 90, years: 7 },
    { name: "Fastify", level: 85, years: 4 },
    { name: "NestJS", level: 80, years: 3 },
    { name: "GraphQL", level: 88, years: 5 }
  ],
  databases: [
    { name: "PostgreSQL", level: 92, years: 7 },
    { name: "MongoDB", level: 88, years: 6 },
    { name: "Redis", level: 85, years: 5 },
    { name: "DynamoDB", level: 80, years: 4 },
    { name: "Elasticsearch", level: 75, years: 3 }
  ],
  cloud: [
    { name: "AWS", level: 93, years: 6 },
    { name: "Cloudflare", level: 87, years: 4 },
    { name: "Docker", level: 90, years: 6 },
    { name: "Kubernetes", level: 82, years: 4 },
    { name: "Terraform", level: 78, years: 3 }
  ]
};

export const experience = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Backend Engineer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Led the architecture and development of microservices handling 10M+ daily requests. Implemented event-driven systems using AWS Lambda, SQS, and EventBridge.",
    achievements: [
      "Reduced API response time by 60% through optimization and caching strategies",
      "Led a team of 5 engineers in migrating legacy monolith to microservices",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Designed fault-tolerant systems achieving 99.99% uptime"
    ],
    technologies: ["Node.js", "TypeScript", "AWS", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: 2,
    company: "CloudScale Solutions",
    position: "Backend Engineer",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Developed and maintained high-performance APIs and data processing pipelines for enterprise clients. Specialized in real-time data processing and analytics.",
    achievements: [
      "Built real-time analytics platform processing 100K events/second",
      "Implemented GraphQL federation across 12 microservices",
      "Optimized database queries reducing costs by 40%",
      "Mentored 3 junior developers and established code review practices"
    ],
    technologies: ["Node.js", "GraphQL", "MongoDB", "Kafka", "Kubernetes", "GCP"]
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2018 - 2020",
    location: "Austin, TX",
    description: "Early employee at fast-growing fintech startup. Built the core platform from scratch and scaled it to serve 50K+ users.",
    achievements: [
      "Architected and built the MVP serving first 1000 paying customers",
      "Implemented secure payment processing using Stripe and Plaid APIs",
      "Built automated testing suite achieving 95% code coverage",
      "Reduced infrastructure costs by 50% through optimization"
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Stripe API"]
  },
  {
    id: 4,
    company: "Digital Agency Pro",
    position: "Junior Developer",
    duration: "2016 - 2018",
    location: "Chicago, IL",
    description: "Started career building web applications and APIs for various clients. Gained experience in multiple technologies and project management.",
    achievements: [
      "Delivered 25+ client projects on time and within budget",
      "Built e-commerce platforms handling $2M+ in transactions",
      "Implemented automated backup and monitoring systems",
      "Contributed to open-source projects gaining 500+ GitHub stars"
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "AWS", "WordPress"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Distributed Analytics Platform",
    description: "Real-time data processing system handling millions of events per day with sub-second latency. Built with event-driven architecture and serverless components.",
    longDescription: "Enterprise-grade analytics platform processing real-time user behavior data. Implemented using AWS Lambda, Kinesis, and DynamoDB with custom aggregation algorithms.",
    technologies: ["Node.js", "TypeScript", "AWS Lambda", "Kinesis", "DynamoDB", "CloudFormation"],
    category: ["Backend Architecture", "Real-time Systems"],
    bgColor: "mid-blue",
    featured: true,
    metrics: {
      performance: "Sub-second latency",
      scale: "10M+ events/day",
      uptime: "99.99%"
    },
    github: "https://github.com/alexmorgan/analytics-platform",
    demo: "https://analytics.alexmorgan.dev"
  },
  {
    id: 2,
    title: "GraphQL Federation Gateway",
    description: "Unified API gateway orchestrating 15+ microservices with intelligent caching and rate limiting. Supports both REST and GraphQL queries.",
    longDescription: "High-performance API gateway built with Apollo Federation, providing a unified interface for distributed microservices architecture.",
    technologies: ["Node.js", "GraphQL", "Apollo Federation", "Redis", "Docker", "Kubernetes"],
    category: ["API Design", "Microservices"],
    bgColor: "mid-purple",
    featured: true,
    metrics: {
      performance: "< 100ms p95",
      throughput: "50K requests/min",
      services: "15 microservices"
    },
    github: "https://github.com/alexmorgan/graphql-gateway"
  },
  {
    id: 3,
    title: "Serverless Image Processing",
    description: "Auto-scaling image optimization service using Cloudflare Workers and AWS S3. Handles format conversion, resizing, and CDN distribution.",
    longDescription: "Edge-based image processing service delivering optimized images worldwide with intelligent caching and format selection based on browser capabilities.",
    technologies: ["Cloudflare Workers", "AWS S3", "Sharp", "WebAssembly", "TypeScript"],
    category: ["Serverless", "Edge Computing"],
    bgColor: "light-yellow",
    featured: false,
    metrics: {
      performance: "< 50ms edge response",
      savings: "70% bandwidth reduction",
      coverage: "200+ edge locations"
    },
    github: "https://github.com/alexmorgan/image-processor"
  },
  {
    id: 4,
    title: "Event-Driven Payment System",
    description: "Fault-tolerant payment processing system with saga pattern implementation. Handles complex multi-step transactions with automatic rollback.",
    longDescription: "Mission-critical payment infrastructure processing millions in transactions with comprehensive fraud detection and PCI compliance.",
    technologies: ["Node.js", "PostgreSQL", "AWS SQS", "EventBridge", "Stripe API", "Kubernetes"],
    category: ["Fintech", "Event-Driven"],
    bgColor: "mid-green",
    featured: true,
    metrics: {
      reliability: "99.99% uptime",
      volume: "$50M+ processed",
      fraud: "< 0.01% fraud rate"
    },
    github: "https://github.com/alexmorgan/payment-system"
  },
  {
    id: 5,
    title: "ML Model Inference API",
    description: "High-performance ML model serving infrastructure with auto-scaling and A/B testing capabilities. Supports TensorFlow and PyTorch models.",
    longDescription: "Production ML infrastructure serving recommendations and predictions at scale with intelligent model versioning and canary deployments.",
    technologies: ["Python", "FastAPI", "TensorFlow Serving", "Kubernetes", "MLflow", "Prometheus"],
    category: ["Machine Learning", "DevOps"],
    bgColor: "mid-orange",
    featured: false,
    metrics: {
      latency: "< 10ms inference",
      throughput: "100K predictions/min",
      accuracy: "94.5% model accuracy"
    },
    github: "https://github.com/alexmorgan/ml-inference"
  },
  {
    id: 6,
    title: "Multi-Tenant SaaS Platform",
    description: "Scalable SaaS architecture with tenant isolation, role-based access control, and usage-based billing. Built for B2B enterprise clients.",
    longDescription: "Complete SaaS platform with advanced tenant management, subscription billing, and comprehensive admin dashboard for enterprise customers.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS ECS", "Stripe"],
    category: ["SaaS Architecture", "Enterprise"],
    bgColor: "light-pink",
    featured: false,
    metrics: {
      tenants: "500+ active tenants",
      isolation: "100% data isolation",
      billing: "Automated usage tracking"
    },
    github: "https://github.com/alexmorgan/saas-platform",
    demo: "https://saas.alexmorgan.dev"
  }
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-PSA-123456"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-567890"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2021",
    credentialId: "GCP-PCA-789012"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO at TechCorp Inc.",
    company: "TechCorp Inc.",
    testimonial: "Alex is an exceptional backend engineer who consistently delivers high-quality, scalable solutions. His expertise in cloud architecture and ability to mentor junior developers makes him invaluable to any team.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e46d93?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Lead Product Manager",
    company: "CloudScale Solutions", 
    testimonial: "Working with Alex was a game-changer for our platform. He architected solutions that scaled beautifully and always considered the business impact of technical decisions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Lisa Wang",
    position: "Founder & CEO",
    company: "StartupXYZ",
    testimonial: "Alex built our entire backend infrastructure from the ground up. His code is clean, well-documented, and has scaled with us from startup to serving 50K+ users without major issues.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];