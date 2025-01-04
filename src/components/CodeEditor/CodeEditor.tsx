import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

interface Props {
  content: string;
  language?: string;
  onChange: (content: string, language: string) => void;
}

const LANGUAGES = [
  'bash',
  'javascript',
  'typescript',
  'python',
  'java',
  'cpp',
  'csharp',
  'go',
  'rust',
  'php',
  'ruby',
  'swift',
  'kotlin',
  'sql',
  'html',
  'css',
  'json',
  'yaml',
  'markdown',
  'plaintext'
];

export function CodeEditor({ content, language = 'plaintext', onChange }: Props) {
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setShowLanguageSelect(!showLanguageSelect)}
            className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <Code2 size={16} />
            {language || 'plaintext'}
          </button>
          
          {showLanguageSelect && (
            <div className="absolute left-0 top-full z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onChange(content, lang);
                    setShowLanguageSelect(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value, language)}
        className="min-h-[200px] w-full resize-none rounded-md bg-gray-50 p-4 font-mono text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:focus:bg-gray-800"
        placeholder={`Enter your ${language} code here...`}
        spellCheck={false}
      />
    </div>
  );
}