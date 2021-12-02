/**
 * 1.两数之和
 */

//nums = [3,2,4], target = 6

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
    console.log(map);
  }
};

/**扩展Map数据结构 */
