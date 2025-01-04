import React from 'react';
import { FileDown, SplitSquareVertical, Github } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

interface Props {
  showPreview: boolean;
  onTogglePreview: () => void;
  onDownload: () => void;
}

export function Header({ showPreview, onTogglePreview, onDownload }: Props) {
  return (
    <header className="border-b bg-white px-6 py-4 dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mohamedsawah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github size={20} />
          </a>
          <ThemeToggle />
          <button
            onClick={onTogglePreview}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <SplitSquareVertical size={16} />
            {showPreview ? 'Hide' : 'Show'} Preview
          </button>
          <button
            onClick={onDownload}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <FileDown size={16} />
            Download README
          </button>
        </div>
      </div>
    </header>
  );
}