// https://leetcode.com/problems/longest-palindrome/description/
function longestPalindrome(s: string): number {
    let result = 0;
    const characterToFrequency = new Map<string, number>();
    for (const c of s) {
      const currentFrequency = characterToFrequency.get(c);
      if (currentFrequency === undefined) {
        characterToFrequency.set(c, 1);
      } else {
        characterToFrequency.set(c, currentFrequency + 1);
      }
    }
    let isThereAnyOddFrequencies = 0;
    for (const [_, frequency] of characterToFrequency) {
      if (frequency % 2 === 0) {
        result += frequency;
      } else {
        result += frequency - 1;
        isThereAnyOddFrequencies = 1;
      }
    }
  
    return result + isThereAnyOddFrequencies;
  }

  console.log(longestPalindrome('abccccdd')); // 7