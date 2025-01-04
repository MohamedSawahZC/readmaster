import React from 'react';
import { Section } from '../../types';
import { TextControls } from '../TextControls/TextControls';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, style?: Section['style']) => void;
}

export function TextSection({ section, onUpdate }: Props) {
  const getTextStyles = () => {
    const styles: Record<string, string> = {
      textAlign: section.style?.align || 'left',
    };
    if (section.style?.bold) styles.fontWeight = 'bold';
    if (section.style?.italic) styles.fontStyle = 'italic';
    if (section.style?.color) styles.color = section.style.color;
    if (section.style?.fontSize) {
      switch (section.style.fontSize) {
        case 'sm': styles.fontSize = '0.875rem'; break;
        case 'base': styles.fontSize = '1rem'; break;
        case 'lg': styles.fontSize = '1.125rem'; break;
        case 'xl': styles.fontSize = '1.25rem'; break;
        case '2xl': styles.fontSize = '1.5rem'; break;
      }
    }
    return styles;
  };

  return (
    <div className="space-y-2">
      <TextControls
        section={section}
        onChange={(newStyle) => onUpdate(section.id, section.content, newStyle)}
      />
      <textarea
        value={section.content}
        onChange={(e) => onUpdate(section.id, e.target.value, section.style)}
        className="w-full resize-none rounded-md bg-transparent p-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:text-white"
        placeholder="Enter your text here..."
        rows={3}
        style={getTextStyles()}
      />
    </div>
  );
}