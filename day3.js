/**
 * 3.无重复字符的最长子串
 */

//s = "abcabcbb" 输出: 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length
  let max = 0
  Array.prototype.reduce.call(s, (total, item) => {
    const len = total.indexOf(item)
    console.log(total)

    if (len === -1) {
      total += item
      max = Math.max(total.length, max)
      return total
    } else {
      // 此时含有重复的,挪位
      total += item
      return total.slice(len + 1)
    }
  })
  return max
}

lengthOfLongestSubstring('abcabcbb')

/**扩展reduce方法 */
