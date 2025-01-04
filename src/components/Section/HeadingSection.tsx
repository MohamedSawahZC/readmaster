import React from 'react';
import { Section } from '../../types';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string) => void;
}

export function HeadingSection({ section, onUpdate }: Props) {
  const getFontSize = () => {
    switch (section.level) {
      case 1: return 'text-3xl';
      case 2: return 'text-2xl';
      case 3: return 'text-xl';
      default: return 'text-lg';
    }
  };

  return (
    <input
      type="text"
      value={section.content}
      onChange={(e) => onUpdate(section.id, e.target.value)}
      className={`w-full bg-transparent font-bold outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:text-white ${getFontSize()}`}
      placeholder={`Heading ${section.level}`}
    />
  );
}