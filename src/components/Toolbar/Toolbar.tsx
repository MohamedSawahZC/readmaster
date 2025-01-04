import React from 'react';
import { 
  Heading1, 
  Heading2, 
  Heading3, 
  Type, 
  Code2, 
  Image as ImageIcon,
  Share2,
  Award,
  Paperclip
} from 'lucide-react';
import { Section } from '../../types';

interface Props {
  onAdd: (type: Section['type'], level?: number) => void;
}

export function Toolbar({ onAdd }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-gray-800">
      <button
        onClick={() => onAdd('heading', 1)}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Heading 1"
      >
        <Heading1 size={20} />
      </button>
      <button
        onClick={() => onAdd('heading', 2)}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Heading 2"
      >
        <Heading2 size={20} />
      </button>
      <button
        onClick={() => onAdd('heading', 3)}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Heading 3"
      >
        <Heading3 size={20} />
      </button>
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
      <button
        onClick={() => onAdd('text')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Text"
      >
        <Type size={20} />
      </button>
      <button
        onClick={() => onAdd('code')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Code"
      >
        <Code2 size={20} />
      </button>
      <button
        onClick={() => onAdd('image')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Image"
      >
        <ImageIcon size={20} />
      </button>
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
      <button
        onClick={() => onAdd('embed')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Social Media Embed"
      >
        <Share2 size={20} />
      </button>
      <button
        onClick={() => onAdd('skills')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Skills"
      >
        <Award size={20} />
      </button>
      <button
        onClick={() => onAdd('attachment')}
        className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Attachment"
      >
        <Paperclip size={20} />
      </button>
    </div>
  );
}