function twoSumTs(nums: number[], target: number): number[] {
    let hash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in hash) {
            return [hash[diff], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    return [-1, -1]
}

const res2 = twoSumTs([2, 7, 11, 12], 14)
console.log(res2);
