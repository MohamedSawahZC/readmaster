import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Props {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: Props) {
  const icons = {
    success: <CheckCircle className="text-green-500" size={20} />,
    error: <AlertCircle className="text-red-500" size={20} />,
    info: <Info className="text-blue-500" size={20} />,
  };

  const backgrounds = {
    success: 'bg-green-50 dark:bg-green-900/20',
    error: 'bg-red-50 dark:bg-red-900/20',
    info: 'bg-blue-50 dark:bg-blue-900/20',
  };

  return (
    <div className={`flex items-center gap-3 rounded-lg p-4 shadow-lg ${backgrounds[type]}`}>
      {icons[type]}
      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <X size={16} />
      </button>
    </div>
  );
}