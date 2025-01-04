import React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-white px-6 py-4 dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto max-w-6xl text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {year} ReadMaster by Mohamed Sawah. All rights reserved.</p>
        <p className="mt-1">
          Built with ❤️ using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}