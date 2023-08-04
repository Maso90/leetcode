// https://leetcode.com/problems/word-break
function wordBreak(s: string, wordDict: string[]): boolean {
    const lookUp = new Set(wordDict);
    const memo = new Array<boolean>(s.length);
    const dp = (startIndex:number):boolean => {
        if(startIndex == s.length){
            return true;
        }
        if(memo[startIndex] != undefined){
            return memo[startIndex];
        }
        let found = false;
        for(let i = startIndex+1; i <= s.length; i++){
            if (lookUp.has(s.substring(startIndex,i)) && dp(i)){
                found = dp(i);
            }
        }
        memo[startIndex] = found;
        return found
    }
    return dp(0)
}

console.log(wordBreak('leetcode', ['leet', 'code'])); // true
console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true