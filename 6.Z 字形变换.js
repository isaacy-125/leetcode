/*
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
示例 3：

输入：s = "A", numRows = 1
输出："A"
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arr = [];
  const length = s.length;
  let firstIndex = 0;
  let circle = 0;
  for (let i = 0; i < length; i ++) {
    const item = s.charAt(i);
    circle += 1;
    if (i >= firstIndex) {
      if (i == firstIndex) {
        circle = 1;
      }
      firstIndex = firstIndex + numRows + numRows - 2;
      arr.push([]);
      arr[arr.length - 1].push(item);
    } else if (circle <= numRows) {
      arr[arr.length - 1].push(item);
    } else {
      const diff = circle - numRows;
      const diffIndex = numRows - 1 - diff;
      let diffArr = [];
      for (let j = 0; j < numRows; j ++) {
        if (j === diffIndex) {
          diffArr.push(item);
        } else {
          diffArr.push('Null');
        }
      }
      arr.push(diffArr)
    }
  }
  let str = '';
  for (let i = 0; i < numRows; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j][i]) {
        let plus = arr[j][i];
        if (plus == 'Null') {
          plus = ''
        }
        str += plus;
      }

    }
  }
  return str;
};

console.log(convert('PAYPALISHIRING', 4))
