import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, X } from 'lucide-react';
import { Section } from '../types';
import { TextControls } from './TextControls/TextControls';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, style?: Section['style']) => void;
  onDelete: (id: string) => void;
}

export function DraggableSection({ section, onUpdate, onDelete }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
    <div
      ref={setNodeRef}
      style={style}
      className="group relative rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex items-start gap-2 p-4">
        <button
          className="cursor-grab text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={20} />
        </button>

        <div className="flex-1">
          {section.type === 'text' && (
            <>
              <TextControls
                section={section}
                onChange={(newStyle) => onUpdate(section.id, section.content, newStyle)}
              />
              <textarea
                value={section.content}
                onChange={(e) => onUpdate(section.id, e.target.value, section.style)}
                className="w-full resize-none bg-transparent outline-none dark:text-white"
                placeholder="Enter your text here..."
                rows={3}
                style={getTextStyles()}
              />
            </>
          )}

          {section.type === 'heading' && (
            <input
              type="text"
              value={section.content}
              onChange={(e) => onUpdate(section.id, e.target.value)}
              className="w-full bg-transparent text-xl font-bold outline-none dark:text-white"
              placeholder={`Heading ${section.level}`}
            />
          )}

          {section.type === 'code' && (
            <div className="relative">
              <div className="absolute right-2 top-2 text-xs text-gray-500">
                {section.language}
              </div>
              <textarea
                value={section.content}
                onChange={(e) => onUpdate(section.id, e.target.value)}
                className="w-full resize-none rounded bg-gray-50 p-4 font-mono text-sm outline-none dark:bg-gray-900"
                placeholder="Enter your code here..."
                rows={5}
              />
            </div>
          )}

          {section.type === 'image' && (
            <input
              type="text"
              value={section.content}
              onChange={(e) => onUpdate(section.id, e.target.value)}
              className="w-full bg-transparent outline-none dark:text-white"
              placeholder="Enter image URL..."
            />
          )}
        </div>
      </div>

      <button
        onClick={() => onDelete(section.id)}
        className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white hover:bg-red-600 group-hover:block"
      >
        <X size={14} />
      </button>
    </div>
  );
}