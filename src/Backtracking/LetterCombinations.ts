// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
const Telephone: { [k: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u","v"],
    "9": ["w", "x", "y", "z"]
}

function letterCombinations(digits: string): string[] {
    const ans: string[] = [];
    if(digits !== "") {
        const arr: string[] = digits.split("");
        const len = arr.length;
        const dfs = (letters: string, dgt: string) => {
            if (len === letters.length) {
                ans.push(letters);
                return;
            }
            for (const letter of Telephone[dgt[0]]) {
                dfs(letters + letter, dgt.slice(1));
            }
        }
        dfs("", digits);
    }
    return ans;
}

console.log(letterCombinations("23"))
console.log(letterCombinations("")) // []