import { preprocessText, extractPhrases } from './textPreprocessor';
import { calculateWordFrequency, getFrequencyScore } from './hashAnalyzer';
import { Trie } from './trieDetector';
import { calculateSimilarity } from './editDistance';
import { getTopKFrequent } from './heapAnalyzer';
import { aiLikeWords, commonAIPhrases, aiGeneratedSamples, humanWrittenSamples } from '../data/aiWords';

export interface AnalysisResult {
  label: 'AI-Generated' | 'Human-Written';
  confidence: number;
  details: {
    hashingScore: number;
    trieMatches: number;
    editDistanceSimilarity: number;
    heapAnalysisScore: number;
    totalScore: number;
  };
  topWords: Array<[string, number]>;
  detectedPhrases: string[];
}

// Initialize Trie with common AI phrases
const aiPhraseTrie = new Trie();
commonAIPhrases.forEach(phrase => aiPhraseTrie.insert(phrase));

// Combine all AI samples for reference
const allAISamples = aiGeneratedSamples.join(' ');
const allHumanSamples = humanWrittenSamples.join(' ');
const aiReferenceTokens = preprocessText(allAISamples);
const humanReferenceTokens = preprocessText(allHumanSamples);

export function analyzeText(text: string): AnalysisResult {
  const tokens = preprocessText(text);
  const phrases = extractPhrases(text, 3);
  
  // 1. Hashing Analysis - Word frequency comparison
  const aiFreqScore = getFrequencyScore(tokens, aiReferenceTokens);
  const humanFreqScore = getFrequencyScore(tokens, humanReferenceTokens);
  const hashingScore = aiFreqScore / (aiFreqScore + humanFreqScore + 0.01);
  
  // 2. Trie Analysis - AI phrase detection
  const trieMatches = aiPhraseTrie.countMatches(tokens);
  const trieScore = Math.min(trieMatches / 3, 1);
  
  // 3. Edit Distance Analysis - Similarity to AI samples
  const aiSimilarity = calculateSimilarity(tokens, aiReferenceTokens);
  const humanSimilarity = calculateSimilarity(tokens, humanReferenceTokens);
  const editDistanceSimilarity = aiSimilarity / (aiSimilarity + humanSimilarity + 0.01);
  
  // 4. Heap Analysis - AI-like word frequency
  const topWords = getTopKFrequent(tokens, 10);
  const aiWordCount = topWords.filter(([word]) => aiLikeWords.has(word)).length;
  const heapAnalysisScore = Math.min(aiWordCount / 5, 1);
  
  // 5. Detected AI phrases
  const detectedPhrases = phrases.filter(phrase => aiPhraseTrie.search(phrase));
  
  // Final scoring with weighted algorithm
  const totalScore = (
    0.25 * hashingScore +
    0.30 * trieScore +
    0.25 * editDistanceSimilarity +
    0.20 * heapAnalysisScore
  );
  
  const confidence = Math.round(totalScore * 100);
  const label = confidence > 50 ? 'AI-Generated' : 'Human-Written';
  
  return {
    label,
    confidence,
    details: {
      hashingScore: Math.round(hashingScore * 100),
      trieMatches,
      editDistanceSimilarity: Math.round(editDistanceSimilarity * 100),
      heapAnalysisScore: Math.round(heapAnalysisScore * 100),
      totalScore: confidence
    },
    topWords,
    detectedPhrases
  };
}