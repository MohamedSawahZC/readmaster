import { Section } from '../types';
import { generateId } from './generateId';

export const parseTemplate = (content: string): Section[] => {
  const lines = content.split('\n');
  const sections: Section[] = [];
  let currentSection: Partial<Section> | null = null;
  
  lines.forEach((line) => {
    // Handle headings
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      if (currentSection) {
        sections.push(currentSection as Section);
      }
      currentSection = {
        id: generateId(),
        type: 'heading',
        level: headingMatch[1].length as 1 | 2 | 3,
        content: headingMatch[2].trim()
      };
      sections.push(currentSection as Section);
      currentSection = null;
      return;
    }

    // Handle code blocks
    if (line.startsWith('```')) {
      if (currentSection?.type === 'code') {
        sections.push(currentSection as Section);
        currentSection = null;
      } else {
        const language = line.slice(3).trim();
        currentSection = {
          id: generateId(),
          type: 'code',
          content: '',
          language
        };
      }
      return;
    }

    // Add content to code block
    if (currentSection?.type === 'code') {
      currentSection.content += (currentSection.content ? '\n' : '') + line;
      return;
    }

    // Handle text
    if (line.trim()) {
      if (currentSection?.type !== 'text') {
        if (currentSection) {
          sections.push(currentSection as Section);
        }
        currentSection = {
          id: generateId(),
          type: 'text',
          content: line
        };
      } else {
        currentSection.content += '\n' + line;
      }
    } else if (currentSection) {
      sections.push(currentSection as Section);
      currentSection = null;
    }
  });

  if (currentSection) {
    sections.push(currentSection as Section);
  }

  return sections;
};