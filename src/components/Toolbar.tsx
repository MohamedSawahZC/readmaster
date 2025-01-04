import React from 'react';
import { 
  Heading1, 
  Heading2, 
  Heading3, 
  Type, 
  Code2, 
  Image as ImageIcon 
} from 'lucide-react';

interface Props {
  onAdd: (type: 'heading' | 'text' | 'code' | 'image', level?: number) => void;
}

export function Toolbar({ onAdd }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
      <button
        onClick={() => onAdd('heading', 1)}
        className="rounded p-2 hover:bg-gray-100"
        title="Heading 1"
      >
        <Heading1 size={20} />
      </button>
      <button
        onClick={() => onAdd('heading', 2)}
        className="rounded p-2 hover:bg-gray-100"
        title="Heading 2"
      >
        <Heading2 size={20} />
      </button>
      <button
        onClick={() => onAdd('heading', 3)}
        className="rounded p-2 hover:bg-gray-100"
        title="Heading 3"
      >
        <Heading3 size={20} />
      </button>
      <div className="h-6 w-px bg-gray-200" />
      <button
        onClick={() => onAdd('text')}
        className="rounded p-2 hover:bg-gray-100"
        title="Text"
      >
        <Type size={20} />
      </button>
      <button
        onClick={() => onAdd('code')}
        className="rounded p-2 hover:bg-gray-100"
        title="Code"
      >
        <Code2 size={20} />
      </button>
      <button
        onClick={() => onAdd('image')}
        className="rounded p-2 hover:bg-gray-100"
        title="Image"
      >
        <ImageIcon size={20} />
      </button>
    </div>
  );
}