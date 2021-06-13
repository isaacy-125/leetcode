/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
示例 5：

输入：coins = [1], amount = 2
输出：2
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  /**
   * 动态规划 先从最后一步 往前分析
   * 以示例1为例
   * dp(x) 表示到总数x 需要的最少硬币个数
   * dp(x) = min(dp(x-1) + 1,dp(x-2) + 1, dp(x-5) + 1)
   */
  const arr = [];
  arr[0] = 0;
  for (let i = 1; i <= amount; i ++) {
    arr[i] = null;
    for (let j = 0; j < coins.length; j ++) {
      const item = coins[j];
      if (i == item) {
        arr[i] = 1;
      }
      if (i - item >= 0 && arr[i - item]) {
        if (arr[i]) {
          arr[i] = Math.min(arr[i], arr[i - item] + 1);
        } else {
          arr[i] = arr[i - item] + 1
        }
      }
    }

  }
  return String(arr[amount]) == 'null' ? -1 : arr[amount];
}
