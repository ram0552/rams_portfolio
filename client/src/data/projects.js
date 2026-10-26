// export const projects = [
//   {
//     id: "shopmate",
//     slug: "shopmate",
//     title: "ShopMate",
//     tagline: "AI-Enabled MERN E-Commerce Architecture with Autonomous Agents",
//     category: "Full Stack & AI",
//     date: "November 2024",
//     featured: true,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://shopmate-demo.vercel.app",
//     summary: "A production-styled MERN e-commerce application featuring JWT refresh-token rotation, Pinecone semantic product discovery, Gemini-powered Snap & Sell, and LangChain/LangGraph customer agents.",
//     description: "ShopMate is an enterprise-inspired modern e-commerce platform built to demonstrate advanced full-stack engineering combined with modern generative AI capabilities. It implements resilient JWT authentication with refresh-token rotation and Google OAuth. The catalog is augmented with dual search: traditional keyword filters and high-dimensional Pinecone vector search for intuitive semantic queries. A multimodal 'Snap & Sell' pipeline allows users to upload raw photos, from which Google Gemini automatically infers categorization, key attributes, and SEO-optimized listings. Autonomous customer care is powered by LangChain retrieval over store policies, while a LangGraph agent assists in drafting promotional content under human supervision.",
//     technologies: [
//       "React",
//       "Vite",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "MongoDB Native Driver",
//       "JWT & OAuth",
//       "Pinecone Vector DB",
//       "Gemini AI",
//       "LangChain",
//       "LangGraph"
//     ],
//     features: [
//       "Secure authentication architecture with JWT, httpOnly refresh-token rotation, and Google OAuth.",
//       "Dual search engine combining MongoDB indexing with Pinecone vector embeddings for semantic discovery.",
//       "Multimodal 'Snap & Sell' workflow extracting item condition, categories, and tags directly from uploaded images via Gemini Vision.",
//       "LangChain conversational customer support assistant with RAG-grounded store policy retrieval.",
//       "LangGraph marketing and blog generation workflow with human-in-the-loop review before publication.",
//       "Responsive shopping interface with shopping cart state persistence and checkout lifecycle simulation."
//     ],
//     architecture: "ShopMate follows a modular service-oriented architecture. The React single-page frontend communicates with an Express API gateway. State is managed via structured React hooks and context. The backend uses the native MongoDB driver for database persistence alongside Pinecone for storing dense text and image embeddings. External AI calls to Gemini and LangChain are isolated into dedicated service adapters to ensure predictable latency and fallback behavior."
//   },
//   {
//     id: "legalgenie",
//     slug: "legalgenie",
//     title: "LegalGenie",
//     tagline: "AI-Powered Legal Research & Document Intelligence Platform",
//     category: "AI & NLP",
//     date: "October 2024",
//     featured: true,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://legalgenie-demo.vercel.app",
//     summary: "An intelligent legal research assistant utilizing Retrieval-Augmented Generation (RAG), Pinecone vector search, and Gemini AI for PDF ingestion, automated case briefs, and conversational precedent analysis.",
//     description: "LegalGenie simplifies complex judicial research by turning voluminous case files and legal judgments into navigable, queryable intelligence. Built with React and an Express backend, the platform handles multi-page legal PDF ingestion, automated token chunking, and semantic embedding into a Pinecone vector index. Legal practitioners and students can quickly generate standardized case briefs (facts, procedural history, legal issues, holdings) and engage in conversational question answering where every answer is strictly grounded in the ingested case texts with traceable citations.",
//     technologies: [
//       "React",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Pinecone",
//       "Gemini AI",
//       "RAG Pipeline",
//       "PDF Parser"
//     ],
//     features: [
//       "Automated document processing pipeline for multi-page legal PDFs and case briefs.",
//       "Semantic legal text search across precedent files using dense vector similarity.",
//       "Automated case brief synthesis highlighting facts, procedural issues, arguments, and court rulings.",
//       "Conversational RAG assistant grounded strictly in verified case materials with citation references.",
//       "Exportable structured summaries and case comparison dashboard."
//     ],
//     architecture: "PDF documents are ingested and split into semantically coherent chunks using a token-aware chunking strategy. Embeddings generated via Gemini are stored in Pinecone along with document metadata. User queries trigger hybrid vector retrieval to fetch the top-k relevant judicial passages, which are then passed into the LLM synthesis pipeline with strict temperature constraints to minimize hallucinations."
//   },
//   {
//     id: "order-management-system",
//     slug: "order-management-system",
//     title: "Order Management System",
//     tagline: "Enterprise Order Lifecycle & Inventory State Engine",
//     category: "Backend & Systems",
//     date: "September 2024",
//     featured: true,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://oms-demo.vercel.app",
//     summary: "A robust order lifecycle platform engineered with Express, MongoDB, and deterministic state transitions, featuring real-time tracking, inventory allocation, and administrative dashboards.",
//     description: "The Order Management System (OMS) demonstrates reliable enterprise backend engineering for tracking retail transactions from cart checkout to delivery. Built around a deterministic state machine, orders transition through discrete validated states (Pending, Payment Verified, Processing, Dispatched, In Transit, Delivered, Cancelled). The system incorporates inventory concurrency checks, administrative status overrides, customer tracking timelines, and structured REST endpoints designed for third-party logistics integration.",
//     technologies: [
//       "React",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "REST APIs",
//       "State Machines",
//       "JWT"
//     ],
//     features: [
//       "Deterministic state machine enforcing valid transitions across order lifecycle stages.",
//       "Inventory verification and atomic stock reservation preventing overselling.",
//       "Customer-facing interactive timeline showing real-time milestone progress.",
//       "Admin dashboard with revenue statistics, fulfillment metrics, and bulk status updates.",
//       "Comprehensive error handling and audit logging of state modifications."
//     ],
//     architecture: "Built with a clean layered architecture separating HTTP routing, validation middlewares, controller handlers, domain services, and database data access objects. Concurrency-safe MongoDB operations ensure atomic inventory updates during order placement."
//   },
//   {
//     id: "spendwise",
//     slug: "spendwise",
//     title: "SpendWise",
//     tagline: "Personal Finance & Expense Analytics Dashboard",
//     category: "Web Application",
//     date: "August 2024",
//     featured: true,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://spendwise-demo.vercel.app",
//     summary: "A personal expense management web app delivering budget tracking, spending categorization, recurring subscription reminders, and visual financial analytics.",
//     description: "SpendWise provides users with clear visibility over personal cash flow and budgeting habits. Featuring an intuitive React interface and an Express API backend, SpendWise tracks expenses and income entries with automated category tagging. Users receive visual breakdowns of expenditure by category, monthly budget limits with warning indicators, and reminders for upcoming recurring subscription renewals.",
//     technologies: [
//       "React",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Data Visualization",
//       "JWT Auth"
//     ],
//     features: [
//       "Fast transaction logging with category tagging (Food, Utilities, Tech, Travel, Education).",
//       "Visual spending distribution and monthly budget limit consumption tracking.",
//       "Recurring bill and subscription management with due-date reminders.",
//       "Monthly financial summary reports with month-over-month expenditure comparisons.",
//       "Responsive, clean UI designed for both mobile and desktop screens."
//     ],
//     architecture: "Frontend built in React with modular dashboard cards. Backend built with Express and MongoDB, featuring aggregation pipelines to compute monthly summaries, category totals, and budget variances efficiently without client-side heavy computation."
//   },
//   {
//     id: "student-intelligence",
//     slug: "student-intelligence",
//     title: "Student Intelligence",
//     tagline: "Privacy-Preserving Local AI Academic Assistant",
//     category: "AI & Education",
//     date: "July 2024",
//     featured: false,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://student-intelligence-demo.vercel.app",
//     summary: "An offline-first student study partner combining a React frontend, Node.js backend, Ollama, and local Llama 3.2 for confidential curriculum summarization and question answering.",
//     description: "Student Intelligence was created to provide students with an intelligent academic co-pilot that respects data privacy and functions without expensive cloud API quotas. By leveraging Ollama to run Meta's Llama 3.2 model locally on developer hardware, students can upload course notes, generate concise revision sheets, test themselves with auto-generated flashcards, and clarify difficult concepts without any proprietary data leaving their computer.",
//     technologies: [
//       "React",
//       "Vite",
//       "Tailwind CSS",
//       "Node.js",
//       "Express",
//       "Ollama",
//       "Llama 3.2",
//       "Local LLM"
//     ],
//     features: [
//       "Local model inference via Ollama and Llama 3.2 for zero-cloud latency and 100% data privacy.",
//       "Conceptual study partner providing step-by-step explanations for technical topics.",
//       "Automatic generation of lecture summaries and revision bullet points.",
//       "Interactive flashcard generator for active recall and exam readiness.",
//       "Distraction-free, minimal academic user interface."
//     ],
//     architecture: "The React frontend sends requests to a lightweight local Express proxy, which communicates via HTTP with the local Ollama daemon. Streaming token responses are piped back to the client using Server-Sent Events (SSE) for responsive real-time generation."
//   },
//   {
//     id: "chest-x-ray-detection",
//     slug: "chest-x-ray-detection",
//     title: "Chest X-Ray Disease Probability Detection",
//     tagline: "Deep Learning Radiographic Pathology Assistance System",
//     category: "Deep Learning & Health",
//     date: "June 2024",
//     featured: false,
//     github: "https://github.com/manikanthapatcha",
//     demo: "https://chest-xray-demo.vercel.app",
//     summary: "An experimental deep convolutional neural network system evaluating multi-pathology thoracic disease probabilities from medical chest X-ray radiography.",
//     description: "An experimental research application exploring computer vision for medical imaging. The project implements a deep convolutional neural network (CNN) trained on benchmark thoracic radiography datasets to estimate probability distributions across key pulmonary conditions such as Pneumonia, Infiltration, Atelectasis, and Effusion. The system is designed to provide research visual feedback and highlights responsible model caveats, treating predictions purely as experimental assistive estimations rather than diagnostic determinations.",
//     technologies: [
//       "Python",
//       "TensorFlow",
//       "Keras",
//       "OpenCV",
//       "Flask",
//       "React",
//       "Medical CNN"
//     ],
//     features: [
//       "Deep convolutional neural network architecture optimized for radiographic feature extraction.",
//       "Multi-label probability distribution estimation across common thoracic pathologies.",
//       "Interactive radiograph upload with real-time confidence breakdown bars.",
//       "Visual region-of-interest indicators for research review.",
//       "Prominent medical disclaimer reinforcing non-clinical, research-only intent."
//     ],
//     architecture: "A Flask API serves pre-trained convolutional neural network weights. Uploaded DICOM/PNG images undergo standardized preprocessing (histogram equalization, resizing, normalization) via OpenCV before inference. The results, formatted as structured confidence distributions, are consumed by a clean React dashboard."
//   }
// ];


