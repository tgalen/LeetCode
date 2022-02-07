// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function (strs) {
    const indexZ = strs[0].split("");
    for (let i = 1; i < strs.length; i++) {
        if (indexZ.length > strs[i].length) {
            indexZ.splice(strs[i].length, indexZ.length - strs[i].length);
        }
        for (let k = 0; k < strs[i].length; k++) {
            if (indexZ[k] !== strs[i][k]) {
                indexZ.splice(k, indexZ.length - k);
            }
        }
    }
    return indexZ.join("");
};

console.log("[14]longest-common-prefix");
