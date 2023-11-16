package main

import "fmt"

func main() {
	nums := []int{2, 7, 11, 12, 14}
	output := twoSum(nums, 14)
	fmt.Println(output)
}

func twoSum(nums []int, target int) [2]int {
	hashMap := make(map[int]int)
	var diff int
	for i, v := range nums {
		diff = target - v
		if v, found := hashMap[diff]; found {
			return [2]int{v, i}
		} else {
			hashMap[v] = i
		}
	}

	return [2]int{-1, -1}
}
