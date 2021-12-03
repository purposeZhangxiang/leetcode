/**
 * 5.最长回文子串
 */

/**
 * tips
 * 回文是一个正读和反读都相同的字符串
 */

// "babad"  bab
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i)
    const s2 = palindrome(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
}
function palindrome(s, l, r) {
  console.log(s[l], s[r], l, r)

  // 左右指针，从s[l]和s[r]向两边扩散，找到最长回文串
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--
    r++
  }
  //   console.log(s.substr(l - 1, r))
  return s.substr(l + 1, r - l - 1)
}

console.log(longestPalindrome('babad'))
