export function preprocessText(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0);
}

export function extractPhrases(text: string, phraseLength: number = 3): string[] {
  const words = preprocessText(text);
  const phrases: string[] = [];
  
  for (let i = 0; i <= words.length - phraseLength; i++) {
    phrases.push(words.slice(i, i + phraseLength).join(' '));
  }
  
  return phrases;
}