export const projects = [
  {
    id: "kadai-and-co",
    slug: "kadai-and-co",
    title: "Kadai & Co.",
    tagline: "MERN Stack E-Commerce Application with Razorpay Payments",
    category: "Full Stack",
    date: "",
    featured: true,
    github: "https://github.com/ram0552/kadai-and-co",
    demo: "",
    summary: "A full-stack e-commerce application with product management and Razorpay payment integration.",
    description: "Kadai & Co. is a full-stack e-commerce application built with the MERN stack. It includes product management with CRUD operations and RESTful APIs that manage product data. The Razorpay payment gateway is integrated for online payments. The checkout flow is connected to the backend, which creates the payment order and verifies the payment.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "RESTful APIs",
      "Razorpay"
    ],
    features: [
      "Product management with create, read, update, and delete (CRUD) operations.",
      "RESTful APIs for managing product data.",
      "Razorpay payment gateway integration for online payments.",
      "Checkout flow connected to backend payment order creation and payment verification."
    ],
    architecture: "A React frontend sends requests to an Express API running on Node.js. The API stores product data in MongoDB. At checkout, the backend creates a Razorpay payment order and later verifies the payment."
  },
  {
    id: "shopmate",
    slug: "shopmate",
    title: "ShopMate",
    tagline: "MERN E-Commerce Application with AI Agents",
    category: "Full Stack & AI",
    date: "Jun 2026 – Jul 2026",
    featured: true,
    github: "https://github.com/ram0552/shopmate",
    demo: "https://shopmate-demo.vercel.app",
    summary: "A MERN e-commerce application with JWT authentication, role-based access control, and AI agents built with LangChain and LangGraph.",
    description: "ShopMate is a full-stack e-commerce application built with MongoDB Atlas, Express.js, React.js, and Node.js. It includes product management, a shopping cart, an admin dashboard, and RESTful APIs. Users sign in with JWT-based authentication, and access is controlled with roles. Password reset uses email OTP verification. The project also includes AI features. LangChain agents use the ReAct pattern and tool calling. A LangGraph workflow generates blog content and asks for human approval before it moves forward. LangSmith is used to trace and evaluate the AI workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "JWT",
      "LangChain",
      "LangGraph",
      "LangSmith"
    ],
    features: [
      "Product management, shopping cart, and admin dashboard.",
      "RESTful APIs built with Node.js and Express.",
      "JWT authentication with role-based access control (RBAC), plus session and token management.",
      "Password reset with email OTP verification.",
      "AI agents built with LangChain using the ReAct pattern and tool calling.",
      "Multi-agent workflows in LangGraph using StateGraph, shared state, checkpointers, and interrupts.",
      "Human-in-the-loop approval for AI-generated blog content.",
      "LLMOps practices with LangSmith: tracing, guardrails, agent evaluation, and token and cost optimization."
    ],
    architecture: "The React frontend calls RESTful APIs built with Node.js and Express. MongoDB Atlas stores the application data. JWT authentication and role-based access control manage who can use each feature. The AI features run as LangChain agents and LangGraph workflows. LangGraph keeps shared state and uses checkpointers and interrupts to pause for human approval. LangSmith traces the agent runs."
  },
  {
    id: "neptune-cxr",
    slug: "neptune-cxr",
    title: "NEPTUNE-CXR",
    tagline: "Explainable Deep Learning for Multi-Label Chest X-Ray Disease Detection",
    category: "Deep Learning & Health",
    date: "",
    featured: true,
    github: "https://github.com/ram0552/neptune-cxr",
    demo: "",
    summary: "A deep learning project that identifies multiple thoracic diseases from chest X-rays and explains its predictions with Grad-CAM.",
    description: "NEPTUNE-CXR is a deep-learning medical imaging project. It analyzes chest X-rays to identify multiple thoracic diseases using a DenseNet121 convolutional neural network. Grad-CAM visualizations highlight the image regions that influenced each prediction, and confidence estimation makes the results easier to interpret. The project aims to support preliminary screening through explainable AI. Planned extensions include anatomy-aware analysis and graph-based disease reasoning.",
    technologies: [
      "Deep Learning",
      "DenseNet121",
      "CNN",
      "Grad-CAM",
      "Explainable AI"
    ],
    features: [
      "Multi-label detection of thoracic diseases from chest X-rays.",
      "DenseNet121 convolutional neural network.",
      "Grad-CAM visualizations that highlight influential image regions.",
      "Confidence estimation to improve prediction interpretability."
    ],
    architecture: "A DenseNet121 convolutional neural network analyzes each chest X-ray and predicts multiple thoracic diseases. Grad-CAM highlights the image regions that influenced the prediction. A confidence estimate is added to each result to make it easier to interpret."
  },
  {
    id: "legalgenie",
    slug: "legalgenie",
    title: "LegalGenie",
    tagline: "AI-Powered Legal Research & Case Brief Assistant",
    category: "AI & NLP",
    date: "",
    featured: true,
    github: "https://github.com/ram0552/legalgenie",
    demo: "https://legalgenie-demo.vercel.app",
    summary: "A legal research assistant that uses RAG, Pinecone semantic search, and Gemini AI to generate case briefs and answer questions from case documents.",
    description: "LegalGenie is a group project that helps with legal research and case brief writing. It is built with React.js, Node.js, Express.js, MongoDB Atlas, Pinecone, and Gemini AI. My role was backend developer. I built the backend APIs and document processing pipelines for legal case management. I also implemented semantic search and RAG-based case brief generation with Gemini AI and Pinecone, along with MongoDB schemas and vector embedding workflows that support document-based question answering.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Pinecone",
      "Gemini AI",
      "RAG"
    ],
    features: [
      "Backend APIs for legal case management.",
      "Document processing pipelines for case documents.",
      "Semantic search using Pinecone vector embeddings.",
      "RAG-based case brief generation with Gemini AI.",
      "Document-based question answering.",
      "MongoDB schemas for application data."
    ],
    architecture: "The backend exposes APIs built with Node.js and Express. Case documents go through a processing pipeline, and their vector embeddings are stored in Pinecone. MongoDB Atlas stores the application data. For a case brief or a question, relevant content is retrieved with semantic search and sent to Gemini AI to generate the answer."
  },
  {
    id: "order-management-system",
    slug: "order-management-system",
    title: "Order Management System",
    tagline: "REST API Backend for Product, Order, and User Management",
    category: "Backend & Systems",
    date: "",
    featured: false,
    github: "https://github.com/ram0552/order-management-system",
    demo: "",
    summary: "A MERN stack order management application with REST APIs, CRUD operations, and backend business logic.",
    description: "The Order Management System is a group project built with MongoDB, Express.js, React.js, and Node.js. My role was backend developer. The backend provides REST APIs and CRUD operations to manage products, orders, and users. It also includes business logic, validation, and MongoDB integration. The team connected the frontend with the backend and tested the application.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs"
    ],
    features: [
      "REST APIs with CRUD operations for products, orders, and users.",
      "Backend business logic for order handling.",
      "Input validation on the backend.",
      "MongoDB database integration.",
      "Frontend and backend integration, with application testing."
    ],
    architecture: "A React frontend connects to REST APIs built with Node.js and Express. The backend applies business logic and validation, and then reads and writes data in MongoDB."
  },
  {
    id: "spendwise",
    slug: "spendwise",
    title: "SpendWise",
    tagline: "Personal Finance & Expense Management Platform",
    category: "Web Application",
    date: "",
    featured: false,
    github: "https://github.com/ram0552/spendwise",
    demo: "",
    summary: "A full-stack expense tracking app with budgeting, analytics, reporting, and JWT authentication.",
    description: "SpendWise is an individual project built with MongoDB, Express.js, React.js, and Node.js. It helps users track their expenses with budgeting, analytics, and reporting features. JWT authentication secures user accounts, and RESTful APIs handle transaction management. The app includes interactive dashboards, and the MongoDB data operations were optimized.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "RESTful APIs"
    ],
    features: [
      "Expense tracking with budgeting features.",
      "Analytics and reporting.",
      "JWT authentication.",
      "RESTful APIs for transaction management.",
      "Interactive dashboards.",
      "Optimized MongoDB data operations."
    ],
    architecture: "A React frontend with interactive dashboards calls RESTful APIs built with Node.js and Express. JWT authentication protects the APIs, and transaction data is stored in MongoDB."
  }
];