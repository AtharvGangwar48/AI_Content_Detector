export function calculateWordFrequency(tokens: string[]): Map<string, number> {
  const frequency = new Map<string, number>();
  
  for (const token of tokens) {
    frequency.set(token, (frequency.get(token) || 0) + 1);
  }
  
  return frequency;
}

export function getFrequencyScore(tokens: string[], referenceTokens: string[]): number {
  const textFreq = calculateWordFrequency(tokens);
  const refFreq = calculateWordFrequency(referenceTokens);
  
  let similarity = 0;
  let totalWords = 0;
  
  for (const [word, freq] of textFreq) {
    totalWords += freq;
    if (refFreq.has(word)) {
      similarity += Math.min(freq, refFreq.get(word)!);
    }
  }
  
  return totalWords > 0 ? similarity / totalWords : 0;
}