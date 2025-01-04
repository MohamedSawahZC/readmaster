import React, { useRef } from 'react';
import { Section } from '../../types';
import { Upload, File, X } from 'lucide-react';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, attachment: Section['attachment']) => void;
}

export function AttachmentSection({ section, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a server here
      // For demo, we'll create an object URL
      const url = URL.createObjectURL(file);
      onUpdate(section.id, file.name, {
        name: file.name,
        size: file.size,
        type: file.type,
        url
      });
    }
  };

  const removeAttachment = () => {
    onUpdate(section.id, '', undefined);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {section.attachment ? (
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <File size={24} className="text-blue-500" />
          <div className="flex-1">
            <h4 className="font-medium">{section.attachment.name}</h4>
            <p className="text-sm text-gray-500">
              {formatFileSize(section.attachment.size)}
            </p>
          </div>
          <button
            onClick={removeAttachment}
            className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-blue-500 dark:border-gray-700"
        >
          <Upload size={24} className="text-gray-400" />
          <p className="text-sm text-gray-500">
            Click to upload or drag and drop
          </p>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}