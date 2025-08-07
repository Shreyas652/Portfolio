import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/ShreyasGosavi404",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shreyasavadhootgosavi/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Financial Coach - Intelligent Personal Finance Platform",
    description:
      "AI-powered personal finance platform leveraging Google Gemini AI and advanced machine learning algorithms to deliver intelligent budget optimization, debt reduction strategies, and investment recommendations through an immersive 3D interface. Features automated expense analysis, conversational AI assistant, portfolio tracking, and CSV transaction processing. Built with FastAPI backend and React 18 frontend, achieving 95+ Lighthouse scores with enterprise-grade security.",
    image: "/projects/Image 1.jpg",
    link: "https://github.com/ShreyasGosavi404/ai-financial-coach",
  },
  {
    title: "Multi-Agent QA System with NLP & Deep Learning",
    description:
      "Built an intelligent multi-agent question-answering system using transformer models, BERT embeddings, and distributed agent architecture. Features collaborative AI agents with reinforcement learning that work together to provide comprehensive answers from multiple knowledge sources. Implements advanced NLP techniques including semantic similarity, named entity recognition, and real-time QA processing with 94% accuracy.",
    image: "/projects/Image 4.jpg",
    link: "https://github.com/ShreyasGosavi404/multi-agent-qa-system",
  },
  {
    title: "RockyBot: GenAI News Research Assistant with LLMs",
    description:
      "End-to-end GenAI application for automated financial news analysis using Large Language Models (LLMs), RAG architecture, and vector databases. Empowers analysts to extract meaningful insights from multiple news articles with intelligent Q&A capabilities, sentiment analysis models, and semantic search for financial insights extraction. Implements GPT-4 integration with custom fine-tuned models for domain-specific accuracy.",
    image: "/projects/Image 5.jpg",
    link: "https://github.com/ShreyasGosavi404/GenAI",
  },
  {
    title: "Power BI Advanced Analytics Dashboard with ML Integration",
    description:
      "Comprehensive Power BI dashboard with integrated machine learning models for loan performance analysis, borrower risk assessment using predictive algorithms, and financial capacity insights. Features custom R/Python scripts for advanced statistical modeling, automated risk scoring with ensemble methods, and interactive visualizations with real-time ML predictions for informed lending decisions.",
    image: "/projects/Image 7.jpg",
    link: "https://app.powerbi.com/groups/me/reports/9ae51eeb-721c-4d3a-84f1-1b31d7831684/501ee36e3a99680ca1be?experience=power-bi",
  },
  {
    title: "Darshan: AI-Powered Virtual Assistant for Visually Impaired",
    description:
      "Revolutionary AI-powered virtual assistant leveraging computer vision, deep learning object detection models, and natural language processing to create an intelligent 'artificial eye' system for visually impaired users. Features real-time object recognition using YOLO/CNN models, spatial audio feedback, voice-controlled navigation, and accessibility-focused UI. Integrates speech recognition, text-to-speech synthesis, and smart home automation for comprehensive assistive technology solution.",
    image: "/projects/Image 2.jpg",
    link: "",
  },
  {
    title: "Enterprise Data Lake & Analytics Platform",
    description:
      "Architected and deployed a comprehensive data lake solution using Apache Spark, Kafka, and advanced ML pipelines processing 10TB+ daily data with real-time analytics capabilities. Implemented predictive models for data quality monitoring and automated anomaly detection, serving 500+ business users across multiple departments. Achieved 99.9% uptime with 70% cost reduction through intelligent resource optimization.",
    image: "/projects/Image 3.jpg",
    link: "https://github.com/ShreyasGosavi/enterprise-data-lake",
  },
  {
    title: "Real-Time ML Streaming Analytics Pipeline",
    description:
      "Built scalable real-time data streaming solution with Apache Kafka, Spark Streaming, MLflow, and Redis, processing millions of events per second with integrated machine learning models for real-time fraud detection and anomaly detection. Features automated model deployment, A/B testing frameworks, and MLOps pipelines. Handles 1M+ events/sec with sub-100ms latency for live ML inference and alerting systems.",
    image: "/projects/Image 6.jpg",
    link: "https://github.com/ShreyasGosavi404/real-time-analytics",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/ShreyasGosavi404",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shreyasavadhootgosavi/",
      },
    ],
  },
  {
    title: "Resources",
    data: [
      {
        name: "Resume/CV",
        icon: null,
        link: "/Shreyas_G_Resume SE.pdf",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "#contact-modal",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Education",
    link: "/#education",
  },
  {
    title: "Work Experience",
    link: "/experience",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/ShreyasGosavi404/space-portfolio",
};
