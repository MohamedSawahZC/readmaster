import React, { useState } from 'react';
import { Image, Upload, Link as LinkIcon } from 'lucide-react';

interface Props {
  url: string;
  onUpdate: (url: string) => void;
}

export function ImageUploader({ url, onUpdate }: Props) {
  const [showUrlInput, setShowUrlInput] = useState(!url);
  const [preview, setPreview] = useState(url);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowUrlInput(false);
  };

  return (
    <div className="space-y-4">
      {showUrlInput ? (
        <form onSubmit={handleUrlSubmit} className="space-y-2">
          <div className="flex gap-2">
            <input
              type="url"
              value={preview}
              onChange={(e) => {
                setPreview(e.target.value);
                onUpdate(e.target.value);
              }}
              className="flex-1 rounded-md bg-gray-50 p-3 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:focus:bg-gray-800"
              placeholder="Enter image URL..."
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      ) : (
        <div className="relative">
          <img
            src={url}
            alt="Preview"
            className="max-h-[300px] w-full rounded-lg object-cover"
            onError={() => setShowUrlInput(true)}
          />
          <button
            onClick={() => setShowUrlInput(true)}
            className="absolute bottom-2 right-2 rounded-full bg-gray-900/75 p-2 text-white hover:bg-gray-900"
          >
            <LinkIcon size={16} />
          </button>
        </div>
      )}
    </div>
  );
}