import React from 'react';
import { Shuffle, User, Bot } from 'lucide-react';
import { humanWrittenSamples, aiGeneratedSamples } from '../data/aiWords';

interface SampleSelectorProps {
  onSampleSelect: (text: string) => void;
}

export default function SampleSelector({ onSampleSelect }: SampleSelectorProps) {
  const getRandomSample = (samples: string[]) => {
    return samples[Math.floor(Math.random() * samples.length)];
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
        <Shuffle className="w-4 h-4 mr-2" />
        Try Sample Texts
      </h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => onSampleSelect(getRandomSample(humanWrittenSamples))}
          className="flex items-center justify-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors"
        >
          <User className="w-4 h-4 mr-2" />
          Human Sample
        </button>
        <button
          onClick={() => onSampleSelect(getRandomSample(aiGeneratedSamples))}
          className="flex items-center justify-center px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg transition-colors"
        >
          <Bot className="w-4 h-4 mr-2" />
          AI Sample
        </button>
      </div>
    </div>
  );
}