import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, X, Copy, ArrowUp, ArrowDown } from 'lucide-react';
import { Section } from '../../types';
import { TextSection } from './TextSection';
import { HeadingSection } from './HeadingSection';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import { useToast } from '../../hooks/useToast';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, style?: Section['style'], language?: string) => void;
  onDelete: (id: string) => void;
  onMove?: (id: string, direction: 'up' | 'down') => void;
  onDuplicate?: (id: string) => void;
}

export function DraggableSection({ section, onUpdate, onDelete, onMove, onDuplicate }: Props) {
  const { showToast } = useToast();
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

  const handleCopyContent = () => {
    navigator.clipboard.writeText(section.content);
    showToast('Content copied to clipboard!');
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="absolute -right-2 -top-2 hidden gap-2 group-hover:flex">
        <button
          onClick={handleCopyContent}
          className="rounded-full bg-blue-500 p-1 text-white hover:bg-blue-600"
          title="Copy content"
        >
          <Copy size={14} />
        </button>
        {onDuplicate && (
          <button
            onClick={() => onDuplicate(section.id)}
            className="rounded-full bg-green-500 p-1 text-white hover:bg-green-600"
            title="Duplicate section"
          >
            <Copy size={14} />
          </button>
        )}
        <button
          onClick={() => onDelete(section.id)}
          className="rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
          title="Delete section"
        >
          <X size={14} />
        </button>
      </div>

      <div className="flex items-start gap-2 p-4">
        <div className="flex flex-col items-center gap-2">
          <button
            className="cursor-grab text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
            {...attributes}
            {...listeners}
          >
            <GripVertical size={20} />
          </button>
          {onMove && (
            <>
              <button
                onClick={() => onMove(section.id, 'up')}
                className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                title="Move up"
              >
                <ArrowUp size={16} />
              </button>
              <button
                onClick={() => onMove(section.id, 'down')}
                className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                title="Move down"
              >
                <ArrowDown size={16} />
              </button>
            </>
          )}
        </div>

        <div className="flex-1">
          {section.type === 'text' && (
            <TextSection
              section={section}
              onUpdate={onUpdate}
            />
          )}

          {section.type === 'heading' && (
            <HeadingSection
              section={section}
              onUpdate={onUpdate}
            />
          )}

          {section.type === 'code' && (
            <CodeEditor
              content={section.content}
              language={section.language}
              onChange={(content, language) => onUpdate(section.id, content, undefined, language)}
            />
          )}

          {section.type === 'image' && (
            <ImageUploader
              url={section.content}
              onUpdate={(url) => onUpdate(section.id, url)}
            />
          )}
        </div>
      </div>
    </div>
  );
}