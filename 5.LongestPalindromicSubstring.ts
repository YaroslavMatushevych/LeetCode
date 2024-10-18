function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;

    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        // for even
        expandAroundCenter(s, i, i + 1);

        // for odd
        expandAroundCenter(s, i, i);
    }

    function expandAroundCenter(s: string, left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        const tempMaxLength = right - left - 1;

        if (tempMaxLength > maxLength) {
            start = left + 1;
            maxLength = tempMaxLength;
        };
    }

    return s.substring(start, start + maxLength)
};

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"