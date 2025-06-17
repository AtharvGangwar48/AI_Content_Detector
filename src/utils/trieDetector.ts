class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfPhrase: boolean = false;
}

export class Trie {
  private root: TrieNode = new TrieNode();

  insert(phrase: string): void {
    const words = phrase.toLowerCase().split(' ');
    let current = this.root;

    for (const word of words) {
      if (!current.children.has(word)) {
        current.children.set(word, new TrieNode());
      }
      current = current.children.get(word)!;
    }
    current.isEndOfPhrase = true;
  }

  search(phrase: string): boolean {
    const words = phrase.toLowerCase().split(' ');
    let current = this.root;

    for (const word of words) {
      if (!current.children.has(word)) {
        return false;
      }
      current = current.children.get(word)!;
    }
    return current.isEndOfPhrase;
  }

  countMatches(tokens: string[]): number {
    let matches = 0;
    
    for (let i = 0; i < tokens.length; i++) {
      for (let j = i + 2; j <= Math.min(i + 6, tokens.length); j++) {
        const phrase = tokens.slice(i, j).join(' ');
        if (this.search(phrase)) {
          matches++;
        }
      }
    }
    
    return matches;
  }
}