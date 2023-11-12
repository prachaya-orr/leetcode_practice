/* Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

*/

package main

import "fmt"

func main() {
	nums := []int{1, 2, 1}
	ans := make([]int, len(nums)*2)
	for i, v := range nums {
		ans[i] = v
		ans[len(nums)+i] = v
	}
	fmt.Println(ans)
}
