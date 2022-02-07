// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function (s) {
    const compliment = [
        { open: "(", close: ")" },
        { open: "{", close: "}" },
        { open: "[", close: "]" }
    ];

    for (let i = 0; i < s.length - 1; i += 2) {
        for (let k = 0; k < compliment.length; k++) {
            if (s[i] === compliment[k].open && s[i + 1] !== compliment[k].close) {
                return false;
            }
        }
    }
    return true;
};
