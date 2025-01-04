# ReadMaster

ReadMaster is a React TypeScript project powered by Vite, designed for seamless drag-and-drop functionality to generate and manage README.md files effortlessly.

## Features

- **Drag-and-Drop:** Easily create README files by dragging and dropping components.
- **Customizable Templates:** Choose from predefined templates or create your own.
- **Live Preview:** See the generated README content in real-time.
- **Fast and Lightweight:** Built with Vite for optimal performance.
- **Type Safety:** Developed with TypeScript for robust type checking.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16.x or above)
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ReadMaster.git
   cd ReadMaster
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Build

To create a production build, run:
```bash
yarn build
# or
npm run build
```

## Scripts

- `dev`: Start the development server.
- `build`: Generate a production build.
- `preview`: Preview the production build locally.
- `lint`: Run linting checks.
- `format`: Format the code using Prettier.

## Project Structure

```plaintext
ReadMaster/
├── src/
│   ├── components/   # React components
│   │   ├── CodeEditor
│   │   ├── Footer
│   │   ├── Header
│   │   ├── ImageUploader
│   │   ├── Preview
│   │   ├── Section
│   │   ├── Templates
│   │   ├── TextControls
│   │   ├── Toast
│   │   └── ToastContainer
│   │       └── Toolbar
│   │           ├── DraggableSection.tsx
│   │           ├── Preview.tsx
│   │           └── Toolbar.tsx
│   ├── hooks/        # Custom hooks
│   │   ├── useTheme.ts
│   │   └── useToast.ts
│   ├── types/        # Type definitions
│   │   └── index.ts
│   ├── utils/        # Utility functions
│   │   ├── downloadMarkdown.ts
│   │   ├── generateId.ts
│   │   ├── generateMarkdown.ts
│   │   └── templateParser.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx      # Application entry point
├── public/           # Static assets
├── .gitignore        # Git ignore file
├── eslint.config.js  # ESLint configuration
├── index.html        # Main HTML file
├── package.json      # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js# Tailwind CSS configuration
├── tsconfig.app.json # TypeScript app config
├── tsconfig.json     # TypeScript configuration
├── tsconfig.node.json# TypeScript Node.js config
└── vite.config.ts    # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear descriptions.
4. Open a pull request and provide a detailed explanation.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Developed with ❤️ by Mohamed Sawah.
