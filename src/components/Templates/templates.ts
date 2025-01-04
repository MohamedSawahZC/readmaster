export const templates = [
  {
    name: 'Modern Project',
    content: `# Awesome Project Name 🚀

## Overview

A cutting-edge solution that revolutionizes how developers build and deploy applications. Built with performance and developer experience in mind.

## ✨ Features

- 🚀 Lightning-fast performance
- 🛠️ Modern tooling support
- 📱 Responsive design
- 🔒 Enterprise-grade security

## 🔧 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/awesome-project.git

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## 💻 Usage

\`\`\`typescript
import { AwesomeComponent } from 'awesome-project';

const MyApp = () => {
  return (
    <AwesomeComponent>
      <h1>Hello World!</h1>
    </AwesomeComponent>
  );
};
\`\`\`

## 📝 License

MIT © [Your Name](https://github.com/username)`
  },
  {
    name: 'Developer Portfolio',
    content: `# John Developer 👨‍💻

![Profile Banner](https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&h=400&fit=crop)

## About Me

Passionate Software Engineer with 5+ years of experience in building scalable web applications. I love turning complex problems into simple, beautiful solutions.

## 🛠️ Tech Stack

- Frontend: React, Vue, TypeScript
- Backend: Node.js, Python, Go
- Database: PostgreSQL, MongoDB
- DevOps: Docker, Kubernetes, AWS

## 🌟 Featured Projects

### Project Alpha
Modern e-commerce platform built with Next.js and GraphQL.

\`\`\`typescript
// Example of clean code principles
interface Product {
  id: string;
  name: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  // Implementation
};
\`\`\`

## 📫 Get in Touch

- Portfolio: [johndeveloper.dev](https://johndeveloper.dev)
- GitHub: [@johndeveloper](https://github.com/johndeveloper)
- LinkedIn: [John Developer](https://linkedin.com/in/johndeveloper)`
  },
  {
    name: 'API Documentation',
    content: `# 🚀 API Documentation

## Authentication

All API requests require a valid JWT token in the Authorization header:

\`\`\`bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" https://api.example.com/v1/users
\`\`\`

## Endpoints

### Users

#### Get User Profile

\`\`\`http
GET /api/v1/users/me
\`\`\`

Response:

\`\`\`json
{
  "id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin"
}
\`\`\`

### Products

#### Create Product

\`\`\`typescript
interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
  categories: string[];
}
\`\`\`

## Error Handling

\`\`\`typescript
interface ErrorResponse {
  code: string;
  message: string;
  details?: Record<string, any>;
}
\`\`\``
  }
];