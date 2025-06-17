import React, { useState, useCallback } from 'react';
import { Brain } from 'lucide-react';
import { analyzeText, AnalysisResult } from '../utils/textAnalyzer';
import AnalysisResults from '../components/AnalysisResults';
import LoadingSpinner from '../components/LoadingSpinner';
import SampleSelector from '../components/SampleSelector';

export default function Trial() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = useCallback(async () => {
    if (text.length < 20) {
      setError('Text must be at least 20 characters long');
      return;
    }

    setError('');
    setIsAnalyzing(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      try {
        const analysisResult = analyzeText(text);
        setResult(analysisResult);
      } catch (err) {
        setError('Analysis failed. Please try again.');
      } finally {
        setIsAnalyzing(false);
      }
    }, 1500);
  }, [text]);

  const handleSampleSelect = (sampleText: string) => {
    setText(sampleText);
    setResult(null);
    setError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Try AI Content Detection</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test our advanced detection system with your own text or use our sample data to see how it works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Input Text for Analysis</h3>
            
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here for analysis... (minimum 20 characters)"
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            
            <div className="flex items-center justify-between mt-4">
              <span className={`text-sm ${text.length < 20 ? 'text-red-500' : 'text-green-500'}`}>
                {text.length} characters {text.length < 20 && '(minimum 20 required)'}
              </span>
              <button
                onClick={handleAnalyze}
                disabled={text.length < 20 || isAnalyzing}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Sample Selector */}
          <SampleSelector onSampleSelect={handleSampleSelect} />
        </div>

        {/* Results Section */}
        <div>
          {isAnalyzing && <LoadingSpinner />}
          {result && !isAnalyzing && <AnalysisResults result={result} />}
          {!result && !isAnalyzing && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                Ready for Analysis
              </h3>
              <p className="text-gray-400">
                Enter text above to see detailed AI detection results
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}