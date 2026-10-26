/**
 * Technical Skills Data
 * Categorized verified technologies for Bento grid layout.
 */

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Code2",
    description: "Responsive, performant user interfaces built with modern component architectures.",
    skills: [
      { name: "React", floatVariant: "a" },
      { name: "JavaScript", floatVariant: null },
      { name: "HTML5", floatVariant: "b" },
      { name: "CSS3", floatVariant: null },
      { name: "Tailwind CSS", floatVariant: "c" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Cpu",
    description: "Resilient server-side logic, secure RESTful APIs, and token-based authentication.",
    skills: [
      { name: "Node.js", floatVariant: "b" },
      { name: "Express.js", floatVariant: null },
      { name: "REST APIs", floatVariant: "a" },
      { name: "Authentication & Authorization", floatVariant: null }
    ]
  },
  {
    id: "databases",
    name: "Databases & Vector Storage",
    icon: "Database",
    description: "Document storage, schema design, and vector indexing for high-speed similarity search.",
    skills: [
      { name: "MongoDB", floatVariant: "c" },
      { name: "MongoDB Native Driver", floatVariant: null },
      { name: "Pinecone", floatVariant: "a" }
    ]
  },
  {
    id: "ai-generative-ai",
    name: "AI & Generative AI",
    icon: "Bot",
    description: "Autonomous multi-agent orchestration, RAG pipelines, and LLMOps evaluation telemetry.",
    skills: [
      { name: "LangChain", floatVariant: "a" },
      { name: "LangGraph", floatVariant: null },
      { name: "Retrieval-Augmented Generation (RAG)", floatVariant: "b" },
      { name: "Semantic Search", floatVariant: null },
      { name: "Google Gemini AI", floatVariant: "c" },
      { name: "LangSmith / LLMOps", floatVariant: null }
    ]
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    icon: "Terminal",
    description: "Version control, API contract testing, and developer productivity environments.",
    skills: [
      { name: "Git", floatVariant: null },
      { name: "GitHub", floatVariant: "b" },
      { name: "Postman", floatVariant: "a" },
      { name: "VS Code", floatVariant: null }
    ]
  }
];

export const quickSkills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Pinecone",
  "Gemini AI",
  "LangChain",
  "Python",
  "Git",
  "REST APIs",
  "RAG Systems"
];