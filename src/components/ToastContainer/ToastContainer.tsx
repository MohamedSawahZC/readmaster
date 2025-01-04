import React from 'react';
import { Toast } from '../Toast/Toast';

interface Props {
  toasts: Array<{
    id: string;
    message: string;
    type?: 'success' | 'error' | 'info';
  }>;
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: Props) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  );
}