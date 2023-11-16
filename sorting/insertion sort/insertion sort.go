package main

import (
	"fmt"
)

func main() {
	fmt.Println("insertionSort")
	input := []int{2, 1, 6, 5}
	fmt.Println("input  :", input)
	res := insertionSort(input)
	fmt.Println("output :", res)

	// inputSortArr := input
	// sort.Ints(inputSortArr)
	// fmt.Println("sort Buid-in", inputSortArr)
}

func insertionSort(nums []int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i; j > 0 && nums[j-1] > nums[j]; j-- {
			temp := nums[j]
			nums[j] = nums[j-1]
			nums[j-1] = temp
		}
	}
	return nums
}
