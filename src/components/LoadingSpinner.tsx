import React from 'react';
import { Brain } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Brain className="w-12 h-12 text-blue-600 animate-pulse" />
        <div className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Analyzing text...</p>
      <p className="text-sm text-gray-500">Running advanced algorithms</p>
    </div>
  );
}