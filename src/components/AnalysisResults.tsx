import React from 'react';
import { Brain, Hash, GitBranch, Edit, BarChart3, CheckCircle, AlertTriangle } from 'lucide-react';
import { AnalysisResult } from '../utils/textAnalyzer';

interface AnalysisResultsProps {
  result: AnalysisResult;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const algorithms = [
    {
      name: 'Hashing Analysis',
      icon: Hash,
      score: result.details.hashingScore,
      description: 'Word frequency pattern matching'
    },
    {
      name: 'Trie Detection',
      icon: GitBranch,
      score: result.details.trieMatches * 20,
      description: `${result.details.trieMatches} AI phrases detected`
    },
    {
      name: 'Edit Distance',
      icon: Edit,
      score: result.details.editDistanceSimilarity,
      description: 'Similarity to known AI patterns'
    },
    {
      name: 'Heap Analysis',
      icon: BarChart3,
      score: result.details.heapAnalysisScore,
      description: 'AI-characteristic word frequency'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score < 30) return 'text-green-600';
    if (score < 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score < 30) return 'bg-green-500';
    if (score < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Main Result */}
      <div className="text-center p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-center mb-4">
          {result.label === 'Human-Written' ? (
            <CheckCircle className="w-12 h-12 text-green-500" />
          ) : (
            <AlertTriangle className="w-12 h-12 text-red-500" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {result.label}
        </h2>
        <p className="text-lg text-gray-600">
          Confidence: <span className={`font-semibold ${getScoreColor(result.confidence)}`}>
            {result.confidence}%
          </span>
        </p>
      </div>

      {/* Algorithm Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2" />
          Algorithm Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {algorithms.map((algo, index) => {
            const Icon = algo.icon;
            const score = Math.min(algo.score, 100);
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Icon className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-gray-800">{algo.name}</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{algo.description}</span>
                    <span className={`font-semibold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(score)}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Words */}
      {result.topWords.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Most Frequent Words</h3>
          <div className="flex flex-wrap gap-2">
            {result.topWords.slice(0, 8).map(([word, freq], index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {word} ({freq})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Detected AI Phrases */}
      {result.detectedPhrases.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Detected AI Patterns ({result.detectedPhrases.length})
          </h3>
          <div className="max-h-32 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {result.detectedPhrases.map((phrase, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                >
                  "{phrase}"
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}