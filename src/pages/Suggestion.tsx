import React, { useState } from 'react';
import { MessageSquare, Lightbulb, Bug, Star, Mail } from 'lucide-react';

export default function Suggestion() {
  const [submitted, setSubmitted] = useState(false);

  const suggestionTypes = [
    { value: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'text-yellow-600 bg-yellow-100' },
    { value: 'bug', label: 'Bug Report', icon: Bug, color: 'text-red-600 bg-red-100' },
    { value: 'improvement', label: 'Improvement', icon: Star, color: 'text-purple-600 bg-purple-100' },
    { value: 'feedback', label: 'General Feedback', icon: MessageSquare, color: 'text-blue-600 bg-blue-100' }
  ];

  const openGoogleForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScx_2EA1Fk_eqGGR-Q3bUKJevSD7UfA8eFP3S-wTNBJqRE-UA/viewform", "_blank");
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your suggestion has been submitted successfully. We appreciate your feedback and will review it carefully.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Submit Another Suggestion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Share Your Suggestions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Help us improve our AI content detection system. Your feedback is valuable to us!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Suggestion Types */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggestion Types</h3>
            <div className="space-y-3">
              {suggestionTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.value} className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${type.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{type.label}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Quick Tips</h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Be specific about the issue or feature</li>
                <li>• Include steps to reproduce bugs</li>
                <li>• Suggest potential solutions</li>
                <li>• Provide examples when possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Form Button */}
        <div className="lg:col-span-2">
          <button
            onClick={openGoogleForm}
            className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all mb-4"
          >
            Open Google Form
          </button>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-gray-600 mr-2" />
              <span className="text-gray-700">For any inquiries, please contact:</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>atharvgangwar8@gmail.com</li>
              <li>negi67291@gmail.com</li>
            </ul>
            <h4 className="text-md font-semibold text-gray-800 mb-2">GitHub Repositories</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <a href="https://github.com/AtharvGangwar48/AI_Content_Detector_Backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  API Repository
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <a href="https://github.com/AtharvGangwar48/AI_Generated_Content_Detector" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Frontend Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
