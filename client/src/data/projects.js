export const projects = [
  {
    id: "kadai-and-co",
    slug: "kadai-and-co",
    title: "Kadai & Co.",
    tagline: "MERN Stack E-Commerce Application with Razorpay Payments",
    category: "Full Stack",
    date: "Oct 2026",
    featured: true,
    github: "https://github.com/ram0552/kadai-store",
    demo: "https://kadai-store-a17.vercel.app",
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
    github: "https://github.com/ram0552/ShopMateTaskMain",
    demo: "https://shopmate-ruby.vercel.app",
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
    date: "Aug 2026",
    featured: true,
    github: "https://github.com/ram0552/Neptune_CXR",
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
    category: "Gen AI & LegalTech",
    date: "Dec 2025 - Jan 2026",
    featured: true,
    github: "https://github.com/ram0552/Legal_Genie",
    demo: "https://legal-genie-six.vercel.app",
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
    date: "Oct 2025",
    featured: false,
    github: "https://github.com/ram0552/Order-Management",
    demo: "https://order-management-seven-indol.vercel.app",
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
  // {
  //   id: "spendwise",
  //   slug: "spendwise",
  //   title: "SpendWise",
  //   tagline: "Personal Finance & Expense Management Platform",
  //   category: "Web Application",
  //   date: "May 2026",
  //   featured: false,
  //   github: "https://github.com/ram0552/SpendWise-MERN-Expense-Tracker",
  //   demo: "https://spend-wise-mern-expense-tracker.vercel.app",
  //   summary: "A full-stack expense tracking app with budgeting, analytics, reporting, and JWT authentication.",
  //   description: "SpendWise is an individual project built with MongoDB, Express.js, React.js, and Node.js. It helps users track their expenses with budgeting, analytics, and reporting features. JWT authentication secures user accounts, and RESTful APIs handle transaction management. The app includes interactive dashboards, and the MongoDB data operations were optimized.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "JWT",
  //     "RESTful APIs"
  //   ],
  //   features: [
  //     "Expense tracking with budgeting features.",
  //     "Analytics and reporting.",
  //     "JWT authentication.",
  //     "RESTful APIs for transaction management.",
  //     "Interactive dashboards.",
  //     "Optimized MongoDB data operations."
  //   ],
  //   architecture: "A React frontend with interactive dashboards calls RESTful APIs built with Node.js and Express. JWT authentication protects the APIs, and transaction data is stored in MongoDB."
  // }
];