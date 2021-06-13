/*
给你一个字符串 s，找到 s 中最长的回文子串。
bacbad


示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length;
  function cursive(str) {
    for (let i = 0; i < length; i ++) {
      const point1 = str.charAt(i);
      for (let j = length - 1; j > i; j --) {
        const point2 = str.charAt(j);
        if (point1 === point2) {
          const strr = str.slice(i, j + 1);
          const restStr = str.slice(i + 1, j);
          if (restStr.length > 1) {
            cursive(restStr)
          }
          console.log(strr, restStr);
        }
      }
    }
  }
  cursive(s);
};

console.log(longestPalindrome('babad'));
