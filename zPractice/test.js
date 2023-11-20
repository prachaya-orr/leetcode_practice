//aabbbccccc=>2a3b5c
function encoder(input) {
    let res = ""
    let count = 1

    for (let i = 1; i <= input.length; i++) {
        if (input[i] == input[i - 1]) {
            count++
        } else {
            res += count + input[i - 1]
            count = 1
        }
    }
    console.log(res);
    return res
}
encoder("aabbbccccc")

function decoder(input) {
    let res = ''
    count = 0
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            count = +input[i]
        } else {
            for (let j = 0; j < count; j++) {
                res += input[i]
            }
        }
    }
    console.log(res);
    return res
}
decoder("2a3b5c")

//write function ([2,3,4],6) => [0,2]
function twoSum(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (diff in obj) {
            return [obj[diff], i]
        } else {
            obj[nums[i]] = i
        }
    }
    return [-1, -1]
}

const output = twoSum([2, 7, 11, 15], 9)
console.log('output', output)