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
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            // i is an opening bracket
            stack.push(map[s[i]]);
            console.log(stack);
        } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            // i is a closing bracket and the top of the stack matches
            stack.pop();
            console.log(stack);
        } else {
            // i is closing bracket and the top of the stack does not match
            return false;
        }
    }
    return stack.length === 0;
};

("[()]");
("[{[{}]}]()");
("([()])");

console.log("[20]valid-parenthesis");
console.log(isValid("[[[[[]]]]]()"));
const map = {
    "(": ")",
    "{": "}",
    "[": "]"
};

console.log(map["("]);
