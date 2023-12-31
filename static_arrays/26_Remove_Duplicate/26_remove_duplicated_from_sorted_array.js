/**
 * Linear 
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums) => {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        const [leftVal, rightVal] = [nums[left], nums[right]];

        const isEqual = (rightVal === leftVal);
        if (!isEqual) {
            left++;
            nums[left] = rightVal;
        }

        right++;
    }

    return (left + 1);
};

var removeDuplicates = function (nums) {
    let [left, right] = [0, 0];

    for (right = 1; right < nums.length; right++) {
        const [leftVal, rightVal] = [nums[left], nums[right]]
        if (rightVal !== leftVal) {
            left++;
            nums[left] = rightVal;
        }
    }
    return {
        name: (left + 1),
        nums
    };
};

var removeDuplicates = (nums) => {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        const [leftVal, rightVal] = [nums[left], nums[right]];

        const isEqual = (rightVal === leftVal);
        if (!isEqual) {
            left++;
            nums[left] = rightVal;
        }

        right++;
    }

    return (left + 1);
};
