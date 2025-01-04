import React from 'react';
import { BookOpen } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <BookOpen className="h-8 w-8 text-blue-600" />
      <div>
        <h1 className="text-2xl font-bold text-gray-900">ReadMaster</h1>
        <p className="text-xs text-gray-500">by Mohamed Sawah</p>
      </div>
    </div>
  );
}