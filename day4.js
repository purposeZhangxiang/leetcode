/**
 * 4.寻找两个正序数组的中位数
 */

/***
 * tips
 * 中位数的概念
 * 奇数个为最中间那个数
 * 偶数个为中间两个数之和除以2
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2]
  const sortArr = arr.sort((a, b) => a - b)
  let middle
  if (sortArr.length % 2 !== 0) {
    const index = (sortArr.length + 1) / 2 - 1
    middle = sortArr[index]
  } else {
    const index = sortArr.length / 2 - 1
    middle = (sortArr[index] + sortArr[index + 1]) / 2
  }
  return middle
}

findMedianSortedArrays([1, 2], [3])
