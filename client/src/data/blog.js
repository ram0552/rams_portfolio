export const blogPosts = [
  {
    id: "rag-with-mongodb-and-pinecone",
    slug: "rag-with-mongodb-and-pinecone",
    title: "Building Production RAG Systems with MongoDB and Pinecone",
    date: "January 20, 2025",
    readTime: "7 min read",
    category: "AI & Vector Search",
    tags: ["RAG", "Pinecone", "MongoDB", "AI Architecture"],
    summary: "How to combine relational/document persistence with dense vector embeddings to build low-latency, hallucination-resistant retrieval-augmented generation systems.",
    content: `
## The Challenge of Knowledge Retrieval in LLM Applications

Large language models excel at natural reasoning and synthesis, but they possess static cutoff dates and have no inherent access to proprietary enterprise data. In building applications like LegalGenie and ShopMate, standard fine-tuning proved too costly and inflexible for rapidly updating knowledge bases.

Retrieval-Augmented Generation (RAG) resolves this by dynamically grounding model queries in domain-specific source material retrieved at runtime.

### Dual-Layer Storage: Why Combine MongoDB with Pinecone?

While some single databases offer integrated vector indexes, pairing a specialized vector database like **Pinecone** with **MongoDB** provides optimal separation of concerns:

1. **MongoDB** handles transactional metadata, document ownership, user access controls, and full JSON payloads.
2. **Pinecone** handles approximate nearest neighbor (ANN) vector indexing with sub-50ms latency across millions of dimensional vectors.

\`\`\`javascript
// Hybrid search query pipeline
async function queryLegalPrecedents(queryText, userId) {
  // 1. Generate dense embedding via Gemini
  const queryEmbedding = await generateEmbedding(queryText);

  // 2. Query Pinecone with metadata filter
  const vectorResults = await pineconeIndex.query({
    vector: queryEmbedding,
    topK: 5,
    filter: { userId: { $eq: userId } },
    includeMetadata: true
  });

  // 3. Hydrate complete document context from MongoDB
  const documentIds = vectorResults.matches.map(m => m.metadata.docId);
  const fullDocuments = await mongoCollection.find({
    _id: { $in: documentIds }
  }).toArray();

  return formatContextForLLM(fullDocuments, vectorResults.matches);
}
\`\`\`

### Minimizing Hallucination with Strict Context Windows

A common pitfall in production RAG systems is dumping unfiltered retrieved chunks into the prompt context. To maintain factual precision:

- Enforce cosine similarity thresholds (e.g., minimum score of 0.78).
- Inject clear source attributions into the system prompt.
- Instruct the model to explicitly state "I don't have sufficient verified context" if no passages satisfy the relevance criterion.

> **Key Takeaway**: A well-structured hybrid retrieval architecture guarantees that user queries are met with fast, verifiable, and strictly sourced responses.
`
  },
  {
    id: "jwt-refresh-token-rotation",
    slug: "jwt-refresh-token-rotation",
    title: "Architecting Secure JWT Refresh Token Rotation in Express",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Backend Security",
    tags: ["Security", "JWT", "Node.js", "Express"],
    summary: "Implementing single-use refresh token rotation with reuse detection to protect single-page applications against session hijacking.",
    content: `
## Why Standard Stateless JWTs Fall Short

Stateless JSON Web Tokens are popular for decoupling authentication from database lookups on every incoming API request. However, if a long-lived access token is compromised through cross-site scripting (XSS), the attacker retains access until token expiration.

Short-lived access tokens (e.g., 10–15 minutes) paired with **Refresh Token Rotation (RTR)** provide the ideal balance between security and user convenience.

### The Mechanism of Token Rotation

Under refresh token rotation:
- Each time the client requests a new access token, the current refresh token is exchanged and **immediately invalidated**.
- A brand-new refresh token is issued alongside the new access token.
- Refresh tokens are stored in secure, \`httpOnly\`, \`SameSite=Strict\` cookies inaccessible to client-side JavaScript.

\`\`\`javascript
// Refresh token endpoint with reuse detection
app.post('/api/auth/refresh', async (req, res) => {
  const incomingToken = req.cookies.refreshToken;
  if (!incomingToken) return res.sendStatus(401);

  const foundUser = await User.findOne({ 'refreshTokens.token': incomingToken });

  // REUSE DETECTION: Token was already used or revoked!
  if (!foundUser) {
    const hackedUser = await User.findOne({ 'compromisedTokens': incomingToken });
    if (hackedUser) {
      // Invalidate ALL active sessions for this account immediately
      await User.updateOne({ _id: hackedUser._id }, { $set: { refreshTokens: [] } });
    }
    return res.status(403).json({ error: "Session invalid. Please re-authenticate." });
  }

  // Issue new pair & cycle the token
  const newAccessToken = signAccessToken(foundUser);
  const newRefreshToken = signRefreshToken(foundUser);

  await cycleUserRefreshToken(foundUser._id, incomingToken, newRefreshToken);

  res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  res.json({ accessToken: newAccessToken });
});
\`\`\`

### Reuse Detection: Detecting Intercepted Credentials

If an attacker captures a refresh token and uses it *after* the legitimate client has already rotated it, the server immediately flags the reuse anomaly and wipes the entire token family. This prevents persistent account compromise.
`
  },
  {
    id: "modern-lattice-grid-animation",
    slug: "modern-lattice-grid-animation",
    title: "Crafting High-Performance Lattice Background Animations with CSS",
    date: "November 5, 2024",
    readTime: "5 min read",
    category: "Frontend & Motion",
    tags: ["CSS", "Performance", "Animations", "UI Design"],
    summary: "How to engineer interactive 400-cell geometric grid backgrounds with silky smooth 60fps rendering and zero main-thread CPU overhead.",
    content: `
## Background Depth in Modern Minimalist Design

Modern developer portfolios frequently leverage subtle, non-intrusive ambient motion to bring life to an otherwise static dark layout. The STVN portfolio aesthetic relies on a fine 20x20 lattice grid where individual cells softly pulse at staggered intervals.

### The Performance Pitfall of Javascript Animations

A common rookie mistake is driving background grid elements through JavaScript \`setInterval\`, state hooks, or mousemove re-renders. With 400 DOM elements:

- Triggering React re-renders creates significant garbage collection spikes.
- Direct DOM attribute mutation on every frame blocks the browser's main thread.

### The CSS Solution: Hardware Acceleration

By declaring animations entirely in CSS keyframes with CSS custom variables, the browser handles animation cycles entirely on the compositor thread:

\`\`\`css
.lattice-grid {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 1px;
}

.lattice-cell {
  background-color: rgb(var(--color-text));
  opacity: 0;
  animation: cellPulse var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  will-change: opacity;
}

@keyframes cellPulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.08; }
}
\`\`\`

### Accessibility First: Honoring Prefers-Reduced-Motion

For users with vestibular motion sensitivities, background animations must seamlessly pause:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .lattice-cell {
    animation: none !important;
    opacity: 0.02 !important;
  }
}
\`\`\`
`
  },
  {
    id: "local-llm-integration-ollama",
    slug: "local-llm-integration-ollama",
    title: "Building Privacy-Centric Web Apps with Local LLMs and Ollama",
    date: "October 18, 2024",
    readTime: "8 min read",
    category: "AI & Local Models",
    tags: ["Ollama", "Llama 3.2", "Privacy", "Node.js"],
    summary: "A practical guide to connecting React frontends with local Llama 3.2 instances for zero-cloud latency and complete user data sovereignty.",
    content: `
## The Case for Offline and Local Inference

While cloud AI APIs from OpenAI and Google provide immense reasoning power, certain applications demand complete privacy or zero marginal cost per token. Educational tools and internal organizational tools cannot always transmit proprietary content over public internet endpoints.

### Setting Up Local Inference with Ollama

Ollama wraps open-weights models like Meta's **Llama 3.2** in an intuitive, production-ready local REST daemon.

\`\`\`bash
# Run local 3B model with GPU offloading
ollama run llama3.2
\`\`\`

### Streaming Responses to React via Server-Sent Events

To provide a responsive typing experience, our Express backend streams tokens directly from Ollama to the React frontend:

\`\`\`javascript
import { Ollama } from 'ollama';
const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

export async function streamStudyResponse(prompt, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const responseStream = await ollama.chat({
    model: 'llama3.2',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });

  for await (const chunk of responseStream) {
    res.write(\`data: \${JSON.stringify({ text: chunk.message.content })}\\n\\n\`);
  }
  res.end();
}
\`\`\`

### Conclusion

Pairing modern lightweight models (such as Llama 3.2 1B or 3B) with efficient full-stack streaming yields rapid, private AI capabilities that run seamlessly even on consumer laptops.
`
  }
];
