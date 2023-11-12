package main

import "fmt"

func main() {
	nums := []int{0, 1, 2, 2, 3, 0, 4, 2}
	println(removeElement(nums, 2))

}
func removeElement(nums []int, val int) int {
	left, right := 0, len(nums)-1

	for left <= right {
		if nums[left] == val {
			nums[left], nums[right] = nums[right], nums[left]
			right--
		} else {
			left++
		}
	}
	fmt.Println(nums)
	return left
}
