import React from 'react';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Type } from 'lucide-react';
import { Section } from '../../types';

interface Props {
  section: Section;
  onChange: (style: Section['style']) => void;
}

export function TextControls({ section, onChange }: Props) {
  const style = section.style || {};

  const toggleStyle = (key: keyof Section['style'], value: any) => {
    onChange({
      ...style,
      [key]: style[key] === value ? undefined : value
    });
  };

  return (
    <div className="mb-2 flex items-center gap-2 rounded-lg border border-gray-200 p-2 dark:border-gray-700">
      <div className="flex items-center gap-1 border-r border-gray-200 pr-2 dark:border-gray-700">
        <button
          onClick={() => toggleStyle('align', 'left')}
          className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            style.align === 'left' ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>
        <button
          onClick={() => toggleStyle('align', 'center')}
          className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            style.align === 'center' ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          title="Center"
        >
          <AlignCenter size={16} />
        </button>
        <button
          onClick={() => toggleStyle('align', 'right')}
          className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            style.align === 'right' ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-gray-200 pr-2 dark:border-gray-700">
        <button
          onClick={() => toggleStyle('bold', true)}
          className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            style.bold ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => toggleStyle('italic', true)}
          className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            style.italic ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
      </div>

      <input
        type="color"
        value={style.color || '#000000'}
        onChange={(e) => toggleStyle('color', e.target.value)}
        className="h-6 w-6 cursor-pointer rounded border-0"
        title="Text Color"
      />
    </div>
  );
}