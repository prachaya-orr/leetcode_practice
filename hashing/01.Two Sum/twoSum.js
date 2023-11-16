
function twoSumHash(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (hash.hasOwnProperty(diff)) {
            return [hash[diff], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    return [-1, -1];
}

function twoSumMap(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (map.has(diff)) {
            return [map.get(diff), i]
        } else {
            map.set(nums[i], i)
        }
    }

    return [-1, 1]
}

const res = twoSumMap([2, 7, 11, 12, 14], 14)
// const res = twoSumHash([2, 7, 11, 12, 14], 14)
console.log(res);