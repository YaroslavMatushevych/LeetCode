// function lengthOfLongestSubstring(s: string): number {
//     let start = 0; // Start pointer of the window
//     let maxLength = 0; // To store the length of the longest substring
//     const charIndexMap = new Map(); // To store the latest index of each character

//     for (let end = 0; end < s.length; end++) {
//         const currentChar = s[end];

//         // If the character is already in the map and within the current window
//         if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
//             // Move the start pointer to the right of the last occurrence of currentChar
//             start = charIndexMap.get(currentChar) + 1;
//         }

//         // Update the latest index of the current character
//         charIndexMap.set(currentChar, end);

//         // Calculate the length of the current window and update maxLength if it's larger
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
// }

function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length;

    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar);
        }

        charIndexMap.set(currentChar, end);

        maxLength = Math.max(maxLength, end - start);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (substring "abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 (substring "b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 (substring "wke")
