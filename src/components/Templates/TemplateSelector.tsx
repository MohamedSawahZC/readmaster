import React from 'react';
import { templates } from './templates';
import { Section } from '../../types';
import { parseTemplate } from '../../utils/templateParser';

interface Props {
  onApply: (sections: Section[]) => void;
}

export function TemplateSelector({ onApply }: Props) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Quick Templates</h2>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {templates.map((template) => (
          <button
            key={template.name}
            onClick={() => onApply(parseTemplate(template.content))}
            className="flex-shrink-0 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
}