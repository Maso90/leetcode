function characterReplacement(s: string, k: number): number {
    let maxLength = 0
    let windowStart = 0
    let charCount = new Array<number>(26).fill(0)
    let maxCharCount = 0

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s.charCodeAt(windowEnd) - 65
        charCount[rightChar]++
        maxCharCount = Math.max(maxCharCount, charCount[rightChar])

        if (windowEnd - windowStart + 1 - maxCharCount > k) {
            let leftChar = s.charCodeAt(windowStart) - 65
            charCount[leftChar]--
            windowStart++
        }
        console.log(charCount)
        let windowLength = windowEnd - windowStart + 1
        maxLength = Math.max(maxLength, windowLength)
    }

    return maxLength
};

console.log(characterReplacement('AABABBA', 1));