import React, { useState } from 'react';
import { Section } from '../../types';
import { Youtube, Spotify, Linkedin, Facebook } from 'lucide-react';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, embedType: Section['embedType']) => void;
}

export function EmbedSection({ section, onUpdate }: Props) {
  const [url, setUrl] = useState(section.content);

  const icons = {
    spotify: <Spotify className="text-green-500" size={24} />,
    youtube: <Youtube className="text-red-500" size={24} />,
    linkedin: <Linkedin className="text-blue-500" size={24} />,
    facebook: <Facebook className="text-blue-600" size={24} />
  };

  const handleEmbed = (type: Section['embedType']) => {
    onUpdate(section.id, url, type);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to embed..."
          className="flex-1 rounded-lg border border-gray-200 p-2 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
        />
        <div className="flex gap-2">
          {Object.entries(icons).map(([type, icon]) => (
            <button
              key={type}
              onClick={() => handleEmbed(type as Section['embedType'])}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              title={`Embed ${type}`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      
      {section.embedType && section.content && (
        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <iframe
            src={section.content}
            className="w-full"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}