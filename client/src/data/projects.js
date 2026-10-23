export const projects = [
  {
    id: "shopmate",
    slug: "shopmate",
    title: "ShopMate",
    tagline: "AI-Enabled MERN E-Commerce Architecture with Autonomous Agents",
    category: "Full Stack & AI",
    date: "November 2024",
    featured: true,
    github: "https://github.com/manikanthapatcha",
    demo: "https://shopmate-demo.vercel.app",
    summary: "A production-styled MERN e-commerce application featuring JWT refresh-token rotation, Pinecone semantic product discovery, Gemini-powered Snap & Sell, and LangChain/LangGraph customer agents.",
    description: "ShopMate is an enterprise-inspired modern e-commerce platform built to demonstrate advanced full-stack engineering combined with modern generative AI capabilities. It implements resilient JWT authentication with refresh-token rotation and Google OAuth. The catalog is augmented with dual search: traditional keyword filters and high-dimensional Pinecone vector search for intuitive semantic queries. A multimodal 'Snap & Sell' pipeline allows users to upload raw photos, from which Google Gemini automatically infers categorization, key attributes, and SEO-optimized listings. Autonomous customer care is powered by LangChain retrieval over store policies, while a LangGraph agent assists in drafting promotional content under human supervision.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB Native Driver",
      "JWT & OAuth",
      "Pinecone Vector DB",
      "Gemini AI",
      "LangChain",
      "LangGraph"
    ],
    features: [
      "Secure authentication architecture with JWT, httpOnly refresh-token rotation, and Google OAuth.",
      "Dual search engine combining MongoDB indexing with Pinecone vector embeddings for semantic discovery.",
      "Multimodal 'Snap & Sell' workflow extracting item condition, categories, and tags directly from uploaded images via Gemini Vision.",
      "LangChain conversational customer support assistant with RAG-grounded store policy retrieval.",
      "LangGraph marketing and blog generation workflow with human-in-the-loop review before publication.",
      "Responsive shopping interface with shopping cart state persistence and checkout lifecycle simulation."
    ],
    architecture: "ShopMate follows a modular service-oriented architecture. The React single-page frontend communicates with an Express API gateway. State is managed via structured React hooks and context. The backend uses the native MongoDB driver for database persistence alongside Pinecone for storing dense text and image embeddings. External AI calls to Gemini and LangChain are isolated into dedicated service adapters to ensure predictable latency and fallback behavior."
  },
  {
    id: "legalgenie",
    slug: "legalgenie",
    title: "LegalGenie",
    tagline: "AI-Powered Legal Research & Document Intelligence Platform",
    category: "AI & NLP",
    date: "October 2024",
    featured: true,
    github: "https://github.com/manikanthapatcha",
    demo: "https://legalgenie-demo.vercel.app",
    summary: "An intelligent legal research assistant utilizing Retrieval-Augmented Generation (RAG), Pinecone vector search, and Gemini AI for PDF ingestion, automated case briefs, and conversational precedent analysis.",
    description: "LegalGenie simplifies complex judicial research by turning voluminous case files and legal judgments into navigable, queryable intelligence. Built with React and an Express backend, the platform handles multi-page legal PDF ingestion, automated token chunking, and semantic embedding into a Pinecone vector index. Legal practitioners and students can quickly generate standardized case briefs (facts, procedural history, legal issues, holdings) and engage in conversational question answering where every answer is strictly grounded in the ingested case texts with traceable citations.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Pinecone",
      "Gemini AI",
      "RAG Pipeline",
      "PDF Parser"
    ],
    features: [
      "Automated document processing pipeline for multi-page legal PDFs and case briefs.",
      "Semantic legal text search across precedent files using dense vector similarity.",
      "Automated case brief synthesis highlighting facts, procedural issues, arguments, and court rulings.",
      "Conversational RAG assistant grounded strictly in verified case materials with citation references.",
      "Exportable structured summaries and case comparison dashboard."
    ],
    architecture: "PDF documents are ingested and split into semantically coherent chunks using a token-aware chunking strategy. Embeddings generated via Gemini are stored in Pinecone along with document metadata. User queries trigger hybrid vector retrieval to fetch the top-k relevant judicial passages, which are then passed into the LLM synthesis pipeline with strict temperature constraints to minimize hallucinations."
  },
  {
    id: "order-management-system",
    slug: "order-management-system",
    title: "Order Management System",
    tagline: "Enterprise Order Lifecycle & Inventory State Engine",
    category: "Backend & Systems",
    date: "September 2024",
    featured: true,
    github: "https://github.com/manikanthapatcha",
    demo: "https://oms-demo.vercel.app",
    summary: "A robust order lifecycle platform engineered with Express, MongoDB, and deterministic state transitions, featuring real-time tracking, inventory allocation, and administrative dashboards.",
    description: "The Order Management System (OMS) demonstrates reliable enterprise backend engineering for tracking retail transactions from cart checkout to delivery. Built around a deterministic state machine, orders transition through discrete validated states (Pending, Payment Verified, Processing, Dispatched, In Transit, Delivered, Cancelled). The system incorporates inventory concurrency checks, administrative status overrides, customer tracking timelines, and structured REST endpoints designed for third-party logistics integration.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "State Machines",
      "JWT"
    ],
    features: [
      "Deterministic state machine enforcing valid transitions across order lifecycle stages.",
      "Inventory verification and atomic stock reservation preventing overselling.",
      "Customer-facing interactive timeline showing real-time milestone progress.",
      "Admin dashboard with revenue statistics, fulfillment metrics, and bulk status updates.",
      "Comprehensive error handling and audit logging of state modifications."
    ],
    architecture: "Built with a clean layered architecture separating HTTP routing, validation middlewares, controller handlers, domain services, and database data access objects. Concurrency-safe MongoDB operations ensure atomic inventory updates during order placement."
  },
  {
    id: "spendwise",
    slug: "spendwise",
    title: "SpendWise",
    tagline: "Personal Finance & Expense Analytics Dashboard",
    category: "Web Application",
    date: "August 2024",
    featured: true,
    github: "https://github.com/manikanthapatcha",
    demo: "https://spendwise-demo.vercel.app",
    summary: "A personal expense management web app delivering budget tracking, spending categorization, recurring subscription reminders, and visual financial analytics.",
    description: "SpendWise provides users with clear visibility over personal cash flow and budgeting habits. Featuring an intuitive React interface and an Express API backend, SpendWise tracks expenses and income entries with automated category tagging. Users receive visual breakdowns of expenditure by category, monthly budget limits with warning indicators, and reminders for upcoming recurring subscription renewals.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Data Visualization",
      "JWT Auth"
    ],
    features: [
      "Fast transaction logging with category tagging (Food, Utilities, Tech, Travel, Education).",
      "Visual spending distribution and monthly budget limit consumption tracking.",
      "Recurring bill and subscription management with due-date reminders.",
      "Monthly financial summary reports with month-over-month expenditure comparisons.",
      "Responsive, clean UI designed for both mobile and desktop screens."
    ],
    architecture: "Frontend built in React with modular dashboard cards. Backend built with Express and MongoDB, featuring aggregation pipelines to compute monthly summaries, category totals, and budget variances efficiently without client-side heavy computation."
  },
  {
    id: "student-intelligence",
    slug: "student-intelligence",
    title: "Student Intelligence",
    tagline: "Privacy-Preserving Local AI Academic Assistant",
    category: "AI & Education",
    date: "July 2024",
    featured: false,
    github: "https://github.com/manikanthapatcha",
    demo: "https://student-intelligence-demo.vercel.app",
    summary: "An offline-first student study partner combining a React frontend, Node.js backend, Ollama, and local Llama 3.2 for confidential curriculum summarization and question answering.",
    description: "Student Intelligence was created to provide students with an intelligent academic co-pilot that respects data privacy and functions without expensive cloud API quotas. By leveraging Ollama to run Meta's Llama 3.2 model locally on developer hardware, students can upload course notes, generate concise revision sheets, test themselves with auto-generated flashcards, and clarify difficult concepts without any proprietary data leaving their computer.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Ollama",
      "Llama 3.2",
      "Local LLM"
    ],
    features: [
      "Local model inference via Ollama and Llama 3.2 for zero-cloud latency and 100% data privacy.",
      "Conceptual study partner providing step-by-step explanations for technical topics.",
      "Automatic generation of lecture summaries and revision bullet points.",
      "Interactive flashcard generator for active recall and exam readiness.",
      "Distraction-free, minimal academic user interface."
    ],
    architecture: "The React frontend sends requests to a lightweight local Express proxy, which communicates via HTTP with the local Ollama daemon. Streaming token responses are piped back to the client using Server-Sent Events (SSE) for responsive real-time generation."
  },
  {
    id: "chest-x-ray-detection",
    slug: "chest-x-ray-detection",
    title: "Chest X-Ray Disease Probability Detection",
    tagline: "Deep Learning Radiographic Pathology Assistance System",
    category: "Deep Learning & Health",
    date: "June 2024",
    featured: false,
    github: "https://github.com/manikanthapatcha",
    demo: "https://chest-xray-demo.vercel.app",
    summary: "An experimental deep convolutional neural network system evaluating multi-pathology thoracic disease probabilities from medical chest X-ray radiography.",
    description: "An experimental research application exploring computer vision for medical imaging. The project implements a deep convolutional neural network (CNN) trained on benchmark thoracic radiography datasets to estimate probability distributions across key pulmonary conditions such as Pneumonia, Infiltration, Atelectasis, and Effusion. The system is designed to provide research visual feedback and highlights responsible model caveats, treating predictions purely as experimental assistive estimations rather than diagnostic determinations.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Flask",
      "React",
      "Medical CNN"
    ],
    features: [
      "Deep convolutional neural network architecture optimized for radiographic feature extraction.",
      "Multi-label probability distribution estimation across common thoracic pathologies.",
      "Interactive radiograph upload with real-time confidence breakdown bars.",
      "Visual region-of-interest indicators for research review.",
      "Prominent medical disclaimer reinforcing non-clinical, research-only intent."
    ],
    architecture: "A Flask API serves pre-trained convolutional neural network weights. Uploaded DICOM/PNG images undergo standardized preprocessing (histogram equalization, resizing, normalization) via OpenCV before inference. The results, formatted as structured confidence distributions, are consumed by a clean React dashboard."
  }
];
